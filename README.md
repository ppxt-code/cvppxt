[![Vite](https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org)

# Application Web (FrontEnd) de mon portfolio 

## Description et Fonctionnalités principales
Application web développée avec Vite, React pour afficher mon portefolio.
Il détaille mes compétences, les projets réalisés avec leur lien sur le code GitHub, et pour certains un lien sur GitHub Pages.
On peut télécharger mon CV, me contacter par email, ou etre redirigé sur ma page LinkedIn.  

## Technologies utilisées 
- React JS (composants fonctionnels)  
- React Router pour la navigation  
- CSS pour la gestion des styles 

## Installation
1. Cloner le dépôt :  
- git clone https://github.com/ppxt-code/cvppxt.git
- cd cvppxt

2. Installer les dépendances :  
npm install

3. Lancer l'application en mode développement :  
npm run dev

## Structure du projet
- `/src/components` : Composants React (Carousel, ContactUs, Footer, Header, ModalButton, Star, TypeWriter)  
- `/src/pages` : Pages principales (Contact, Home, Portfolio, Presentation, Skills, Error) 
- `/src/css` : Fichiers css 
- `/src/App.js` : Routeur principal  

## Routes 
- "/"                 redirige vers la page Home
- "/presentation"     redirige vers la page Presentation
- "/skills"           redirige vers la page Compétences
- "/portfolio"        redirige vers la page Portfolio
- "/error" ou autre   redirige vers la page Error