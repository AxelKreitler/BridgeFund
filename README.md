# Getting Started with the BridgeFund Assignment

## Pre reqs

[Node v22.13.0](https://nodejs.org/en/download)\
[Git](https://git-scm.com/)\
[MySQL server 8.0.41](https://dev.mysql.com/downloads/mysql/8.0.html)

```bash
npm install -g yarn
```

### Run via docker

Due to timeboxing the assignment I did not had the time to fully test my docker compose on different OS.

Obviously docker is required to try this.

It should still work. Fell free to try it on the branch "docker" (Readme is updated there as well)

Otherwise please check the following steps

### Database Mysql Preparation

Create a database, you will need the information to fill the .env

on the /sql folder you will find two files, migration.sql & bootstrap.data.sql

You will need to run the migration.sql file inside your database, following that, you must run the bootstrap.data.sql

Inside the /be folder you need to create your .env file and update the values with the ones of your database

```bash
# Database configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=user
DB_PASSWORD=password
DB_NAME=db_bridgefund

# Application configuration
APP_PORT=3000
```

### Backend

Install dependencies:

```bash
cd be/
yarn install
```

Check that the tests are working:

```bash
yarn test
```

> Due to timeboxing the assignment there are not as many tests as I would like, but there are tests.

Start the application run:

```bash
yarn start
```

In the console you should get a message

```bash
Server running at http://localhost:3000
```

> Please note that if the APP_PORT was updated it will show that instead of 3000, also on the endpoints examples update accordingly

### API Examples:

PB-04

```bash
[GET] http://localhost:3000/api/building/1/occupation
```

PB-02

```bash
[POST] http://localhost:3000/api/building/1/checkin
```

Body

```bash
{
    "parkingType": "CARS"
}
```

PB-03

```bash
[POST] http://localhost:3000/api/building/1/checkout
```

Body

```bash
{
    "session": "uuid" // session uuid returned from the checking endpoint
}
```
