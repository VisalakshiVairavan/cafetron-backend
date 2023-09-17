# Welcome to Cafetron

Cafe employee management system using NodeJS - ExpressJS 

## How to run

You need to run the following command

To install dependencies

```npm install```  

### Planet scale mysql

Connect in simple 4 steps to online mysql db

You can update the .env DATABASE_URL by following:

- To create your database, you’ll first need to sign up for a free PlanetScale account.

- After you’ve created your account and signed in, click New database -> Create new database. Choose Hobby plan for free. Then, give your database a name and choose the appropriate region.

- Next, we’ll need to create a password for our PlanetScale database that our application can use to connect to it. 

- After your password has been generated, choose Node.js MySQL from the dropdown labeled as General. 

- Copy the value of your connection string into .env DATABASE_URL (refer .env.sample for an example string)



To add seed data (only need to run once)

```npm run seed```

To start server in local

```npm start```




### Vercel 

The apis are hosted in [cafetron-backend.vercel.app](https://cafetron-backend.vercel.app/)




### Docker 

Alternatively this app can be build and run using docker in local after the DATABASE_URL is added to .env file 

```docker build -f Dockerfile -t server .```

```docker run -it -p 8080:8080 server```




## Database schema

![](https://i.ibb.co/pQn7h1C/UML.png)

