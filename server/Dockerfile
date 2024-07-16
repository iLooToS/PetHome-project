FROM node:20

WORKDIR /app

ENV DATABASE_URL=postgres://postgres:postgres@87.228.16.34:5432/PetHome
ENV ACCESS_TOKEN=secretA
ENV REFRESH_TOKEN=secretR
ENV PORT=3000

RUN apt-get update
RUN apt-get install -y postgresql-client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]