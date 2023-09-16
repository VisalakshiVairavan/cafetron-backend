# Welcome to Cafetron

Cafe employee management system using NodeJS - ExpressJS 

## How to run

You need to run the following command

TO install dependencies
```npm install```  

To add seed data
```npm run seed```

To start server in local
```npm start```


## Database schema

![](https://i.ibb.co/pQn7h1C/UML.png)

## Planet scale mysql

Connect in simple 4 steps

I have used planet scale mysql db and add the connection string in .env - But this access will get revoked because it is exposed to public. So, create a db from planet scale. You can update the .env DATABASE_URL by following:

- To create your database, you’ll first need to sign up for a free PlanetScale account.

- After you’ve created your account and signed in, click New database -> Create new database. Then, give your database a name and choose the appropriate region.

- Next, we’ll need to create a password for our PlanetScale database that our application can use to connect to it. 

- After your password has been generated, choose Node.js MySQL from the dropdown labeled as General. 

- Copy the value of your connection string into .env DATABASE_URL