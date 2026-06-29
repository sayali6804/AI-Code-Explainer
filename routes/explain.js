const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// -----------------------
// Explain Code Route
// -----------------------
router.post("/", async (req, res) => {

    try {

        const { language, code } = req.body;

        if (!code) {
            return res.status(400).json({
                error: "Code is required"
            });
        }

        const prompt = `
If the language is "Auto Detect", first identify the programming language.

Then explain the code.

Provide:

- Detected Language
- Purpose
- Inputs
- Output
- Logic
- Time Complexity
- Space Complexity
- Improvements

Code:

${code}
`;

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.2
        });

        res.json({
            explanation: completion.choices[0].message.content
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

// -----------------------
// Optimize Code Route
// -----------------------
router.post("/optimize", async (req, res) => {

    try {

        const { language, code } = req.body;

        if (!code) {
            return res.status(400).json({
                error: "Code is required"
            });
        }

        const prompt = `
You are a senior software engineer.

Optimize the following ${language} code.

Rules:
- Improve readability.
- Improve performance if possible.
- Keep the same functionality.
- Return ONLY the optimized code.
- Do not add explanations.

Code:

${code}
`;

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.2
        });

        res.json({
            optimizedCode: completion.choices[0].message.content
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;