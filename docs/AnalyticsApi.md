# uclapi.AnalyticsApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardApiAnalyticsMethodsGet**](AnalyticsApi.md#dashboardApiAnalyticsMethodsGet) | **GET** /dashboard/api/analytics/methods | Gets all methods for a given service and their popularity
[**dashboardApiAnalyticsOauthTotalByDeptGet**](AnalyticsApi.md#dashboardApiAnalyticsOauthTotalByDeptGet) | **GET** /dashboard/api/analytics/oauth/total_by_dept | Gets the total number of users for a given app token, by department
[**dashboardApiAnalyticsOauthTotalGet**](AnalyticsApi.md#dashboardApiAnalyticsOauthTotalGet) | **GET** /dashboard/api/analytics/oauth/total | Gets the total number of users for a given app token
[**dashboardApiAnalyticsQuotaGet**](AnalyticsApi.md#dashboardApiAnalyticsQuotaGet) | **GET** /dashboard/api/analytics/quota | Gets the remaining daily quota for a given token
[**dashboardApiAnalyticsServicesGet**](AnalyticsApi.md#dashboardApiAnalyticsServicesGet) | **GET** /dashboard/api/analytics/services | Gets all services and their popularity
[**dashboardApiAnalyticsTotalGet**](AnalyticsApi.md#dashboardApiAnalyticsTotalGet) | **GET** /dashboard/api/analytics/total | Gets the total number of requests made from a given token



## dashboardApiAnalyticsMethodsGet

> InlineResponse20024 dashboardApiAnalyticsMethodsGet(opts)

Gets all methods for a given service and their popularity

### Example

```javascript
import uclapi from '@uclapi/sdk';

let apiInstance = new uclapi.AnalyticsApi();
let opts = {
  'service': "service_example" // String | The service to check the popularity of methods for
};
apiInstance.dashboardApiAnalyticsMethodsGet(opts, (error, data, response) => {
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
 **service** | **String**| The service to check the popularity of methods for | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardApiAnalyticsOauthTotalByDeptGet

> InlineResponse20026 dashboardApiAnalyticsOauthTotalByDeptGet()

Gets the total number of users for a given app token, by department

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

let apiInstance = new uclapi.AnalyticsApi();
apiInstance.dashboardApiAnalyticsOauthTotalByDeptGet((error, data, response) => {
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

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardApiAnalyticsOauthTotalGet

> InlineResponse20025 dashboardApiAnalyticsOauthTotalGet(opts)

Gets the total number of users for a given app token

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

let apiInstance = new uclapi.AnalyticsApi();
let opts = {
  'startDate': "startDate_example", // String | Start date to filter by
  'endDate': "endDate_example" // String | End date to filter by
};
apiInstance.dashboardApiAnalyticsOauthTotalGet(opts, (error, data, response) => {
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
 **startDate** | **String**| Start date to filter by | [optional] 
 **endDate** | **String**| End date to filter by | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardApiAnalyticsQuotaGet

> InlineResponse20022 dashboardApiAnalyticsQuotaGet()

Gets the remaining daily quota for a given token

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

let apiInstance = new uclapi.AnalyticsApi();
apiInstance.dashboardApiAnalyticsQuotaGet((error, data, response) => {
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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardApiAnalyticsServicesGet

> InlineResponse20023 dashboardApiAnalyticsServicesGet()

Gets all services and their popularity

### Example

```javascript
import uclapi from '@uclapi/sdk';

let apiInstance = new uclapi.AnalyticsApi();
apiInstance.dashboardApiAnalyticsServicesGet((error, data, response) => {
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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardApiAnalyticsTotalGet

> InlineResponse20021 dashboardApiAnalyticsTotalGet()

Gets the total number of requests made from a given token

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

let apiInstance = new uclapi.AnalyticsApi();
apiInstance.dashboardApiAnalyticsTotalGet((error, data, response) => {
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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

