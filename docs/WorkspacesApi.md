# uclapi.WorkspacesApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspacesImagesMapGet**](WorkspacesApi.md#workspacesImagesMapGet) | **GET** /workspaces/images/map | Returns the image specified by the passed in image_id. Image IDs are provided by the /workspaces/surveys endpoint within the array of maps. Each map has an image.
[**workspacesImagesMapLiveGet**](WorkspacesApi.md#workspacesImagesMapLiveGet) | **GET** /workspaces/images/map/live | Takes Survey ID and Map ID as parameters and displays a dynamically generated SVG map, correct as of the time of the API call (aside from caching overhead), showing the map&#39;s plan image with a circle overlaid on each seat. This circle is coloured based on whether the seat is occupied or absent (e.g. it&#39;s free).
[**workspacesSensorsAveragesTimeGet**](WorkspacesApi.md#workspacesSensorsAveragesTimeGet) | **GET** /workspaces/sensors/averages/time | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states
[**workspacesSensorsGet**](WorkspacesApi.md#workspacesSensorsGet) | **GET** /workspaces/sensors | Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states
[**workspacesSensorsLastupdatedGet**](WorkspacesApi.md#workspacesSensorsLastupdatedGet) | **GET** /workspaces/sensors/lastupdated | Replies with the timestamp of the last time the sensor data was updated for a given survey. This allows integrations that poll the API to save on request time by only requesting the full set of sensor information for a survey once it has been updated.
[**workspacesSensorsSummaryGet**](WorkspacesApi.md#workspacesSensorsSummaryGet) | **GET** /workspaces/sensors/summary | This endpoint summarises, with a one-minute accuracy, the number of seats within each library region that are free and occupied. It is best suited to integrations which show cumulative, live data. Developers can use this endpoint to avoid making many parallel or sequential requests to fetch survey sensor counts. This endpoint takes into account UCL&#39;s thirty minute rule, which allows students to leave their seat unattended for up to thirty minutes at a time (e.g. to use the bathroom or get food). This means that the Summary endpoint may return a lower number of available seats when compared to reality if many students leave the library within a short period of time. The UCL Library&#39;s website and the UCL Go! mobile application both follow this rule, so your app or integration should have parity with first party data sources by using the UCL API.
[**workspacesSurveysGet**](WorkspacesApi.md#workspacesSurveysGet) | **GET** /workspaces/surveys | Returns all UCL libraries with the Cad-Capture devices fitted to the seats. Each library is known as a &#39;survey&#39;, as it is a survey of the building. Within each survey there are multiple &#39;maps&#39;, each of which corresponds to a section such as a level, wing or separated library work area. Each sensor is tied to a specific map, and each map belongs to a survey.



## workspacesImagesMapGet

> InlineResponse20017 workspacesImagesMapGet(imageId, opts)

Returns the image specified by the passed in image_id. Image IDs are provided by the /workspaces/surveys endpoint within the array of maps. Each map has an image.

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

Takes Survey ID and Map ID as parameters and displays a dynamically generated SVG map, correct as of the time of the API call (aside from caching overhead), showing the map&#39;s plan image with a circle overlaid on each seat. This circle is coloured based on whether the seat is occupied or absent (e.g. it&#39;s free).

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

Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states

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

Provides a list of every sensor within every map in a survey/library. It can optionally provide the current state of a sensor (e.g. Occupied / Absent), but by default it will only list the sensors without their states

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

Replies with the timestamp of the last time the sensor data was updated for a given survey. This allows integrations that poll the API to save on request time by only requesting the full set of sensor information for a survey once it has been updated.

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

This endpoint summarises, with a one-minute accuracy, the number of seats within each library region that are free and occupied. It is best suited to integrations which show cumulative, live data. Developers can use this endpoint to avoid making many parallel or sequential requests to fetch survey sensor counts. This endpoint takes into account UCL&#39;s thirty minute rule, which allows students to leave their seat unattended for up to thirty minutes at a time (e.g. to use the bathroom or get food). This means that the Summary endpoint may return a lower number of available seats when compared to reality if many students leave the library within a short period of time. The UCL Library&#39;s website and the UCL Go! mobile application both follow this rule, so your app or integration should have parity with first party data sources by using the UCL API.

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

Returns all UCL libraries with the Cad-Capture devices fitted to the seats. Each library is known as a &#39;survey&#39;, as it is a survey of the building. Within each survey there are multiple &#39;maps&#39;, each of which corresponds to a section such as a level, wing or separated library work area. Each sensor is tied to a specific map, and each map belongs to a survey.

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

