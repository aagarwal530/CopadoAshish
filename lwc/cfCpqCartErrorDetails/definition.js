let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[\n    {\n      \"actions\": {\n        \"DETAILS\": {\n          \"client\": {\n            \"params\": {}\n          },\n          \"remote\": {\n            \"params\": {\n              \"cartId\": \"801Hu000004eLO6AAQ\",\n              \"id\": \"802Hu00000GQNhKAAA\",\n              \"methodName\": \"getCartsItemsById\"\n            }\n          },\n          \"rest\": {\n            \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hu000004eLO6AAQ/items/802Hu00000GQNhKAAA?cartId=801Hu000004eLO6AAQ&id=802Hu00000GQNhKAAA\",\n            \"method\": \"GET\",\n            \"params\": {}\n          }\n        }\n      },\n      \"message\": \"Required attribute missing for ChildProduct1.\",\n      \"severity\": \"ERROR\",\n      \"code\": \"204\",\n      \"bundleId\": \"802Hu00000GQNhKAAA\",\n      \"messageId\": \"802Hu00000GQNhKAAA|01tHu00000SbwQEAAE\"\n    },\n    {\n      \"message\": \"ChildProduct1 Recommends ChildProduct2.\",\n      \"severity\": \"WARN\",\n      \"code\": \"207\",\n      \"bundleId\": \"802Hu00000GQNhKAAA\",\n      \"messageId\": \"802Hu00000GQNhKAAA|01tHu00000SbwQEAAE\"\n    },\n    {\n      \"message\": \"Discounts not approved: TestDiscount1,TestDiscount1\",\n      \"severity\": \"ERROR\",\n      \"code\": \"610\"\n    }\n  ]","dsDelay":0,"resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartErrorDetails_2_Vlocity","Id":"0RbHu000000eU4ZCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqCartErrorDetails_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:info_alt","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20class=%22slds-text-color_inverse%22%20style=%22font-size:%2012pt;%20color:%20#ffffff;%22%3E%7Bmessage%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#706E6B","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#706E6B;      \n     height:40px;    ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#706E6B","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#706E6B;      \n     height:40px;    ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-condition-1","operator":"==","type":"custom","value":"WARN"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Warning Message","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_xx-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_1_flexIcon_0_1","name":"Icon","parentElementKey":"element_block_0_1","property":{"color":"#000000","extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:warning","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_1_outputField_1_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22color:%20#000000;%20font-size:%2012pt;%22%3E%7Bmessage%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"#FFB75D","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFB75D;      \n     height:40px;    ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#FFB75D","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFB75D;      \n     height:40px;    ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-new-condition-3","operator":"==","type":"custom","value":"ERROR"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Error Message","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_xx-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_2_flexIcon_0_2","name":"Icon","parentElementKey":"element_block_0_2","property":{"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:info_alt","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__cart-error-message_icon slds-p-top_xxx-small ","container":{"class":"cpq__cart-error-message_icon"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_2_outputField_1_2","name":"Text","parentElementKey":"element_block_0_2","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20class=%22%22%20style=%22color:%20#ffffff;%20font-size:%2012pt;%22%3E%7Bmessage%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-message_desc ","container":{"class":"cpq__cart-error-message_desc"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"#706e6b","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#706e6b;      \n     height:40px;    ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#706e6b","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#706e6b;      \n     height:40px;    ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Default Case","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_xx-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"height":"40px","inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n     height:40px;    ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartErrorDetails","Id":"a3gHu0000022Z2bQAC","vlocity_cmt__GlobalKey__c":"cpqCartErrorDetails/Vlocity/2/1622035324273"};
  export default definition