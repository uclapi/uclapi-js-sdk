# uclapi.OAuthApi

All URIs are relative to *https://uclapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthAuthoriseGet**](OAuthApi.md#oauthAuthoriseGet) | **GET** /oauth/authorise | Authorises a user against the API
[**oauthTokenGet**](OAuthApi.md#oauthTokenGet) | **GET** /oauth/token | A token will be generated which your app can use to get user’s personal data in JSON format from the OAuthSecurity/user/data.
[**oauthUserDataGet**](OAuthApi.md#oauthUserDataGet) | **GET** /oauth/user/data | Returns personal data on a student at UCL.
[**oauthUserStudentnumberGet**](OAuthApi.md#oauthUserStudentnumberGet) | **GET** /oauth/user/studentnumber | You can use the oauth/user/data endpoint to find out whether the user is a student before you call this endpoint. If you call this endpoint and the user is not a student, an error will be returned.



## oauthAuthoriseGet

> oauthAuthoriseGet(clientId, state)

Authorises a user against the API

This endpoint should be used to authorise a user against the API.  It will perform a redirect if the user successfully logged in and accepted/denied the request.  See the below code samples for how you might implement this in your code.  Python: &#x60;&#x60;&#x60;python  url &#x3D; \&quot;https://uclapi.com/oauth/authorise/?client_id&#x3D;123&amp;state&#x3D;1\&quot;  &#39;&#39;&#39;   in a desktop app, script, or for testing &#39;&#39;&#39; import webbrowser webbrowser.open_new(url)  # note that you will also need some way receive the callback # this can be done via a web server (e.g. below)  &#39;&#39;&#39;   on a Flask server   this example covers both redirecting the user to   the /authorise page and receiving the callback &#39;&#39;&#39; from flask import Flask, redirect, request app &#x3D; Flask(__name__)  @app.route(&#39;/login&#39;) def uclapi_login():     return redirect(url)  @app.route(&#39;/callback&#39;) def receive_callback():     # receive parameters     result &#x3D; request.args.get(&#39;result&#39;, &#39;&#39;)     code &#x3D; request.args.get(&#39;code&#39;, &#39;&#39;)     state &#x3D; request.args.get(&#39;state&#39;, &#39;&#39;)     # do something with these parameters     # e.g. request an auth token from /oauth/token     return &#x60;&#x60;&#x60;  Shell: &#x60;&#x60;&#x60;shell   # linux   xdg-open \&quot;https://uclapi.com/oauth/authorise/?client_id&#x3D;123.456&amp;state&#x3D;1\&quot;      # WSL   cmd.exe /c start \&quot;https://uclapi.com/oauth/authorise/?client_id&#x3D;123^&amp;state&#x3D;1\&quot;    # note that you will also need some way to receive the callback &#x60;&#x60;&#x60;  JavaScript: &#x60;&#x60;&#x60;js const url &#x3D; \&quot;https://uclapi.com/oauth/authorise/?client_id&#x3D;123.456&amp;state&#x3D;1\&quot;  /_* in-browser *_/ window.location.href &#x3D; url // note that you will also need some way to receive the callback // this can be done via a web server (e.g. below)  /_* Node.JS Express server *_/ const express &#x3D; require(&#39;express&#39;) const app &#x3D; express()  app.get(&#39;/login&#39;, (req, res) &#x3D;&gt; res.redirect(url)) app.get(&#39;/callback&#39;, (req, res) &#x3D;&gt; {   const {     result,     code,     state   } &#x3D; req.params   // do something with these parameters   // e.g. request an auth token from /oauth/token })  app.listen(3000) &#x60;&#x60;&#x60;

### Example

```javascript
import uclapi from '@uclapi/sdk';

let apiInstance = new uclapi.OAuthApi();
let clientId = 1; // String | Client ID of the authenticating app.
let state = jAifrW3; // String | OAuth (random) state.
apiInstance.oauthAuthoriseGet(clientId, state, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the authenticating app. | 
 **state** | **String**| OAuth (random) state. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthTokenGet

> InlineResponse2004 oauthTokenGet(clientSecret, clientId, code)

A token will be generated which your app can use to get user’s personal data in JSON format from the OAuthSecurity/user/data.

This endpoint should be used to obtain a token for use in the other API endpoints.  See the below code samples for how you might implement this in your code.  Python: &#x60;&#x60;&#x60;python import requests  params &#x3D; {   \&quot;client_id\&quot;: \&quot;123.456\&quot;,   \&quot;code\&quot;: \&quot;1\&quot;,   \&quot;client_secret\&quot;: \&quot;secret\&quot;, } r &#x3D; requests.get(\&quot;https://uclapi.com/oauth/token\&quot;, params&#x3D;params) print(r.json()) &#x60;&#x60;&#x60;  Shell: &#x60;&#x60;&#x60;shell curl -G https://uclapi.com/oauth/token -d code&#x3D;mysecretcode -d client_id&#x3D;123.456 -d client_secret&#x3D;secret &#x60;&#x60;&#x60;  JavaScript: &#x60;&#x60;&#x60;js fetch(\&quot;https://uclapi.com/oauth/token?code&#x3D;mysecretcode&amp;client_id&#x3D;123.456&amp;client_secret&#x3D;secret\&quot;)   .then(response &#x3D;&gt; response.json())   .then(json &#x3D;&gt; console.log(json)); &#x60;&#x60;&#x60;

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

