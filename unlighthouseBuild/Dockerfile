#ddev-generated
# Based on https://github.com/indykoning/unlighthouse-docker/tree/master
ARG BASE_IMAGE
FROM $BASE_IMAGE

# Install sudo.
USER root
RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
    sudo \
  ; \
	apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false; \
	rm -rf /var/lib/apt/lists/*

# Configure sudo in a manner similar to other ddev containers.
RUN mkdir /etc/sudoers.d; echo "ALL ALL=NOPASSWD: ALL" > /etc/sudoers.d/ddev-lighthouse && chmod 440 /etc/sudoers.d/ddev-lighthouse

# Add current ddev user.
ARG username
ARG uid
ARG gid
RUN (groupadd --gid $gid "$username" || groupadd "$username" || true) && (useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' --uid $uid "$username" || useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' "$username" || useradd  -l -m -s "/bin/bash" --gid "$gid" --comment '' "$username" || useradd -l -m -s "/bin/bash" --comment '' $username )

# Add custom entrypoint.
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install mkcert.
RUN curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64" \
  && chmod +x mkcert-v*-linux-amd64 \
  && mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Prepare reports folder.
RUN mkdir --parents /home/$username/reports && chown --recursive $username:$username /home/$username

USER $username
WORKDIR /home/$username/reports
