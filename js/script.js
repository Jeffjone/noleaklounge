const gamePasswords = {
  "drifthunters.html": "drifthunters",
};

let pendingGameUrl = "";

function openGame(url) {
  pendingGameUrl = url;
  document.getElementById("passwordModal").style.display = "flex";
  document.getElementById("passwordInput").value = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("passwordInput").focus();
}

function submitPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = gamePasswords[pendingGameUrl];

  if (input === correctPassword) {
    document.getElementById("passwordModal").style.display = "none";
    document.getElementById("gameFrame").src = pendingGameUrl;
    document.getElementById("gameOverlay").style.display = "flex";
  } else {
    document.getElementById("passwordError").innerText = "Incorrect password.";
  }
}

function cancelPassword() {
  document.getElementById("passwordModal").style.display = "none";
  pendingGameUrl = "";
}

function closeGame() {
  document.getElementById("gameOverlay").style.display = "none";
  document.getElementById("gameFrame").src = "";
}