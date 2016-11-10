#!/bin/sh

if [ $(ps aux | grep $USER | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
    export PATH=/usr/bin:$PATH
    export NODE_ENV=prod
    cd /opt/thebarkway.com && forever --spinSleepTime 10000 start server.js >> forever.log 2>&1
fi
