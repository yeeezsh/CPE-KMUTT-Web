FROM node:14-slim AS dev
RUN mkdir -p /backend
WORKDIR /backend
COPY package.json /backend
COPY yarn.lock /backend
RUN yarn install
COPY . /backend
CMD ["yarn", "start"]
EXPOSE 3000



FROM node:14-slim AS build
RUN mkdir -p /backend
WORKDIR /backend
COPY package.json /backend
COPY yarn.lock /backend
RUN yarn install
COPY . /backend
CMD ["yarn", build]
