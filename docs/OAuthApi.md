# uclapi.OAuthApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthTokenGet**](OAuthApi.md#oauthTokenGet) | **GET** /oauth/token | A token will be generated which your app can use to get user’s personal data in JSON format from the OAuthSecurity/user/data.
[**oauthUserDataGet**](OAuthApi.md#oauthUserDataGet) | **GET** /oauth/user/data | Returns personal data on a student at UCL.
[**oauthUserStudentnumberGet**](OAuthApi.md#oauthUserStudentnumberGet) | **GET** /oauth/user/studentnumber | You can use the oauth/user/data endpoint to find out whether the user is a student before you call this endpoint. If you call this endpoint and the user is not a student, an error will be returned.



## oauthTokenGet

> InlineResponse2004 oauthTokenGet(clientSecret, clientId, code)

A token will be generated which your app can use to get user’s personal data in JSON format from the OAuthSecurity/user/data.

### Example

```javascript
import uclapi from '@uclapi/sdk';
let defaultClient = uclapi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuthSecurity
let OAuthSecurity = defaultClient.authentications['OAuthSecurity'];
OAuthSecurity.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new uclapi.OAuthApi();
let clientSecret = "clientSecret_example"; // String | Client secret of the authenticating app
let clientId = "clientId_example"; // String | Client ID of the authenticating app.
let code = "code_example"; // String | Secret code obtained from the authorise endpoint.
apiInstance.oauthTokenGet(clientSecret, clientId, code, (error, data, response) => {
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
 **clientId** | **String**| Client ID of the authenticating app. | 
 **code** | **String**| Secret code obtained from the authorise endpoint. | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthUserDataGet

> UserData oauthUserDataGet(clientSecret)

Returns personal data on a student at UCL.

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

let apiInstance = new uclapi.OAuthApi();
let clientSecret = "clientSecret_example"; // String | Client secret of the authenticating app
apiInstance.oauthUserDataGet(clientSecret, (error, data, response) => {
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

### Return type

[**UserData**](UserData.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthUserStudentnumberGet

> InlineResponse2005 oauthUserStudentnumberGet(clientSecret)

You can use the oauth/user/data endpoint to find out whether the user is a student before you call this endpoint. If you call this endpoint and the user is not a student, an error will be returned.

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

let apiInstance = new uclapi.OAuthApi();
let clientSecret = "clientSecret_example"; // String | Client secret of the authenticating app
apiInstance.oauthUserStudentnumberGet(clientSecret, (error, data, response) => {
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

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[OAuthSecurity](../README.md#OAuthSecurity), [OAuthToken](../README.md#OAuthToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

