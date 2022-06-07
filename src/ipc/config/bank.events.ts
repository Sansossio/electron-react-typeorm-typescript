import { IpcEvents } from './ipc.events'

export const BANK_EVENTS: IpcEvents = {
  GET_TRANSACTIONS: {
    request: 'BANK_GET_TRANSACTIONS_REQUEST',
    success: 'BANK_GET_TRANSACTIONS_SUCCESS',
    error: 'BANK_GET_TRANSACTIONS_ERROR'
  }
}
