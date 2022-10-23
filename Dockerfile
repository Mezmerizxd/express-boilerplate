FROM node:16.17.0

WORKDIR /usr/src/

COPY ./package.json ./

COPY . .

EXPOSE 3001 3002