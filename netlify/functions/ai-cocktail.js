const axios = require("axios");

exports.handler = async function (event, context) {
  console.log("Incoming event body:", event.body);

  let body;
  try {
    body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  } catch (parseError) {
    console.error("Failed to parse body:", parseError);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const { userInput } = body;

  // const messages = [
  //   {
  //     role: "system",
  //     content:
  //       "You are an HTML generator for a cocktail app. Output only raw HTML and nothing else. Do NOT use <ul>, <li>, <p>, or any indentation. Instead, use this format exactly:\n<h1>Cocktail Name</h1><br><div>- ingredient 1<br>- ingredient 2<br>- ingredient 3<br></div><br><div>Instructions go here as plain text with no formatting tags.</div>\nDO NOT add images, styles, or extra tags. DO NOT use tabs or indentations.",
  //   },
  //   {
  //     role: "user",
  //     content: `You are a quirky mixologist. Invent a unique cocktail recipe using ${userInput} as one of the ingredients. Make it creative but drinkable by humans.`,
  //   },
  // ];

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/responses",
      {
        model: "gpt-5-mini",
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: "You generate HTML for a cocktail app.\nOutput requirements (must be followed exactly):\n- Output only raw HTML. No text before or after.\n- Do not use <ul>, <li>, <p>, <img>, <style>, or any other tags.\n- Do not indent or use tabs.\n- Use this exact structure:\n<h1>Cocktail Name</h1><br>\n<div>- ingredient 1<br>- ingredient 2<br>- ingredient 3<br></div><br>\n<div>Instructions as plain text. No formatting tags.</div>",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: `Invent a creative but drinkable cocktail recipe using ${userInput} as one ingredient. Be imaginative with flavors, but strictly follow the required HTML structure.`,
              },
            ],
          },
        ],
        temperature: 0.8,
        max_output_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiHTML = response.data.output?.[0]?.content?.find(
      (c) => c.type === "output_text"
    )?.text;

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: aiHTML }),
    };
  } catch (error) {
    console.error("Function error:", error.response?.data || error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "AI cocktail generation failed." }),
    };
  }
};
