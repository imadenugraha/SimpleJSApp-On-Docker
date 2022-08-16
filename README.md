# SimpleJS App on Docker

This app created using Javascript and running on Docker Engine. You can see the simple code and the dockerfile on this repository. You will also get understanding how to containerize your javascript application.

## How to Run on Local Host
1. Clone this repository.
```bash
$ git clone https://github.com/imadenjp/SimpleJSApp-On-Docker.git
```
2. Run the following command 
```javascript
$ node server.js
```
3. You can access the qpp on **localhost:3000**

## How to Run on Docker
1. After clone the repository, run the following command.
```bash
$ docker build -t simplejsapp:latest .
```
2. After creating the image, run the image with the following command.
```bash
$ docker run -d -p 3000:3000 --name=simplejsapp simplejsapp:latest
```
3. You can access the app on **localhost:3000**.