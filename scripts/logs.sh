#!/usr/bin/env bash

set -e

PROJECT_NAME='news_bff'

OPTIONS=$1

docker logs ${PROJECT_NAME} ${OPTIONS}