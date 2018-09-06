const {app, BrowserWindow, ipcMain} = require('electron')

var configFile = require('./configuration/config')
process.config = configFile
console.log(process.config)



let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1200, height: 700})

  mainWindow.loadFile(process.config.app.screen.html)

  process.newUser = () => mainWindow.loadFile(process.config.app.main.html)

  process.ipcMain = mainWindow.webContents

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  require('./web/web.js')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
