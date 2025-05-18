## Brunch 🍞🍳🍜
Brunch is an alternative interface prototype to interact with Large Language Models. You can play with the prototype at [brunch.shuvam.xyz](https://brunch.shuvam.xyz/)

Ever since the advent of ChatGPT, we have gone through endless internet discussions (some might have even ended in fist-fights) on what is the right UX to use LLMs ⎯ and we do have a general consensus that while chat is a good generalized starting point, it also reinforces the notion of these models being a black box, without giving the user suitable granular controls to tweak the output, at least not all the time.

Back in ~2022, I made a [rough prototype](https://x.com/shuvam360/status/1919380728434896956) powered by `GPT-3` to explore a branched interface to interact with multiple instances of the model, all of whom were provided with differentiated system prompts, viz. one instance was supposed to answer/respond like a devil, while another was an angel, one was an all-knowing information explorer, while another was a poet who spit out haikus and limericks, regardless of your input. Couple of weeks back, re-wrote the older codebase to swap out the now-deprecated `GPT-3` along with adding support for multiple models. 
I'd admit these new models have not been angel or devil-pilled yet, but if you want to add that enhancement, I'll be on the lookout for PRs to merge.

#### In the current state of things, you can ⎯
- Talk to OpenAI's `GPT 3.5 Turbo`, `Claude 3.5 Sonnet`, and `Gemini 2.0 Flash` (Support for more models and granular model controls shall be added over time) by bringing in your own API keys.
- Whenever you write a message, an instance of `GPT-3.5` scans the message to figure which model would be the most apt to be the primary responder (essentially a glorified LLM-powered classifier). This optimization was initially made before [OpenRouter](https://openrouter.ai/) came into existence.
- You can expand on an idea, get related/adjacent areas of information, and also add more notes/context to the output and basically keep doing this endlessly.
- Personal favourite feature, once you select a thought card, you can visualize the entire chain of thought traced to it's root.
- Voice input, in case you're just that bit reluctant to write, powered by the browser's native TTS instead of adding another additional model.
