# uclapi.LibCalApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**libcalSpaceBookingsGet**](LibCalApi.md#libcalSpaceBookingsGet) | **GET** /libcal/space/bookings | Get all LibCal bookings
[**libcalSpaceCancelPost**](LibCalApi.md#libcalSpaceCancelPost) | **POST** /libcal/space/cancel | Cancel one or more LibCal bookings
[**libcalSpaceCategoriesGet**](LibCalApi.md#libcalSpaceCategoriesGet) | **GET** /libcal/space/categories | Returns the categories of spaces available in the given location(s)
[**libcalSpaceCategoryGet**](LibCalApi.md#libcalSpaceCategoryGet) | **GET** /libcal/space/category | Get all spaces corresponding to the specified categories
[**libcalSpaceFormGet**](LibCalApi.md#libcalSpaceFormGet) | **GET** /libcal/space/form | Get all forms (including fields) corresponding to the given LibCal form ID(s)
[**libcalSpaceItemGet**](LibCalApi.md#libcalSpaceItemGet) | **GET** /libcal/space/item | Get the spaces corresponding to the given LibCal space ID(s)
[**libcalSpaceLocationsGet**](LibCalApi.md#libcalSpaceLocationsGet) | **GET** /libcal/space/locations | Gets all LibCal locations
[**libcalSpaceNicknameGet**](LibCalApi.md#libcalSpaceNicknameGet) | **GET** /libcal/space/nickname | Get the nicknames asssigned to certain LibCal bookings
[**libcalSpacePersonalBookingsGet**](LibCalApi.md#libcalSpacePersonalBookingsGet) | **GET** /libcal/space/personal_bookings | Get all LibCal bookings
[**libcalSpaceQuestionGet**](LibCalApi.md#libcalSpaceQuestionGet) | **GET** /libcal/space/question | Get the questions corresponding to the given LibCal field/question ID(s)
[**libcalSpaceReservePost**](LibCalApi.md#libcalSpaceReservePost) | **POST** /libcal/space/reserve | Reserve one or more LibCal spaces/seats
[**libcalSpaceSeatGet**](LibCalApi.md#libcalSpaceSeatGet) | **GET** /libcal/space/seat | Get LibCal seat by ID
[**libcalSpaceSeatsGet**](LibCalApi.md#libcalSpaceSeatsGet) | **GET** /libcal/space/seats | Get all LibCal seats in a given location
[**libcalSpaceUtilizationGet**](LibCalApi.md#libcalSpaceUtilizationGet) | **GET** /libcal/space/utilization | Get utilisation stats for a particular location
[**libcalSpaceZoneGet**](LibCalApi.md#libcalSpaceZoneGet) | **GET** /libcal/space/zone | Get LibCal zone by ID
[**libcalSpaceZonesGet**](LibCalApi.md#libcalSpaceZonesGet) | **GET** /libcal/space/zones | Get LibCal zones by location



## libcalSpaceBookingsGet

> InlineResponse20039 libcalSpaceBookingsGet(opts)

Get all LibCal bookings

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let opts = {
  'eid': 469,470, // String | Comma delimited list of LibCal space IDs. If specified, will only show bookings for those spaces.
  'seatId': 54435,54436, // String | Comma delimited list of LibCal seat IDs. If specified, will only show bookings for those seats.
  'cid': 3334, // String | Comma delimited list of LibCal category IDs. If specified, will only show bookings for those categories.
  'lid': 702,703, // String | Comma delimited list of LibCal location IDs. If specified, will only show bookings for those locations.
  '_date': 2021-06-01, // String | Date in YYYY-MM-DD format. If specified, will only show bookings made on this date. Dates in the past are ignored. Defaults to today's date.
  'days': 3, // Number | Number of days into the future to retrieve bookings from, starting from the data parameter. Defaults to zero. Must be >= 0 and <= 365.
  'limit': 10 // Number | Maximum number of bookings to return. Defaults to 20. The maximum value is 500.
};
apiInstance.libcalSpaceBookingsGet(opts, (error, data, response) => {
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
 **eid** | **String**| Comma delimited list of LibCal space IDs. If specified, will only show bookings for those spaces. | [optional] 
 **seatId** | **String**| Comma delimited list of LibCal seat IDs. If specified, will only show bookings for those seats. | [optional] 
 **cid** | **String**| Comma delimited list of LibCal category IDs. If specified, will only show bookings for those categories. | [optional] 
 **lid** | **String**| Comma delimited list of LibCal location IDs. If specified, will only show bookings for those locations. | [optional] 
 **_date** | **String**| Date in YYYY-MM-DD format. If specified, will only show bookings made on this date. Dates in the past are ignored. Defaults to today&#39;s date. | [optional] 
 **days** | **Number**| Number of days into the future to retrieve bookings from, starting from the data parameter. Defaults to zero. Must be &gt;&#x3D; 0 and &lt;&#x3D; 365. | [optional] 
 **limit** | **Number**| Maximum number of bookings to return. Defaults to 20. The maximum value is 500. | [optional] 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceCancelPost

> InlineResponse20042 libcalSpaceCancelPost(id)

Cancel one or more LibCal bookings

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

let apiInstance = new uclapi.LibCalApi();
let id = cs_loYG4wTz,ab_P1bn30Mn; // String | A comma delimited list of LibCal booking IDs to cancel
apiInstance.libcalSpaceCancelPost(id, (error, data, response) => {
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
 **id** | **String**| A comma delimited list of LibCal booking IDs to cancel | 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceCategoriesGet

> InlineResponse20028 libcalSpaceCategoriesGet(ids)

Returns the categories of spaces available in the given location(s)

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 702,703; // String | Comma delimited list of LibCal location IDs
apiInstance.libcalSpaceCategoriesGet(ids, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal location IDs | 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceCategoryGet

> InlineResponse20029 libcalSpaceCategoryGet(ids, opts)

Get all spaces corresponding to the specified categories

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 3334,3335; // String | Comma delimited list of LibCal category IDs
let opts = {
  'details': 1, // Number | Flag to indicate you want additional details such as terms and conditions.
  'availability': 2021-01-05 // String | Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword 'next' (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format.
};
apiInstance.libcalSpaceCategoryGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal category IDs | 
 **details** | **Number**| Flag to indicate you want additional details such as terms and conditions. | [optional] 
 **availability** | **String**| Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword &#39;next&#39; (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format. | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceFormGet

> InlineResponse20030 libcalSpaceFormGet(ids)

Get all forms (including fields) corresponding to the given LibCal form ID(s)

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 38,62; // String | Comma delimited list of LibCal form IDs
apiInstance.libcalSpaceFormGet(ids, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal form IDs | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceItemGet

> InlineResponse20032 libcalSpaceItemGet(ids, opts)

Get the spaces corresponding to the given LibCal space ID(s)

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 469,470; // String | Comma delimited list of LibCal space IDs
let opts = {
  'availability': 2021-01-05 // String | Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword 'next' (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format.
};
apiInstance.libcalSpaceItemGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal space IDs | 
 **availability** | **String**| Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword &#39;next&#39; (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format. | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceLocationsGet

> InlineResponse20027 libcalSpaceLocationsGet(opts)

Gets all LibCal locations

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let opts = {
  'details': 1 // Number | Flag to indicate you want additional details such as terms and conditions.
};
apiInstance.libcalSpaceLocationsGet(opts, (error, data, response) => {
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
 **details** | **Number**| Flag to indicate you want additional details such as terms and conditions. | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceNicknameGet

> InlineResponse20033 libcalSpaceNicknameGet(ids, opts)

Get the nicknames asssigned to certain LibCal bookings

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 3334,3335; // String | Comma delimited list of LibCal category IDs
let opts = {
  'availability': 2021-01-05 // String | Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword 'next' (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format.
};
apiInstance.libcalSpaceNicknameGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal category IDs | 
 **availability** | **String**| Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword &#39;next&#39; (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format. | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpacePersonalBookingsGet

> InlineResponse20040 libcalSpacePersonalBookingsGet(clientSecret, opts)

Get all LibCal bookings

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

let apiInstance = new uclapi.LibCalApi();
let clientSecret = "clientSecret_example"; // String | Client secret of the authenticating app.
let opts = {
  'eid': 469,470, // String | Comma delimited list of LibCal space IDs. If specified, will only show bookings for those spaces.
  'seatId': 54435,54436, // String | Comma delimited list of LibCal seat IDs. If specified, will only show bookings for those seats.
  'cid': 3334, // String | Comma delimited list of LibCal category IDs. If specified, will only show bookings for those categories.
  'lid': 702,703, // String | Comma delimited list of LibCal location IDs. If specified, will only show bookings for those locations.
  'email': isd_apiteam@ucl.ac.uk, // String | If specified, will only show bookings made with this email address
  '_date': 2021-06-01, // String | Date in YYYY-MM-DD format. If specified, will only show bookings made on this date. Dates in the past are ignored. Defaults to today's date.
  'days': 3, // Number | Number of days into the future to retrieve bookings from, starting from the data parameter. Defaults to zero. Must be >= 0 and <= 365.
  'limit': 10, // Number | Maximum number of bookings to return. Defaults to 20. The maximum value is 500.
  'formAnswers': true // Boolean | Whether or not form answers should be returned. Defaults to false.
};
apiInstance.libcalSpacePersonalBookingsGet(clientSecret, opts, (error, data, response) => {
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
 **clientSecret** | **String**| Client secret of the authenticating app. | 
 **eid** | **String**| Comma delimited list of LibCal space IDs. If specified, will only show bookings for those spaces. | [optional] 
 **seatId** | **String**| Comma delimited list of LibCal seat IDs. If specified, will only show bookings for those seats. | [optional] 
 **cid** | **String**| Comma delimited list of LibCal category IDs. If specified, will only show bookings for those categories. | [optional] 
 **lid** | **String**| Comma delimited list of LibCal location IDs. If specified, will only show bookings for those locations. | [optional] 
 **email** | **String**| If specified, will only show bookings made with this email address | [optional] 
 **_date** | **String**| Date in YYYY-MM-DD format. If specified, will only show bookings made on this date. Dates in the past are ignored. Defaults to today&#39;s date. | [optional] 
 **days** | **Number**| Number of days into the future to retrieve bookings from, starting from the data parameter. Defaults to zero. Must be &gt;&#x3D; 0 and &lt;&#x3D; 365. | [optional] 
 **limit** | **Number**| Maximum number of bookings to return. Defaults to 20. The maximum value is 500. | [optional] 
 **formAnswers** | **Boolean**| Whether or not form answers should be returned. Defaults to false. | [optional] 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceQuestionGet

> InlineResponse20031 libcalSpaceQuestionGet(ids)

Get the questions corresponding to the given LibCal field/question ID(s)

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 43,8; // String | Comma delimited list of LibCal field/question IDs
apiInstance.libcalSpaceQuestionGet(ids, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal field/question IDs | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceReservePost

> InlineResponse20041 libcalSpaceReservePost(libcalReserveRequest)

Reserve one or more LibCal spaces/seats

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

let apiInstance = new uclapi.LibCalApi();
let libcalReserveRequest = new uclapi.LibcalReserveRequest(); // LibcalReserveRequest | 
apiInstance.libcalSpaceReservePost(libcalReserveRequest, (error, data, response) => {
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
 **libcalReserveRequest** | [**LibcalReserveRequest**](LibcalReserveRequest.md)|  | 

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## libcalSpaceSeatGet

> InlineResponse20036 libcalSpaceSeatGet(ids, opts)

Get LibCal seat by ID

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 3334,3335; // String | Comma delimited list of LibCal category IDs
let opts = {
  'availability': 2021-01-05 // String | Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword 'next' (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format.
};
apiInstance.libcalSpaceSeatGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| Comma delimited list of LibCal category IDs | 
 **availability** | **String**| Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword &#39;next&#39; (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format. | [optional] 

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceSeatsGet

> InlineResponse20035 libcalSpaceSeatsGet(ids, opts)

Get all LibCal seats in a given location

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 702; // String | A single LibCal location ID
let opts = {
  'spaceId': 1791, // String | If specified, only return data for this space
  'categoryId': 3334, // String | If specified, will only return data for that category
  'seatId': 54435, // String | Show only the seat with this ID. If this is specified, spaceId, categoryId, and zoneId will be ignored.
  'accessibleOnly': false, // Boolean | Return only acessible seats (i.e. seats with height-adjustable furniture).
  'availability': 2021-01-05, // String | Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword 'next' (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format.
  'pageIndex': 0, // Number | For pagination purposes, this specifies the page to be retrieved. Starts at 0 for the first page.
  'pageSize': 10 // Number | For pagination purposes, this specifies the number of results per page. Must be >= 1 and <= 100. The default is 20.
};
apiInstance.libcalSpaceSeatsGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| A single LibCal location ID | 
 **spaceId** | **String**| If specified, only return data for this space | [optional] 
 **categoryId** | **String**| If specified, will only return data for that category | [optional] 
 **seatId** | **String**| Show only the seat with this ID. If this is specified, spaceId, categoryId, and zoneId will be ignored. | [optional] 
 **accessibleOnly** | **Boolean**| Return only acessible seats (i.e. seats with height-adjustable furniture). | [optional] 
 **availability** | **String**| Either a single date or a comma delimited list of 2 dates (a start and end date). The keyword &#39;next&#39; (alone) can also be used to return availability for the next date that this item is available. Setting this parameter also sets the details value to 1. Dates should be in YYYY-MM-DD format. | [optional] 
 **pageIndex** | **Number**| For pagination purposes, this specifies the page to be retrieved. Starts at 0 for the first page. | [optional] 
 **pageSize** | **Number**| For pagination purposes, this specifies the number of results per page. Must be &gt;&#x3D; 1 and &lt;&#x3D; 100. The default is 20. | [optional] 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceUtilizationGet

> InlineResponse20034 libcalSpaceUtilizationGet(ids, opts)

Get utilisation stats for a particular location

Optionally filter by categoryId and zoneId

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 702; // String | A single LibCal location ID
let opts = {
  'categoryId': 3334, // String | If specified, will only return data for that category
  'zoneId': 87 // String | If specified, will only return data for that zone
};
apiInstance.libcalSpaceUtilizationGet(ids, opts, (error, data, response) => {
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
 **ids** | **String**| A single LibCal location ID | 
 **categoryId** | **String**| If specified, will only return data for that category | [optional] 
 **zoneId** | **String**| If specified, will only return data for that zone | [optional] 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceZoneGet

> InlineResponse20038 libcalSpaceZoneGet(opts)

Get LibCal zone by ID

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let opts = {
  'zoneId': 87 // String | If specified, will only return data for that zone
};
apiInstance.libcalSpaceZoneGet(opts, (error, data, response) => {
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
 **zoneId** | **String**| If specified, will only return data for that zone | [optional] 

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## libcalSpaceZonesGet

> InlineResponse20037 libcalSpaceZonesGet(ids)

Get LibCal zones by location

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new uclapi.LibCalApi();
let ids = 702; // String | A single LibCal location ID
apiInstance.libcalSpaceZonesGet(ids, (error, data, response) => {
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
 **ids** | **String**| A single LibCal location ID | 

### Return type

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

