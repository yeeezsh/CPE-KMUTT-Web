FROM node:16-alpine3.11 as base
WORKDIR /frontend
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
COPY . ./frontend
WORKDIR /frontend
CMD ["yarn", "dev"]
EXPOSE 3000
EXPOSE 49153

FROM base as prod
COPY . ./frontend
WORKDIR /frontend
CMD ["yarn", "prod"]
EXPOSE 3000
