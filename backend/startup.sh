#!/bin/sh

cd src
gunicorn -b :3333 api:app