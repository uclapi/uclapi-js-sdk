# uclapi.SearchApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchPeopleGet**](SearchApi.md#searchPeopleGet) | **GET** /search/people | Returns matching people and information about them.



## searchPeopleGet

> InlineResponse20010 searchPeopleGet(query)

Returns matching people and information about them.

Note that this endpoint only returns a maximum of 20 matches.  Following a change to UCL&#39;s systems in 2019, this endpoint only returns staff; students will not be returned through this API.

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

let apiInstance = new uclapi.SearchApi();
let query = "query_example"; // String | Name of the person you are searching for.
apiInstance.searchPeopleGet(query, (error, data, response) => {
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
 **query** | **String**| Name of the person you are searching for. | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

