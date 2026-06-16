#!/bin/bash

cd ~/Desktop/hotel-booking

while true
do
    git add .
    git commit -m "Auto save $(date '+%Y-%m-%d %H:%M:%S')" 2>/dev/null
    git push origin main
    sleep 300
done

