import jwt, { JwtPayload } from 'jsonwebtoken'

export function verifyToken(token: string) {
  const parsed = jwt.decode(token) as JwtPayload

  if (!parsed || !parsed.exp) {
    throw new Error('Invalid token')
  }

  if (Date.now() >= parsed.exp * 1000) {
    throw new Error('Token expired')
  }

  return parsed
}
