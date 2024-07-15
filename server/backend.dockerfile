FROM node:20

WORKDIR /app

ENV DATABASE_URL=postgres://postgres:postgres@db:5432/PetHome
ENV ACCESS_TOKEN=secretA
ENV REFRESH_TOKEN=secretR
ENV PORT=4000

RUN apt-get update
RUN apt-get install -y postgresql-client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]
