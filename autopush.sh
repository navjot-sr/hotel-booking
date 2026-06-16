#!/bin/bash

cd ~/Desktop/hotel-booking

while true
do
    git add .

    if ! git diff --cached --quiet; then
        git commit -m "Auto save $(date '+%Y-%m-%d %H:%M:%S')"
        git push origin main
    fi

    sleep 300
done
