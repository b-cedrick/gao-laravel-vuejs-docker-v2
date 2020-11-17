FROM node:10.21.0-alpine

#Info sur l'auteur (pas obligatoire)
LABEL author="Toto-Ad" 

#User qui sera utilisé
USER node

RUN mkdir /home/node/.npm-global
#Ajout de npm dans le path
ENV PATH=/home/node/.npm-global/bin:$PATH
#Definition de variable d'environnement pour npm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR $HOME/app

RUN npm i -g npm

# Ajouter l'alias watch de "npm run watch" dans l'environnement de l'utilisateur
RUN echo 'alias watch="npm run watch"' >> ~/.bashrc

# Ajouter l'alias install de "npm install" dans l'environnement de l'utilisateur
RUN echo 'alias install="npm install"' >> ~/.bashrc