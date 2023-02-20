# .gitpod.Dockerfile
FROM gitpod/workspace-full:latest

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

ENV SHELL=/bin/bash
