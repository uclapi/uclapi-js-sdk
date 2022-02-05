# uclapi.Sensor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description2** | **String** | Description 2. | [optional] 
**floor** | **String** | Whether the device is on the floor | [optional] 
**yPos** | **String** | The Y coordinate position of the sensor on the map. | [optional] 
**description3** | **String** | Description 3. | [optional] 
**deviceType** | **String** | Type of seat. Usually this is Desk. | [optional] 
**hostAddress** | **String** | Address of host. | [optional] 
**buildingName** | **String** | A short but human-readable name of the building that the sensor is in. | [optional] 
**roomDescription** | **String** | A short but human-readable name of the room that the sensor is in. | [optional] 
**lastTriggerType** | **String** | The last event the sensor recorded. Possible known values are Absent and Occupied, but this is not guaranteed. NB: only returned when return_states&#x3D;true. | [optional] 
**surveyId** | **String** | The ID of the library/survey that was requested in the query parameter. | [optional] 
**roomType** | **String** | The type of the room. | [optional] 
**roomName** | **String** | The name of the room. | [optional] 
**roomId** | **String** | The ID of the room. | [optional] 
**location** | **String** | The location of this sensor. | [optional] 
**surveyDeviceId** | **String** | The ID of this survey device. | [optional] 
**shareId** | **String** | The Share ID. | [optional] 
**xPos** | **String** | The X coordinate position of the sensor on the map. | [optional] 
**description1** | **String** |  | [optional] 
**hardwareId** | **String** | A unique ID for the sensor. | [optional] 
**pirAddress** | **String** | PIR address. | [optional] 
**lastTriggerTimestamp** | **String** | The last time that this sensor&#39;s update value was recorded. NB: only returned when return_states&#x3D;true. | [optional] 
**occupied** | **Boolean** | Whether the seat is occupied or not. This takes into account UCL&#39;s thirty minute rule, so it&#39;s possible that the seat could have been marked as absent a few minutes ago, but this value is still set to true, as UCL allows students to leave their seat unattended for up to thirty minutes at a time (e.g. to use the bathroom or get food). Integrations that provide live seating information to students should use this value so as to have parity with the UCL Library seating policy and the UCL Library website. NB: only returned when return_states&#x3D;true. | [optional] 


