FROM node:12.19.1-alpine3.11

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:prod"]