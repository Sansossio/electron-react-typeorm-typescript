import { ipcMain, IpcMainEvent } from 'electron'
import { IpcEvent } from './config/ipc.events'
import { IpcRequest } from './ipc-request.interface'

export abstract class IpcChannelBase {
  constructor (private readonly event: IpcEvent) { }

  protected get requestChannel (): string {
    return this.event.request
  }

  protected get responseChannel (): string {
    return this.event.success
  }

  protected get errorChannel (): string {
    return this.event.error
  }

  abstract handle(event: IpcMainEvent, request: IpcRequest): void;

  init (): void {
    ipcMain.on(this.requestChannel, (event, request) => {
      this.handle(event, request)
    })
  }
}
