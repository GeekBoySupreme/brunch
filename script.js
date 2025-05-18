document.addEventListener('DOMContentLoaded', function() {
    // Models configuration
    let models = [
        {
            id: 'openai',
            name: 'OpenAI',
            enabled: false,
            apiKey: '',
            icon: `<svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_14_26" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="101">
                    <path d="M100.07 0.355225H0.069519V100.355H100.07V0.355225Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_14_26)">
                    <path d="M38.424 36.7551V27.255C38.424 26.4549 38.7216 25.8547 39.415 25.4552L58.3451 14.4552C60.9219 12.9552 63.9943 12.2556 67.1653 12.2556C79.058 12.2556 86.5907 21.5558 86.5907 31.4554C86.5907 32.1552 86.5907 32.9553 86.4914 33.7554L66.8679 22.1552C65.6788 21.4555 64.489 21.4555 63.2999 22.1552L38.424 36.7551ZM82.626 73.7553V51.0549C82.626 49.6545 82.0309 48.6546 80.842 47.9547L55.9661 33.3548L64.0929 28.6545C64.7865 28.255 65.3813 28.255 66.0749 28.6545L85.0048 39.6545C90.4562 42.8549 94.1227 49.6545 94.1227 56.2541C94.1227 63.8539 89.6632 70.8542 82.626 73.7545V73.7553ZM32.5767 53.7555L24.4499 48.9557C23.7565 48.5562 23.4589 47.9558 23.4589 47.1557V25.1559C23.4589 14.4562 31.5857 6.35562 42.5868 6.35562C46.7499 6.35562 50.6143 7.75595 53.8857 10.2559L34.3615 21.6562C33.1726 22.3559 32.5777 23.3558 32.5777 24.7564V53.7563L32.5767 53.7555ZM50.0694 63.9552L38.424 57.3554V43.3559L50.0694 36.7561L61.714 43.3559V57.3554L50.0694 63.9552ZM57.552 94.3557C53.3891 94.3557 49.5247 92.9553 46.2534 90.4556L65.7773 79.0551C66.9664 78.3554 67.5613 77.3555 67.5613 75.9549V46.955L75.7876 51.7547C76.481 52.1542 76.7787 52.7545 76.7787 53.5548V75.5546C76.7787 86.2543 68.5523 94.3548 57.552 94.3548V94.3557ZM34.0633 72.0557L15.1332 61.0559C9.68184 57.8554 6.01533 51.0559 6.01533 44.4561C6.01533 36.7561 10.5744 29.8562 17.6106 26.9559V49.7558C17.6106 51.1562 18.2056 52.1561 19.3945 52.856L44.1719 67.3554L36.0451 72.0557C35.3517 72.4553 34.7567 72.4553 34.0633 72.0557ZM32.9737 88.4557C21.7744 88.4557 13.5483 79.9556 13.5483 69.4556C13.5483 68.6555 13.6476 67.8554 13.7462 67.0553L33.2703 78.4557C34.4592 79.1555 35.6492 79.1555 36.8381 78.4557L61.714 63.9562V73.4563C61.714 74.2564 61.4166 74.8566 60.723 75.2561L41.7931 86.2561C39.2161 87.7561 36.1437 88.4557 32.9727 88.4557H32.9737ZM57.552 100.355C69.5442 100.355 79.5535 91.7555 81.8338 80.3551C92.9337 77.4549 100.07 66.9549 100.07 56.2552C100.07 49.2548 97.0966 42.4554 91.7446 37.5552C92.2402 35.455 92.5376 33.3548 92.5376 31.2557C92.5376 16.9559 81.0409 6.25517 67.7602 6.25517C65.0849 6.25517 62.508 6.6547 59.931 7.55525C55.4705 3.15504 49.3258 0.355225 42.5868 0.355225C30.5948 0.355225 20.5855 8.95474 18.3052 20.3551C7.20528 23.2554 0.069519 33.7554 0.069519 44.4551C0.069519 51.4554 3.04242 58.2549 8.3944 63.1551C7.89888 65.2552 7.60145 67.3554 7.60145 69.4548C7.60145 83.7546 19.0981 94.4551 32.3786 94.4551C35.0541 94.4551 37.631 94.0556 40.208 93.155C44.6674 97.5552 50.8122 100.355 57.552 100.355Z" fill="white"/>
                    </g>
                    </svg>`,
            classification: ['general_knowledge', 'coding', 'creative_writing']
        },
        {
            id: 'claude',
            name: 'Claude',
            enabled: false,
            apiKey: '',
            icon: `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_15_36)">
                    <path d="M1.50769 5.11538L3.02308 4.26923L3.04615 4.19231L3.02308 4.15385H2.94615L2.69231 4.13846L1.83077 4.11538L1.07692 4.07692L0.346154 4.03846L0.161538 4L0 3.76923L0.0153846 3.65385L0.169231 3.55385L0.392308 3.56923L0.876923 3.60769L1.60769 3.65385L2.13846 3.68462L2.92308 3.77692H3.04615L3.06154 3.72308L3.02308 3.69231L2.99231 3.66154L2.23077 3.15385L1.41538 2.61538L0.984615 2.3L0.753846 2.14615L0.638462 1.99231L0.592308 1.66923L0.8 1.43846L1.08462 1.46154L1.15385 1.47692L1.43846 1.7L2.05385 2.16923L2.84615 2.76923L2.96154 2.86154L3.00769 2.83077L3.01538 2.80769L2.96154 2.72308L2.53846 1.92308L2.07692 1.12308L1.86923 0.792308L1.81538 0.592308C1.79231 0.515385 1.78462 0.438461 1.78462 0.361538L2.01538 0.0384615L2.15385 0L2.47692 0.0461538L2.6 0.153846L2.8 0.615385L3.11538 1.33077L3.61538 2.3L3.76923 2.59231L3.84615 2.85385L3.86923 2.93077H3.92308V2.89231L3.96154 2.33846L4.03846 1.66923L4.11538 0.807692L4.13846 0.561538L4.26154 0.269231L4.49231 0.115385L4.69231 0.2L4.84615 0.423077L4.82308 0.561538L4.73846 1.15385L4.53846 2.08462L4.42308 2.71538H4.49231L4.56923 2.63077L4.88462 2.21538L5.41538 1.55385L5.64615 1.28462L5.92308 1L6.1 0.861538H6.43077L6.66923 1.22308L6.56154 1.6L6.22308 2.03077L5.93846 2.39231L5.53077 2.93846L5.28462 3.37692L5.30769 3.40769H5.36154L6.28462 3.20769L6.77692 3.12308L7.36154 3.02308L7.63077 3.14615L7.66154 3.26923L7.55385 3.53077L6.92308 3.68462L6.18462 3.83846L5.08462 4.09231L5.06923 4.1L5.08462 4.12308L5.57692 4.16923L5.79231 4.18462H6.31538L7.28462 4.26154L7.53846 4.41538L7.68462 4.62308L7.66154 4.77692L7.26923 4.97692L6.74615 4.85385L5.51538 4.56154L5.1 4.46154H5.03846V4.49231L5.39231 4.83846L6.03077 5.41538L6.84615 6.16154L6.88462 6.34615L6.78462 6.5L6.67692 6.48462L5.96923 5.94615L5.69231 5.71538L5.07692 5.19231H5.03846V5.24615L5.17692 5.45385L5.93077 6.58461L5.96923 6.93077L5.91538 7.03846L5.71539 7.11538L5.50769 7.06923L5.06154 6.45385L4.6 5.76154L4.23846 5.13077L4.2 5.16154L3.97692 7.48462L3.87692 7.6L3.64615 7.69231L3.45385 7.53846L3.34615 7.30769L3.45385 6.83077L3.57692 6.21538L3.67692 5.72308L3.76923 5.11538L3.82308 4.91538V4.9H3.76923L3.30769 5.53846L2.61538 6.48462L2.06154 7.06923L1.93077 7.12308L1.7 7.00769L1.72308 6.79231L1.84615 6.61538L2.61538 5.63077L3.07692 5.02308L3.38462 4.66923L3.37692 4.63077H3.35385L1.32308 5.95385L0.961538 6L0.807692 5.84615L0.823077 5.61538L0.9 5.53846L1.51538 5.11538H1.50769Z" fill="#D87757"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_15_36">
                    <rect width="7.69231" height="7.69231" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    `,
            classification: ['reasoning', 'text_analysis', 'summarization']
        },
        {
            id: 'gemini',
            name: 'Gemini',
            enabled: false,
            apiKey: '',
            icon: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_15_44)">
                    <path d="M50 100C48.0942 87.4203 42.2127 75.7807 33.216 66.784C24.2193 57.7873 12.5797 51.9058 0 50C12.5797 48.0942 24.2193 42.2127 33.216 33.216C42.2127 24.2193 48.0942 12.5797 50 0C51.9065 12.5794 57.7882 24.2187 66.7847 33.2153C75.7813 42.2118 87.4206 48.0935 100 50C87.4206 51.9065 75.7813 57.7882 66.7847 66.7847C57.7882 75.7813 51.9065 87.4206 50 100Z" fill="url(#paint0_linear_15_44)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_15_44" x1="-1.2639e-05" y1="10000" x2="6873" y2="3039.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.3125" stop-color="#F0DCD6"/>
                    <stop offset="0.615385" stop-color="#FF1CE5"/>
                    <stop offset="0.798077" stop-color="#1C69FF"/>
                    </linearGradient>
                    <clipPath id="clip0_15_44">
                    <rect width="100" height="100" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>`,
            classification: ['multimodal', 'complex_math', 'factual']
        }
    ];

    // Load models configuration from localStorage
    function loadModelsConfig() {
        const savedModels = localStorage.getItem('aiModels');
        if (savedModels) {
            const parsedModels = JSON.parse(savedModels);
            // Merge saved values with default model configuration to ensure all properties exist
            models = models.map(defaultModel => {
                const savedModel = parsedModels.find(m => m.id === defaultModel.id);
                return savedModel ? { ...defaultModel, ...savedModel } : defaultModel;
            });
        }
        
        // Update toggle and input fields
        models.forEach(model => {
            const toggle = document.getElementById(`${model.id}-toggle`);
            const input = document.getElementById(`${model.id}-api-key`);
            
            if (toggle && input) {
                toggle.checked = model.enabled;
                input.value = model.apiKey || '';
            }
        });
    }

    // Save models configuration to localStorage
    function saveModelsConfig() {
        // Update models from form
        models.forEach(model => {
            const toggle = document.getElementById(`${model.id}-toggle`);
            const input = document.getElementById(`${model.id}-api-key`);
            
            if (toggle && input) {
                model.enabled = toggle.checked;
                model.apiKey = input.value.trim();
            }
        });
        
        localStorage.setItem('aiModels', JSON.stringify(models));
        
        // Check if at least one model is enabled and has an API key
        const hasValidModel = models.some(model => model.enabled && model.apiKey);
        return hasValidModel;
    }

    // Classify thought to determine which AI model to use
    async function classifyThought(text) {
        const openAiModel = models.find(m => m.id === 'openai');
        
        if (!openAiModel || !openAiModel.enabled || !openAiModel.apiKey) {
            // If OpenAI is not available, use any enabled model
            return getDefaultModel();
        }
        
        const prompt = `
            I need to classify the following thought/query to determine which AI model would be best to handle it. Also if any of these names are mentioned in the following thought/query return that name itself as the result formatted as specified.
            
            "${text}"
            
            Please analyze and return ONLY one of the following options without any other text:
            - openai: for general knowledge, coding, creative writing
            - claude: for reasoning, text analysis, summarization
            - gemini: for multimodal tasks, complex math, factual responses
        `;
        
        try {
            console.log('Classifying thought...');
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openAiModel.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a classifier that determines which AI model is best suited for a given query. Respond only with the model ID.' },
                        { role: 'user', content: prompt }
                    ],
                    temperature: 0.3,
                    max_tokens: 10
                })
            });
            
            if (!response.ok) {
                throw new Error(`Classification API request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            const classification = data.choices[0].message.content.toLowerCase().trim();
            
            // Extract just the model id from the response
            const modelId = classification.split(':')[0].trim();
            
            // Check if the classified model is enabled and has an API key
            const classifiedModel = models.find(m => m.id === modelId && m.enabled && m.apiKey);
            
            if (classifiedModel) {
                return classifiedModel;
            } else {
                return getDefaultModel();
            }
        } catch (error) {
            console.error('Error classifying thought:', error);
            return getDefaultModel();
        }
    }

    // Get the default model (first enabled model with an API key)
    function getDefaultModel() {
        const enabledModel = models.find(m => m.enabled && m.apiKey);
        return enabledModel || null;
    }

    // Call the appropriate AI API based on the model
    async function callAIAPI(model, prompt) {
        if (!model || !model.apiKey) {
            alert('No valid AI model available. Please configure at least one AI model with an API key.');
            apiKeyPopup.style.display = 'flex';
            return null;
        }

        console.log("Showing thinking...");
        showThinking();
        
        try {
            console.log(`Calling ${model.name} API...`);
            
            let response;
            let data;
            
            switch (model.id) {
                case 'openai':
                    response = await fetch('https://api.openai.com/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${model.apiKey}`
                        },
                        body: JSON.stringify({
                            model: 'gpt-3.5-turbo',
                            messages: [
                                { role: 'system', content: 'You are a helpful assistant that responds concisely.' },
                                { role: 'user', content: prompt }
                            ],
                            temperature: 0.8,
                            max_tokens: 1200
                        })
                    });
                    
                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
                    }
                    
                    data = await response.json();
                    return {
                        content: data.choices[0].message.content,
                        model: model
                    };
                    
                case 'claude':
                    response = await fetch('https://geekboysupreme-serverlessfunction.web.val.run/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            apiKey: model.apiKey,
                            model: 'claude-3-7-sonnet-20250219',
                            max_tokens: 1024,
                            messages: [
                            {role: 'user', content: prompt}
                            ]
                        })
                    });
                    
                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
                    }
                    
                    data = await response.json();
                    return {
                        content: data.content[0].text,
                        model: model
                    };
                    
                case 'gemini':
                    const requestBody = {
                        contents: [{
                          parts: [{ text: prompt }]
                        }]
                      };

                    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${model.apiKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    });
                    
                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
                    }
                    
                    data = await response.json();
                    return {
                        content: data.candidates[0].content.parts[0].text,
                        model: model
                    };
                    
                default:
                    throw new Error(`Unknown model: ${model.id}`);
            }
        } catch (error) {
            console.error(`Error calling ${model.name} API:`, error);
            alert(`Failed to connect to ${model.name} API: ${error.message}. Please check your API key and connection.`);
            return null;
        } finally {
            hideThinking();
        }
    }

    // Check if API key exists in localStorage
    loadModelsConfig();
    const apiKeyPopup = document.getElementById('api-key-popup');
    
    if (!models.some(model => model.enabled && model.apiKey)) {
        // Show API key popup if no key exists
        apiKeyPopup.style.display = 'flex';
    } else {
        apiKeyPopup.style.display = 'none';
    }
    
    // Save API keys to localStorage
    document.getElementById('save-api-keys').addEventListener('click', function() {
        if (saveModelsConfig()) {
            apiKeyPopup.style.display = 'none';
        } else {
            alert('Please enable at least one AI model and provide its API key.');
        }
    });
    

    document.getElementById('settings-btn').addEventListener('click', function() {
        // Show API key popup when settings button is clicked
        loadModelsConfig(); // Refresh the form with current values
        apiKeyPopup.style.display = 'flex';
    });


    // Function to automatically expand the first card when it's the only one
    function setupAutoExpandFirstCard() {

        const autoExpandObserver = new MutationObserver((mutations) => {
            const cards = document.getElementsByClassName("thought-card");
            

            if (cards.length === 1) {
                setTimeout(() => {
                    if (document.getElementsByClassName("thought-card").length === 1) {
                        console.log('Auto-expanding first card');
                        
                        const expandBtn = cards[0].querySelector('.expand-btn');
                        
                        if (expandBtn) {
                            expandBtn.click();
                        }
                    }
                }, 1500);
            }
        });
        
        autoExpandObserver.observe(canvas, { childList: true });
        //console.log('Auto-expand functionality initialized');
    }
    
    // Canvas elements
    const canvas = document.getElementById('infinite-canvas');
    const canvasContainer = document.getElementById('canvas-container');
    const selectionRectangle = document.getElementById('selection-rectangle');
    
    // Input elements
    const thoughtInput = document.getElementById('thought-input');
    const voiceInputBtn = document.getElementById('voice-input-btn');
    const dictationStatus = document.getElementById('dictation-status');
    
    // Auto-resize textarea
    thoughtInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    
    // Canvas state
    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let startX, startY;
    let cardIdCounter = 0;
    let cards = [];
    let clusters = [];
    
    // Selection state
    let isSelecting = false;
    let selectionStartX, selectionStartY;
    let selectedCards = [];
    let isCardDragging = false;

    // Zoom limits
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 2.7;
    
    // Initialize canvas position
    updateCanvasTransform();
    
    // Canvas navigation (pan)
    canvasContainer.addEventListener('mousedown', function(e) {
        // Ignore if target is a card or button
        if (e.target.closest('.thought-card') || e.target.closest('button')) {
            return;
        }
        
        // If shift key is pressed, start selection
        if (e.shiftKey) {
            isSelecting = true;
            selectionStartX = e.clientX;
            selectionStartY = e.clientY;
            
            // Show selection rectangle
            selectionRectangle.style.display = 'block';
            selectionRectangle.style.left = selectionStartX + 'px';
            selectionRectangle.style.top = selectionStartY + 'px';
            selectionRectangle.style.width = '0px';
            selectionRectangle.style.height = '0px';
            

            if (!e.ctrlKey && !e.metaKey) {
                clearCardSelection();
            }
        } else {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            canvasContainer.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        // Handle selection rectangle
        if (isSelecting) {
            const width = e.clientX - selectionStartX;
            const height = e.clientY - selectionStartY;
            
            selectionRectangle.style.left = (width < 0 ? e.clientX : selectionStartX) + 'px';
            selectionRectangle.style.top = (height < 0 ? e.clientY : selectionStartY) + 'px';
            selectionRectangle.style.width = Math.abs(width) + 'px';
            selectionRectangle.style.height = Math.abs(height) + 'px';
            
            updateCardSelection();
        }
        
        if (isDragging) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            offsetX += dx / scale;
            offsetY += dy / scale;
            
            updateCanvasTransform();
            
            startX = e.clientX;
            startY = e.clientY;
        }
    });
    
    document.addEventListener('mouseup', function(e) {
        if (isSelecting) {
            isSelecting = false;
            selectionRectangle.style.display = 'none';
            
            if (selectedCards.length > 1) {
                createUserCluster(selectedCards);
            }
        }
        
        isDragging = false;
        canvasContainer.style.cursor = 'default';
    });
    
    canvasContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const canvasX = (mouseX - offsetX * scale) / scale;
        const canvasY = (mouseY - offsetY * scale) / scale;
        
        const scaleDelta = e.deltaY < 0 ? 1.1 : 0.9;
        scale *= scaleDelta;
        
        scale = Math.min(Math.max(MIN_ZOOM, scale), MAX_ZOOM);
        
        offsetX = (mouseX - canvasX * scale) / scale;
        offsetY = (mouseY - canvasY * scale) / scale;
        
        updateCanvasTransform();
        updateZoomedState();
    });

    document.getElementById('submit-thought-btn').addEventListener('click', async function() {
        const thoughtInput = document.getElementById('thought-input');
        const thought = thoughtInput.value.trim();

        document.getElementById('submit-thought-btn').classList.add('clicked');
      
            setTimeout(() => {
                document.getElementById('submit-thought-btn').classList.remove('clicked');
            }, 1000);
        
        if (thought) {
            const modelToUse = await classifyThought(thought);
            
            if (!modelToUse) {
                alert('No valid AI model available. Please configure at least one AI model with an API key.');
                apiKeyPopup.style.display = 'flex';
                return;
            }

            createThoughtCard(thought, modelToUse);
            thoughtInput.value = '';
            thoughtInput.style.height = 'auto';
        }
    });
    
    function updateCanvasTransform() {
        canvas.style.transform = `translate(${offsetX * scale}px, ${offsetY * scale}px) scale(${scale})`;
    }
    
    function updateZoomedState() {
        if (scale < 0.4) {
            canvas.classList.add('zoomed-out');
        } else {
            canvas.classList.remove('zoomed-out');
        }
        
        if (scale <= MIN_ZOOM) {
            canvas.classList.add('zoomed-out-far');
        } else {
            canvas.classList.remove('zoomed-out-far');
        }
    }


    // Create a new thought card (initial/root cards)
    async function createThoughtCard(text, model = null) {
        const id = 'card-' + (cardIdCounter++);
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        offsetX = 200;
        offsetY = 200;
        
        const centerX = (viewportWidth / 2 - offsetX * scale) / scale;
        const centerY = (viewportHeight / 2 - offsetY * scale) / scale;
        
        const randomOffsetX = (Math.random() - 0.5) * 100;
        const randomOffsetY = (Math.random() - 0.5) * 100;
        
        const posX = centerX + randomOffsetX;
        const posY = centerY + randomOffsetY;
        
        const card = document.createElement('div');
        card.id = id;
        card.className = 'thought-card new-card';
        card.style.left = posX + 'px';
        card.style.top = posY + 'px';
        card.style.zIndex = '10';
        
        card.setAttribute('data-parent-id', '');
        card.setAttribute('data-children-ids', JSON.stringify([]));

        const modelIconHtml = model ? `
            <div class="model-icon" title="${model.name}">
                ${model.icon}
            </div>` : '';
        
        card.innerHTML = `
            <div class="card-topic">
                ${modelIconHtml}
                <span class="topic-text">Processing...</span>
            </div>
            <div class="card-content">${text}</div>
            <div class="card-context-container hidden"></div>
            <div class="card-actions">
                <button class="card-action-btn expand-btn" data-card-id="${id}"><img src='explore-loader-white.svg' width='12px' style='margin-right:6px'/>Expand</button>
                <button class="card-action-btn relate-btn" data-card-id="${id}"><img src='branch.svg' width='12px' style='margin-right:6px'/>Relate</button>
                <button class="card-action-btn context-btn" data-card-id="${id}"><img src='note.svg' width='12px' style='margin-right:6px'/>Add Note</button>
            </div>
        `;
        
        canvas.appendChild(card);
        makeCardDraggable(card);
        
        const cardData = {
            id: id,
            text: text,
            element: card,
            position: { x: posX, y: posY },
            topic: null,
            related: [],
            model: model,
            context: null,
            parentId: '',
            childrenIds: []
        };
        
        cards.push(cardData);
        updateCardCounter();
        determineTopic(cardData);
        
        return cardData;
    }
    


    function makeCardDraggable(card) {
        card.addEventListener('mousedown', function(e) {

            if (e.target.closest('button') || e.target.closest('.context-input') || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            e.stopPropagation();
            const cardId = card.id;
            const cardStartX = e.clientX;
            const cardStartY = e.clientY;
            const cardInitialLeft = parseInt(card.style.left) || 0;
            const cardInitialTop = parseInt(card.style.top) || 0;
            
            const initialPositions = new Map();
            const isSelected = card.classList.contains('card-selected');
            const isMultiSelect = e.ctrlKey || e.metaKey;
            
            if (!isSelected) {
                if (!isMultiSelect) {
                    clearCardSelection();
                }
                selectCard(card);
            } else if (isMultiSelect) {
                deselectCard(card);
                return;
            }
            
            card.style.zIndex = 100;
            
            selectedCards.forEach(selectedCardId => {
                const selectedCard = document.getElementById(selectedCardId);
                if (selectedCard) {
                    initialPositions.set(selectedCardId, {
                        left: parseInt(selectedCard.style.left) || 0,
                        top: parseInt(selectedCard.style.top) || 0
                    });
                }
            });
            
            function handleMouseMove(e) {
                const dx = (e.clientX - cardStartX) / scale;
                const dy = (e.clientY - cardStartY) / scale;
                
                card.style.left = (cardInitialLeft + dx) + 'px';
                card.style.top = (cardInitialTop + dy) + 'px';
                
                const cardData = cards.find(c => c.id === cardId);
                if (cardData) {
                    cardData.position.x = cardInitialLeft + dx;
                    cardData.position.y = cardInitialTop + dy;
                }
                
                if (selectedCards.length > 1) {
                    selectedCards.forEach(selectedCardId => {
                        if (selectedCardId !== cardId) {
                            const selectedCard = document.getElementById(selectedCardId);
                            const initialPos = initialPositions.get(selectedCardId);
                            
                            if (selectedCard && initialPos) {
                                selectedCard.style.left = (initialPos.left + dx) + 'px';
                                selectedCard.style.top = (initialPos.top + dy) + 'px';
                                
                                const selectedCardData = cards.find(c => c.id === selectedCardId);
                                if (selectedCardData) {
                                    selectedCardData.position.x = initialPos.left + dx;
                                    selectedCardData.position.y = initialPos.top + dy;
                                }
                            }
                        }
                    });
                }

                updateAllConnections();
                updateClusters();
            }
            
            function handleMouseUp() {
                card.style.zIndex = 10;
                
                updateAllConnections();
                updateClusters();
                
                if (selectedCards.length > 1) {
                    createUserCluster(selectedCards);
                }
                
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });
    }
    
    function handleAddContext(cardId) {
        const cardData = cards.find(c => c.id === cardId);
        if (!cardData) return;
        
        const contextContainer = cardData.element.querySelector('.card-context-container');
        if (contextContainer.querySelector('.context-input')) return;
        
        contextContainer.innerHTML = '';
        contextContainer.classList.remove('hidden');
        
        const textarea = document.createElement('textarea');
        textarea.className = 'context-input';
        textarea.placeholder = 'Add additional context here...';
        if (cardData.context) {
            textarea.value = cardData.context;
        }
        
        const actionDiv = document.createElement('div');
        actionDiv.className = 'context-actions';
        
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.onclick = () => saveContext(cardId, textarea.value);
        
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.onclick = () => {
            contextContainer.innerHTML = '';

            if (!cardData.context) {
                contextContainer.classList.add('hidden');
            } else {
                showContextView(cardData);
            }
        };
        
        actionDiv.appendChild(cancelBtn);
        actionDiv.appendChild(saveBtn);
        
        contextContainer.appendChild(textarea);
        contextContainer.appendChild(actionDiv);

        textarea.focus();
    }

    function saveContext(cardId, contextText) {
        const cardData = cards.find(c => c.id === cardId);
        if (!cardData) return;
        
        const contextContainer = cardData.element.querySelector('.card-context-container');
        
        if (contextText.trim()) {
            cardData.context = contextText.trim();
            
            showContextView(cardData);
        } else {
            cardData.context = null;
            contextContainer.classList.add('hidden');
        }
    }

    function showContextView(cardData) {
        const contextContainer = cardData.element.querySelector('.card-context-container');
        
        if (!cardData.context) {
            contextContainer.classList.add('hidden');
            return;
        }
        
        contextContainer.classList.remove('hidden');
        contextContainer.innerHTML = `
            <div class="context-content">${cardData.context}</div>
            <div class="context-edit">
                <button class="edit-context-btn" data-card-id="${cardData.id}">Edit</button>
            </div>
        `;
    }
    

    thoughtInput.addEventListener('keydown', async function(e) {
        if (e.key === 'Enter' && !e.shiftKey && this.value.trim()) {
            e.preventDefault();
            
            document.getElementById('submit-thought-btn').classList.add('clicked');
      
            setTimeout(() => {
                document.getElementById('submit-thought-btn').classList.remove('clicked');
            }, 1000);


            const thought = this.value.trim();
            
            const modelToUse = await classifyThought(thought);
            
            if (!modelToUse) {
                alert('No valid AI model available. Please configure at least one AI model with an API key.');
                apiKeyPopup.style.display = 'flex';
                return;
            }
            
            createThoughtCard(thought, modelToUse);
            this.value = '';
            this.style.height = 'auto';
        }
    });
    
    let recognition;
    
    // Check if SpeechRecognition is available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onstart = function() {
            dictationStatus.classList.remove('hidden');
            voiceInputBtn.style.color = '#e74c3c';
            
            const animationDiv = document.createElement('div');
            animationDiv.className = 'mic-listening-animation';
            voiceInputBtn.appendChild(animationDiv);
        };
        
        recognition.onend = function() {
            dictationStatus.classList.add('hidden');
            voiceInputBtn.style.color = '#555';
            
            const animationDiv = voiceInputBtn.querySelector('.mic-listening-animation');
            if (animationDiv) {
                voiceInputBtn.removeChild(animationDiv);
            }
        };
        
        recognition.onresult = function(event) {
            let interimTranscript = '';
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }
            
            thoughtInput.value = finalTranscript || interimTranscript;
            thoughtInput.style.height = 'auto';
            thoughtInput.style.height = (thoughtInput.scrollHeight) + 'px';
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
            dictationStatus.classList.add('hidden');
            voiceInputBtn.style.color = '#555';
            
            const animationDiv = voiceInputBtn.querySelector('.mic-listening-animation');
            if (animationDiv) {
                voiceInputBtn.removeChild(animationDiv);
            }
        };
    }
    
    voiceInputBtn.addEventListener('click', function() {
        if (!recognition) {
            alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
            return;
        }
        
        if (dictationStatus.classList.contains('hidden')) {
            recognition.start();
        } else {
            recognition.stop();
        }
    });
    

    canvas.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn')) {
            const cardId = e.target.getAttribute('data-card-id');
            const cardData = cards.find(c => c.id === cardId);
            
            if (cardData) {
                expandThought(cardData);
            }
        }
        
        if (e.target.classList.contains('relate-btn')) {
            const cardId = e.target.getAttribute('data-card-id');
            const cardData = cards.find(c => c.id === cardId);
            
            if (cardData) {
                relateThought(cardData);
            }
        }
        
        if (e.target.classList.contains('context-btn')) {
            const cardId = e.target.getAttribute('data-card-id');
            handleAddContext(cardId);
        }
        
        if (e.target.classList.contains('edit-context-btn')) {
            const cardId = e.target.getAttribute('data-card-id');
            handleAddContext(cardId);
        }
    });
    

    async function determineTopic(cardData) {
        const modelToUse = cardData.model || await classifyThought(cardData.text);
        
        if (!modelToUse) {
            alert('No valid AI model available. Please configure at least one AI model with an API key.');
            apiKeyPopup.style.display = 'flex';
            return;
        }
        
        const prompt = `
            I have a thought card with the following text:
            "${cardData.text}"
            
            Please identify the primary topic of this thought. 
            Just provide the topic as a short phrase without any additional text, explanation, or formatting.
        `;
        
        const result = await callAIAPI(modelToUse, prompt);
        
        if (result && result.content) {
            const cleanedTopic = result.content.replace(/["'.]/g, '').trim();
            
            cardData.topic = cleanedTopic;
            const topicElement = cardData.element.querySelector('.topic-text');
            if (topicElement) {
                topicElement.textContent = cleanedTopic;
            }
            
            if (!cardData.model && result.model) {
                cardData.model = result.model;

                const existingIcon = cardData.element.querySelector('.model-icon');
                if (!existingIcon) {
                    const topicDiv = cardData.element.querySelector('.card-topic');
                    const iconDiv = document.createElement('div');
                    iconDiv.className = 'model-icon';
                    iconDiv.title = result.model.name;
                    iconDiv.innerHTML = result.model.icon;
                    topicDiv.insertBefore(iconDiv, topicDiv.firstChild);
                }
            }
            
            updateClusters();
        }
    }
    

    // Expand a thought into more cards from multiple models
    async function expandThought(cardData) {
        const primaryModel = cardData.model || await classifyThought(cardData.text);
        
        if (!primaryModel) {
            alert('No valid AI model available. Please configure at least one AI model with an API key.');
            apiKeyPopup.style.display = 'flex';
            return;
        }

        const availableModels = models.filter(model => 
            model.enabled && 
            model.apiKey && 
            model.id !== primaryModel.id
        );
        
        if (availableModels.length === 0) {
            expandWithSingleModel(cardData, primaryModel);
            return;
        }

        let contextInfo = '';
        if (cardData.context) {
            contextInfo = `\n\nAdditional context: ${cardData.context}`;
        }
        
        const basePrompt = `
            I have a thought that I'd like to expand on:
            "${cardData.text}"${contextInfo}
            
            Please generate 3 more detailed thoughts that expand upon this idea. 
            Format your response as a JSON array of strings, with each string being a separate thought.
            For example: ["First expanded thought", "Second expanded thought", "Third expanded thought"]
            
            Important: Return ONLY valid JSON without any additional text, explanation or formatting.
        `;

        const primaryResult = await callAIAPI(primaryModel, basePrompt);
        
        if (!primaryResult || !primaryResult.content) return;
        
        try {
            let primaryThoughts = extractJsonArray(primaryResult.content);
            
            if (Array.isArray(primaryThoughts) && primaryThoughts.length > 0) {
                const expandedCards = [];
                
                const radius = 200;
                const parentX = cardData.position.x;
                const parentY = cardData.position.y;
                
                primaryThoughts.forEach((thought, index) => {
                    const angle = (2 * Math.PI * index) / primaryThoughts.length;
                    
                    const x = parentX + radius * Math.cos(angle);
                    const y = parentY + radius * Math.sin(angle);
                    
                    const newCard = createCardAtPosition(thought, x, y, primaryResult.model, cardData.id);
                    
                    cardData.related.push(newCard.id);
                    newCard.related.push(cardData.id);
                    
                    expandedCards.push(newCard);
                });
                
                drawConnections(cardData, expandedCards);
                
                const secondaryPromises = availableModels.map(model => callAIAPI(model, basePrompt));
                const secondaryResults = await Promise.allSettled(secondaryPromises);
                
                let modelIndex = 0;
                for (const result of secondaryResults) {
                    if (result.status === 'fulfilled' && result.value && result.value.content) {
                        try {
                            const secondaryThoughts = extractJsonArray(result.value.content);
                            
                            if (Array.isArray(secondaryThoughts) && secondaryThoughts.length > 0) {
                                const secondaryCards = [];
                                const secondaryModel = availableModels[modelIndex];
                                
                                const secondaryRadius = radius * 1.8;
                                const sectionOffset = (2 * Math.PI * modelIndex) / availableModels.length;
                                
                                const thoughtsToUse = secondaryThoughts.slice(0, 2);
                                
                                thoughtsToUse.forEach((thought, index) => {
                                    const sectionSize = 2 * Math.PI / availableModels.length;
                                    const angleWithinSection = (sectionSize * index) / thoughtsToUse.length;
                                    const angle = sectionOffset + angleWithinSection;

                                    const x = parentX + secondaryRadius * Math.cos(angle);
                                    const y = parentY + secondaryRadius * Math.sin(angle);

                                    const newCard = createCardAtPosition(thought, x, y, secondaryModel, cardData.id);
                                    
                                    cardData.related.push(newCard.id);
                                    newCard.related.push(cardData.id);
                                    
                                    secondaryCards.push(newCard);
                                });
                                
                                drawConnections(cardData, secondaryCards);
                            }
                        } catch (secondaryError) {
                            console.error('Error processing secondary model response:', secondaryError);
                        }
                    }
                    modelIndex++;
                }
            }
        } catch (error) {
            console.error('Error parsing expanded thoughts:', error);
            alert('Failed to expand the thought. Please try again.');
        }
    }

    async function expandWithSingleModel(cardData, modelToUse) {
        let contextInfo = '';
        if (cardData.context) {
            contextInfo = `\n\nAdditional context: ${cardData.context}`;
        }
        
        const prompt = `
            I have a thought that I'd like to expand on:
            "${cardData.text}"${contextInfo}
            
            Please generate 3 more detailed thoughts that expand upon this idea. 
            Format your response as a JSON array of strings, with each string being a separate thought.
            For example: ["First expanded thought", "Second expanded thought", "Third expanded thought"]
            
            Important: Return ONLY valid JSON without any additional text, explanation or formatting.
        `;
        
        const result = await callAIAPI(modelToUse, prompt);
        
        if (!result || !result.content) return;
        
        try {
            const expandedThoughts = extractJsonArray(result.content);
            
            if (Array.isArray(expandedThoughts)) {
                const expandedCards = [];
                
                const radius = 200;
                const parentX = cardData.position.x;
                const parentY = cardData.position.y;
                
                expandedThoughts.forEach((thought, index) => {
                    const angle = (2 * Math.PI * index) / expandedThoughts.length;
                    
                    const x = parentX + radius * Math.cos(angle);
                    const y = parentY + radius * Math.sin(angle);
                    
                    const newCard = createCardAtPosition(thought, x, y, result.model);

                    cardData.related.push(newCard.id);
                    newCard.related.push(cardData.id);
                    
                    expandedCards.push(newCard);
                });
                
                drawConnections(cardData, expandedCards);
            }
        } catch (error) {
            console.error('Error parsing expanded thoughts:', error);
            alert('Failed to expand the thought. Please try again.');
        }
    }


    function createCardAtPosition(text, x, y, model = null, parentId = '') {
        const id = 'card-' + (cardIdCounter++);
        
        const card = document.createElement('div');
        card.id = id;
        card.className = 'thought-card new-card';
        card.style.left = x + 'px';
        card.style.top = y + 'px';
        card.style.zIndex = '10';
        
        card.setAttribute('data-parent-id', parentId);
        card.setAttribute('data-children-ids', JSON.stringify([]));
        
        const modelIconHtml = model ? `
            <div class="model-icon" title="${model.name}">
                ${model.icon}
            </div>` : '';
        
        card.innerHTML = `
            <div class="card-topic">
                ${modelIconHtml}
                <span class="topic-text">Processing...</span>
            </div>
            <div class="card-content">${text}</div>
            <div class="card-context-container hidden"></div>
            <div class="card-actions">
                <button class="card-action-btn expand-btn" data-card-id="${id}"><img src='explore-loader-white.svg' width='12px' style='margin-right:6px'/>Expand</button>
                <button class="card-action-btn relate-btn" data-card-id="${id}"><img src='branch.svg' width='12px' style='margin-right:6px'/>Relate</button>
                <button class="card-action-btn context-btn" data-card-id="${id}"><img src='note.svg' width='12px' style='margin-right:6px'/>Add Note</button>
            </div>
        `;
        
        canvas.appendChild(card);
        
        makeCardDraggable(card);
        
        const cardData = {
            id: id,
            text: text,
            element: card,
            position: { x: x, y: y },
            topic: null,
            related: [],
            model: model,
            context: null,
            parentId: parentId, 
            childrenIds: []     
        };
        
        cards.push(cardData);
        updateCardCounter();
        
        if (parentId) {
            const parentCardData = cards.find(c => c.id === parentId);
            if (parentCardData) {

                // Update the parent's children list in memory
                parentCardData.childrenIds.push(id);
                
                const parentElement = document.getElementById(parentId);
                if (parentElement) {
                    const currentChildren = JSON.parse(parentElement.getAttribute('data-children-ids') || '[]');
                    currentChildren.push(id);
                    parentElement.setAttribute('data-children-ids', JSON.stringify(currentChildren));
                }
            }
        }
        
        determineTopic(cardData);
        
        return cardData;
    }
    

    async function relateThought(cardData) {
        const primaryModel = cardData.model || await classifyThought(cardData.text);
        
        if (!primaryModel) {
            alert('No valid AI model available. Please configure at least one AI model with an API key.');
            apiKeyPopup.style.display = 'flex';
            return;
        }

        const availableModels = models.filter(model => 
            model.enabled && 
            model.apiKey
        );
        
        if (availableModels.length === 0) {
            alert('No valid AI models available. Please configure at least one AI model with an API key.');
            apiKeyPopup.style.display = 'flex';
            return;
        }

        let contextInfo = '';
        if (cardData.context) {
            contextInfo = `\n\nAdditional context: ${cardData.context}`;
        }
        
        const prompt = `
            I have a thought:
            "${cardData.text}"${contextInfo}
            
            Please generate 2 related but different thoughts that connect to this idea.
            Format your response as a JSON array of strings, with each string being a separate thought.
            For example: ["First related thought", "Second related thought"]
            
            Important: Return ONLY valid JSON without any additional text, explanation or formatting.
        `;
        
        const promises = availableModels.map(model => callAIAPI(model, prompt));
        const results = await Promise.allSettled(promises);
        
        let validResults = 0;

        const parentX = cardData.position.x;
        const parentY = cardData.position.y;
        let positionIndex = 0;
        
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (result.status === 'fulfilled' && result.value && result.value.content) {
                try {
                    const model = availableModels[i];
                    const relatedThoughts = extractJsonArray(result.value.content);
                    
                    if (Array.isArray(relatedThoughts) && relatedThoughts.length > 0) {
                        validResults++;
                        const relatedCards = [];
                        
                        // Only use one thought per model to not overwhelm
                        // Take first thought unless this is the primary model
                        const thoughtToUse = (model.id === primaryModel.id) 
                            ? relatedThoughts 
                            : [relatedThoughts[0]];
                        
                        thoughtToUse.forEach(thought => {
                            // Layout: primary model on right, others arranged vertically on left
                            let x, y;
                            
                            if (model.id === primaryModel.id) {
                                // Place primary model's thoughts on the right
                                x = parentX + 320;
                                y = parentY + (positionIndex * 200);
                            } else {
                                // Place other models' thoughts on the left
                                x = parentX - 320;
                                y = parentY + (positionIndex * 200);
                            }
                            
                            const newCard = createCardAtPosition(thought, x, y, model, cardData.id);
                            
                            cardData.related.push(newCard.id);
                            newCard.related.push(cardData.id);
                            
                            relatedCards.push(newCard);
                            positionIndex++;
                        });
                        
                        drawConnections(cardData, relatedCards);
                    }
                } catch (error) {
                    console.error(`Error processing model ${availableModels[i].name} response:`, error);
                }
            }
        }
        
        if (validResults === 0) {
            alert('Failed to generate related thoughts. Please try again.');
        }
    }

    function extractJsonArray(content) {
        try {
            return JSON.parse(content);
        } catch (parseError) {
            const jsonMatch = content.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("Could not extract valid JSON from the response");
            }
        }
    }
    

    function clearCardSelection() {
        selectedCards = [];
        const selectedCardElements = document.querySelectorAll('.card-selected');
        selectedCardElements.forEach(element => {
            element.classList.remove('card-selected');
        });
    }
    
    function selectCard(cardElement) {
        const cardId = cardElement.id;
        cardElement.classList.add('card-selected');
        if (!selectedCards.includes(cardId)) {
            selectedCards.push(cardId);
        }
    }
    
    function deselectCard(cardElement) {
        const cardId = cardElement.id;
        cardElement.classList.remove('card-selected');
        selectedCards = selectedCards.filter(id => id !== cardId);
    }
    
    function updateCardSelection() {
        const selectionRect = selectionRectangle.getBoundingClientRect();
        
        cards.forEach(card => {
            const cardRect = card.element.getBoundingClientRect();
            
            // Check if card is within selection rectangle
            if (
                cardRect.left < selectionRect.right &&
                cardRect.right > selectionRect.left &&
                cardRect.top < selectionRect.bottom &&
                cardRect.bottom > selectionRect.top
            ) {
                selectCard(card.element);
            }
        });
    }
    

    function drawConnections(parentCard, childCards) {
        childCards.forEach(childCard => {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("class", "card-connection");
            svg.setAttribute("id", `connection-${parentCard.id}-${childCard.id}`);
            svg.style.position = "absolute";
            svg.style.pointerEvents = "none";
            svg.style.zIndex = "5";
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("stroke", "rgba(150, 150, 150, 0.4)");
            path.setAttribute("stroke-width", "2");
            path.setAttribute("fill", "none");
            svg.appendChild(path);
            
            canvas.insertBefore(svg, canvas.firstChild);
            
            updateConnection(svg, parentCard, childCard);
        });
    }
    
    function updateConnection(connection, card1, card2) {
        // Get card positions
        const x1 = card1.position.x + card1.element.offsetWidth / 2;
        const y1 = card1.position.y + card1.element.offsetHeight / 2;
        const x2 = card2.position.x + card2.element.offsetWidth / 2;
        const y2 = card2.position.y + card2.element.offsetHeight / 2;
        
        // Calculate SVG boundaries to fully contain the curve
        const minX = Math.min(x1, x2) - 100;
        const minY = Math.min(y1, y2) - 100;
        const width = Math.abs(x2 - x1) + 200;
        const height = Math.abs(y2 - y1) + 200;
        
        // Position the SVG
        connection.style.left = minX + "px";
        connection.style.top = minY + "px";
        connection.setAttribute("width", width);
        connection.setAttribute("height", height);
        
        // Calculate relative coordinates within the SVG
        const relX1 = x1 - minX;
        const relY1 = y1 - minY;
        const relX2 = x2 - minX;
        const relY2 = y2 - minY;
        
        // Calculate control point for the curve
        // This creates a nice arc between the points
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const curvature = Math.min(0.3, 60 / distance); // Adaptive curvature
        
        // Calculate perpendicular direction for control point
        const dx = x2 - x1;
        const dy = y2 - y1;
        const controlX = (relX1 + relX2) / 2 - dy * curvature;
        const controlY = (relY1 + relY2) / 2 + dx * curvature;
        
        // Create the curved path
        const path = connection.querySelector("path");
        path.setAttribute("d", `M ${relX1} ${relY1} Q ${controlX} ${controlY} ${relX2} ${relY2}`);
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
    
    function updateClusters() {
        clusters.forEach(cluster => {
            if (cluster.element && cluster.element.parentNode) {
                cluster.element.parentNode.removeChild(cluster.element);
            }
        });
        clusters = [];
        const topicGroups = {};
        
        cards.forEach(card => {
            if (card.topic) {
                if (!topicGroups[card.topic]) {
                    topicGroups[card.topic] = [];
                }
                topicGroups[card.topic].push(card);
            }
        });

        Object.entries(topicGroups).forEach(([topic, topicCards]) => {
            if (topicCards.length > 1) {
                createCluster(topic, topicCards);
            }
        });
    }
    
    // Create a cluster for a group of cards
    function createCluster(topic, clusterCards) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        
        clusterCards.forEach(card => {
            const x = card.position.x;
            const y = card.position.y;
            const width = card.element.offsetWidth;
            const height = card.element.offsetHeight;
            
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x + width);
            maxY = Math.max(maxY, y + height);
        });
        
        minX -= 40;
        minY -= 40;
        maxX += 40;
        maxY += 40;
        
        const width = maxX - minX;
        const height = maxY - minY;
        const centerX = minX + width / 2;
        const centerY = minY + height / 2;

        const clusterElement = document.createElement('div');
        clusterElement.className = 'cluster';
        clusterElement.style.left = `${minX}px`;
        clusterElement.style.top = `${minY}px`;
        clusterElement.style.width = `${width}px`;
        clusterElement.style.height = `${height}px`;
        
        const labelElement = document.createElement('div');
        labelElement.className = 'cluster-label';
        labelElement.textContent = topic;
        clusterElement.appendChild(labelElement);

        canvas.insertBefore(clusterElement, canvas.firstChild);

        const clusterData = {
            topic: topic,
            cards: clusterCards.map(card => card.id),
            element: clusterElement,
            position: { x: centerX, y: centerY },
            size: { width, height }
        };
        
        clusters.push(clusterData);
    }
    

    function createUserCluster(cardIds) {

        const userClusters = document.querySelectorAll('.user-cluster');
        userClusters.forEach(cluster => cluster.remove());
        const clusterCards = cardIds.map(id => cards.find(card => card.id === id)).filter(Boolean);
        
        if (clusterCards.length < 2) return;
        
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        
        clusterCards.forEach(card => {
            const x = card.position.x;
            const y = card.position.y;
            const width = card.element.offsetWidth;
            const height = card.element.offsetHeight;
            
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x + width);
            maxY = Math.max(maxY, y + height);
        });
        
        minX -= 30;
        minY -= 30;
        maxX += 30;
        maxY += 30;
        
        const width = maxX - minX;
        const height = maxY - minY;
        
        const clusterElement = document.createElement('div');
        clusterElement.className = 'cluster user-cluster';
        clusterElement.style.left = `${minX}px`;
        clusterElement.style.top = `${minY}px`;
        clusterElement.style.width = `${width}px`;
        clusterElement.style.height = `${height}px`;
        
        canvas.insertBefore(clusterElement, canvas.firstChild);
    }
    

    function setupInitialCanvas() {
        offsetX = window.innerWidth / 2 / scale;
        offsetY = window.innerHeight / 2 / scale;
        //updateCanvasTransform();
    }
    
    setupInitialCanvas();
    setupAutoExpandFirstCard();
    
    window.addEventListener('resize', function() {
        updateCanvasTransform();
        updateAllConnections();
    });

    let canvasOptimizer = null;
    
    const canvasObserver = new MutationObserver((mutations) => {
        const cardCount = document.getElementsByClassName("thought-card").length;
        
        if (cardCount > 8 && !canvasOptimizer) {
            console.log('Activating canvas performance optimizations');
            canvasOptimizer = optimizeCanvasPerformance();
        }
    });
    
    canvasObserver.observe(canvas, { childList: true });
    optimizeCanvasPerformance();


    document.getElementById('settings-btn').addEventListener('click', function() {
    loadModelsConfig();
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.remove('popup-fade-out');
    popupContent.classList.add('popup-fade-in');
    document.getElementById('api-key-popup').style.display = 'flex';
});
});


function updateCardCounter() {
    document.getElementById("card-count").innerHTML = document.getElementsByClassName("thought-card").length;
}

// Show thinking indicator
function showThinking() {
    document.getElementById('thinking-indicator').style.bottom = '20px';
    document.getElementById('thinking-indicator').style.opacity = '1';
}

// Hide thinking indicator
function hideThinking() {
    document.getElementById('thinking-indicator').style.bottom = '-48px';
    document.getElementById('thinking-indicator').style.opacity = '0';
}

document.getElementById('close-popup').addEventListener('click', function() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.remove('popup-fade-in');
    popupContent.classList.add('popup-fade-out');
    

    setTimeout(function() {
        document.getElementById('api-key-popup').style.display = 'none';
        popupContent.classList.remove('popup-fade-out');
        popupContent.classList.add('popup-fade-in');
    }, 100);
});



function initCardAncestryTracker() {
    console.log("Initializing Card Ancestry Tracker...");
    
    // Add CSS styles for ancestry highlighting and focus mode
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .ancestry-highlight {
        box-shadow: 0 0 15px rgba(255, 77, 127, 0.6) !important;
        border: 2px solid rgb(255, 77, 127) !important;
        z-index: 100 !important;
      }
      
      .ancestry-connection-highlight {
        z-index: 99 !important;
      }
      
      .ancestry-connection-highlight path {
        stroke: rgb(255, 77, 127) !important;
        stroke-width: 2px !important;
        stroke-dasharray: 10, 5 !important;
        stroke-linecap: round !important;
        animation: ancestryFlow 0.5s linear infinite !important;
      }
      
      @keyframes ancestryFlow {
        to {
          stroke-dashoffset: -15;
        }
      }
      
      /* Focus mode styles */
      .focus-mode-active .thought-card:not(.ancestry-highlight) {
        opacity: 0.3;
        filter: blur(7px);
        transition: opacity 0.3s ease, filter 0.3s ease;
      }
      
      .focus-mode-active .card-connection:not(.ancestry-connection-highlight) {
        opacity: 0.15;
        transition: opacity 0.3s ease;
      }
      
      /* Transition for normal state */
      .thought-card, .card-connection {
        transition: opacity 0.3s ease, filter 0.3s ease;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Track highlighted elements and state
    let highlightedCards = [];
    let highlightedConnections = [];
    let isAncestryActive = false;
    let isFocusModeActive = false;
    
    // Clear all highlights
    function clearHighlights() {
      highlightedCards.forEach(card => {
        card.classList.remove('ancestry-highlight');
      });
      
      highlightedConnections.forEach(conn => {
        conn.classList.remove('ancestry-connection-highlight');
      });
      
      highlightedCards = [];
      highlightedConnections = [];
      isAncestryActive = false;
      
      // Exit focus mode if active
      if (isFocusModeActive) {
        toggleFocusMode(false);
      }
    }
    
    // Toggle focus mode (dim/blur non-highlighted cards)
    function toggleFocusMode(activate) {
      const canvas = document.getElementById('infinite-canvas');
      
      if (activate && isAncestryActive) {
        canvas.classList.add('focus-mode-active');
        isFocusModeActive = true;
      } else {
        canvas.classList.remove('focus-mode-active');
        isFocusModeActive = false;
      }
    }
    
    // Highlight a connection between two cards
    function highlightConnection(card1Id, card2Id) {
      // Check both possible connection IDs
      const connectionId1 = `connection-${card1Id}-${card2Id}`;
      const connectionId2 = `connection-${card2Id}-${card1Id}`;
      
      const connection = document.getElementById(connectionId1) || 
                          document.getElementById(connectionId2);
      
      if (connection) {
        connection.classList.add('ancestry-connection-highlight');
        highlightedConnections.push(connection);
        return true;
      }
      
      return false;
    }
    
    // Recursively trace and highlight ancestry
    function highlightAncestryChain(cardElement) {
      // First, highlight the current card
      cardElement.classList.add('ancestry-highlight');
      highlightedCards.push(cardElement);
      
      // Get parent ID from data attribute
      const parentId = cardElement.getAttribute('data-parent-id');
      
      // If no parent, this is a root card
      if (!parentId) return;
      
      // Get the parent element
      const parentElement = document.getElementById(parentId);
      if (!parentElement) return;
      
      // Highlight the connection between this card and its parent
      highlightConnection(cardElement.id, parentId);
      
      // Recursively highlight the parent's ancestry
      highlightAncestryChain(parentElement);
    }
    
    // Handle card click
    function handleCardClick(cardElement) {
      // Clear any existing highlights
      clearHighlights();
      
      // Highlight the ancestry chain
      highlightAncestryChain(cardElement);
      isAncestryActive = true;
      
      // If focus mode was active, re-enable it
      if (isFocusModeActive) {
        toggleFocusMode(true);
      }
    }
    
    // Add click handlers
    const canvas = document.getElementById('infinite-canvas');
    
    // Handle clicking on canvas elements
    canvas.addEventListener('click', function(e) {
      // If clicked on a card
      const cardElement = e.target.closest('.thought-card');
      
      if (cardElement && !e.target.closest('button') && 
          e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        // Process card click
        handleCardClick(cardElement);
        e.stopPropagation();
      } 
      // If clicked on empty canvas
      else if (!cardElement) {
        // Clear highlights
        clearHighlights();
      }
    });
    
    // Add keyboard event listener for spacebar
    document.addEventListener('keydown', function(e) {
      // Check if spacebar was pressed
      if (e.code === 'Space' || e.keyCode === 32) {
        // Only toggle focus mode if ancestry highlighting is active
        if (isAncestryActive) {
          // Prevent default space behavior (like page scrolling)
          e.preventDefault();
          
          // Toggle focus mode
          toggleFocusMode(!isFocusModeActive);
        }
      }
    });
    
    console.log('Card ancestry tracker initialized successfully');
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initCardAncestryTracker, 2000);
  });