FROM nginx:1.23.3 as base
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

FROM base as nginx
ENV STRAPI_ADMIN_EMAIL=${STRAPI_ADMIN_EMAIL}
ENV PROXY_DOMAIN=${PROXY_DOMAIN}
COPY default.conf /etc/nginx/conf.d/
# RUN nginx -t
EXPOSE 80 443
RUN echo "0 0 */2 * * certbot renew --nginx --quiet" >>/etc/crontab

CMD ["sh", "-c", "\
    if [ ! -f /etc/letsencrypt/live/$PROXY_DOMAIN/fullchain.pem ]; then \
    certbot certonly --standalone -d $PROXY_DOMAIN -d www.$PROXY_DOMAIN --email $STRAPI_ADMIN_EMAIL --noninteractive --agree-tos; \
    fi && \
    cron && \
    nginx -g \"daemon off;\""]