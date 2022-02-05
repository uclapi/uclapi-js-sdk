# uclapi.Survey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The library survey&#39;s ID. This is used later to identify individual libraries. | [optional] 
**name** | **String** | The human-readable name of the library. | [optional] 
**active** | **Boolean** | Whether the survey is active and working. | [optional] 
**startTime** | **String** | Standard UCL opening time supplied by the backend. This field should NOT be trusted as information on when a particular library is open. This is usually set to 09:00. | [optional] 
**endTime** | **String** | Standard UCL closing time supplied by the backend. This field should NOT be trusted as information on when a particular library closes. This is usually set to 17:00. | [optional] 
**staffSurvey** | **Boolean** | Whether the survey represents a staff workspace (&#x60;true&#x60;) or a student work or study space (&#x60;false&#x60;). This is useful in apps where you set the &#x60;survey_filter&#x60; parameter to &#x60;all&#x60; and wish to do filtering of student and staff workspaces in your app or API as opposed to leaving the filtering to UCL API. By default, as &#x60;survey_filter&#x60; is set to &#x60;student&#x60; unless you specify otherwise, all workspaces will have this parameter set to &#x60;false&#x60;. | [optional] 
**maps** | **[Object]** | List of maps corresponding to regions within the library&#39;s survey. | [optional] 
**location** | [**SurveyLocation**](SurveyLocation.md) |  | [optional] 


