# uclapi.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**Location**](Location.md) |  | [optional] 
**module** | [**Module**](Module.md) |  | [optional] 
**startTime** | **String** | Start time of the event. | [optional] 
**endTime** | **String** | End time of the event. | [optional] 
**duration** | **Number** | Duration of the event in minutes. | [optional] 
**sessionType** | **String** | ID of the type of session, e.g. L &#x3D; Lecture, PBL &#x3D; Problem Based Learning. These come from UCL&#39;s internal database, and are provided in case a new session type that we are not aware of is in the timetable. See session_type_str below. | [optional] 
**sessionTypeStr** | **String** | Type of event such as Lecture, Problem Based Learning, Practical, etc. If the session_type has not been recognised by us then this will have the value Unknown. | [optional] 
**sessionGroup** | **String** | Used for lab groups, or other types of small group activity that does not involve the whole cohort. When the whole cohort is invited (e.g. lectures) this value is a blank string. In the personal timetable endpoint only the labs / group sessions assigned to the user with the OAuth token provided will be returned. For example, if the user is in LAB A then Labs B onwards will not be returned. | [optional] 
**sessionTitle** | **String** | The title of the event. | [optional] 
**contact** | **String** | The name associated with the individual room booking. This is the most likely candidate for the person taking the session or lecture. This name is also the most human-readable. Apps should display this value as the lecturer for any given booking, and only use the lecturer information given in the module{lecturer{}} dictionary to reference the course lead or owner. | [optional] 


