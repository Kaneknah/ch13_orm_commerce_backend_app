# ch13_orm_commerce_backed_app

## Table of Contents:

- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of application that simulates the back end of a Ecommerce website. The application utilizes MySQL2 created databases through Sequelize interactions. The application allows for a user to view, create, update, and delete products, categories, and tags related to sales items on the Ecommerce website. The application can not be seen on a static webpage so a walkthrough video has been created to show functionality. (
"https://drive.google.com/file/d/18dh1ulniPZCRrjgIsKk4EInRKEC3P0_i/preview")

## Acceptance Criteria

GIVEN a functional Express.js API<br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br>
THEN I am able to connect to a database using Sequelize<br>
WHEN I enter schema and seed commands<br>
THEN a development database is created and is seeded with test data<br>
WHEN I enter the command to invoke the application<br>
THEN my server is started and the Sequelize models are synced to the MySQL database<br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags<br>
THEN the data for each of these routes is displayed in a formatted JSON<br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core<br>
THEN I am able to successfully create, update, and delete data in my database<br>

## Installation

A user will need to instal the package.json modules in order to run this application. The user may do this by simply running "npm i" in the terminal. The user will also need to instal the mySQL by running "mysql -uroot -p" and entering their SQL password. The user would then need to run the schema by entering "SOURCE ./sql/schema.sql;". finally the User would have to run the seeds in order for the application to work. This is done by entering "SOURCE ./sql/seeds/sql;"

## Usage

![Alt text](./assets/images/Screenshot%202023-03-30%20190509.png)

The user will begin the application by entering "npm start" in the terminal. the user will then need to utilize the insomnia application to perform the required GET, POST, and PUT functions. this is done my navigating to the Insomnia desktop application and and entering in localHost URL addresses to perform the below functions. <br>

- Get Product
- Get Category
- Get Tag
- Get All Products
- Get All Categories
- Get All Tags
- Create Product by ID
- Create Category by ID
- Create Tag by ID
- Delete Product
- Delete Category
- Delete Tag
- Update Product
- Update Category
- Update Tag

Please see the provide Walkthrough video for specific actions.

## Contribution

N/A

## Testing

No testing was utilized for this project

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)

### Technologies utilized:

- MySQL2
- Express.js
- Sequelize
- Dotenv.

### GitHub Link: <https://github.com/Kaneknah/ch13_orm_commerce_backend_app>

## License

Apache License 2.0
...
