#ddev-generated
# Based on https://github.com/indykoning/unlighthouse-docker/tree/master
FROM node:22-bullseye

RUN apt update --fix-missing; \
    apt install -y chromium; \
    apt install -y nss-passwords; \
    apt install -y libfreetype6; \
    apt install -y libharfbuzz-bin; \
    apt install -y ca-certificates; \
    apt install -y fonts-freefont-ttf;

RUN npm install -g unlighthouse

EXPOSE 5678

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV SITE="http://localhost"

RUN chown root:root /usr/lib/chromium/chrome-sandbox && \
    chmod 4755 /usr/lib/chromium/chrome-sandbox

# Add user so we don't need --no-sandbox.
RUN adduser --help
RUN addgroup unlighthouse && adduser --ingroup unlighthouse unlighthouse \
    && mkdir -p /home/unlighthouse/Downloads /app \
    && chown -R unlighthouse:unlighthouse /home/unlighthouse \
    && chown -R unlighthouse:unlighthouse /app

# Add custom entrypoint
COPY ./entrypoint.sh /entrypoint.sh

# Swap to root user.
USER root
RUN chmod +x /entrypoint.sh

# delete the default 'node' user with uid 1000 and add current ddev user
ARG username
ARG uid
ARG gid
RUN userdel -r node
RUN (groupadd --gid $gid "$username" || groupadd "$username" || true) && (useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' --uid $uid "$username" || useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' "$username" || useradd  -l -m -s "/bin/bash" --gid "$gid" --comment '' "$username" || useradd -l -m -s "/bin/bash" --comment '' $username )

# Add sudo and sudoers in manner similar to other ddev containers
RUN apt update --fix-missing; apt install -y sudo; mkdir /etc/sudoers.d; echo "ALL ALL=NOPASSWD: ALL" > /etc/sudoers.d/ddev-lighthouse && chmod 440 /etc/sudoers.d/ddev-lighthouse

RUN mkdir --parents /home/$username/reports && chown --recursive $username:$username /home/$username

# Install mkcert
RUN apt update --fix-missing; apt install -y curl libnss3-tools; curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"; chmod +x mkcert-v*-linux-amd64; cp mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Setup ddev user name and folder.
USER $username
WORKDIR /home/$username/reports


