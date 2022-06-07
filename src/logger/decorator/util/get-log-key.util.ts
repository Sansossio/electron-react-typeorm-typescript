export const getLogKey = (target: any, propertyKey: string) => `${target.constructor.name}#${propertyKey}`
