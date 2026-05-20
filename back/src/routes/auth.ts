import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // 1. Hasher le mot de passe (10 = salt rounds)
    const hashedPassword = await bcrypt.hash(password, 10);
    // 2. Créer l'utilisateur
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // 3. Répondre (ne pas renvoyer le mot de passe)
    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'inscription', error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ message: 'JWT_SECRET not configured' });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: 'Login or password incorrect.' });
      return;
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
      res.status(200).json({
        token: token,
        user: { id: user._id, username: user.username, email: user.email },
      })
    } else {
      res.status(400).json({ message: 'Login or password incorrect.' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors du login', error });
  }
});

export default router;
