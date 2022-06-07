import ElectronLog from 'electron-log'
import { LOGGER_GLOBAL_CONFIG } from '../../shared/config/logger.config'

const log = window.require('electron-log')

const logger: ElectronLog.ElectronLog = log.create('renderer')
logger.transports.file.maxSize = LOGGER_GLOBAL_CONFIG.maxSize

export class LoggerRenderer {
  private static setFileName (level: string) {
    logger.transports.file.fileName = `renderer-${level}.log`
  }

  static log (...params: any[]) {
    this.setFileName('log')
    logger.info(...params)
  }

  static info (...params: any[]) {
    this.setFileName('info')
    logger.info(...params)
  }

  static debug (...params: any[]) {
    this.setFileName('debug')
    logger.debug(...params)
  }

  static error (...params: any[]) {
    this.setFileName('error')
    logger.error(...params)
  }

  static warn (...params: any[]) {
    this.setFileName('warn')
    logger.warn(...params)
  }
}
