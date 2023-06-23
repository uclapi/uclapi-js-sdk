# uclapi.LibcalReserveRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **String** | Timestamp (in ISO 8601 format) at which this LibCal booking starts | 
**test** | **Number** | Whether or not this is a test booking. If set, the system will process the booking but will not actually make it. This is useful during development. | 
**nickname** | **String** | If the space to be booked has a nickname, then the nickname must be supplied here. | [optional] 
**bookings** | [**[LibcalReserveRequestBooking]**](LibcalReserveRequestBooking.md) |  | [optional] 


