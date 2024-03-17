const SendRequest = function(API, MESSAGE) {

    const request = new XMLHttpRequest();
    request.open("POST", API);

    request.setRequestHeader('Content-type', 'application/json');

    const Message_Request = {
        content: MESSAGE
    };

    request.send(JSON.stringify(Message_Request));

};

document.getElementById("BodyAPISendRequest").addEventListener("click", function() {

    const API_TOKEN = document.getElementById("BodyAPIEntry");
    const API_MESSAGE = document.getElementById("BodyAPIMessageEntry");

    if (API_TOKEN.value.length !== 0) {
        SendRequest(API_TOKEN.value, API_MESSAGE.value);
    };

});


const CreditsPage = document.getElementById("CreditsPage");
const GithubPage = document.getElementById("GithubPage");
const DiscordPage = document.getElementById("DiscordPage");
const Mainpage = document.getElementById("MainPage");

CreditsPage.addEventListener("click", function() {
    window.location.assign("./CreditsPage/Credits.html");
});

GithubPage.addEventListener("click", function() {
    window.location.assign("./GithubPage/Github.html");
});

DiscordPage.addEventListener("click", function() {
    window.location.assign("./DiscordPage/Discord.html");
});
