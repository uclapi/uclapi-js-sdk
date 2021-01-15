/**
 * UCL API
 * An API generated by a team of student developers to interact with student and university data at UCL.  The API is made up of several services, each of which will be separately explained. Every service will be documented here with important information, tips and examples.  ## Get Your API Key  Before you can use the API you should head to the API Dashboard and sign up using your UCL user account. Once logged into the dashboard simply name your app and you’ll be given a key that you can use to access all the services. Simple!  ## API Rate Limits  Rate limiting of the API is primarily on a per-user basis. The limit is calculated against the user, across all their access tokens.  The limit is 10,000 requests per day and resets every day at midnight, London time.  When a request is throttled, the response returned by the server has HTTP Status Code “429 Too Many Requests”. It includes a Retry-After header with the number of seconds the client is throttled for.  If you would like your rate limit to be increased, contact us at isd.apiteam@ucl.ac.uk  ## API Data Freshness  Much of the data available from the API is served from cache. Bookings and Timetable data are updated every twenty minutes from UCL, and we update the [Library Study Spaces (Workspaces) API](https://uclapi.com/docs/#workspaces) every two minutes. The `Last-Modified` header will provide the time that the most recent caching operation completed in [RFC 2616](https://stackoverflow.com/a/21121453) format. Endpoints that do not rely on cached data will return the current timestamp in this field instead.  This allows your application to judge whether the data is stale, or might need refreshing. For example, if a booking is added to the database and the data you are using is more than twenty minutes old, it may be that the booking is not visible to you yet. Consider creating a fresh request in this case.  If you notice that the `Last-Modified` timestamp you see is unreasonably old, please [get in contact with us](mailto:isd.apiteam@ucl.ac.uk) ASAP to report this as it may indicate very stale data and an issue at our end.  ## OAuth  OAuth is a protocol that lets external apps request secure access to private UCL account data without getting your password. This can be done with a \"Sign In With UCL\" button on your website or app which saves UCL users the trouble of registering a new account with you. It also allows your app or website to retrieve a user's personal timetable.  Check out a JS web app demo [here](https://uclapi-oauth-demo.glitch.me/). The source code for the demo is available [here](https://glitch.com/edit/#!/uclapi-oauth-demo).  For an example of a mobile app implementation, check out [UCL Assistant](https://github.com/uclapi/ucl-assistant-app) (written in React Native) and the accompanying [UCL Assistant API backend](https://github.com/uclapi/ucl-assistant-api/tree/master/src/oauth) (written in Node.JS).  ### Sign In With UCL Button If you want to add a \"Sign In With UCL\" button to your site, which looks like this:  <a href=\"https://uclapi.com/oauth/authorise?client_id=CLIENT_ID&state=STATE\">   <img width=\"20%\" src=\"https://s3.eu-west-2.amazonaws.com/uclapi-static/SignInWithUCLSmall.png\"> </a>  you can copy the following the code below and replace CLIENT_ID and STATE by the `client_id` of your app and a random `state`:  ``` <a href=\"https://uclapi.com/oauth/authorise?client_id=CLIENT_ID&state=STATE\">   <img src=\"https://s3.eu-west-2.amazonaws.com/uclapi-static/SignInWithUCLSmall.png\"> </a> ```  ### Scopes  OAuth scopes specify what access your app needs to a UCL user’s account. As an app developer, you set the desired scopes in the API Dashboard. When a user is responding to your authorisation request, the requested scopes will be displayed to the user.  ### OAuth Workflow  If your application uses OAuth, you must set a callback URL in the dashboard. Then the app should follow this procedure:  1. Redirect the user to `https://uclapi.com/oauth/authorise` with `state` and the application’s `client_id` as query parameters.  2. The user logs in with their UCL credentials on the UCL Single Sign-on website (if not logged in already).  3. The user reviews the OAuth scopes requested and either authorises or denies the application's request. If the application is authorised, the callback URL receives `client_id`, `state` (specified in 1.), `result`, and `code`.  If the application is denied, the callback URL receives `result` and `state`, and no private data will be provided to the application.  4. To obtain a OAuth user token (necessary for retrieving personal data and certain API endpoints), we require `code` (from 3.), `client_id`, and `client_secret`. These should then be sent to `https://uclapi.com/oauth/token`, which will return a response containing `state`, `ok`, `client_id`, `token` (OAuth user token), and `scope`  (OAuth scopes the app can access on the user’s behalf).  **Note**: OAuth tokens and general API tokes are different. Whilst general API tokens can be used for all non-personal, generic data (such as room bookings), OAuth tokens must be used with an app's client_secret in order to retrieve personal data for a user. To make things easier, you can use personal OAuth tokens in place of general tokens once a user has logged into your app to retrieve generic data too.  ### Tokens  Tokens uniquely identify an app that is requesting data from the API.  Tokens are a long string variable of numbers and letters. e.g. `uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb`.  There are two different kinds of tokens you can work with:  1. Generic Tokens: These are tokens that are used to request non-personal data. These tokens are used between applications and the API to request any sort of data that the app may need that is not tied to a specific student. For example, UCL API’s Room booking service uses tokens to return information about rooms - when they are booked and which UCL rooms are free.  2. OAuth Tokens: This type of token is used when an app requires personal data from users. One of the most common uses of this type of token is when you sign in via UCL on an app.  The app will then use a token to request a user’s personal data such as:  - Department - Email - Full name - Given name - UPI - If they are a student or not - Student number (*note:* to get this, you need to tick the relevant scope in the dashboard before a user logs in; more on scopes above).  Note that you can also use OAuth Tokens to access all the same data that generic app tokens can access.  Each token is uniquely generated for each user logging into each app.  Please note, access to any of this data needs to be approved by the user first.  To use this type of token for your app, you need to redirect the user to the \"Authorise\" endpoint at: `https://uclapi.com/oauth/authorise` which can be done directly or by including a “Sign in With UCL Button” in your app, such as the one provided below, which links users to the authorisation endpoint with your app’s Client ID (accessible via the dashboard) and a random state number included in the GET parameters.  The users then sign in with their UCL credentials and, if they authorise your app to use their personal data, a token will be generated which your app can use to get user’s personal data in JSON format from the oauth/user/data. Your application will receive the token at the callback URL you provided in the [Dashboard](https://uclapi.com/dashboard).
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * Contact: isd.apiteam@ucl.ac.uk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';

/**
* Timetable service.
* @module api/TimetableApi
* @version 1.0.7
*/
export default class TimetableApi {

    /**
    * Constructs a new TimetableApi. 
    * @alias module:api/TimetableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the timetableBymoduleGet operation.
     * @callback module:api/TimetableApi~timetableBymoduleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a yearly timetable for the supplied modules.
     * @param {String} modules A comma-separated list of the module codes you want the timetable of. You can supply either standard module codes (e.g. COMP0133), or full codes including the instance of the module (COMP0133-A7U-T1). Note that if you do not supply an instance, every single timetable entry will be returned including duplicates for the same module taught as multiple instances. It is recommended that a full module code including instance be supplied.
     * @param {Object} opts Optional parameters
     * @param {String} opts._date A date to filter entries by
     * @param {module:api/TimetableApi~timetableBymoduleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    timetableBymoduleGet(modules, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'modules' is set
      if (modules === undefined || modules === null) {
        throw new Error("Missing the required parameter 'modules' when calling timetableBymoduleGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'modules': modules,
        'date': opts['_date']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/timetable/bymodule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timetableDataCoursesGet operation.
     * @callback module:api/TimetableApi~timetableDataCoursesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of every course taught by a given department at UCL.
     * @param {String} department The department ID available from /data/departments.
     * @param {module:api/TimetableApi~timetableDataCoursesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    timetableDataCoursesGet(department, callback) {
      let postBody = null;
      // verify the required parameter 'department' is set
      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling timetableDataCoursesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'department': department
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/timetable/data/courses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timetableDataCoursesModulesGet operation.
     * @callback module:api/TimetableApi~timetableDataCoursesModulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of every module taught on a given course at UCL.
     * @param {String} course The course ID available from /data/courses.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.term1 Boolean designating if you would like module instances that are taught in term 1.
     * @param {Boolean} opts.term2 Boolean designating if you would like module instances that are taught in term 2.
     * @param {Boolean} opts.term3 Boolean designating whether or not you want module instances that are taught in term 3.
     * @param {Boolean} opts.term1NextYear Boolean designating if you would like module instances that are taught in term 1 of the next academic year. This is used by admissions to calculate the end dates for non-standard programmes, and therefore is rare
     * @param {Boolean} opts.summer Boolean designating if you would like module instances that are timetabled in the summer. This can happen in some Postgraduate and Medicine teaching arrangements, but is rare. Note that this is NOT the same as the UCL Summer School.
     * @param {Boolean} opts.yearLong Boolean designating if you would like module instances where the course is timetabled to last for an entire academic year.
     * @param {Boolean} opts.lsr Boolean designating if you would like module instances where the module is timetabled during the Late Summer Resit period. This is used internally by Examinations to timetable Late Summer Assessments (LSAs).
     * @param {Boolean} opts.isSummerSchool Boolean designating if you would like module instances where the course is taught as part of the UCL Summer School (true) or standard academic teaching (false).
     * @param {Boolean} opts.session1 Boolean designating if you would like module instances where the module is taught in the first summer school session of this academic year's summer.
     * @param {Boolean} opts.session2 Boolean designating if you would like module instances where the module is taught in the second summer school session of this academic year's summer.
     * @param {Boolean} opts.isUndergraduate Boolean designating if you would like undergraduate module instances.
     * @param {Boolean} opts.onlyAvailable Boolean designating if you would only like available module instances (i.e. ones that are not compulsory for the course).
     * @param {Boolean} opts.onlyCompulsory Boolean designating if you would only like compulsory module instances.
     * @param {module:api/TimetableApi~timetableDataCoursesModulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    timetableDataCoursesModulesGet(course, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'course' is set
      if (course === undefined || course === null) {
        throw new Error("Missing the required parameter 'course' when calling timetableDataCoursesModulesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'course': course,
        'term_1': opts['term1'],
        'term_2': opts['term2'],
        'term_3': opts['term3'],
        'term_1_next_year': opts['term1NextYear'],
        'summer': opts['summer'],
        'year_long': opts['yearLong'],
        'lsr': opts['lsr'],
        'is_summer_school': opts['isSummerSchool'],
        'session_1': opts['session1'],
        'session_2': opts['session2'],
        'is_undergraduate': opts['isUndergraduate'],
        'only_available': opts['onlyAvailable'],
        'only_compulsory': opts['onlyCompulsory']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/timetable/data/courses/modules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timetableDataDepartmentsGet operation.
     * @callback module:api/TimetableApi~timetableDataDepartmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of every department at UCL, along with its internal name. This can be used with the /data/modules endpoint to request information on all modules for a department.
     * @param {module:api/TimetableApi~timetableDataDepartmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    timetableDataDepartmentsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/timetable/data/departments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timetableDataModulesGet operation.
     * @callback module:api/TimetableApi~timetableDataModulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of every module taught by a given department at UCL.
     * @param {String} department The department ID available from /data/departments.
     * @param {module:api/TimetableApi~timetableDataModulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    timetableDataModulesGet(department, callback) {
      let postBody = null;
      // verify the required parameter 'department' is set
      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling timetableDataModulesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'department': department
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/timetable/data/modules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timetablePersonalGet operation.
     * @callback module:api/TimetableApi~timetablePersonalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the personal timetable of the user.
     * @param {String} clientSecret Client secret of the authenticating app
     * @param {Object} opts Optional parameters
     * @param {String} opts._date A date to filter entries by
     * @param {module:api/TimetableApi~timetablePersonalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    timetablePersonalGet(clientSecret, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling timetablePersonalGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_secret': clientSecret,
        'date': opts['_date']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuthSecurity', 'OAuthToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/timetable/personal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
