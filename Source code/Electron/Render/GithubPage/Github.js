const CreditsPage = document.getElementById("CreditsPage");
const GithubPage = document.getElementById("GithubPage");
const DiscordPage = document.getElementById("DiscordPage");
const Mainpage = document.getElementById("MainPage");

CreditsPage.addEventListener("click", function() {
    window.location.assign("../CreditsPage/Credits.html");
});

DiscordPage.addEventListener("click", function() {
    window.location.assign("../DiscordPage/Discord.html");
});

Mainpage.addEventListener("click", function() {
    window.location.assign("../Render.html");
});