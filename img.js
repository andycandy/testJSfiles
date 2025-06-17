// [CODE STARTS]
const module = await import("https://esm.sh/@google/genai@1.4.0");
GoogleGenAI = module.GoogleGenAI;
Modality = module.Modality
ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const resp = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: 'Briefly define machine learning.',
  config: {}
});
console.log(resp.text);
// [CODE ENDS]

/* Output Sample

Machine learning is a type of artificial intelligence that allows computer systems to learn from data without being explicitly programmed. It involves algorithms that can improve their performance on a specific task over time as they are exposed to more data.


*/

// [CODE STARTS]
const resp2 = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: 'What are some recent breakthroughs in the field of AI?',
    config: {
        tools: [{ googleSearch: {} }],
    },
});
console.log(resp2.text);
console.log(resp2.candidates[0].groundingMetadata.searchEntryPoint.renderedContent)
// [CODE ENDS]

/* Output Sample

It appears that AI is a rapidly evolving field. Here are some recent breakthroughs:

**Generative AI & Large Language Models (LLMs):**
*   **Advancements in LLMs:** There's been remarkable progress, including Meta's Llama 4 which is designed to handle contentious questions more effectively and process various data types.
*   **Gemini 2.0:** Google released this powerful AI model designed for the "agentic era" and integrated it into various products.
*   **Image, video and audio generation:** Improvements have been made to video-to-audio technology, which can generate dynamic soundscapes through natural language text prompts based on on-screen action.
*   **Creative AI tools:** Tools like ImageFX and MusicFX have been introduced to create images and audio clips from text prompts.

**AI Models & Reasoning:**
*   **More capable models:** AI models are becoming faster and more efficient, with advanced reasoning capabilities, useful in fields like science, coding, math, law, and medicine.
*   **AlphaGeometry:** Google DeepMind launched an AI system that can solve complex geometry problems at the level of a human Olympiad gold medalist.
*   **Reasonable reasoning models:** There are increasing improvements in AI's ability to remember more and reason better.

**AI Applications in Various Sectors:**
*   **Engineering:** AI has revolutionized the field of engineering, with platforms using geometric deep learning to deliver simulation results much faster.
*   **Manufacturing:** AI is optimizing production lines and reducing costs.
*   **Healthcare:** AI is being integrated for diagnosing medical conditions.
*   **Scientific discovery:** AI is fueling breakthroughs in scientific research, including biomolecular science.
*   **Materials Science:** AI tools are aiding in the discovery of new materials with potential applications in solar cells, batteries, and superconductors.

**Other Key Trends & Developments:**
*   **Embodied AI and Robotics:**  Funding is increasing for AI-driven humanoid robotics.
*   **AI Agents:** AI-powered agents will do more with greater autonomy to simplify tasks.
*   **Edge Computing:** Edge computing is gaining traction to reduce latency and enhance real-time processing for AI applications.
*   **AI for Sustainability:** AI applications are being used to address environmental challenges.
*   **Quantum Computing:** Quantum computers are enhancing machine learning performance.
*/

// [CODE STARTS]
const response = await ai.models.generateContent({
  model: "gemini-2.0-flash-preview-image-generation",
  contents: `A 3D rendered pig with wings and a top hat flying over
             a futuristic sci-fi city filled with greenery.`,
  config: { responseModalities: [Modality.TEXT, Modality.IMAGE] }
});

for (const part of response.candidates[0].content.parts) {
  if (part.text) {
    console.log(part.text);
  } else if (part.inlineData) {
    console.image(part.inlineData.data, "image/png");
  }
}
// [CODE ENDS]

/* Output Sample

I will generate a 3D rendering of a whimsical scene: a pink pig with small, feathery wings gracefully soaring above a vibrant, futuristic cityscape. The city below will feature sleek, silver buildings intertwined with lush green vegetation and softly glowing lights. The pig will be wearing a dapper black top hat perched jauntily on its head.


<img src="https://i.ibb.co/4DMSgyf/download.png"/>

*/
