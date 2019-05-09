// Main script
'use strict';
 
const {app, BrowserWindow, ipcMain} = require('electron')
//const Router = require('electron-router')
const knex = require('knex')({client:'sqlite3',connection:{filename:'./db/air.db'}});

//let router = Router('MAIN')
//var mainWindow 
var mainWindow = null
 
function createWindow () {
    // Create window
    var mainWindow = new BrowserWindow({ width: 1600, height: 1200, show: false, webPreferences: { nodeIntegration: true } })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.once('ready-to-show', () =>{mainWindow.show()})
    mainWindow.on('closed', () => { mainWindow = null })
    // Setup DB and modules
    ipcMain.on("mainWindowLoaded", function (event, arg) {
        var result = knex.select("*").from("pass")
        //console.log(result);
        result.then(function(result){
            for (let i=0; i<result.length; i++){
                console.log(result[i].firstname.toString()+"\n");
            }
            mainWindow.webContents.send("passManifestPayload", result)
        })
    })
    // Do the rest on ready event (triggered from window, which is usaully the slowest component)
//    router.on('ready', () => {
//        router.on('quit', () => {
//            // Close DB
//            // Handle quit code
//            //...
//        })
//    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() })
app.on('activate', function () { if (mainWindow === null) createWindow() })
