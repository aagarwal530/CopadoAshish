export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hu00000O6whkQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T13:56:36.247Z","sOmniScriptId":"a29Hu0000058VKgQAS","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"top","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"253d56ef-497a-efd3-a897-4643e5aa5efe","labelMap":{"cpqSubAccMultisiteGridTable":"GroupSubscriberAccount:cpqSubAccMultisiteGridTable","multisiteHeaderSubAccFlexCard":"GroupSubscriberAccount:multisiteHeaderSubAccFlexCard","cpqMultisiteUtilLWCSubAcc":"GroupSubscriberAccount:cpqMultisiteUtilLWCSubAcc","MSGroupItemsConfigureTogetherSubAcc":"GroupSubscriberAccount:MSGroupItemsConfigureTogetherSubAcc","cpqLocationsMultisiteGridTable":"GroupLocation:cpqLocationsMultisiteGridTable","multisiteHeaderLocationsFlexCard":"GroupLocation:multisiteHeaderLocationsFlexCard","cpqMultisiteUtilLWCLocations":"GroupLocation:cpqMultisiteUtilLWCLocations","MSGroupItemsConfigureTogetherLocations":"GroupLocation:MSGroupItemsConfigureTogetherLocations","cpqSAMultisiteGridTable":"GroupServiceAccount:cpqSAMultisiteGridTable","multisiteHeaderSAFlexCard":"GroupServiceAccount:multisiteHeaderSAFlexCard","cpqMultisiteUtilLWCSA":"GroupServiceAccount:cpqMultisiteUtilLWCSA","MSGroupItemsConfigureTogetherSA":"GroupServiceAccount:MSGroupItemsConfigureTogetherSA","cpqPRMultisiteGridTable":"GroupPremises:cpqPRMultisiteGridTable","multisiteHeaderPRFlexCard":"GroupPremises:multisiteHeaderPRFlexCard","cpqMultisiteUtilLWCPremises":"GroupPremises:cpqMultisiteUtilLWCPremises","MSGroupItemsConfigureTogetherPR":"GroupPremises:MSGroupItemsConfigureTogetherPR","cpqSPMultisiteGridTable":"GroupServicePoints:cpqSPMultisiteGridTable","multisiteHeaderSPFlexCard":"GroupServicePoints:multisiteHeaderSPFlexCard","cpqMultisiteUtilLWCSP":"GroupServicePoints:cpqMultisiteUtilLWCSP","MSGroupItemsConfigureTogetherSP":"GroupServicePoints:MSGroupItemsConfigureTogetherSP","NavigateOrder":"NavigateOrder","NavigateQuote":"NavigateQuote","GroupSubscriberAccount":"GroupSubscriberAccount","GroupLocation":"GroupLocation","GroupServiceAccount":"GroupServiceAccount","GroupPremises":"GroupPremises","GroupServicePoints":"GroupServicePoints","MultisiteSetValues":"MultisiteSetValues","CANCEL":"CANCEL"},"labelKeyMap":{"vlocity_cmt__OmnicancelLabel":"Cancel","vlocity_cmt__OmnicancelMessage":"Are you sure? Any unsaved changes will be lost.","MSServiceLabel":"Service Points","CPQCartItemPremisesLabel":"Premises","CPQServiceAccount":"Service Account","Locations":"Locations","SubscriberAccount":"Subscriber Accounts","MSGroupItemsConfigureTogether":"Group items to configure together."},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Cancel Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Record","targetLWCLayout":"lightning","targetId":"%parentId%","targetFilter":"Recent","ssm":false,"showCancelPrompt":true,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"vlocity_cmt__OmnicancelLabel","iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"cancelMessage":"vlocity_cmt__OmnicancelMessage","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CANCEL","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bCancel":true,"JSONPath":"CANCEL","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"subscriberAccountParentRecords":{"type":"SubscriberAccount","memberType":"SubscriberAccount"},"subscriberAccountChannelName":"=CONCATENATE(\"cpq_\", %ContextId%,\"_SubscriberAccount\")","showSubscriberAccount":"= IF(CONTAINS(%selectedTypes%,\"SubscriberAccount\"), \"yes\", \"no\")","showServicePoints":"= IF(CONTAINS(%selectedTypes%,\"Service\"), \"yes\", \"no\")","showServiceAccount":"= IF(CONTAINS(%selectedTypes%,\"ServiceAccount\"), \"yes\", \"no\")","showPremises":"= IF(CONTAINS(%selectedTypes%,\"Premise\"), \"yes\", \"no\")","showLocation":"= IF(CONTAINS(%selectedTypes%,\"Location\"), \"yes\", \"no\")","servicePointsParentRecords":{"type":"SP","memberType":"Service Points"},"servicePointChannelName":"=CONCATENATE(\"cpq_\", %ContextId%,\"_SP\")","serviceAccountParentRecords":{"type":"ServiceAccount","memberType":"ServiceAccount"},"serviceAccountChannelName":"=CONCATENATE(\"cpq_\", %ContextId%,\"_ServiceAccount\")","premisesParentRecords":{"type":"premises","memberType":"Premises"},"premisesChannelName":"=CONCATENATE(\"cpq_\", %ContextId%,\"_premises\")","locationsChannelName":"=CONCATENATE(\"cpq_\", %ContextId%,\"_Location\")","locationParentRecords":{"type":"Location","memberType":"Location"}},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"MultisiteSetValues","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"MultisiteSetValues","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"showServicePoints","data":"yes","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"custom":[]},"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":"MSServiceLabel","cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"GroupServicePoints":""},"aggElements":{"cpqMultisiteUtilLWCSP":"","multisiteHeaderSPFlexCard":"","cpqSPMultisiteGridTable":""}},"offSet":0,"name":"GroupServicePoints","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":2,"response":null,"propSetMap":{"textKey":"MSGroupItemsConfigureTogether","text":"","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MSGroupItemsConfigureTogetherSP","level":1,"JSONPath":"GroupServicePoints:MSGroupItemsConfigureTogetherSP","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"transformSiteColumnsUsingBasicAlgo","name":"transform-site-columns-method-name"},{"source":"%servicePointChannelName%","name":"channel-name"},{"source":"multisite","name":"custom-event-name"},{"source":"transformSiteDataUsingBasicAlgo","name":"transform-site-data-method-name"},{"source":"Id.value","name":"site-key-field"},{"source":"%parentId%","name":"parent-id"},{"source":"%ContextId%","name":"context-id"},{"source":"10","name":"page-size"},{"source":"%cartType%","name":"cart-type"},{"source":"MultiSite_GetGroups","name":"get-groups-i-p-name"},{"source":"MultiSite_GetGroupMembers","name":"get-group-members-i-p-name"},{"source":"ServicePoint","name":"member-type"},{"source":"MultiSite_GetUngroupedRecords","name":"get-ungrouped-records-i-p-name"},{"source":"MultiSite_GetFilterFieldList","name":"get-filter-field-list-i-p-name"},{"source":"MultiSite_GetObjectFieldsDescribe","name":"get-object-fields-describe-i-p-name"},{"source":"30","name":"groups-page-size"},{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultisiteUtilLWCSP","level":1,"JSONPath":"GroupServicePoints:cpqMultisiteUtilLWCSP","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultiSiteHeader","label":null,"hide":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%servicePointsParentRecords%","name":"records"},{"source":"%servicePointsParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"multisiteHeaderSPFlexCard","level":1,"JSONPath":"GroupServicePoints:multisiteHeaderSPFlexCard","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultisiteGridTable","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%ContextId%","name":"record-id"},{"source":"true","name":"parent-data"},{"source":"%servicePointsParentRecords%","name":"records"},{"source":"%servicePointsParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqSPMultisiteGridTable","level":1,"JSONPath":"GroupServicePoints:cpqSPMultisiteGridTable","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent3":true,"lwcId":"lwc23-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GroupServicePoints","lwcId":"lwc2"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"showPremises","data":"yes","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage:default":null,"errorMessage":{"custom":[]},"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":"CPQCartItemPremisesLabel","cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"GroupPremises":""},"aggElements":{"cpqMultisiteUtilLWCPremises":"","multisiteHeaderPRFlexCard":"","cpqPRMultisiteGridTable":""}},"offSet":0,"name":"GroupPremises","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":3,"response":null,"propSetMap":{"textKey":"MSGroupItemsConfigureTogether","text":"","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MSGroupItemsConfigureTogetherPR","level":1,"JSONPath":"GroupPremises:MSGroupItemsConfigureTogetherPR","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"transformSiteColumnsUsingBasicAlgo","name":"transform-site-columns-method-name"},{"source":"%premisesChannelName%","name":"channel-name"},{"source":"multisite","name":"custom-event-name"},{"source":"transformSiteDataUsingBasicAlgo","name":"transform-site-data-method-name"},{"source":"Id.value","name":"site-key-field"},{"source":"%parentId%","name":"parent-id"},{"source":"%ContextId%","name":"context-id"},{"source":"10","name":"page-size"},{"source":"%cartType%","name":"cart-type"},{"source":"MultiSite_GetGroups","name":"get-groups-i-p-name"},{"source":"MultiSite_GetGroupMembers","name":"get-group-members-i-p-name"},{"source":"Premises","name":"member-type"},{"source":"MultiSite_GetUngroupedRecords","name":"get-ungrouped-records-i-p-name"},{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultisiteUtilLWCPremises","level":1,"JSONPath":"GroupPremises:cpqMultisiteUtilLWCPremises","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent4":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultiSiteHeader","label":null,"hide":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%premisesParentRecords%","name":"records"},{"source":"%premisesParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"multisiteHeaderPRFlexCard","level":1,"JSONPath":"GroupPremises:multisiteHeaderPRFlexCard","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent5":true,"lwcId":"lwc32-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultisiteGridTable","hide":false,"disOnTplt":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%premisesParentRecords%","name":"records"},{"source":"%premisesParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqPRMultisiteGridTable","level":1,"JSONPath":"GroupPremises:cpqPRMultisiteGridTable","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent6":true,"lwcId":"lwc33-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GroupPremises","lwcId":"lwc3"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"showServiceAccount","data":"yes","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage:default":null,"errorMessage":{"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":"CPQServiceAccount","cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"GroupServiceAccount":""},"aggElements":{"cpqMultisiteUtilLWCSA":"","multisiteHeaderSAFlexCard":"","cpqSAMultisiteGridTable":""}},"offSet":0,"name":"GroupServiceAccount","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":4,"response":null,"propSetMap":{"textKey":"MSGroupItemsConfigureTogether","text":"","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MSGroupItemsConfigureTogetherSA","level":1,"JSONPath":"GroupServiceAccount:MSGroupItemsConfigureTogetherSA","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc40-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":4,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"transformSiteColumnsUsingBasicAlgo","name":"transform-site-columns-method-name"},{"source":"%serviceAccountChannelName%","name":"channel-name"},{"source":"multisite","name":"custom-event-name"},{"source":"transformSiteDataUsingBasicAlgo","name":"transform-site-data-method-name"},{"source":"Id.value","name":"site-key-field"},{"source":"%parentId%","name":"parent-id"},{"source":"%ContextId%","name":"context-id"},{"source":"10","name":"page-size"},{"source":"%cartType%","name":"cart-type"},{"source":"MultiSite_GetGroups","name":"get-groups-i-p-name"},{"source":"MultiSite_GetGroupMembers","name":"get-group-members-i-p-name"},{"source":"ServiceAccount","name":"member-type"},{"source":"MultiSite_GetUngroupedRecords","name":"get-ungrouped-records-i-p-name"},{"source":"MultiSite_GetFilterFieldList","name":"get-filter-field-list-i-p-name"},{"source":"MultiSite_GetObjectFieldsDescribe","name":"get-object-fields-describe-i-p-name"},{"source":"30","name":"groups-page-size"},{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultisiteUtilLWCSA","level":1,"JSONPath":"GroupServiceAccount:cpqMultisiteUtilLWCSA","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent7":true,"lwcId":"lwc41-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":4,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultiSiteHeader","label":null,"hide":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%serviceAccountParentRecords%","name":"records"},{"source":"%serviceAccountParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"multisiteHeaderSAFlexCard","level":1,"JSONPath":"GroupServiceAccount:multisiteHeaderSAFlexCard","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent8":true,"lwcId":"lwc42-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":4,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultisiteGridTable","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%ContextId%","name":"record-id"},{"source":"true","name":"parent-data"},{"source":"%serviceAccountParentRecords%","name":"records"},{"source":"%serviceAccountParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqSAMultisiteGridTable","level":1,"JSONPath":"GroupServiceAccount:cpqSAMultisiteGridTable","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent9":true,"lwcId":"lwc43-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GroupServiceAccount","lwcId":"lwc4"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"showLocation","data":"yes","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage:default":null,"errorMessage":{"custom":[]},"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":"Locations","cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"GroupLocation":""},"aggElements":{"cpqMultisiteUtilLWCLocations":"","multisiteHeaderLocationsFlexCard":"","cpqLocationsMultisiteGridTable":""}},"offSet":0,"name":"GroupLocation","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"MSGroupItemsConfigureTogether","text":"","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MSGroupItemsConfigureTogetherLocations","level":1,"JSONPath":"GroupLocation:MSGroupItemsConfigureTogetherLocations","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc50-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"transformSiteColumnsUsingBasicAlgo","name":"transform-site-columns-method-name"},{"source":"%locationsChannelName%","name":"channel-name"},{"source":"multisite","name":"custom-event-name"},{"source":"transformSiteDataUsingBasicAlgo","name":"transform-site-data-method-name"},{"source":"Id.value","name":"site-key-field"},{"source":"%parentId%","name":"parent-id"},{"source":"%ContextId%","name":"context-id"},{"source":"10","name":"page-size"},{"source":"%cartType%","name":"cart-type"},{"source":"MultiSite_GetGroups","name":"get-groups-i-p-name"},{"source":"MultiSite_GetGroupMembers","name":"get-group-members-i-p-name"},{"source":"Location","name":"member-type"},{"source":"MultiSite_GetUngroupedRecords","name":"get-ungrouped-records-i-p-name"},{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultisiteUtilLWCLocations","level":1,"JSONPath":"GroupLocation:cpqMultisiteUtilLWCLocations","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent10":true,"lwcId":"lwc51-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultiSiteHeader","label":null,"hide":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%locationParentRecords%","name":"records"},{"source":"%locationParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"multisiteHeaderLocationsFlexCard","level":1,"JSONPath":"GroupLocation:multisiteHeaderLocationsFlexCard","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent11":true,"lwcId":"lwc52-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultisiteGridTable","hide":false,"disOnTplt":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%locationParentRecords%","name":"records"},{"source":"%locationParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqLocationsMultisiteGridTable","level":1,"JSONPath":"GroupLocation:cpqLocationsMultisiteGridTable","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent12":true,"lwcId":"lwc53-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GroupLocation","lwcId":"lwc5"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"showSubscriberAccount","data":"yes","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage:default":null,"errorMessage":{"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":"SubscriberAccount","cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"GroupSubscriberAccount":""},"aggElements":{"cpqMultisiteUtilLWCSubAcc":"","multisiteHeaderSubAccFlexCard":"","cpqSubAccMultisiteGridTable":""}},"offSet":0,"name":"GroupSubscriberAccount","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"textKey":"MSGroupItemsConfigureTogether","text":"","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MSGroupItemsConfigureTogetherSubAcc","level":1,"JSONPath":"GroupSubscriberAccount:MSGroupItemsConfigureTogetherSubAcc","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc60-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":6,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"transformSiteColumnsUsingBasicAlgo","name":"transform-site-columns-method-name"},{"source":"%subscriberAccountChannelName%","name":"channel-name"},{"source":"multisite","name":"custom-event-name"},{"source":"transformSiteDataUsingBasicAlgo","name":"transform-site-data-method-name"},{"source":"Id.value","name":"site-key-field"},{"source":"%parentId%","name":"parent-id"},{"source":"%ContextId%","name":"context-id"},{"source":"10","name":"page-size"},{"source":"%cartType%","name":"cart-type"},{"source":"MultiSite_GetGroups","name":"get-groups-i-p-name"},{"source":"MultiSite_GetGroupMembers","name":"get-group-members-i-p-name"},{"source":"SubscriberAccount","name":"member-type"},{"source":"MultiSite_GetUngroupedRecords","name":"get-ungrouped-records-i-p-name"},{"source":"MultiSite_GetFilterFieldList","name":"get-filter-field-list-i-p-name"},{"source":"MultiSite_GetObjectFieldsDescribe","name":"get-object-fields-describe-i-p-name"},{"source":"30","name":"groups-page-size"},{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultisiteUtilLWCSubAcc","level":1,"JSONPath":"GroupSubscriberAccount:cpqMultisiteUtilLWCSubAcc","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent13":true,"lwcId":"lwc61-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":6,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultiSiteHeader","label":null,"hide":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%ContextId%","name":"record-id"},{"source":"%subscriberAccountParentRecords%","name":"records"},{"source":"%subscriberAccountParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"multisiteHeaderSubAccFlexCard","level":1,"JSONPath":"GroupSubscriberAccount:multisiteHeaderSubAccFlexCard","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent14":true,"lwcId":"lwc62-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":6,"response":null,"propSetMap":{"show":null,"lwcName":"cfCpqMultisiteGridTable","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%ContextId%","name":"record-id"},{"source":"true","name":"parent-data"},{"source":"%subscriberAccountParentRecords%","name":"records"},{"source":"%subscriberAccountParentRecords%","name":"parent-attribute"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqSubAccMultisiteGridTable","level":1,"JSONPath":"GroupSubscriberAccount:cpqSubAccMultisiteGridTable","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent15":true,"lwcId":"lwc63-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GroupSubscriberAccount","lwcId":"lwc6"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Record","targetName":"Quote","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"cartType","data":"Quote","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateQuote","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateQuote","lwcId":"lwc7"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Record","targetName":"Order","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"cartType","data":"Order","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateOrder","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateOrder","lwcId":"lwc8"}],"bReusable":false,"bpVersion":2,"bpType":"CPQ","bpSubType":"MultisiteConfigurator","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{"servicePointChannelName":null,"parentId":null,"ContextId":null,"cartType":null,"servicePointsParentRecords":null,"premisesChannelName":null,"premisesParentRecords":null,"serviceAccountChannelName":null,"serviceAccountParentRecords":null,"locationsChannelName":null,"locationParentRecords":null,"subscriberAccountChannelName":null,"subscriberAccountParentRecords":null}};