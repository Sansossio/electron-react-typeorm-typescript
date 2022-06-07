import { IpcRenderer } from 'electron'
import { IpcEvent } from '../../ipc/config/ipc.events'
import { IpcRequest } from '../../ipc/ipc-request.interface'

export class IpcService {
  private ipcRenderer?: IpcRenderer

  send<T> (event: IpcEvent, request: IpcRequest = {}): Promise<T> {
    // If the ipcRenderer is not available try to initialize it
    if (!this.ipcRenderer) {
      this.initializeIpcRenderer()
    }

    const ipcRenderer = this.ipcRenderer
    ipcRenderer.send(event.request, request)

    // This method returns a promise which will be resolved when the response has arrived.
    return new Promise((resolve, reject) => {
      ipcRenderer.once(event.success, (_event, response) => resolve(response))
      ipcRenderer.once(event.error, (_event, error) => reject(new Error(error)))
    })
  }

  private initializeIpcRenderer () {
    if (!window || !window.process || !window.require) {
      throw new Error('Unable to require renderer process')
    }
    this.ipcRenderer = window.require('electron').ipcRenderer
  }
}
