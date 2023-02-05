FROM nginx:1.23.3 as base
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

FROM base as nginx
ARG STRAPI_ADMIN_EMAIL
ENV STRAPI_ADMIN_EMAIL=${STRAPI_ADMIN_EMAIL}
ARG PROXY_DOMAIN
ENV PROXY_DOMAIN=${PROXY_DOMAIN}
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80 443
RUN echo "0 0 1 * * certbot renew && docker kill -s HUP nginx-certbot" >>/etc/crontab
CMD ["sh", "-c", "certbot certonly --standalone -d $PROXY_DOMAIN -d webmaster.cpe.kmutt.ac.th --email $STRAPI_ADMIN_EMAIL --noninteractive --agree-tos && cron && nginx -g \"daemon off;\""]
