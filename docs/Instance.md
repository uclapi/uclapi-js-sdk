# uclapi.Instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullModuleId** | **String** | The module code concatenated with the instance data. This instance data is defined by the UCL Academic Model Project, and it is expanded out within this section. | [optional] 
**classSize** | **Number** | The maximum number of students in the module permitted in that instance. In this example, twelve undergraduates are permitted to take this module in their third year, but ninety postgraduates may take the module. | [optional] 
**delivery** | [**Delivery**](Delivery.md) |  | [optional] 
**periods** | [**Period**](Period.md) |  | [optional] 
**instanceCode** | **String** | A code that, when combined with a module code, forms the &#39;full_module_id&#39; field above. This data is used to calculate the delivery and periods information that is also provided via JSON. Concatenating the module_id, a hyphen and the instance_code forms the full_module_id field. | [optional] 


