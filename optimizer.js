/**
 * Optimizes canvas performance by implementing card virtualization, reducing DOM operations,
 * and managing connection rendering.
 */
function optimizeCanvasPerformance() {
    const canvas = document.getElementById('infinite-canvas');
    const viewport = document.getElementById('canvas-container');
    let isOptimized = false;
    let animationFrameId = null;
    let lastRenderTime = 0;
    let visibleCards = new Set();
    
    // Original methods for overriding
    const originalUpdateConnection = updateConnection;
    const originalUpdateAllConnections = updateAllConnections;
    const originalCreateThoughtCard = createThoughtCard;
    const originalDrawConnections = drawConnections;
    
    // Viewport boundaries with padding
    const VIEWPORT_PADDING = 500;
    
    // Connection update throttling
    const CONNECTION_THROTTLE = 100; // ms
    let lastConnectionUpdate = 0;
    let pendingConnectionUpdate = false;
    
    function getViewportBoundaries() {
        const rect = viewport.getBoundingClientRect();
        return {
            left: (-offsetX * scale) - VIEWPORT_PADDING,
            top: (-offsetY * scale) - VIEWPORT_PADDING,
            right: (-offsetX * scale) + rect.width + VIEWPORT_PADDING,
            bottom: (-offsetY * scale) + rect.height + VIEWPORT_PADDING
        };
    }
    
    function isCardVisible(card) {
        if (!card || !card.position) return false;
        
        const boundaries = getViewportBoundaries();
        const cardX = card.position.x * scale;
        const cardY = card.position.y * scale;
        const cardWidth = card.element.offsetWidth * scale;
        const cardHeight = card.element.offsetHeight * scale;
        
        return (
            cardX + cardWidth >= boundaries.left &&
            cardX <= boundaries.right &&
            cardY + cardHeight >= boundaries.top &&
            cardY <= boundaries.bottom
        );
    }
    
    function updateVisibleCards() {
        const newVisibleCards = new Set();
        
        cards.forEach(card => {
            if (isCardVisible(card)) {
                newVisibleCards.add(card.id);
                if (!visibleCards.has(card.id) && card.element) {
                    card.element.style.display = '';
                }
            } else {
                if (visibleCards.has(card.id) && card.element) {
                    card.element.style.display = 'none';
                }
            }
        });
        
        visibleCards = newVisibleCards;
    }
    
    function optimizedUpdateAllConnections() {
        const now = Date.now();
        if (now - lastConnectionUpdate < CONNECTION_THROTTLE) {
            if (!pendingConnectionUpdate) {
                pendingConnectionUpdate = true;
                setTimeout(() => {
                    pendingConnectionUpdate = false;
                    optimizedUpdateAllConnections();
                }, CONNECTION_THROTTLE);
            }
            return;
        }
        
        lastConnectionUpdate = now;

        cards.forEach(card => {
            if (!visibleCards.has(card.id)) return;
            
            if (card.related.length > 0) {
                card.related.forEach(relatedId => {
                    if (!visibleCards.has(relatedId)) return;
                    
                    const relatedCard = cards.find(c => c.id === relatedId);
                    if (relatedCard) {
                        const connectionId1 = `connection-${card.id}-${relatedId}`;
                        const connectionId2 = `connection-${relatedId}-${card.id}`;
                        const connection = document.getElementById(connectionId1) || document.getElementById(connectionId2);
                        
                        if (connection) {
                            originalUpdateConnection(connection, card, relatedCard);
                        }
                    }
                });
            }
        });
    }

        function updateAllConnections() {
            cards.forEach(card => {
                if (card.related.length > 0) {
                    card.related.forEach(relatedId => {
                        const relatedCard = cards.find(c => c.id === relatedId);
                        if (relatedCard) {
                            const connectionId1 = `connection-${card.id}-${relatedId}`;
                            const connectionId2 = `connection-${relatedId}-${card.id}`;
                            const connection = document.getElementById(connectionId1) || document.getElementById(connectionId2);
                            
                            if (connection) {
                                updateConnection(connection, card, relatedCard);
                            }
                        }
                    });
                }
            });
        }
    
    function renderLoop(timestamp) {
        const elapsed = timestamp - lastRenderTime;
        
        if (elapsed > 16) { // ~60fps
            lastRenderTime = timestamp;

            updateVisibleCards();
        }
        
        animationFrameId = requestAnimationFrame(renderLoop);
    }
    
    function optimizedDrawConnections(parentCard, childCards) {
        const willBeVisible = isCardVisible(parentCard) || childCards.some(card => isCardVisible(card));
        
        if (!willBeVisible) {
            childCards.forEach(childCard => {
                parentCard.related.push(childCard.id);
                childCard.related.push(parentCard.id);
            });
            return;
        }
        
        originalDrawConnections(parentCard, childCards);
    }
    
    function cleanupFarOffscreenCards() {
        const boundaries = getViewportBoundaries();
        const CLEANUP_MARGIN = 3000;
        
        const expandedBoundaries = {
            left: boundaries.left - CLEANUP_MARGIN,
            top: boundaries.top - CLEANUP_MARGIN,
            right: boundaries.right + CLEANUP_MARGIN,
            bottom: boundaries.bottom + CLEANUP_MARGIN
        };
        
        const connectionEls = document.querySelectorAll('.card-connection');
        connectionEls.forEach(conn => {
            const [_, id1, id2] = conn.id.split('-');
            const card1 = cards.find(c => c.id === id1);
            const card2 = cards.find(c => c.id === id2);
            
            if (card1 && card2) {
                const card1X = card1.position.x * scale;
                const card1Y = card1.position.y * scale;
                const card2X = card2.position.x * scale;
                const card2Y = card2.position.y * scale;
                
                const isFarOffscreen = (
                    (card1X < expandedBoundaries.left || card1X > expandedBoundaries.right || 
                     card1Y < expandedBoundaries.top || card1Y > expandedBoundaries.bottom) &&
                    (card2X < expandedBoundaries.left || card2X > expandedBoundaries.right || 
                     card2Y < expandedBoundaries.top || card2Y > expandedBoundaries.bottom)
                );
                
                if (isFarOffscreen) {
                    conn.style.display = 'none';
                } else {
                    conn.style.display = '';
                }
            }
        });
    }
    
    
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    
    applyOptimizations();
    
    return {
        isEnabled: () => isOptimized,
        disable: () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            updateAllConnections = originalUpdateAllConnections;
            drawConnections = originalDrawConnections;
            
            cards.forEach(card => {
                if (card.element) {
                    card.element.style.display = '';
                }
            });
            
            document.querySelectorAll('.card-connection').forEach(conn => {
                conn.style.display = '';
            });
            
            isOptimized = false;
            console.log('Canvas performance optimizations disabled');
        }
    };
}








/**
 * Detects and resolves overlapping cards by applying repulsion forces.
 * This function gradually moves overlapping cards apart from each other.
 * 
 * @param {number} [maxIterations=10] - Maximum iterations to resolve overlaps
 * @param {number} [repulsionStrength=15] - Strength of the repulsion force
 * @param {number} [minDistance=10] - Minimum distance to maintain between cards
 * @returns {number} - Number of overlaps resolved
 */
function resolveCardOverlaps(maxIterations = 10, repulsionStrength = 15, minDistance = 10) {
    let overlapsResolved = 0;
    let iterations = 0;
    let hasOverlap = true;

    while (hasOverlap && iterations < maxIterations) {
        hasOverlap = false;
        iterations++;
        
        for (let i = 0; i < cards.length; i++) {
            const cardA = cards[i];
            if (!cardA.element) continue;
            
            const rectA = {
                left: cardA.position.x,
                top: cardA.position.y,
                right: cardA.position.x + cardA.element.offsetWidth,
                bottom: cardA.position.y + cardA.element.offsetHeight
            };
            
            let moveX = 0;
            let moveY = 0;
            
            for (let j = 0; j < cards.length; j++) {
                if (i === j) continue;
                
                const cardB = cards[j];
                if (!cardB.element) continue;
                
                const rectB = {
                    left: cardB.position.x,
                    top: cardB.position.y,
                    right: cardB.position.x + cardB.element.offsetWidth,
                    bottom: cardB.position.y + cardB.element.offsetHeight
                };
                
                if (
                    rectA.left < rectB.right &&
                    rectA.right > rectB.left &&
                    rectA.top < rectB.bottom &&
                    rectA.bottom > rectB.top
                ) {
                    const overlapX = Math.min(rectA.right, rectB.right) - Math.max(rectA.left, rectB.left);
                    const overlapY = Math.min(rectA.bottom, rectB.bottom) - Math.max(rectA.top, rectB.top);
                    
                    const centerAx = (rectA.left + rectA.right) / 2;
                    const centerAy = (rectA.top + rectA.bottom) / 2;
                    const centerBx = (rectB.left + rectB.right) / 2;
                    const centerBy = (rectB.top + rectB.bottom) / 2;
                    
                    const dirX = centerAx - centerBx;
                    const dirY = centerAy - centerBy;
                    
                    const length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
                    const normDirX = dirX / length;
                    const normDirY = dirY / length;
                    
                    const repulsion = repulsionStrength + Math.min(overlapX, overlapY) + minDistance;
                    
                    moveX += normDirX * repulsion;
                    moveY += normDirY * repulsion;
                    
                    hasOverlap = true;
                    overlapsResolved++;
                }
            }
            
            if (moveX !== 0 || moveY !== 0) {
                cardA.position.x += moveX;
                cardA.position.y += moveY;
                
                cardA.element.style.left = cardA.position.x + 'px';
                cardA.element.style.top = cardA.position.y + 'px';
            }
        }
    }
    
    if (overlapsResolved > 0) {
        updateAllConnections();
        updateClusters();
    }
    
    console.log(`Resolved ${overlapsResolved} card overlaps in ${iterations} iterations`);
    return overlapsResolved;
}


function setupOverlapPrevention() {
    const originalCreateThoughtCard = createThoughtCard;
    createThoughtCard = async function(...args) {
        const result = await originalCreateThoughtCard.apply(this, args);
        
        setTimeout(() => resolveCardOverlaps(), 100);
        return result;
    };
    

    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            setTimeout(() => resolveCardOverlaps(), 100);
        }
    });
    
    canvas.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn') || e.target.classList.contains('relate-btn')) {
            setTimeout(() => resolveCardOverlaps(), 500);
        }
    });
}