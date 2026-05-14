import { Request, Response, NextFunction } from 'express'
import AppError from '../utils/AppError'

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message
    })
  } else {
    res.status(500).json({ error: 'Erreur interne du serveur' })
  }
}
