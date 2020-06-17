#!/bin/sh

cd src
gunicorn -b :$PORT api:app