export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hu00000O6whkQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T13:45:37.693Z","sOmniScriptId":"a29Hu0000058VKjQAS","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"2dcef4fb-f28c-77d0-fdd2-f5914fd64262","labelMap":{"DiscountApprovalMessage":"DiscountApprovalStep:DiscountApprovalMessage","cpqDiscountApprovalUtil":"DiscountApprovalStep:cpqDiscountApprovalUtil","DiscountApprovalStep":"DiscountApprovalStep","CallSubmitDiscountsIP":"CallSubmitDiscountsIP"},"labelKeyMap":{"New":"New","CPQDiscounts":"Discounts"},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"","pubsub":true,"preTransformBundle":"","postTransformBundle":"","postMessage":"","message":{"responseMessage":"%responseMessage%","isApprovalDone":"%isSubmitSuccessful%"},"label":null,"integrationProcedureKey":"CPQ_SubmitDiscountsForApproval","inProgressMessage":"","failureNextLabel":"","failureGoBackLabel":"","failureAbortMessage":"","failureAbortLabel":"","extraPayload":{},"errorMessage:default":"","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CallSubmitDiscountsIP","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"CallSubmitDiscountsIP","lwcId":"lwc0"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"","saveLabel":"","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"","nextWidth":3,"nextLabel":"","message":{},"label":"CPQDiscounts","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage:default":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"","completeLabel":"","chartLabel":"","cancelMessage":"","cancelLabel":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"DiscountApprovalStep":"","DiscountApprovalMessage":""},"aggElements":{"cpqDiscountApprovalUtil":""}},"offSet":0,"name":"DiscountApprovalStep","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":1,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqDiscountApprovalUtil","hide":false,"disOnTplt":false,"customAttributes":[],"controlWidth":12,"conditionType":"Hide if False","bStandalone":true},"name":"cpqDiscountApprovalUtil","level":1,"JSONPath":"DiscountApprovalStep:cpqDiscountApprovalUtil","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Area","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"label":"CPQDiscounts","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"%responseMessage%","debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"DiscountApprovalMessage","level":1,"JSONPath":"DiscountApprovalStep:DiscountApprovalMessage","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc11-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"DiscountApprovalStep","lwcId":"lwc1"}],"bReusable":false,"bpVersion":2,"bpType":"LWCCPQ","bpSubType":"ApproveDiscountItems","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};