/* eslint-disable @typescript-eslint/no-explicit-any */
export const RunOnceAtTheTime = (_target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value
  descriptor.value = async function (...args: any[]) {
    const runningKey = `${propertyKey}_running`
    const isRunning = this[runningKey]

    if (isRunning) {
      return
    }

    try {
      this[runningKey] = true
      const response = await originalMethod.apply(this, args)
      return response
    } finally {
      this[runningKey] = false
    }
  }
}
