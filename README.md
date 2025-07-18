---
AI Cocktail Feature (Tech Overview)
The AI cocktail generator feature is powered by the OpenAI GPT-3.5 API and securely integrated using a Netlify Function. This approach ensures that:

No API keys are exposed in the frontend or committed to the repo

API calls are routed through a serverless backend (/netlify/functions/ai-cocktail)

Sensitive data is managed via environment variables, stored securely in Netlify’s Site Configuration

During development, environment variables are accessed locally via a .env file (which is excluded from version control via .gitignore).

This setup keeps the codebase public and clean, while maintaining secure backend communication with external APIs.
