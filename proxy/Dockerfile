# COPY nginx.conf /etc/nginx/nginx.conf
FROM nginx:1.23.3 as base
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

FROM base as nginx
COPY default.conf /etc/nginx/conf.d/
RUN echo "0 0 1 * * certbot renew && docker kill -s HUP nginx-certbot" >>/etc/crontab
RUN "certbot certonly --nginx -d cpe.kmutt.ac.th --email admin@cpe.kmutt.ac.th --noninteractive --agree-tos"
RUN "cron"
CMD ["sh", "-c", "nginx -g \"daemon off;\""]
EXPOSE 80 443
