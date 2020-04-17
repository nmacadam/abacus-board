# abacus-board
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/nmacadam/abacus-board.svg?token=ny5jLdMxZTMpHBEyrbcp&branch=master)](https://travis-ci.com/nmacadam/abacus-board)
[![License: MIT](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

 abacus data visualization web-app
 
[try it out](https://nmacadam.github.io/abacus-board/)
 
<p align="center">
  <img src="https://dl.dropboxusercontent.com/s/pi4sq5l6k8ryulk/boardScreenshot.PNG?dl=0">
</p>

### to run & work on this
make sure you have node.js installed

clone/download this repo (preferably clone since we want to use the version control)

open the command prompt

type the following commands
```
cd the-path-i-put-the-files-at
npm start
```
Node.js will launch a webserver for you and open the project in a new tab in whatever browser you use.

Edit the project files in the 'src' folder (only mess with .js files and .css, the way this all works doesn't require us doing html docs).

To contribute features make a new branch first to push your changes to, that way unfinished work stays out of the master branch.

Don't push anything to master without messaging me (nathan) first so we can do a code review! We want to keep our production branch nice and clean!

Some helpful links:

https://reactjs.org/tutorial/tutorial.html

http://golden-layout.com/examples/

### todo
- figure out layout config (rows, cols, stacks)
  - add any other relevant golden layout features
- set required file type(s)
- finalize ui & look-feel for modules
- unit/integration testing
- electron desktop app
- add a display demo material button
