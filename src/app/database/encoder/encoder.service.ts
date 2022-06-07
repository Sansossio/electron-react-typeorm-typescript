import Crypto from 'crypto'

const crypto: typeof Crypto = window.require('crypto')

const ALGORITHM = 'aes-256-ctr'
const ENCODING = 'hex'
const SECRET_KEY = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'
const IV = crypto.randomBytes(16)

export class EncoderService {
  public static encrypt (text: string): string {
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, IV)

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])

    return encrypted.toString(ENCODING)
  }

  public static decrypt (hash: string): string {
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(IV.toString(ENCODING), ENCODING))

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, ENCODING)), decipher.final()])

    return decrpyted.toString()
  }
}
