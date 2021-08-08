FROM node:16-alpine3.11 as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
COPY . .
CMD ["yarn", "dev"]
EXPOSE 3000

FROM base as uat
COPY . .
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000