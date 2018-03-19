FROM duluca/minimal-node-web-server:8.4.0

ENV PORT 80
EXPOSE 80

WORKDIR /usr/src/app
COPY platforms/browser/www public

ENV ENFORCE_HTTPS=xProto
