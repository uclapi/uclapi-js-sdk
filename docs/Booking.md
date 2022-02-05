# uclapi.Booking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slotid** | **Number** | Slot ID. | [optional] 
**endTime** | **String** | End time of the event. | [optional] 
**description** | **String** | Describes what the booking is. Could contain a module code (for example WIBRG005) or just the type of activity (for example Lecture). | [optional] 
**roomname** | **String** | The name of the room. It often includes the name of the site (building) as well. | [optional] 
**siteid** | **String** | Every room is inside a site (building). All sites have IDs. | [optional] 
**contact** | **String** | The name of the person who made the booking. Substrings of the contact name can be used: Queries for Mark will include Mark Herbster. Sometimes, a society or student group may be the contact for a booking. | [optional] 
**weeknumber** | **Number** | Timetabled week number. | [optional] 
**roomid** | **String** | The room ID (not to be confused with the roomname). | [optional] 
**startTime** | **String** | Start time of the event. | [optional] 
**phone** | **String** | Phone extension. | [optional] 


