/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://backend:8081/api', // the running FLASK api server url
  auth0: {
    url: 'coffe-shop-project', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'SuLculVALk6l2oZ7aFFQUuZZ8N6lZUrH', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080', // the base url of the running ionic application. 
  }
};
