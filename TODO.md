# TODO - Forum de discussion

## 1. Initialisation du projet
- [x] Créer la structure de dossiers du projet (backend / frontend)
- [x] Initialiser le projet Node.js dans le dossier backend
- [x] Initialiser le projet React avec Vite dans le dossier frontend
- [x] Configurer TypeScript dans les deux projets

## 2. Docker
- [x] Créer un Dockerfile pour le backend
- [x] Créer un Dockerfile pour le frontend
- [x] Créer un docker-compose.yml avec les services (backend, frontend, mongodb)
- [x] Tester que les containers se lancent correctement

## 3. Backend - Base
- [x] Configurer le serveur Express (ou alternative)
- [x] Connecter l'application à MongoDB
- [x] Mettre en place un système de gestion d'erreurs
- [x] Configurer les variables d'environnement

## 4. Backend - Authentification
- [ ] Créer le modèle utilisateur (User)
- [ ] Implémenter l'inscription (hash du mot de passe)
- [ ] Implémenter la connexion (JWT ou sessions)
- [ ] Créer un middleware de protection des routes

## 5. Backend - Forum
- [ ] Créer le modèle de catégorie
- [ ] Créer le modèle de sujet/thread
- [ ] Créer le modèle de message/post
- [ ] API CRUD pour les catégories
- [ ] API CRUD pour les sujets
- [ ] API CRUD pour les messages
- [ ] Gérer les relations entre les modèles (références MongoDB)

## 6. Frontend - Base
- [x] Configurer le routing (React Router)
- [x] Mettre en place la structure des pages
- [ ] Créer un layout global (navbar, footer)
- [x] Configurer la gestion d'état (Context API - AuthContext)

## 7. Frontend - Authentification
- [x] Créer la MainPage avec formulaire de login et AuthContext
- [ ] Connecter les formulaires à l'API backend
- [ ] Gérer le token JWT côté client
- [ ] Protéger les routes nécessitant d'être authentifié

## 8. Frontend - Forum
- [ ] Page d'accueil avec liste des catégories
- [ ] Page d'affichage des sujets d'une catégorie
- [x] Page d'affichage d'un sujet avec ses messages
- [x] Formulaire de création de sujet
- [x] Formulaire de réponse à un sujet
- [x] Gérer l'affichage des infos utilisateur (auteur, date...)
- [x] Refactorer MainPage : extraction de Login et ThreadList
- [x] Créer le custom hook useThreads pour le fetching des threads
- [x] Typer correctement l'état error (Error | null) dans les hooks

## 9. Finitions
- [ ] Ajouter du style (CSS, Tailwind, ou autre)
- [x] Gérer les cas d'erreurs et le loading (via useThreads)
- [ ] Pagination des sujets et messages
- [ ] Tester le flux complet en local
- [ ] Nettoyer et documenter le code
