# Coffee Shop Full Stack

> The frontend of this project has been remade with React.js. The live demo provided in this repo is only for a small preview of what was done. Although, the full-stack application using this framework can be run locally following the steps below.
[Small demo using Angular (missing features)](https://still-woodland-01330.herokuapp.com/tabs/drink-menu)
[Full demo using React](http://henryis.me/latte-machine/)

![angular-app](https://github.com/henryvalbuena/full-stack-project/frontend_angular.gif)

## Full Stack Nano - IAM Final Project

Udacity has decided to open a new digitally enabled cafe for students to order drinks, socialize, and study hard. But they need help setting up their menu experience.

You have been called on to demonstrate your newly learned skills to create a full stack drink menu application. The application must:

1) Display graphics representing the ratios of ingredients in each drink.
2) Allow public users to view drink names and graphics.
3) Allow the shop baristas to see the recipe information.
4) Allow the shop managers to create new drinks and edit existing drinks.

## Getting Started

### Running the app locally

- `git clone git@github.com:henryvalbuena/full-stack-project.git`
- `cd full-stack-project`
- `docker-compose up`
- After docker finishes you should be able to navigate to `localhost:8080`

### Constraints

- The app is setup with a predifined Auth0 configuration
- You will need to have permissions enabled to create or modify existing drinks

If you want to change this behavious with your own settings check `./frontend/src/environments` to changes the environment variables.

### Account Permissions

If you have created an account using the implemented flow to try the rest of the app, you can open an issue on this repo and provide the username and email used so I can grant access to the account.

## Author

Henry Valbuena