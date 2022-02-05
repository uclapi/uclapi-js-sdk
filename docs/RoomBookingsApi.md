# uclapi.RoomBookingsApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roombookingsBookingsGet**](RoomBookingsApi.md#roombookingsBookingsGet) | **GET** /roombookings/bookings | Returns the results to a bookings or space availability query. It returns a paginated list of bookings.
[**roombookingsEquipmentGet**](RoomBookingsApi.md#roombookingsEquipmentGet) | **GET** /roombookings/equipment | Returns any equipment/feature information about a specific room.
[**roombookingsFreeroomsGet**](RoomBookingsApi.md#roombookingsFreeroomsGet) | **GET** /roombookings/freerooms | Given a start time and an end time, this endpoint returns all rooms which are free in that time range.
[**roombookingsRoomsGet**](RoomBookingsApi.md#roombookingsRoomsGet) | **GET** /roombookings/rooms | Returns rooms and information about them.



## roombookingsBookingsGet

> InlineResponse2007 roombookingsBookingsGet(opts)

Returns the results to a bookings or space availability query. It returns a paginated list of bookings.

Note: This endpoint only returns publicly bookable rooms. Departmentally bookable rooms are not included.

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

let apiInstance = new uclapi.RoomBookingsApi();
let opts = {
  'roomname': "roomname_example", // String | Every site (building) has a name. In some cases this is contained in the roomname as well.
  'roomid': "roomid_example", // String | The room ID (not to be confused with the roomname).
  'startDatetime': "startDatetime_example", // String | Start datetime of the booking. Returns bookings with a start_datetime after the one supplied. Follows the ISO 8601 formatting standard.
  'endDatetime': "endDatetime_example", // String | End datetime of the booking. Returns bookings with an end_datetime before the one supplied. Follows the ISO 8601 formatting standard.
  '_date': "_date_example", // String | Date of the bookings you need, in the format YYYYMMDD. Returns bookings occurring on this day. This query parameter is only considered when end_datetime and start_datetime are not supplied.
  'siteid': "siteid_example", // String | Every room is inside a site (building). All sites have IDs.
  'description': "description_example", // String | Describes what the booking is. Could contain a module code (for example WIBRG005) or just the type of activity (for example Lecture).
  'contact': "contact_example", // String | The name of the person who made the booking. Substrings of the contact name can be used, Queries for Mark will include Mark Herbster. Sometimes, a society or student group may be the contact for a booking.
  'resultsPerPage': 3.4 // Number | Number of bookings returned per page. Maximum allowed value is 1000. Defaults to 1000.
};
apiInstance.roombookingsBookingsGet(opts, (error, data, response) => {
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
 **roomname** | **String**| Every site (building) has a name. In some cases this is contained in the roomname as well. | [optional] 
 **roomid** | **String**| The room ID (not to be confused with the roomname). | [optional] 
 **startDatetime** | **String**| Start datetime of the booking. Returns bookings with a start_datetime after the one supplied. Follows the ISO 8601 formatting standard. | [optional] 
 **endDatetime** | **String**| End datetime of the booking. Returns bookings with an end_datetime before the one supplied. Follows the ISO 8601 formatting standard. | [optional] 
 **_date** | **String**| Date of the bookings you need, in the format YYYYMMDD. Returns bookings occurring on this day. This query parameter is only considered when end_datetime and start_datetime are not supplied. | [optional] 
 **siteid** | **String**| Every room is inside a site (building). All sites have IDs. | [optional] 
 **description** | **String**| Describes what the booking is. Could contain a module code (for example WIBRG005) or just the type of activity (for example Lecture). | [optional] 
 **contact** | **String**| The name of the person who made the booking. Substrings of the contact name can be used, Queries for Mark will include Mark Herbster. Sometimes, a society or student group may be the contact for a booking. | [optional] 
 **resultsPerPage** | **Number**| Number of bookings returned per page. Maximum allowed value is 1000. Defaults to 1000. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roombookingsEquipmentGet

> InlineResponse2008 roombookingsEquipmentGet(opts)

Returns any equipment/feature information about a specific room.

So, for example whether there is a Whiteboard or a DVD Player in the room. A full example can be seen here.

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

let apiInstance = new uclapi.RoomBookingsApi();
let opts = {
  'roomid': "roomid_example", // String | The room ID (not to be confused with the roomname).
  'siteid': "siteid_example" // String | Every room is inside a site (building). All sites have IDs.
};
apiInstance.roombookingsEquipmentGet(opts, (error, data, response) => {
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
 **roomid** | **String**| The room ID (not to be confused with the roomname). | [optional] 
 **siteid** | **String**| Every room is inside a site (building). All sites have IDs. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roombookingsFreeroomsGet

> InlineResponse2009 roombookingsFreeroomsGet(opts)

Given a start time and an end time, this endpoint returns all rooms which are free in that time range.

Note: This endpoint only returns publicly bookable rooms. Departmentally bookable rooms are not included.

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

let apiInstance = new uclapi.RoomBookingsApi();
let opts = {
  'startDatetime': "startDatetime_example", // String | Start datetime of the booking. Returns bookings with a start_datetime after the one supplied. Follows the ISO 8601 formatting standard.
  'endDatetime': "endDatetime_example" // String | End datetime of the booking. Returns bookings with an end_datetime before the one supplied. Follows the ISO 8601 formatting standard.
};
apiInstance.roombookingsFreeroomsGet(opts, (error, data, response) => {
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
 **startDatetime** | **String**| Start datetime of the booking. Returns bookings with a start_datetime after the one supplied. Follows the ISO 8601 formatting standard. | [optional] 
 **endDatetime** | **String**| End datetime of the booking. Returns bookings with an end_datetime before the one supplied. Follows the ISO 8601 formatting standard. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roombookingsRoomsGet

> InlineResponse2006 roombookingsRoomsGet(opts)

Returns rooms and information about them.

If you don’t specify any query parameters besides the token, all rooms will be returned.  Note: This endpoint only returns publicly bookable rooms. Departmentally bookable rooms are not included. In the response, the room field contains a list of rooms that match your query. If no filters are applied, all rooms will be returned.

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

let apiInstance = new uclapi.RoomBookingsApi();
let opts = {
  'roomname': "roomname_example", // String | Every site (building) has a name. In some cases this is contained in the roomname as well.
  'roomid': "roomid_example", // String | The room ID (not to be confused with the roomname).
  'siteid': "siteid_example", // String | Every room is inside a site (building). All sites have IDs.
  'sitename': "sitename_example", // String | Every site (building) has a name. In some cases this is contained in the roomname as well.
  'classification': "classification_example", // String | The room type ID.
  'capacity': "capacity_example" // String | Every room has a set capacity of how many people can fit inside it. When supplied, all rooms with the given capacity or greater will be returned.
};
apiInstance.roombookingsRoomsGet(opts, (error, data, response) => {
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
 **roomname** | **String**| Every site (building) has a name. In some cases this is contained in the roomname as well. | [optional] 
 **roomid** | **String**| The room ID (not to be confused with the roomname). | [optional] 
 **siteid** | **String**| Every room is inside a site (building). All sites have IDs. | [optional] 
 **sitename** | **String**| Every site (building) has a name. In some cases this is contained in the roomname as well. | [optional] 
 **classification** | **String**| The room type ID. | [optional] 
 **capacity** | **String**| Every room has a set capacity of how many people can fit inside it. When supplied, all rooms with the given capacity or greater will be returned. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

