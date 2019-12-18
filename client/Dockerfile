FROM node:12

WORKDIR usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm rn build:ssr

CMD ["npm", "run", "server:ssr"]