# syntax=docker/dockerfile:1

FROM node:18

WORKDIR /app
COPY . ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]