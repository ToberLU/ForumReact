import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

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

export default router;
