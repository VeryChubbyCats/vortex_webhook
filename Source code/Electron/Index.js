const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const MainTemplate = [];

function CreateWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 800,
        resizable: false
    });

    window.loadFile(path.join(__dirname, "Render/Render.html"));
};

app.whenReady().then(function() {
    CreateWindow();

    const MainMenu = Menu.buildFromTemplate(MainTemplate);
    Menu.setApplicationMenu(MainMenu);

    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length === 0) {
            CreateWindow();
        };
    });

});

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    };
});