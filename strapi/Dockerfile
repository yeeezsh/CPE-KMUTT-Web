FROM strapi/strapi as dev
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install
ADD . ./srv/app
CMD ["npm", "run", "develop"]

