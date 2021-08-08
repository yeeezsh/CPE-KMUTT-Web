FROM node:16-alpine3.11 as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
COPY . ./frontend
WORKDIR /frontend
CMD ["yarn", "dev"]
EXPOSE 3000
EXPOSE 49153

FROM base as uat
COPY . ./frontend
WORKDIR /frontend
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000