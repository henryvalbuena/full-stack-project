FROM node:14.4-alpine AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn install

RUN yarn build

FROM nginx:1.19-alpine

COPY --from=builder /app/www /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
