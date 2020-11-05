FROM node:14-slim AS dev
RUN mkdir -p /app/backend
WORKDIR /app/backend
COPY package.json * /app/backend/
COPY yarn.lock * /app/backend/
RUN yarn install
COPY . /app/backend/
CMD ["yarn", "start"]
EXPOSE 3000



FROM node:14-slim AS build
RUN mkdir -p /app/backend
WORKDIR /app/backend
COPY package.json * /app/backend/
COPY yarn.lock * /app/backend/
RUN yarn install
COPY . /app/backend/
CMD ["yarn", build]
