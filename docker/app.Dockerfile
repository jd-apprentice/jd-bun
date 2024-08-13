FROM app_name:latest AS deps

FROM debian:stable

ARG UID=1000
ARG GID=1000

RUN groupadd -g $GID app_user && \
    useradd -u $UID -g $GID -m -s /bin/bash app_user

RUN apt-get update && apt-get install -y \
    ## Add your dependencies here
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
    
WORKDIR /base

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY --from=deps /app/app_name ./app_name

RUN chown -R app_user:app_user /base

USER app_user

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]
CMD [ "/base/app_name" ]