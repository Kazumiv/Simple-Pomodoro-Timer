let {app, BrowserWindow} = require("electron");
let path = require("path");

app.on("ready",()=>{
    createWindow();
});

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:600,
        icon:path.join(__dirname,"/assets/tomato.png"),
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration: true,
			contextIsolation: false
        }
    });
    win.loadFile(path.join(__dirname,"/index.html"));
};

