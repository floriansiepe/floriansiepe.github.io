#!/bin/bash
cd cv
xelatex -synctex=1 -interaction=nonstopmode "cv".tex
mv cv.pdf ../static/media/cv.pdf