FROM app_name:latest AS deps

FROM debian:stable

RUN apt-get update && apt-get install -y \
    ## Add your dependencies here
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
    
WORKDIR /base

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY --from=deps /app/app_name ./app_name

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]
CMD [ "/base/app_name" ]