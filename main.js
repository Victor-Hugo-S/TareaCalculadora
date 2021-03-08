const {app, BrowserWindow} = require('electron')

function createWindow(){
    const ventana = new BrowserWindow({
        width: 350,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    })
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)
