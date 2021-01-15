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


import ApiClient from './ApiClient';
import Average from './model/Average';
import AverageWithNameAndId from './model/AverageWithNameAndId';
import Booking from './model/Booking';
import Course from './model/Course';
import Delivery from './model/Delivery';
import Department from './model/Department';
import DesktopData from './model/DesktopData';
import DesktopDataLocation from './model/DesktopDataLocation';
import Equipment from './model/Equipment';
import Error from './model/Error';
import Event from './model/Event';
import HistoricalSurvey from './model/HistoricalSurvey';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse20010 from './model/InlineResponse20010';
import InlineResponse20011 from './model/InlineResponse20011';
import InlineResponse20012 from './model/InlineResponse20012';
import InlineResponse20013 from './model/InlineResponse20013';
import InlineResponse20014 from './model/InlineResponse20014';
import InlineResponse20015 from './model/InlineResponse20015';
import InlineResponse20016 from './model/InlineResponse20016';
import InlineResponse20017 from './model/InlineResponse20017';
import InlineResponse20018 from './model/InlineResponse20018';
import InlineResponse20019 from './model/InlineResponse20019';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse20020 from './model/InlineResponse20020';
import InlineResponse20020Data from './model/InlineResponse20020Data';
import InlineResponse20021 from './model/InlineResponse20021';
import InlineResponse20021Data from './model/InlineResponse20021Data';
import InlineResponse20022 from './model/InlineResponse20022';
import InlineResponse20023 from './model/InlineResponse20023';
import InlineResponse20023Data from './model/InlineResponse20023Data';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2009 from './model/InlineResponse2009';
import Instance from './model/Instance';
import Lecturer from './model/Lecturer';
import Location from './model/Location';
import LocationCoordinates from './model/LocationCoordinates';
import Map from './model/Map';
import MapWithSensors from './model/MapWithSensors';
import Module from './model/Module';
import ModuleDataCoursesModules from './model/ModuleDataCoursesModules';
import Period from './model/Period';
import Person from './model/Person';
import Room from './model/Room';
import RoomLocation from './model/RoomLocation';
import RoomLocationCoordinates from './model/RoomLocationCoordinates';
import SeatImage from './model/SeatImage';
import SeatImageCircle from './model/SeatImageCircle';
import Sensor from './model/Sensor';
import SummerSchool from './model/SummerSchool';
import SummerSchoolSessions from './model/SummerSchoolSessions';
import Survey from './model/Survey';
import SurveyLocation from './model/SurveyLocation';
import SurveyLocationCoordinates from './model/SurveyLocationCoordinates';
import SurveyWithMaps from './model/SurveyWithMaps';
import Svg from './model/Svg';
import SvgG from './model/SvgG';
import SvgGImage from './model/SvgGImage';
import TeachingPeriods from './model/TeachingPeriods';
import Timetable from './model/Timetable';
import UserData from './model/UserData';
import AnalyticsApi from './api/AnalyticsApi';
import OAuthApi from './api/OAuthApi';
import ResourcesApi from './api/ResourcesApi';
import RoomBookingsApi from './api/RoomBookingsApi';
import SearchApi from './api/SearchApi';
import TimetableApi from './api/TimetableApi';
import WorkspacesApi from './api/WorkspacesApi';


/**
* UCL API JavaScript SDK.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var uclapi = require('index'); // See note below*.
* var xxxSvc = new uclapi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new uclapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new uclapi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new uclapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.7
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Average model constructor.
     * @property {module:model/Average}
     */
    Average,

    /**
     * The AverageWithNameAndId model constructor.
     * @property {module:model/AverageWithNameAndId}
     */
    AverageWithNameAndId,

    /**
     * The Booking model constructor.
     * @property {module:model/Booking}
     */
    Booking,

    /**
     * The Course model constructor.
     * @property {module:model/Course}
     */
    Course,

    /**
     * The Delivery model constructor.
     * @property {module:model/Delivery}
     */
    Delivery,

    /**
     * The Department model constructor.
     * @property {module:model/Department}
     */
    Department,

    /**
     * The DesktopData model constructor.
     * @property {module:model/DesktopData}
     */
    DesktopData,

    /**
     * The DesktopDataLocation model constructor.
     * @property {module:model/DesktopDataLocation}
     */
    DesktopDataLocation,

    /**
     * The Equipment model constructor.
     * @property {module:model/Equipment}
     */
    Equipment,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The HistoricalSurvey model constructor.
     * @property {module:model/HistoricalSurvey}
     */
    HistoricalSurvey,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20020Data model constructor.
     * @property {module:model/InlineResponse20020Data}
     */
    InlineResponse20020Data,

    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021,

    /**
     * The InlineResponse20021Data model constructor.
     * @property {module:model/InlineResponse20021Data}
     */
    InlineResponse20021Data,

    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022,

    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023,

    /**
     * The InlineResponse20023Data model constructor.
     * @property {module:model/InlineResponse20023Data}
     */
    InlineResponse20023Data,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The Instance model constructor.
     * @property {module:model/Instance}
     */
    Instance,

    /**
     * The Lecturer model constructor.
     * @property {module:model/Lecturer}
     */
    Lecturer,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The LocationCoordinates model constructor.
     * @property {module:model/LocationCoordinates}
     */
    LocationCoordinates,

    /**
     * The Map model constructor.
     * @property {module:model/Map}
     */
    Map,

    /**
     * The MapWithSensors model constructor.
     * @property {module:model/MapWithSensors}
     */
    MapWithSensors,

    /**
     * The Module model constructor.
     * @property {module:model/Module}
     */
    Module,

    /**
     * The ModuleDataCoursesModules model constructor.
     * @property {module:model/ModuleDataCoursesModules}
     */
    ModuleDataCoursesModules,

    /**
     * The Period model constructor.
     * @property {module:model/Period}
     */
    Period,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The Room model constructor.
     * @property {module:model/Room}
     */
    Room,

    /**
     * The RoomLocation model constructor.
     * @property {module:model/RoomLocation}
     */
    RoomLocation,

    /**
     * The RoomLocationCoordinates model constructor.
     * @property {module:model/RoomLocationCoordinates}
     */
    RoomLocationCoordinates,

    /**
     * The SeatImage model constructor.
     * @property {module:model/SeatImage}
     */
    SeatImage,

    /**
     * The SeatImageCircle model constructor.
     * @property {module:model/SeatImageCircle}
     */
    SeatImageCircle,

    /**
     * The Sensor model constructor.
     * @property {module:model/Sensor}
     */
    Sensor,

    /**
     * The SummerSchool model constructor.
     * @property {module:model/SummerSchool}
     */
    SummerSchool,

    /**
     * The SummerSchoolSessions model constructor.
     * @property {module:model/SummerSchoolSessions}
     */
    SummerSchoolSessions,

    /**
     * The Survey model constructor.
     * @property {module:model/Survey}
     */
    Survey,

    /**
     * The SurveyLocation model constructor.
     * @property {module:model/SurveyLocation}
     */
    SurveyLocation,

    /**
     * The SurveyLocationCoordinates model constructor.
     * @property {module:model/SurveyLocationCoordinates}
     */
    SurveyLocationCoordinates,

    /**
     * The SurveyWithMaps model constructor.
     * @property {module:model/SurveyWithMaps}
     */
    SurveyWithMaps,

    /**
     * The Svg model constructor.
     * @property {module:model/Svg}
     */
    Svg,

    /**
     * The SvgG model constructor.
     * @property {module:model/SvgG}
     */
    SvgG,

    /**
     * The SvgGImage model constructor.
     * @property {module:model/SvgGImage}
     */
    SvgGImage,

    /**
     * The TeachingPeriods model constructor.
     * @property {module:model/TeachingPeriods}
     */
    TeachingPeriods,

    /**
     * The Timetable model constructor.
     * @property {module:model/Timetable}
     */
    Timetable,

    /**
     * The UserData model constructor.
     * @property {module:model/UserData}
     */
    UserData,

    /**
    * The AnalyticsApi service constructor.
    * @property {module:api/AnalyticsApi}
    */
    AnalyticsApi,

    /**
    * The OAuthApi service constructor.
    * @property {module:api/OAuthApi}
    */
    OAuthApi,

    /**
    * The ResourcesApi service constructor.
    * @property {module:api/ResourcesApi}
    */
    ResourcesApi,

    /**
    * The RoomBookingsApi service constructor.
    * @property {module:api/RoomBookingsApi}
    */
    RoomBookingsApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The TimetableApi service constructor.
    * @property {module:api/TimetableApi}
    */
    TimetableApi,

    /**
    * The WorkspacesApi service constructor.
    * @property {module:api/WorkspacesApi}
    */
    WorkspacesApi
};
