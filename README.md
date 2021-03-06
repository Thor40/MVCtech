# MVCtech forum
MVCtech fourm

## Table of contents
--------------------
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Testing](#testing)
* [Features](#features)

## General info
--------------------
This project was created as an exercise practicing creating a site using the Model-View-Controller (MVC) directory organization
and its respective npm packages.
	
## Technologies
--------------------
Project is created with:
* bcrypt: ^5.0.0
* connect-session-sequelize: ^7.0.0
* dotenv: ^8.2.0
* express: ^4.17.1
* express-handlebars: ^4.0.4
* express-session: ^1.17.1
* mysql2: ^2.1.0
* path: ^0.12.7
* sequelize: ^5.21.13
	
## Setup
--------------------
### To run this project, make sure to install [MySQL](https://www.mysql.com/downloads/)

install the following locally using npm:

```
$ cd ../dir
$ npm init
$ npm install --save mysql2
$ npm install --save sequelize
$ npm install dotenv
$ npm install bcrypt
$ npm install express
$ npm install --save path
$ npm install express-handlebars
$ npm install express-session
$ npm install connect-session-sequelize
```

## Testing
--------------------
### To test this project, run the following in the terminal:
```
$ npm start
```
The server should run on PORT 3001
--------------------
Alternatively, visit the deployed Heroku site [MCVtech Heroku](https://dashboard.heroku.com/apps/mvc-tech)

## Features
--------------------
### Features include:
* Allows Login or Register new User
* Shows Dashboard that allows creation of new Post
* User can Upvote, Comment, Edit, and Delete Posts
* User can Log out
