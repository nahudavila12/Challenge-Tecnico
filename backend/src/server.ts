import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import authRoutes from './routes/auth';
import { preloadUsers } from './utils/usersLoader';

const app = express();
const PORT = process.env.PORT || 3001;

// Precargar usuarios al iniciar el servidor
preloadUsers();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentacion de Swagger disponible en http://localhost:${PORT}/api-docs`);
});

