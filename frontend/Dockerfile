FROM node:14.4-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn install

RUN yarn build
