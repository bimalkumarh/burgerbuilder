FROM node:alpine as builder

WORKDIR /burgerbuilder

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY --from=builder /burgerbuilder/build /usr/share/nginx/html
