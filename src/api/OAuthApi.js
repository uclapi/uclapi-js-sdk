/**
 * UCL API
 * An API generated by a team of student developers to interact with student and university data at UCL.  The API is made up of several services, each of which will be separately explained. Every service will be documented here with important information, tips and examples.  ## Get Your API Key  Before you can use the API you should head to the API Dashboard and sign up using your UCL user account. Once logged into the dashboard simply name your app and you’ll be given a key that you can use to access all the services. Simple!  ## API Rate Limits  Rate limiting of the API is primarily on a per-user basis. The limit is calculated against the user, across all their access tokens.  The limit is 10,000 requests per day and resets every day at midnight, London time.  When a request is throttled, the response returned by the server has HTTP Status Code “429 Too Many Requests”. It includes a Retry-After header with the number of seconds the client is throttled for.  If you would like your rate limit to be increased, contact us at isd.apiteam@ucl.ac.uk  ## API Data Freshness  Much of the data available from the API is served from cache. Bookings and Timetable data are updated every twenty minutes from UCL, and we update the [Library Study Spaces (Workspaces) API](https://uclapi.com/docs/#workspaces) every two minutes. The `Last-Modified` header will provide the time that the most recent caching operation completed in [RFC 2616](https://stackoverflow.com/a/21121453) format. Endpoints that do not rely on cached data will return the current timestamp in this field instead.  This allows your application to judge whether the data is stale, or might need refreshing. For example, if a booking is added to the database and the data you are using is more than twenty minutes old, it may be that the booking is not visible to you yet. Consider creating a fresh request in this case.  If you notice that the `Last-Modified` timestamp you see is unreasonably old, please [get in contact with us](mailto:isd.apiteam@ucl.ac.uk) ASAP to report this as it may indicate very stale data and an issue at our end.  ## OAuth  OAuth is a protocol that lets external apps request secure access to private UCL account data without getting your password. This can be done with a \"Sign In With UCL\" button on your website or app which saves UCL users the trouble of registering a new account with you. It also allows your app or website to retrieve a user's personal timetable.  Check out a JS web app demo [here](https://uclapi-oauth-demo.glitch.me/). The source code for the demo is available [here](https://glitch.com/edit/#!/uclapi-oauth-demo).  For an example of a mobile app implementation, check out [UCL Assistant](https://github.com/uclapi/ucl-assistant-app) (written in React Native) and the accompanying [UCL Assistant API backend](https://github.com/uclapi/ucl-assistant-api/tree/master/src/oauth) (written in Node.JS).  ### Sign In With UCL Button If you want to add a \"Sign In With UCL\" button to your site, which looks like this:  <a href=\"https://uclapi.com/oauth/authorise?client_id=CLIENT_ID&state=STATE\">   <img width=\"20%\" src=\"https://s3.eu-west-2.amazonaws.com/uclapi-static/SignInWithUCLSmall.png\"> </a>  you can copy the following the code below and replace CLIENT_ID and STATE by the `client_id` of your app and a random `state`:  ``` <a href=\"https://uclapi.com/oauth/authorise?client_id=CLIENT_ID&state=STATE\">   <img src=\"https://s3.eu-west-2.amazonaws.com/uclapi-static/SignInWithUCLSmall.png\"> </a> ```  ### Scopes  OAuth scopes specify what access your app needs to a UCL user’s account. As an app developer, you set the desired scopes in the API Dashboard. When a user is responding to your authorisation request, the requested scopes will be displayed to the user.  ### OAuth Workflow  If your application uses OAuth, you must set a callback URL in the dashboard. Then the app should follow this procedure:  1. Redirect the user to `https://uclapi.com/oauth/authorise` with `state` and the application’s `client_id` as query parameters.  2. The user logs in with their UCL credentials on the UCL Single Sign-on website (if not logged in already).  3. The user reviews the OAuth scopes requested and either authorises or denies the application's request. If the application is authorised, the callback URL receives `client_id`, `state` (specified in 1.), `result`, and `code`.  If the application is denied, the callback URL receives `result` and `state`, and no private data will be provided to the application.  4. To obtain a OAuth user token (necessary for retrieving personal data and certain API endpoints), we require `code` (from 3.), `client_id`, and `client_secret`. These should then be sent to `https://uclapi.com/oauth/token`, which will return a response containing `state`, `ok`, `client_id`, `token` (OAuth user token), and `scope`  (OAuth scopes the app can access on the user’s behalf).  **Note**: OAuth tokens and general API tokes are different. Whilst general API tokens can be used for all non-personal, generic data (such as room bookings), OAuth tokens must be used with an app's client_secret in order to retrieve personal data for a user. To make things easier, you can use personal OAuth tokens in place of general tokens once a user has logged into your app to retrieve generic data too.  ### Tokens  Tokens uniquely identify an app that is requesting data from the API.  Tokens are a long string variable of numbers and letters. e.g. `uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb`.  There are two different kinds of tokens you can work with:  1. Generic Tokens: These are tokens that are used to request non-personal data. These tokens are used between applications and the API to request any sort of data that the app may need that is not tied to a specific student. For example, UCL API’s Room booking service uses tokens to return information about rooms - when they are booked and which UCL rooms are free.  2. OAuth Tokens: This type of token is used when an app requires personal data from users. One of the most common uses of this type of token is when you sign in via UCL on an app.  The app will then use a token to request a user’s personal data such as:     - Department    - Email    - Full name    - Given name    - UPI    - If they are a student or not    - Student number (*note:* to get this, you need to tick the relevant scope in the dashboard before a user logs in; more on scopes above).  Note that you can also use OAuth Tokens to access all the same data that generic app tokens can access.  Each token is uniquely generated for each user logging into each app.  Please note, access to any of this data needs to be approved by the user first.  To use this type of token for your app, you need to redirect the user to the \"Authorise\" endpoint at: `https://uclapi.com/oauth/authorise` which can be done directly or by including a “Sign in With UCL Button” in your app, such as the one provided below, which links users to the authorisation endpoint with your app’s Client ID (accessible via the dashboard) and a random state number included in the GET parameters.  The users then sign in with their UCL credentials and, if they authorise your app to use their personal data, a token will be generated which your app can use to get user’s personal data in JSON format from the oauth/user/data. Your application will receive the token at the callback URL you provided in the [Dashboard](https://uclapi.com/dashboard).  ## Code Samples  After authorisation, calling most of the API endpoints will be fairly similar to each other. Authorisation code samples are provided in their respective descriptions.  In addition, please find short code examples of how you might call the `/roombookings/equipment` endpoint in your own code (you will find that only the request parameters will change between most different endpoints):  Python: ```python import requests  params = {   \"token\": \"uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb\",   \"roomid\": \"433\"   \"siteid\": \"086\" }  r = requests.get(\"https://uclapi.com/roombookings/equipment\", params=params) print(r.json()) ```  Shell: ```shell curl -G https://uclapi.com/roombookings/equipment -d token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb -d roomid=433 -d siteid=086 ```  JavaScript: ```js fetch(\"https://uclapi.com/roombookings/equipment?token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb&roomid=433&siteid=086\")   .then(response => response.json())   .then(json => console.log(json)); ```
 *
 * The version of the OpenAPI document: 1.4.9
 * Contact: isd.apiteam@ucl.ac.uk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import UserData from '../model/UserData';

/**
* OAuth service.
* @module api/OAuthApi
* @version 1.4.9
*/
export default class OAuthApi {

    /**
    * Constructs a new OAuthApi. 
    * @alias module:api/OAuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the oauthAuthoriseGet operation.
     * @callback module:api/OAuthApi~oauthAuthoriseGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorises a user against the API
     * This endpoint should be used to authorise a user against the API.  It will perform a redirect if the user successfully logged in and accepted/denied the request.  See the below code samples for how you might implement this in your code.  Python: ```python  url = \"https://uclapi.com/oauth/authorise/?client_id=123&state=1\"  '''   in a desktop app, script, or for testing ''' import webbrowser webbrowser.open_new(url)  # note that you will also need some way receive the callback # this can be done via a web server (e.g. below)  '''   on a Flask server   this example covers both redirecting the user to   the /authorise page and receiving the callback ''' from flask import Flask, redirect, request app = Flask(__name__)  @app.route('/login') def uclapi_login():     return redirect(url)  @app.route('/callback') def receive_callback():     # receive parameters     result = request.args.get('result', '')     code = request.args.get('code', '')     state = request.args.get('state', '')     # do something with these parameters     # e.g. request an auth token from /oauth/token     return ```  Shell: ```shell   # linux   xdg-open \"https://uclapi.com/oauth/authorise/?client_id=123.456&state=1\"      # WSL   cmd.exe /c start \"https://uclapi.com/oauth/authorise/?client_id=123^&state=1\"    # note that you will also need some way to receive the callback ```  JavaScript: ```js const url = \"https://uclapi.com/oauth/authorise/?client_id=123.456&state=1\"  /_* in-browser *_/ window.location.href = url // note that you will also need some way to receive the callback // this can be done via a web server (e.g. below)  /_* Node.JS Express server *_/ const express = require('express') const app = express()  app.get('/login', (req, res) => res.redirect(url)) app.get('/callback', (req, res) => {   const {     result,     code,     state   } = req.params   // do something with these parameters   // e.g. request an auth token from /oauth/token })  app.listen(3000) ```
     * @param {String} clientId Client ID of the authenticating app.
     * @param {String} state OAuth (random) state.
     * @param {module:api/OAuthApi~oauthAuthoriseGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    oauthAuthoriseGet(clientId, state, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling oauthAuthoriseGet");
      }
      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling oauthAuthoriseGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_id': clientId,
        'state': state
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth/authorise', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthTokenGet operation.
     * @callback module:api/OAuthApi~oauthTokenGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A token will be generated which your app can use to get user’s personal data in JSON format from the OAuthSecurity/user/data.
     * This endpoint should be used to obtain a token for use in the other API endpoints.  See the below code samples for how you might implement this in your code.  Python: ```python import requests  params = {   \"client_id\": \"123.456\",   \"code\": \"1\",   \"client_secret\": \"secret\", } r = requests.get(\"https://uclapi.com/oauth/token\", params=params) print(r.json()) ```  Shell: ```shell curl -G https://uclapi.com/oauth/token -d code=mysecretcode -d client_id=123.456 -d client_secret=secret ```  JavaScript: ```js fetch(\"https://uclapi.com/oauth/token?code=mysecretcode&client_id=123.456&client_secret=secret\")   .then(response => response.json())   .then(json => console.log(json)); ```
     * @param {String} clientSecret Client secret of the authenticating app.
     * @param {String} clientId Client ID of the authenticating app.
     * @param {String} code Secret code obtained from the authorise endpoint.
     * @param {module:api/OAuthApi~oauthTokenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    oauthTokenGet(clientSecret, clientId, code, callback) {
      let postBody = null;
      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling oauthTokenGet");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling oauthTokenGet");
      }
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling oauthTokenGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_secret': clientSecret,
        'client_id': clientId,
        'code': code
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/oauth/token', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthUserDataGet operation.
     * @callback module:api/OAuthApi~oauthUserDataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns personal data on a student at UCL.
     * @param {String} clientSecret Client secret of the authenticating app.
     * @param {module:api/OAuthApi~oauthUserDataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserData}
     */
    oauthUserDataGet(clientSecret, callback) {
      let postBody = null;
      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling oauthUserDataGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_secret': clientSecret
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserData;
      return this.apiClient.callApi(
        '/oauth/user/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthUserStudentnumberGet operation.
     * @callback module:api/OAuthApi~oauthUserStudentnumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * You can use the oauth/user/data endpoint to find out whether the user is a student before you call this endpoint. If you call this endpoint and the user is not a student, an error will be returned.
     * Please note: to use this endpoint you must have ticked the Student Number scope for your application in the Dashboard. This piece of information has been separated from the others because a student number can in some cases be considered confidential. This is because any data exported directly from Portico, SITS (E:Vision) or CMIS is usually grouped by Student Number. One example is that in some cases departments choose to release spreadsheets of examination results where each student is identified by their student number, and not their name, to provide a degree of anonymity in what is otherwise an open data set. You should consider carefully whether you actually need a student number to track students when other unique identifiers are available, such as their username-based email address and UPI. If you request a student number and it is not required for your application, your users may choose not to provide this information to you, and therefore deny your application permission to access their details.
     * @param {String} clientSecret Client secret of the authenticating app.
     * @param {module:api/OAuthApi~oauthUserStudentnumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    oauthUserStudentnumberGet(clientSecret, callback) {
      let postBody = null;
      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling oauthUserStudentnumberGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_secret': clientSecret
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/oauth/user/studentnumber', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
