const CreditsPage = document.getElementById("CreditsPage");
const GithubPage = document.getElementById("GithubPage");
const DiscordPage = document.getElementById("DiscordPage");
const Mainpage = document.getElementById("MainPage");

GithubPage.addEventListener("click", function() {
    window.location.assign("../GithubPage/Github.html");
});

CreditsPage.addEventListener("click", function() {
    window.location.assign("../CreditsPage/Credits.html")
});

Mainpage.addEventListener("click", function() {
    window.location.assign("../Render.html");
});