FROM node:14-alpine as builder

WORKDIR /app

COPY . .

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]