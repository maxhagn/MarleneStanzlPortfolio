#!/bin/bash

# Variables
IMAGE_NAME="registry.hagn.network/marlene-hagn-ui"
IMAGE_TAG="latest"

docker build --platform=linux/amd64 -t ${IMAGE_NAME}:${IMAGE_TAG} -f docker/Dockerfile .
docker push ${IMAGE_NAME}:${IMAGE_TAG}
