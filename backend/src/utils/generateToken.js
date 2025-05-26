// generateToken.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateTestToken = () => {
  const payload = { id: 'testUser' }; // Identificador del usuario de prueba
  const secret = process.env.JWT_SECRET || 'default_secret'; // Clave secreta
  const options = { expiresIn: '1h' }; // Tiempo de expiración del token

  const token = jwt.sign(payload, secret, options);
  console.log('Token de prueba:', token);
};

generateTestToken();
