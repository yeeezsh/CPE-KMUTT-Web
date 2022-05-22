FROM strapi/base
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
RUN npm --prefix ./plugins/wysiwyg install
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]
