let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\"name\":\"Test Add On\", \"Name\": {\"value\": \"Test Add On\"}}]","dsDelay":"","resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqConfigureCartChildProducts_3_Vlocity","Id":"0RbHu000000mJa5CAW","ManageableState":"unmanaged","MasterLabel":"cfCpqConfigureCartChildProducts_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-0","key":"element_element_block_0_0_outputField_0_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","fieldName":"Name.value","placeholder":"","record":"{record}","type":"text"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-heading_small cpq__configure-child-product-title slds-m-bottom_small","container":{"class":""},"customClass":"slds-text-heading_small cpq__configure-child-product-title slds-m-bottom_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-heading_small cpq__configure-child-product-title slds-m-bottom_small ","container":{"class":""},"customClass":"slds-text-heading_small cpq__configure-child-product-title slds-m-bottom_small ","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-1","key":"element_element_block_0_0_outputField_1_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","fieldName":"Product2.vlocity_cmt__VersionLabel__c","placeholder":"","record":"{record}","type":"text"},"size":{"default":2,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__configure-child-product-version slds-text-body_small slds-text-align_left ","container":{"class":"cpq__configure-child-product-version slds-text-body_small slds-text-align_left"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":2,"isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__configure-child-product-version slds-text-body_small slds-text-align_left ","container":{"class":"cpq__configure-child-product-version slds-text-body_small slds-text-align_left"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":2,"isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-2","key":"element_element_block_0_0_outputField_2_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","fieldName":"{Product2.Description}","placeholder":"","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__configure-child-product-description slds-m-bottom_small","container":{"class":""},"customClass":"cpq__configure-child-product-description slds-m-bottom_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__configure-child-product-description slds-m-bottom_small","container":{"class":""},"customClass":"cpq__configure-child-product-description slds-m-bottom_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-3","key":"element_element_block_0_0_outputField_3_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","placeholder":"","record":"{record}","type":"text"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 "},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-4","key":"element_element_block_0_0_action_4_0","name":"Action","parentElementKey":"element_block_0_0","property":{"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"iconColor":"#000000","record":"{record}","stateAction":{"displayName":"{Label.Add}","eventName":"cpq_{recordId}","extraParams":{"actionObjName":"addtocart","cartType":"{Parent.cartType}","getInputMethod":"prepareAddProductToCartInput","handleResponseMethod":"addProductToCartResponseHandler","hierarchyPath":"{Parent.parentPath}>{Parent.type}>{Id.value}","input":"{}","methodName":"addProductToCart","parentObject":"{Parent.parentObj}","record":"{record}"},"hasExtraParams":true,"id":"flex-action-1626269913290","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-align_absolute-center cpq__configure-child-products-add__button cpq__configure-child-products-add__button_disabled","container":{"class":""},"customClass":"slds-align_absolute-center cpq__configure-child-products-add__button cpq__configure-child-products-add__button_disabled","elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-align_absolute-center cpq__configure-child-products-add__button","container":{"class":""},"customClass":"slds-align_absolute-center cpq__configure-child-products-add__button","elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"conditionString":"actions == undefined","conditions":{"group":[{"field":"actions","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"Disabled","name":"Disabled","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-align_absolute-center cpq__configure-child-products-add__button cpq__configure-child-products-add__button_disabled","container":{"class":""},"customClass":"slds-align_absolute-center cpq__configure-child-products-add__button cpq__configure-child-products-add__button_disabled","elementStyleProperties":{"iconColor":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-5","key":"element_element_block_0_0_outputField_5_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","placeholder":"","record":"{record}","type":"text"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 "},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"solid","type":"","width":"1"},"class":"slds-p-around_x-small cpq__configure-child-product-card ","container":{"class":""},"customClass":"slds-p-around_x-small cpq__configure-child-product-card ","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"solid","type":"","width":"1"},"class":"slds-p-around_x-small cpq__configure-child-product-card ","container":{"class":""},"customClass":"slds-p-around_x-small cpq__configure-child-product-card ","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #cccccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"isAlreadyExist","id":"state-new-condition-0","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_xx-small slds-m-right_small","container":{"class":"slds-card"},"customClass":"slds-m-right_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"4","medium":"6","small":"12"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqConfigureCartChildProducts","Id":"a3gHu000001VjmzQAC","vlocity_cmt__GlobalKey__c":"cpqConfigureCartChildProducts/Vlocity/3/1638814099991"};
  export default definition