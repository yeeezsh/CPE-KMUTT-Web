FROM node:16-alpine3.11 as base
WORKDIR /frontend
COPY yarn.lock yarn.lock
COPY package.json package.json
ARG APP_GRAPHQL_ENDPOINT
ENV APP_GRAPHQL_ENDPOINT=${APP_GRAPHQL_ENDPOINT}
ARG STRAPI_ENDPOINT
ENV STRAPI_ENDPOINT=${STRAPI_ENDPOINT}
RUN yarn install

FROM base as dev
COPY . ./frontend
WORKDIR /frontend
CMD ["yarn", "dev"]
EXPOSE 3000
EXPOSE 49153

FROM base as prod
WORKDIR /frontend
COPY . ./
ENV NODE_ENV production
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000
