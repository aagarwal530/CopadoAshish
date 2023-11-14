let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"groups\": []}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1632370369313-ky19rlqdx","label":"searchEventToMultisiteUtil","stateAction":{"eventName":"cpq_groups_{recordId}","extraParams":{"searchString":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1632370382980","message":"cpq_search_groups","subType":"PubSub","type":"Event"}},{"card":"{card}","draggable":false,"isOpen":true,"key":"1632370369313-6ir1dbedz","label":"UpdateSearchValue","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.searchValue","fieldValue":"{action.value}"}],"id":"flex-action-1632370398045","type":"cardAction"}}],"channelname":"groupsearch_{recordId}","displayLabel":"groupsearch_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1632370369313-x915sxuna","label":"clearSearch","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.searchValue","fieldValue":""}],"id":"flex-action-1631692098505","type":"cardAction"}}],"channelname":"groupsearch_{recordId}","displayLabel":"groupsearch_{recordId}:clearsearch","element":"action","eventLabel":"pubsub","eventname":"clearsearch","eventtype":"pubsub","key":"event-1","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCpqMultisiteGroupListContainer_1_Vlocity","Id":"0RbHu000000eU4v0AM","ManageableState":"unmanaged","MasterLabel":"cfCpqMultisiteGroupListContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqMultiSiteGroupsList"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"multisite-group-member-container-Text-0","key":"element_element_block_0_0_baseInputElement_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"iconNameLeft","value":"utility:search"},{"id":1,"label":"variant","value":"label-hidden"},{"id":2,"label":"size","value":"xx-small"},{"id":3,"label":"name","value":"groupsearch_{recordId}"},{"id":4,"label":"value","value":"{Session.searchValue}"}],"label":"Search","placeholder":"{Label.CPQSearch}"},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-bottom_xx-small cpq__multisite-group-search","container":{"class":""},"customClass":"cpq__multisite-group-search","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-bottom_xx-small cpq__multisite-group-search","container":{"class":""},"customClass":"cpq__multisite-group-search","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"multisite-group-member-container-FlexCard-1","key":"element_element_block_0_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqMultiSiteGroupsList","cardNode":"{record.groups}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"group-dropdown-container","container":{"class":""},"customClass":"group-dropdown-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"group-dropdown-container","container":{"class":""},"customClass":"group-dropdown-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"multisite-group-member-container","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultisiteGroupListContainer","Id":"a3gHu0000022Yy5QAC","vlocity_cmt__GlobalKey__c":"cpqMultisiteGroupListContainer/Vlocity/1/1631691452165"};
  export default definition