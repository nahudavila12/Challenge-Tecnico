import { Response } from 'express';

/**
 * Error handler
 */
export const errorHandler = (
  err: Error,
  res: Response,
) => {
  console.error('Error:', err);

  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message ,
  });
};

