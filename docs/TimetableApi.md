# uclapi.TimetableApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timetableBymoduleGet**](TimetableApi.md#timetableBymoduleGet) | **GET** /timetable/bymodule | Returns a yearly timetable for the supplied modules.
[**timetableDataCoursesGet**](TimetableApi.md#timetableDataCoursesGet) | **GET** /timetable/data/courses | Returns a list of every course taught by a given department at UCL.
[**timetableDataCoursesModulesGet**](TimetableApi.md#timetableDataCoursesModulesGet) | **GET** /timetable/data/courses/modules | Returns a list of every module taught on a given course at UCL.
[**timetableDataDepartmentsGet**](TimetableApi.md#timetableDataDepartmentsGet) | **GET** /timetable/data/departments | Returns a list of every department at UCL, along with its internal name. This can be used with the /data/modules endpoint to request information on all modules for a department.
[**timetableDataModulesGet**](TimetableApi.md#timetableDataModulesGet) | **GET** /timetable/data/modules | Returns a list of every module taught by a given department at UCL.
[**timetablePersonalGet**](TimetableApi.md#timetablePersonalGet) | **GET** /timetable/personal | Returns the personal timetable of the user.



## timetableBymoduleGet

> InlineResponse200 timetableBymoduleGet(modules, opts)

Returns a yearly timetable for the supplied modules.

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

let apiInstance = new uclapi.TimetableApi();
let modules = "modules_example"; // String | A comma-separated list of the module codes you want the timetable of. You can supply either standard module codes (e.g. COMP0133), or full codes including the instance of the module (COMP0133-A7U-T1). Note that if you do not supply an instance, every single timetable entry will be returned including duplicates for the same module taught as multiple instances. It is recommended that a full module code including instance be supplied.
let opts = {
  '_date': "_date_example" // String | A date to filter entries by
};
apiInstance.timetableBymoduleGet(modules, opts, (error, data, response) => {
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
 **modules** | **String**| A comma-separated list of the module codes you want the timetable of. You can supply either standard module codes (e.g. COMP0133), or full codes including the instance of the module (COMP0133-A7U-T1). Note that if you do not supply an instance, every single timetable entry will be returned including duplicates for the same module taught as multiple instances. It is recommended that a full module code including instance be supplied. | 
 **_date** | **String**| A date to filter entries by | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timetableDataCoursesGet

> InlineResponse2003 timetableDataCoursesGet(department)

Returns a list of every course taught by a given department at UCL.

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

let apiInstance = new uclapi.TimetableApi();
let department = "department_example"; // String | The department ID available from /data/departments.
apiInstance.timetableDataCoursesGet(department, (error, data, response) => {
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
 **department** | **String**| The department ID available from /data/departments. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timetableDataCoursesModulesGet

> InlineResponse2002 timetableDataCoursesModulesGet(course, opts)

Returns a list of every module taught on a given course at UCL.

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

let apiInstance = new uclapi.TimetableApi();
let course = "course_example"; // String | The course ID available from /data/courses.
let opts = {
  'term1': true, // Boolean | Boolean designating if you would like module instances that are taught in term 1.
  'term2': true, // Boolean | Boolean designating if you would like module instances that are taught in term 2.
  'term3': true, // Boolean | Boolean designating whether or not you want module instances that are taught in term 3.
  'term1NextYear': true, // Boolean | Boolean designating if you would like module instances that are taught in term 1 of the next academic year. This is used by admissions to calculate the end dates for non-standard programmes, and therefore is rare
  'summer': true, // Boolean | Boolean designating if you would like module instances that are timetabled in the summer. This can happen in some Postgraduate and Medicine teaching arrangements, but is rare. Note that this is NOT the same as the UCL Summer School.
  'yearLong': true, // Boolean | Boolean designating if you would like module instances where the course is timetabled to last for an entire academic year.
  'lsr': true, // Boolean | Boolean designating if you would like module instances where the module is timetabled during the Late Summer Resit period. This is used internally by Examinations to timetable Late Summer Assessments (LSAs).
  'isSummerSchool': true, // Boolean | Boolean designating if you would like module instances where the course is taught as part of the UCL Summer School (true) or standard academic teaching (false).
  'session1': true, // Boolean | Boolean designating if you would like module instances where the module is taught in the first summer school session of this academic year's summer.
  'session2': true, // Boolean | Boolean designating if you would like module instances where the module is taught in the second summer school session of this academic year's summer.
  'isUndergraduate': true, // Boolean | Boolean designating if you would like undergraduate module instances.
  'onlyAvailable': true, // Boolean | Boolean designating if you would only like available module instances (i.e. ones that are not compulsory for the course).
  'onlyCompulsory': true // Boolean | Boolean designating if you would only like compulsory module instances.
};
apiInstance.timetableDataCoursesModulesGet(course, opts, (error, data, response) => {
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
 **course** | **String**| The course ID available from /data/courses. | 
 **term1** | **Boolean**| Boolean designating if you would like module instances that are taught in term 1. | [optional] 
 **term2** | **Boolean**| Boolean designating if you would like module instances that are taught in term 2. | [optional] 
 **term3** | **Boolean**| Boolean designating whether or not you want module instances that are taught in term 3. | [optional] 
 **term1NextYear** | **Boolean**| Boolean designating if you would like module instances that are taught in term 1 of the next academic year. This is used by admissions to calculate the end dates for non-standard programmes, and therefore is rare | [optional] 
 **summer** | **Boolean**| Boolean designating if you would like module instances that are timetabled in the summer. This can happen in some Postgraduate and Medicine teaching arrangements, but is rare. Note that this is NOT the same as the UCL Summer School. | [optional] 
 **yearLong** | **Boolean**| Boolean designating if you would like module instances where the course is timetabled to last for an entire academic year. | [optional] 
 **lsr** | **Boolean**| Boolean designating if you would like module instances where the module is timetabled during the Late Summer Resit period. This is used internally by Examinations to timetable Late Summer Assessments (LSAs). | [optional] 
 **isSummerSchool** | **Boolean**| Boolean designating if you would like module instances where the course is taught as part of the UCL Summer School (true) or standard academic teaching (false). | [optional] 
 **session1** | **Boolean**| Boolean designating if you would like module instances where the module is taught in the first summer school session of this academic year&#39;s summer. | [optional] 
 **session2** | **Boolean**| Boolean designating if you would like module instances where the module is taught in the second summer school session of this academic year&#39;s summer. | [optional] 
 **isUndergraduate** | **Boolean**| Boolean designating if you would like undergraduate module instances. | [optional] 
 **onlyAvailable** | **Boolean**| Boolean designating if you would only like available module instances (i.e. ones that are not compulsory for the course). | [optional] 
 **onlyCompulsory** | **Boolean**| Boolean designating if you would only like compulsory module instances. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timetableDataDepartmentsGet

> InlineResponse2001 timetableDataDepartmentsGet()

Returns a list of every department at UCL, along with its internal name. This can be used with the /data/modules endpoint to request information on all modules for a department.

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

let apiInstance = new uclapi.TimetableApi();
apiInstance.timetableDataDepartmentsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timetableDataModulesGet

> InlineResponse2002 timetableDataModulesGet(department)

Returns a list of every module taught by a given department at UCL.

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

let apiInstance = new uclapi.TimetableApi();
let department = "department_example"; // String | The department ID available from /data/departments.
apiInstance.timetableDataModulesGet(department, (error, data, response) => {
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
 **department** | **String**| The department ID available from /data/departments. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timetablePersonalGet

> InlineResponse200 timetablePersonalGet(clientSecret, opts)

Returns the personal timetable of the user.

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

let apiInstance = new uclapi.TimetableApi();
let clientSecret = "clientSecret_example"; // String | Client secret of the authenticating app
let opts = {
  '_date': "_date_example" // String | A date to filter entries by
};
apiInstance.timetablePersonalGet(clientSecret, opts, (error, data, response) => {
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
 **clientSecret** | **String**| Client secret of the authenticating app | 
 **_date** | **String**| A date to filter entries by | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

