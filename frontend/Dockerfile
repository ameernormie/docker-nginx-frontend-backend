FROM node:12.18.2 as build

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN yarn build


FROM nginx

RUN mkdir /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /app

# COPY --from=build /app/build /usr/share/nginx/html
