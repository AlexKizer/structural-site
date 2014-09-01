#!/bin/sh
gulp
git add -u
git commit -a -m "built with gulp"
git push origin gh-pages