FROM debian:buster

LABEL maintainer="MrC"

RUN apt-get update && apt-get install -y nginx openssl

#######
# Setting up nginx for Travaux-API
#######

ADD nginx.conf /etc/nginx/
ADD nginx-gao.conf /etc/nginx/sites-available/gao.conf
# Créer un lien symbolique entre sites-available et le site enabled
RUN ln -s /etc/nginx/sites-available/gao.conf /etc/nginx/sites-enabled/gao
# Supprimer le fichier default de nginx
RUN rm /etc/nginx/sites-enabled/default

#Lier le nginx à php
RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf

RUN usermod -u 1000 www-data

WORKDIR /var/www


CMD ["nginx"]

EXPOSE 80
EXPOSE 443