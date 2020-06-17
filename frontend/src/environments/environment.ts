/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://quiet-savannah-95415.herokuapp.com/api', // the running FLASK api server url
  auth0: {
    url: 'coffe-shop-project', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'SuLculVALk6l2oZ7aFFQUuZZ8N6lZUrH', // the client id generated for the auth0 app
    callbackURL: 'https://still-woodland-01330.herokuapp.com', // the base url of the running ionic application. 
  }
};
