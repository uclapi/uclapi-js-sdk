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

import ApiClient from '../ApiClient';
import RoomLocation from './RoomLocation';

/**
 * The Room model module.
 * @module model/Room
 * @version 1.4.9
 */
class Room {
    /**
     * Constructs a new <code>Room</code>.
     * @alias module:model/Room
     */
    constructor() { 
        
        Room.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Room</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Room} obj Optional instance to populate.
     * @return {module:model/Room} The populated <code>Room</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Room();

            if (data.hasOwnProperty('roomname')) {
                obj['roomname'] = ApiClient.convertToType(data['roomname'], 'String');
            }
            if (data.hasOwnProperty('roomid')) {
                obj['roomid'] = ApiClient.convertToType(data['roomid'], 'String');
            }
            if (data.hasOwnProperty('siteid')) {
                obj['siteid'] = ApiClient.convertToType(data['siteid'], 'String');
            }
            if (data.hasOwnProperty('sitename')) {
                obj['sitename'] = ApiClient.convertToType(data['sitename'], 'String');
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('classification')) {
                obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
            }
            if (data.hasOwnProperty('classification_name')) {
                obj['classification_name'] = ApiClient.convertToType(data['classification_name'], 'String');
            }
            if (data.hasOwnProperty('automated')) {
                obj['automated'] = ApiClient.convertToType(data['automated'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = RoomLocation.constructFromObject(data['location']);
            }
        }
        return obj;
    }


}

/**
 * The name of the room. It often includes the name of the site (building) as well.
 * @member {String} roomname
 */
Room.prototype['roomname'] = undefined;

/**
 * The room ID (not to be confused with the roomname).
 * @member {String} roomid
 */
Room.prototype['roomid'] = undefined;

/**
 * Every room is inside a site (building). All sites have IDs.
 * @member {String} siteid
 */
Room.prototype['siteid'] = undefined;

/**
 * Every site (building) has a name. In some cases this is contained in the roomname as well.
 * @member {String} sitename
 */
Room.prototype['sitename'] = undefined;

/**
 * Every room has a set capacity of how many people can fit inside it. When supplied, all rooms with the given capacity or greater will be returned.
 * @member {Number} capacity
 */
Room.prototype['capacity'] = undefined;

/**
 * The room type ID.
 * @member {String} classification
 */
Room.prototype['classification'] = undefined;

/**
 * A human-readable version of the room type. AN = Anechoic Chamber, CI = Clinic Room, CF = Catering Facilities CFE = Cafe, CL = Cloakroom, CR = Classroom, ER = Equipment Room, IN = Installation, LA = Laboratory, LB = Library, LT = Lecture Theatre, MR = Meeting Room, OF = Office, PC1 = Public Cluster, PC2 = Public Cluster - Tutorial, PC3 = Public Cluster - Students, RC = Reverberation Chamber, SS = Social Space, STU = Studio, TH = Theatre. If the room type is unknown, this value will be set to 'Unknown Room Type'.
 * @member {String} classification_name
 */
Room.prototype['classification_name'] = undefined;

/**
 * Whether bookings in this room will be confirmed automatically. A stands for automated, and N for not automated. P represents that the confirmation will be automatic, but only under certain circumstances.
 * @member {String} automated
 */
Room.prototype['automated'] = undefined;

/**
 * @member {module:model/RoomLocation} location
 */
Room.prototype['location'] = undefined;






export default Room;

