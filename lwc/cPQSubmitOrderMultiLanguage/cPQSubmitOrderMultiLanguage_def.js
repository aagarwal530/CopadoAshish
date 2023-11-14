export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hu00000OuQarQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T14:01:19.197Z","sOmniScriptId":"a29Hu000005XdDWQAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newport":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent|1:label":null,"persistentComponent|0:label":null,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":"SubmitOrder","consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":false},"prefillJSON":"{}","lwcId":"ab09450d-9d12-dfa2-b08a-db4197fec05a","labelMap":{"TextBlockCreateAccountDiscountsSuccess":"ResultsGroup:TextBlockCreateAccountDiscountsSuccess","TextBlockOrderSubmissionResultsFailure":"ResultsGroup:TextBlockOrderSubmissionResultsFailure","TextBlockOrderSubmissionResultsSuccess":"ResultsGroup:TextBlockOrderSubmissionResultsSuccess","TextBlockOrderQueuingResultSuccess":"ResultsGroup:TextBlockOrderQueuingResultSuccess","TextBlockCanSubmitOrderFailure":"ResultsGroup:TextBlockCanSubmitOrderFailure","TextBlockCreateAccountDiscountsFailure":"ResultsGroup:TextBlockCreateAccountDiscountsFailure","NavigateToOrder":"NavigateToOrder","NavigateToAccount":"NavigateToAccount","ResultsGroup":"ResultsGroup","LockGroupsAndMembers":"LockGroupsAndMembers","SubmitOrder":"SubmitOrder","CanSubmitOrder":"CanSubmitOrder","DataRaptorExtractAction1":"DataRaptorExtractAction1","CreateAccountDiscounts":"CreateAccountDiscounts"},"labelKeyMap":{"CPQCreateAccountDiscounts":"Create Account Discounts","CPQCreateAssets":"Submit Order","CPQOrderSubmissionResults":"Submit Order Results","CPQTextBlockCreateAccountDiscountsFailure":"Account Discounts weren't created: %createAccountDiscounts:messages|1:message%.","CPQTextBlockCanSubmitOrderFailure":"Order wasn't submitted: %canSubmitOrder:messages|1:message%","CPQTextBlockOrderQueuingResultSuccess":"%canSubmitOrder:message%","CPQTextBlockOrderSubmissionResultsSuccess":"%checkout:messages|1:message%","CPQTextBlockOrderSubmissionResultsFailure":"Order wasn't submitted: %checkout:messages|1:message%","CPQTextBlockCreateAccountDiscountsSuccess":"%createAccountDiscounts:messages|1:message%"},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"createAccountDiscounts","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","":""},"remoteMethod":"createAccountDiscounts","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":"CPQCreateAccountDiscounts","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"cartId":"%cartId%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateAccountDiscounts","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateAccountDiscounts","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[null,null],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"","pubsub":false,"postMessage":"","message":{},"label":null,"inProgressMessage":"","ignoreCache":false,"failureNextLabel":"","failureGoBackLabel":"","failureAbortMessage":"","failureAbortLabel":"","errorMessage:default":"","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"orderId","element":"cartId"}],"controlWidth":12,"bundle":"CPQ_ExtractAccountIdFromCart","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"DataRaptorExtractAction1","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DataRaptorExtractAction1","lwcId":"lwc1"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"canSubmitOrder","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"canSubmitOrder","remoteClass":"SubmitOrderService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"cartId":"%cartId%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CanSubmitOrder","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CanSubmitOrder","lwcId":"lwc2"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":null,"toastComplete":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"true","condition":"="},{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"="},{"field":"canSubmitOrder:isOrderProductPresent","data":"true","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"checkout","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"checkout","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":"CPQCreateAssets","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"skipCheckoutValidation":true,"orderId":"%cartId%","cartId":"%cartId%","ContextId":"%ContextId%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SubmitOrder","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"SubmitOrder","lwcId":"lwc3"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"true","condition":"="},{"field":"canSubmitOrder:hasError","data":"false","condition":"="},{"field":"checkout:messages|1:severity","data":"INFO","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"integrationProcedureKey":"CPQ_LockGroupsAndMembers","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"cartId":"%cartId%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"LockGroupsAndMembers","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"LockGroupsAndMembers","lwcId":"lwc4"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"label":"CPQOrderSubmissionResults","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"custom":[]},"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"ResultsGroup":""},"aggElements":{}},"offSet":0,"name":"ResultsGroup","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockCreateAccountDiscountsFailure","text":"","show":{"group":{"rules":[{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"<>"}],"operator":"AND"}},"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockCreateAccountDiscountsFailure","level":1,"JSONPath":"ResultsGroup:TextBlockCreateAccountDiscountsFailure","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc50-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockCanSubmitOrderFailure","text":"","show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"false","condition":"="},{"field":"canSubmitOrder:hasError","data":"true","condition":"="}],"operator":"OR"}},"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockCanSubmitOrderFailure","level":1,"JSONPath":"ResultsGroup:TextBlockCanSubmitOrderFailure","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc51-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockOrderQueuingResultSuccess","text":"","show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"false","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockOrderQueuingResultSuccess","level":1,"JSONPath":"ResultsGroup:TextBlockOrderQueuingResultSuccess","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc52-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockOrderSubmissionResultsSuccess","text":"","show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"true","condition":"="},{"field":"canSubmitOrder:isOrderProductPresent","data":"true","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockOrderSubmissionResultsSuccess","level":1,"JSONPath":"ResultsGroup:TextBlockOrderSubmissionResultsSuccess","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc53-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockOrderSubmissionResultsFailure","text":"","show":{"group":{"rules":[{"field":"checkout:messages|1:severity","data":"ERROR","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockOrderSubmissionResultsFailure","level":1,"JSONPath":"ResultsGroup:TextBlockOrderSubmissionResultsFailure","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc54-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"CPQTextBlockCreateAccountDiscountsSuccess","text":"","show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"true","condition":"="},{"field":"canSubmitOrder:isOrderProductPresent","data":"false","condition":"="},{"field":"canSubmitOrder:hasError","data":"false","condition":"="},{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"TextBlockCreateAccountDiscountsSuccess","level":1,"JSONPath":"ResultsGroup:TextBlockCreateAccountDiscountsSuccess","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc55-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ResultsGroup","lwcId":"lwc5"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetName":"Account","targetLWCLayout":"lightning","targetId":"%accountId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"true","condition":"="},{"field":"canSubmitOrder:hasError","data":"false","condition":"="},{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"="},{"group":{"rules":[{"field":"canSubmitOrder:isOrderProductPresent","data":"false","condition":"="},{"field":"checkout:messages|1:severity","data":"INFO","condition":"="}],"operator":"OR"}}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateToAccount","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateToAccount","lwcId":"lwc6"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetName":"Order","targetLWCLayout":"lightning","targetId":"%cartId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"canSubmitOrder:canSubmitOrder","data":"false","condition":"="},{"field":"canSubmitOrder:hasError","data":"true","condition":"="},{"field":"createAccountDiscounts:messages|1:severity","data":"INFO","condition":"<>"},{"field":"checkout:messages|1:severity","data":"INFO","condition":"<>"}],"operator":"OR"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateToOrder","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateToOrder","lwcId":"lwc7"}],"bReusable":false,"bpVersion":4,"bpType":"CPQ","bpSubType":"SubmitOrder","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};