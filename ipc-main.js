// Main script
'use strict'
 
const {app, BrowserWindow, ipcMain} = require('electron')
var read = require('read-file')

var mainWindow = null
 
function createWindow () {
    var mainWindow = new BrowserWindow({ width: 1600, height: 1200, show: false, webPreferences: { nodeIntegration: true } })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.once('ready-to-show', () =>{mainWindow.show()})
    mainWindow.on('closed', () => { mainWindow = null })

    ipcMain.on("mainWindowLoaded", function (event, arg) {
        var result = JSON.parse(read.sync("db/pass.json"))
        mainWindow.webContents.send("passManifestPayload", result)
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() })
app.on('activate', function () { if (mainWindow === null) createWindow() })
