FROM node:12.18.2

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
