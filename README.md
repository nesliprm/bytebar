<h1>byteBAR</h1>

<h2>Features</h2>

<p>This app offers three ways to discover cocktails:</p>

<h3>Random Cocktail</h3>
<p>
  Click the <strong>“Random”</strong> button to receive a randomly selected cocktail from the database.
  A typewriter animation sets the mood while your drink is being “crafted.”
</p>

<h3>Search by Ingredient</h3>
<p>
  Type an ingredient (e.g. <code>rum</code>, <code>lime</code>, <code>coffee</code>) and hit search.
  The app fetches a list of cocktails containing that ingredient and randomly displays one with full details.
</p>

<h3>AI Cocktail Generator</h3>
<p>
  Feeling adventurous? Enter an ingredient and let the AI invent a brand-new cocktail just for you!
  <br>
  This feature uses <strong>OpenAI’s GPT-3.5</strong> to create unique cocktail recipes.
</p>
<p>
  API communication is securely handled via a <a href="https://docs.netlify.com/functions/overview/" target="_blank">Netlify Function</a>,
  keeping the OpenAI key hidden from the frontend.
</p>

<h4>AI Feature (Tech Overview)</h4>

<p>
  The AI cocktail generator is powered by the <strong>OpenAI GPT-3.5 API</strong> and securely integrated using a 
  <a href="https://docs.netlify.com/functions/overview/" target="_blank">Netlify Function</a>.
</p>

<p>
  This setup ensures that:
</p>

<ul>
  <li><strong>No API keys</strong> are exposed in the frontend or committed to the repository</li>
  <li>API calls are routed through a secure, serverless backend (<code>/netlify/functions/ai-cocktail</code>)</li>
  <li>Sensitive credentials are managed via <strong>Netlify environment variables</strong></li>
</ul>

<p>
  During development, environment variables are loaded locally from a <code>.env</code> file (excluded from version control via <code>.gitignore</code>).
</p>

<p>
  This approach keeps the codebase public and clean, while securely handling backend communication with external APIs.
</p>
