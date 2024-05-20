FROM node:18-alpine As development

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN pnpm install

COPY --chown=node:node . .

USER node