FROM node:14.4-alpine AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn install

RUN yarn build

FROM nginx:1.19-alpine

COPY --from=builder /app/www /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
