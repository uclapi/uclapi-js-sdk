# uclapi.Room

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomname** | **String** | The name of the room. It often includes the name of the site (building) as well. | [optional] 
**roomid** | **String** | The room ID (not to be confused with the roomname). | [optional] 
**siteid** | **String** | Every room is inside a site (building). All sites have IDs. | [optional] 
**sitename** | **String** | Every site (building) has a name. In some cases this is contained in the roomname as well. | [optional] 
**capacity** | **Number** | Every room has a set capacity of how many people can fit inside it. When supplied, all rooms with the given capacity or greater will be returned. | [optional] 
**classification** | **String** | The room type ID. | [optional] 
**classificationName** | **String** | A human-readable version of the room type. AN &#x3D; Anechoic Chamber, CI &#x3D; Clinic Room, CF &#x3D; Catering Facilities CFE &#x3D; Cafe, CL &#x3D; Cloakroom, CR &#x3D; Classroom, ER &#x3D; Equipment Room, IN &#x3D; Installation, LA &#x3D; Laboratory, LB &#x3D; Library, LT &#x3D; Lecture Theatre, MR &#x3D; Meeting Room, OF &#x3D; Office, PC1 &#x3D; Public Cluster, PC2 &#x3D; Public Cluster - Tutorial, PC3 &#x3D; Public Cluster - Students, RC &#x3D; Reverberation Chamber, SS &#x3D; Social Space, STU &#x3D; Studio, TH &#x3D; Theatre. If the room type is unknown, this value will be set to &#39;Unknown Room Type&#39;. | [optional] 
**automated** | **String** | Whether bookings in this room will be confirmed automatically. A stands for automated, and N for not automated. P represents that the confirmation will be automatic, but only under certain circumstances. | [optional] 
**location** | [**RoomLocation**](RoomLocation.md) |  | [optional] 


