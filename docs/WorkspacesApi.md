# uclapi.WorkspacesApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspacesHistoricalDataGet**](WorkspacesApi.md#workspacesHistoricalDataGet) | **GET** /workspaces/historical/data | List Historical Data
[**workspacesHistoricalSensorsGet**](WorkspacesApi.md#workspacesHistoricalSensorsGet) | **GET** /workspaces/historical/sensors | List Historical Sensors
[**workspacesHistoricalSurveysGet**](WorkspacesApi.md#workspacesHistoricalSurveysGet) | **GET** /workspaces/historical/surveys | List Historical Surveys
[**workspacesImagesMapGet**](WorkspacesApi.md#workspacesImagesMapGet) | **GET** /workspaces/images/map | Returns the image specified by the passed in image_id.
[**workspacesImagesMapLiveGet**](WorkspacesApi.md#workspacesImagesMapLiveGet) | **GET** /workspaces/images/map/live | Takes Survey ID and Map ID as parameters and displays a dynamically generated SVG map.
[**workspacesSensorsAveragesTimeGet**](WorkspacesApi.md#workspacesSensorsAveragesTimeGet) | **GET** /workspaces/sensors/averages/time | Provides a list of every sensor within every map in a survey/library.
[**workspacesSensorsGet**](WorkspacesApi.md#workspacesSensorsGet) | **GET** /workspaces/sensors | Provides a list of every sensor within every map in a survey/library.
[**workspacesSensorsLastupdatedGet**](WorkspacesApi.md#workspacesSensorsLastupdatedGet) | **GET** /workspaces/sensors/lastupdated | Replies with the timestamp of the last time the sensor data was updated for a given survey.
[**workspacesSensorsSummaryGet**](WorkspacesApi.md#workspacesSensorsSummaryGet) | **GET** /workspaces/sensors/summary | Summarises, with a one-minute accuracy, the number of seats within each library region that are free and occupied.
[**workspacesSurveysGet**](WorkspacesApi.md#workspacesSurveysGet) | **GET** /workspaces/surveys | Returns all UCL libraries with the Cad-Capture devices fitted to the seats



## workspacesHistoricalDataGet

> InlineResponse20018 workspacesHistoricalDataGet(surveyId, sensorId, opts)

List Historical Data

This endpoint provides historical sensor readings for all sensors in all survey locations. This must be restricted to a single survey location with survey_id and can be optionally restricted to a single sensor with sensor_id.  To specify a start time datetime__gte (datetime greater than or equal to) and for an end time datetime__lte (datetime less than or equal to) can be used. The deltas (changes) of a sensor will be returned.  Conforms to CursorPagination from Django REST.  This endpoint will return a dictionary of every sensor reading in the time range.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
let sensorId = 20520001; // Number | The ID of a sensor.
let opts = {
  'cursor': bz0xJnA9MjAyMC0wMS0xNysxMiUzQTQwJTNBMDA%3D, // String | Cursor from which to fetch the next or previous page of results.
  'datetimeGte': 2020-01-16T14:00:00, // String | Filter result datetimes to be greater than or equal to this datetime.
  'datetimeLte': 2020-01-16T15:00:00, // String | Filter result datetimes to be less than or equal to this datetime.
  'datetimeExact': 2020-01-16T14:50:00, // String | Filter result datetimes to be equal to this datetime.
  'datetimeGt': 2020-01-16T14:00:00, // String | Filter result datetimes to be greater than this datetime.
  'datetimeLt': 2020-01-16T15:00:00 // String | Filter result datetimes to be less than this datetime.
};
apiInstance.workspacesHistoricalDataGet(surveyId, sensorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 
 **sensorId** | **Number**| The ID of a sensor. | 
 **cursor** | **String**| Cursor from which to fetch the next or previous page of results. | [optional] 
 **datetimeGte** | **String**| Filter result datetimes to be greater than or equal to this datetime. | [optional] 
 **datetimeLte** | **String**| Filter result datetimes to be less than or equal to this datetime. | [optional] 
 **datetimeExact** | **String**| Filter result datetimes to be equal to this datetime. | [optional] 
 **datetimeGt** | **String**| Filter result datetimes to be greater than this datetime. | [optional] 
 **datetimeLt** | **String**| Filter result datetimes to be less than this datetime. | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesHistoricalSensorsGet

> InlineResponse20019 workspacesHistoricalSensorsGet(surveyId, sensorId, opts)

List Historical Sensors

This endpoint lists all sensors in a survey location, this includes inactive sensors (unlike get sensors from workspaces).  Conforms to StandardResultsSetPagination from Django REST.  This endpoint will return a list of every sensor.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
let sensorId = 20520001; // Number | The ID of a sensor.
let opts = {
  'page': 2 // Number | Page of pagination results (see URL in `next` field).
};
apiInstance.workspacesHistoricalSensorsGet(surveyId, sensorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 
 **sensorId** | **Number**| The ID of a sensor. | 
 **page** | **Number**| Page of pagination results (see URL in &#x60;next&#x60; field). | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesHistoricalSurveysGet

> InlineResponse20020 workspacesHistoricalSurveysGet(surveyId, opts)

List Historical Surveys

This endpoint lists all historical survey locations, this includes inactive survey locations (unlike get survey from workspaces).  Conforms to StandardResultsSetPagination from Django REST.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
let opts = {
  'page': 2, // Number | Page of pagination results (see URL in `next` field).
  'active': true // Boolean | If a survey location is active (true) or not (false).
};
apiInstance.workspacesHistoricalSurveysGet(surveyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 
 **page** | **Number**| Page of pagination results (see URL in &#x60;next&#x60; field). | [optional] 
 **active** | **Boolean**| If a survey location is active (true) or not (false). | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesImagesMapGet

> InlineResponse20017 workspacesImagesMapGet(imageId, opts)

Returns the image specified by the passed in image_id.

Image IDs are provided by the /workspaces/surveys endpoint within the array of maps. Each map has an image.  The response will either be a JSON object if base64 is requested, as described below, or a raw object with the Content-Typeheader set to the content type.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let imageId = 3.4; // Number | The ID of the image to obtain.
let opts = {
  'imageFormat': "imageFormat_example" // String | The format of the response. This can either be base64, which returns a JSON object as shown in the example, or raw which will respond with a raw image. In the case of a raw image, the Content-Type header will define the data type, such as image/png.
};
apiInstance.workspacesImagesMapGet(imageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **Number**| The ID of the image to obtain. | 
 **imageFormat** | **String**| The format of the response. This can either be base64, which returns a JSON object as shown in the example, or raw which will respond with a raw image. In the case of a raw image, the Content-Type header will define the data type, such as image/png. | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesImagesMapLiveGet

> Svg workspacesImagesMapLiveGet(surveyId, mapId, opts)

Takes Survey ID and Map ID as parameters and displays a dynamically generated SVG map.

The SVG map is correct as of the time of the API call (aside from caching overhead), showing the map&#39;s plan image with a circle overlaid on each seat. This circle is coloured based on whether the seat is occupied or absent (e.g. it&#39;s free).  There are also several parameters that let you customise the map to suit your app or integration.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
let mapId = 3.4; // Number | The ID of the library's survey which contains the map you want to obtain.
let opts = {
  'imageScale': 3.4, // Number | The SVG image's scale. The default is 0.02. The scale is implemented as an SVG transform scale, and is applied to both the x and the y axes of the image.
  'circleRadius': 3.4, // Number | The size of the circle. This must be a positive float value. The default is 128.
  'absentColour': 3.4, // Number | TThe colour of the circle designating a free seat. This must be provided as a hex colour code, including the preceeding
  'occupiedColour': 3.4 // Number | The colour of the circle designating a taken, or occupied, seat. This must be provided as a hex colour code, including the preceeding
};
apiInstance.workspacesImagesMapLiveGet(surveyId, mapId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 
 **mapId** | **Number**| The ID of the library&#39;s survey which contains the map you want to obtain. | 
 **imageScale** | **Number**| The SVG image&#39;s scale. The default is 0.02. The scale is implemented as an SVG transform scale, and is applied to both the x and the y axes of the image. | [optional] 
 **circleRadius** | **Number**| The size of the circle. This must be a positive float value. The default is 128. | [optional] 
 **absentColour** | **Number**| TThe colour of the circle designating a free seat. This must be provided as a hex colour code, including the preceeding | [optional] 
 **occupiedColour** | **Number**| The colour of the circle designating a taken, or occupied, seat. This must be provided as a hex colour code, including the preceeding | [optional] 

### Return type

[**Svg**](Svg.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## workspacesSensorsAveragesTimeGet

> InlineResponse20014 workspacesSensorsAveragesTimeGet(days, opts)

Provides a list of every sensor within every map in a survey/library.

 It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.  This endpoint will show for every survey_id  provided the average utilisation of the associated library at ten minute intervals throughout the day. This can be used, for example, in apps and integrations which show users how busy each library is at given times of the day. You can show data based on the last day (e.g. yesterday), the last week or the last month. Each day&#39;s data is updated in the early hours of the morning (around 2am) so that users during the day have the latest data.  This endpoint will return a list with every survey requested, its ID, its name and average data for the period requested for every 10 minute period in a day. The averages are not ordered, so it is recommended that the data is fed into some other code to transform the data in such as way as to ensure that it is user-friendly. One example might be a graphing library to plot the data throughout the day to produce an average occupancy graph.  Please note that the counts below may not perfectly add up. This is because we perform an integer division calculation to get an average based on multiple days&#39; worth of data, so you may encounter off-by-one errors if you check that sensors_absent + sensors_occupied &#x3D;&#x3D; sensors_total. Please do not be alarmed by this! However, if you do get large, unexplained differences do let us know so that we can look into it.  Please note further that there are some rare situations where the data source we use may have historical data missing. Sitautions that can cause this include new libraries being added which do not yet have historical data available, and situations where data has not properly been saved by our data provider. In cases like this, our response to your app will include an empty  averages object with no times within it. Your code should account for this possibility by checking whether each time period is actually present. If time periods are missing your application should alert the user to data being missing and fail gracefully.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let days = "days_example"; // String | An integer number of days (either 1, 7 or 30) from which to deliver average data. The format of the data returned does not change based on this value, but the actual averaged figures do. When days is 1, the API will return the data from the previous complete day; when days is 7 the API will return data from the last week and when it is set to 30 the API will return data from the last 30 days, which is approx. one month.
let opts = {
  'surveyIds': "surveyIds_example", // String | A comma delimited list of Survey IDs. If this parameter is not supplied, historical data for every survey is returned.
  'surveyFilter': "surveyFilter_example" // String | Filter the surveys based on who they are designed for. Valid values of this parameter are `all` (no filtering), `student` (return only student surveys; this is the default) and `staff` (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required.
};
apiInstance.workspacesSensorsAveragesTimeGet(days, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **days** | **String**| An integer number of days (either 1, 7 or 30) from which to deliver average data. The format of the data returned does not change based on this value, but the actual averaged figures do. When days is 1, the API will return the data from the previous complete day; when days is 7 the API will return data from the last week and when it is set to 30 the API will return data from the last 30 days, which is approx. one month. | 
 **surveyIds** | **String**| A comma delimited list of Survey IDs. If this parameter is not supplied, historical data for every survey is returned. | [optional] 
 **surveyFilter** | **String**| Filter the surveys based on who they are designed for. Valid values of this parameter are &#x60;all&#x60; (no filtering), &#x60;student&#x60; (return only student surveys; this is the default) and &#x60;staff&#x60; (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required. | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesSensorsGet

> InlineResponse20013 workspacesSensorsGet(surveyId, opts)

Provides a list of every sensor within every map in a survey/library.

It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.  This endpoint will return a list of every map within a survey, and within it every sensor associated with that map. It will optionally also return the latest triggered state of that sensor (e.g. whether the seat was marked triggered or occupied).  Note that the following response data table is deliberately incomplete. This is because we return additional metadata that is not yet useful, and often left blank by the provider. We will update this documentation if and when these extra parameters become useful.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
let opts = {
  'returnStates': true // Boolean | Whether or not to return the latest trigger state of each sensor. Defaults to false. For live data, set this to true.
};
apiInstance.workspacesSensorsGet(surveyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 
 **returnStates** | **Boolean**| Whether or not to return the latest trigger state of each sensor. Defaults to false. For live data, set this to true. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesSensorsLastupdatedGet

> InlineResponse20015 workspacesSensorsLastupdatedGet(surveyId)

Replies with the timestamp of the last time the sensor data was updated for a given survey.

This allows integrations that poll the API to save on request time by only requesting the full set of sensor information for a survey once it has been updated.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let surveyId = 3.4; // Number | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states.
apiInstance.workspacesSensorsLastupdatedGet(surveyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**| Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states. | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesSensorsSummaryGet

> InlineResponse20016 workspacesSensorsSummaryGet(opts)

Summarises, with a one-minute accuracy, the number of seats within each library region that are free and occupied.

It is best suited to integrations which show cumulative, live data. Developers can use this endpoint to avoid making many parallel or sequential requests to fetch survey sensor counts.  This endpoint takes into account UCL&#39;s thirty minute rule, which allows students to leave their seat unattended for up to thirty minutes at a time (e.g. to use the bathroom or get food). This means that the Summary endpoint may return a lower number of available seats when compared to reality if many students leave the library within a short period of time. The UCL Library&#39;s website and the UCL Go! mobile application both follow this rule, so your app or integration should have parity with first party data sources by using the UCL API.  This endpoint will return a list with every survey requested, and its associated maps. Within each map is a count of absent (i.e. vacant) and occupied seats. The endpoint also returns the total number of seats in each library that are absent or occupied.  If your application or integration is designed to inform students of the total number of free seats in a library please ensure you use the survey total figures. This is because many sensors have not yet been assigned to maps on our data provider&#39;s system which means that relying only on map counts will leave many seats unaccounted for. We are actively working with our data provider to rectify this, and we apologise for any inconvenience caused.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let opts = {
  'surveyIds': "surveyIds_example", // String | A comma delimited list of Survey IDs. If this parameter is not supplied, historical data for every survey is returned.
  'surveyFilter': "surveyFilter_example" // String | Filter the surveys based on who they are designed for. Valid values of this parameter are `all` (no filtering), `student` (return only student surveys; this is the default) and `staff` (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required.
};
apiInstance.workspacesSensorsSummaryGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyIds** | **String**| A comma delimited list of Survey IDs. If this parameter is not supplied, historical data for every survey is returned. | [optional] 
 **surveyFilter** | **String**| Filter the surveys based on who they are designed for. Valid values of this parameter are &#x60;all&#x60; (no filtering), &#x60;student&#x60; (return only student surveys; this is the default) and &#x60;staff&#x60; (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required. | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workspacesSurveysGet

> InlineResponse20012 workspacesSurveysGet(opts)

Returns all UCL libraries with the Cad-Capture devices fitted to the seats

Each library is known as a &#39;survey&#39;, as it is a survey of the building. Within each survey there are multiple &#39;maps&#39;, each of which corresponds to a section such as a level, wing or separated library work area. Each sensor is tied to a specific map, and each map belongs to a survey.  The surveys key contains a list of dictionaries, each of which corresponds to a library survey with seating sensors attached. Each survey has a number of maps, corresponding to regions within the library, such as a different floor or wing. Note that the location[address] field will not always contain a precise address, and may simply contain the address to the UCL campus (i.e. Gower Street, London), which may not be helpful. If it is present, the location[coordinates] will generally be more precise.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: OAuthToken
let OAuthToken = defaultClient.authentications['OAuthToken'];
OAuthToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OAuthToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.WorkspacesApi();
let opts = {
  'surveyFilter': "surveyFilter_example" // String | Filter the surveys based on who they are designed for. Valid values of this parameter are `all` (no filtering), `student` (return only student surveys; this is the default) and `staff` (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required.
};
apiInstance.workspacesSurveysGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyFilter** | **String**| Filter the surveys based on who they are designed for. Valid values of this parameter are &#x60;all&#x60; (no filtering), &#x60;student&#x60; (return only student surveys; this is the default) and &#x60;staff&#x60; (return only surveys representing work areas for UCL staff only). It is recommended that the default (student) is used in apps aimed at students, unless a specific reason to include a staff workspace is required. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

