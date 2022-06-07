import { Logger } from '../logger'
import { getLogKey } from './util/get-log-key.util'

export const LogError = (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value
  descriptor.value = async function (...args: never[]) {
    const logKey = getLogKey(this, _propertyKey)
    try {
      return await originalMethod.apply(this, args)
    } catch (e) {
      Logger.error(logKey, e)
      throw e
    }
  }
}
