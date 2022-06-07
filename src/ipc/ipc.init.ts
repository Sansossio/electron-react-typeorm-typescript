import { IpcChannelBase } from './ipc-channel.base'

const IpcChannesl: IpcChannelBase[] = []

export const ipcInit = async () => {
  for (const channel of IpcChannesl) {
    channel.init()
  }
}
