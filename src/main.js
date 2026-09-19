import "./style.css";
import { welcomeMessage, goals } from "./messages.js";

const messageElement = document.querySelector("#message");
messageElement.textContent = welcomeMessage;

const goalsList = document.querySelector("#goals-list");

goals.forEach((goal, index) => {
  const article = document.createElement("article");
  article.className = "info-card";

  article.innerHTML = `
    <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
    <h3>${goal.title}</h3>
    <p>${goal.description}</p>
  `;

  goalsList.appendChild(article);
});

const yearElement = document.querySelector("#year");
yearElement.textContent = new Date().getFullYear();

const progressText = document.querySelector("#progress-text");
progressText.textContent = "Vite project started";
