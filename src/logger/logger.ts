import log from 'electron-log'
import { LOGGER_GLOBAL_CONFIG } from '../shared/config/logger.config'

const logger: log.ElectronLog = log.create('main')
logger.transports.file.maxSize = LOGGER_GLOBAL_CONFIG.maxSize

export class Logger {
  private static setFileName (level: string) {
    logger.transports.file.fileName = `main-${level}.log`
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
