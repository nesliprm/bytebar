<h3>AI Cocktail Feature (Tech Overview)</h3>

<p>
  The AI cocktail generator is powered by the <strong>OpenAI GPT-3.5 API</strong> and securely integrated using a 
  <a href="https://docs.netlify.com/functions/overview/" target="_blank">Netlify Function</a>.
</p>

<p>
  This setup ensures that:
</p>

<ul>
  <li>✅ <strong>No API keys</strong> are exposed in the frontend or committed to the repository</li>
  <li>✅ API calls are routed through a secure, serverless backend (<code>/netlify/functions/ai-cocktail</code>)</li>
  <li>✅ Sensitive credentials are managed via <strong>Netlify environment variables</strong></li>
</ul>

<p>
  During development, environment variables are loaded locally from a <code>.env</code> file (excluded from version control via <code>.gitignore</code>).
</p>

<p>
  This approach keeps the codebase public and clean, while securely handling backend communication with external APIs.
</p>
