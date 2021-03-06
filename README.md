# SamSolutions-CarDealerApp
### Client+server app using MERN Stack (React TypeScript, Express, MongoDB, NodeJS).

Application for searching and selling cars. There are user authentication, selection of cars by body type, price, manufacturer, etc. It is possible change the language of the application (English/German). You can inspect car ads, edit or delete your own ads, post new ones. As an admin, you can delete or edit any car ad you want.


To start the app:
>cd server  
>npm run nodemonStart

> cd client  
> npm start 

Admin page:  
**Login:** *cardealer.main@gmail.com*  
**Password:** *cardealer.main123*

```diff
- For the correct work, disable AdBlock services on the pages of the app!
```

### If you want to launch the app locally:  
1) If you haven't yet, download MongoDB Community Edition: https://www.mongodb.com/try/download/community and MongoDB Compass: https://www.mongodb.com/try/download/compass
2) Following the instructions, install MongoDB Community Server and MongoDB Compass
3) As MongoDB CS is intalled, navigate to: *'<path_to_mongodb>\Server\4.2\bin'* and double-click on the **mongod.exe** file. MongoDB has been launched.
4) Open MongoDB Compass, click on "Fill in connection fields individually button" in the top.
5) "Hostname" field should be: **localhost**, "Port": **27017** (by default). Click "Connect". Now you are connected to your local database.
6) Click "Create Database", "Database Name" field should be: **carAppDB**, "Collection Name": **ads**. As you're done, click "Create Database"
7) Choose your new database and collection (ads). You will see empty collection. Click "Import Data" button and paste this file from GitHub repository: https://github.com/georgyshkliaryk/SamSolutions-CarDealerApp/blob/master/server/import/dump/dumpdb.json. Don't forget to choose ".json" as the extension of imported file.
8) Now you have data in your local db and you can launch the app!
