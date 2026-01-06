import React, { useEffect, useState } from "react";

export default function ClaudeRecipies({ ingredients }) {
  const [recipe, setRecipe] = useState("");      // AI response
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null);      // Error handling

  useEffect(() => {
    if (ingredients.length === 0) return;

    const fetchRecipe = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/recipe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients }),
        });

        if (!res.ok) throw new Error("Failed to fetch recipe");

        const data = await res.json();
        setRecipe(data.recipe); // serverless function returns { recipe: "..." }
      } catch (err) {
        console.error(err);
        setError("Could not get a recipe. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [ingredients]);

  if (loading) return <p>Fetching recipe from Chef Claude...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  return (
    <section className="claude-recipe-suggestion">
      <h2>Chef Claude Recommends:</h2>
      <article
        className="suggested-recipe-container"
        dangerouslySetInnerHTML={{ __html: recipe }}
      />
    </section>
  );
}
