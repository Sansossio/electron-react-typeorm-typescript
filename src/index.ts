import { app, BrowserWindow } from 'electron'
import { ipcInit } from './ipc/ipc.init'
import { Logger } from './logger/logger'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string

if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    height: 600,
    width: 800
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.webContents.openDevTools()
}

app.on('ready', async () => {
  try {
    Logger.info('App is ready')
    ipcInit()
    createWindow()
  } catch (e) {
    Logger.error(e)
    app.quit()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    Logger.info('App is closing')
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
