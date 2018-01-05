#!/bin/sh

# This script builds: Dr Mario Clone

echo "------------------"
echo "Dr. Mario Clone..."
echo "------------------"

## fetch latest from GitHub
echo "Dr. Mario Clone -- pulling latest from GitHub..."
git pull origin master

## make sure gitbook is up to date
echo "Dr. Mario Clone -- ensuring GitBook is up to date..."
gitbook install

## build it
echo "Dr. Mario Clone  -- building GitBook docs...."
gitbook build

## copy some needed files
echo "Dr. Mario Clone -- copying needed files..."
echo "Dr. Mario Clone -- zipping Cocos Creator project..."
tar cvfz dr.mario.clone.tar.gz Dr-Mario-Style-Game/
cp dr.mario.clone.tar.gz _book/.

#cp redirect.html.en _book/index.html
#cp index.html.en ../documentation/index.html

## copy everything to deployment directory
echo "Dr. Mario Clone -- copy everything to deployment directory..."
#mv _book/ dr.mario.clone/

#rsync --recursive cocos2d-x ../documentation

#rm -rf dr.mario.clone/
