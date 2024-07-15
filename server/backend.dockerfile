FROM node:20

WORKDIR /app

ENV DATABASE_URL=postgres://postgres:postgres@db:5432/films
ENV ACCESS_TOKEN=secretA
ENV REFRESH_TOKEN=secretR
ENV PORT=3000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
