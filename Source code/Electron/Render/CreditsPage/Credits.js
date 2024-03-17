const CreditsPage = document.getElementById("CreditsPage");
const GithubPage = document.getElementById("GithubPage");
const DiscordPage = document.getElementById("DiscordPage");
const Mainpage = document.getElementById("MainPage");

GithubPage.addEventListener("click", function() {
    window.location.assign("../GithubPage/Github.html");
});

DiscordPage.addEventListener("click", function() {
    window.location.assign("../DiscordPage/Discord.html");
});

Mainpage.addEventListener("click", function() {
    window.location.assign("../Render.html");
});