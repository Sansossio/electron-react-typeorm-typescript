import { Logger } from '../logger'
import { getLogKey } from './util/get-log-key.util'

export const LogMethod = (_target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value
  descriptor.value = async function (...args: never[]) {
    const logKey = getLogKey(this, propertyKey)
    Logger.debug(logKey, JSON.stringify(args, null, 2))
    try {
      return await originalMethod.apply(this, args)
    } catch (e) {
      Logger.error(logKey, e)
      throw e
    }
  }
}
