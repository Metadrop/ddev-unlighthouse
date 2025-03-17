#ddev-generated
ARG BASE_IMAGE
FROM $BASE_IMAGE

# Add current ddev user.
USER root
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
