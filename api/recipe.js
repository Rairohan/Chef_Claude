import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe.
Format your response in HTML so it can be rendered on a web page.
`;

export default async function recipeHandler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get ingredients from frontend
    const { ingredients } = req.body;
      console.log("Ingredients received:", ingredients);
    console.log("HF_ACCESS_TOKEN loaded?", !!process.env.HF_ACCESS_TOKEN);

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "No ingredients provided" });
    }

    // Initialize Hugging Face client
    const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

    // Call the model
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredients.join(
            ", "
          )}. Please recommend a recipe.`,
        },
      ],
      max_tokens: 1024,
    });

    // Extract the text
    const recipeText = response.choices[0].message.content;

    // Send it back to frontend
    res.status(200).json({ recipe: recipeText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }


}

