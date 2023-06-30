FROM node:20-alpine

WORKDIR /app

COPY package.json package.json
COPY index.js index.js

RUN npm i

ENTRYPOINT [ "node", "index.js" ]