export interface IpcEvent {
  request: string;
  success: string;
  error: string;
}

export interface IpcEvents {
  [key: string]: IpcEvent
}
