let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[{"id":"state-new-condition-0","field":"Condition","operator":"==","value":"Heavy Snow","type":"custom"}]},"definedActions":{"actions":[]},"name":"Alert","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"margin":[{"type":"around","size":"none","label":"around:none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12 ","class":"slds-theme_alert-texture slds-card slds-p-around_x-small slds-m-around_none ","background":{"color":"","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","theme":"theme_alert-texture","style":"             "},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_0_0_flexImg_0_0","name":"Image","element":"flexImg","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","size":"","extraclass":"slds-align_absolute-center","stateImg":{"imgsrc":"/sfc/servlet.shepherd/version/download/068Hu00000Z845ZQAR","alternativeText":"Image description"}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"parentElementKey":"element_block_0_0","elementLabel":"Weather Image-Image-0"}],"elementLabel":"Weather Image","userUpdatedElementLabel":true},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_1_1_outputField_0_1","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%20slds-text-align_center%22%3E%3Cspan%20style=%22color:%20#e03e2d;%22%3E%3Cstrong%3E%7BCityState%7D%3C/strong%3E%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"top","size":"small","label":"top:small"},{"type":"bottom","size":"small","label":"bottom:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-top_small slds-p-bottom_small ","style":"             "},"parentElementKey":"element_block_1_1","elementLabel":"Header CityState","userUpdatedElementLabel":true},{"key":"element_element_block_1_1_outputField_1_1","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%20slds-text-align_center%22%3E%3Cspan%20style=%22font-size:%2010pt;%20color:%20#34495e;%22%3ECondition%3C/span%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%22%3E%3Cspan%20style=%22color:%20#e03e2d;%22%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BCondition%7D%3C/span%3E%3C/strong%3E%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_6-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"6"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"","style":"             "},"parentElementKey":"element_block_1_1","elementLabel":"Weather Details-Text-0-clone-0"},{"key":"element_element_block_1_1_outputField_2_1","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%20slds-text-align_center%22%3E%3Cspan%20style=%22font-size:%2010pt;%20color:%20#34495e;%22%3ETEMPERATURE%3C/span%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%22%3E%3Cspan%20style=%22color:%20#e03e2d;%22%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BTempF%7D%20&deg;F%3C/span%3E%3C/strong%3E%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_6-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"6"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"","style":"             "},"parentElementKey":"element_block_1_1","elementLabel":"Weather Details-Text-1-clone-0"}],"elementLabel":"Weather Details","userUpdatedElementLabel":true},{"name":"Action","element":"action","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"stateObj":"{record}","card":"{card}","record":"{record}","stateAction":{"id":"flex-action-1607638247452","type":"Custom","displayName":"weather.com","vlocityIcon":"action:web_link","openUrlIn":"New Tab/Window","targetType":"Web Page","Web Page":{"targetName":"https://weather.com"}},"iconColor":"#FFFFFF","displayAsButton":true,"buttonVariant":"destructive"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"top","size":"small","label":"top:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"iconColor":"#FFFFFF"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center slds-p-top_small ","style":"             "},"elementLabel":"Navigate Action","userUpdatedElementLabel":true},{"name":"Action","element":"action","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"stateObj":"{record}","card":"{card}","record":"{record}","stateAction":{"id":"flex-action-1607650888283","type":"Flyout","displayName":"Get 5-Day Forecast","vlocityIcon":"standard:forecasts","openUrlIn":"Current Window","flyoutType":"childCard","openFlyoutIn":"Modal","cardName":"sampleWeatherForecast","flyoutLwc":"sampleWeatherForecast"},"iconColor":"#D02D2D","displayAsButton":true,"buttonVariant":"text-destructive"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"top","size":"small","label":"top:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"iconColor":"#D02D2D"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center slds-p-top_small ","style":"             "},"elementLabel":"Forecast","userUpdatedElementLabel":true}]}},"childCards":["sampleWeatherForecast"],"actions":[],"omniscripts":[]},{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"around","size":"none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_0_1_flexImg_0_1","name":"Image","element":"flexImg","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","size":"","extraclass":"slds-align_absolute-center","stateImg":{"imgsrc":"/sfc/servlet.shepherd/version/download/068Hu00000Z845YQAB","alternativeText":"Image description"}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"parentElementKey":"element_block_0_1","elementLabel":"Weather Image-Image-0"}],"elementLabel":"Weather Image","userUpdatedElementLabel":true},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_1_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%20slds-text-align_center%22%3E%3Cspan%20style=%22color:%20#34495e;%22%3E%3Cstrong%3E%7BCityState%7D%3C/strong%3E%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"top","size":"small","label":"top:small"},{"type":"bottom","size":"small","label":"bottom:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-top_small slds-p-bottom_small ","style":"             "},"parentElementKey":"element_block_1_0","elementLabel":"Header CityState","userUpdatedElementLabel":true},{"key":"element_element_block_1_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%20slds-text-align_center%22%3E%3Cspan%20style=%22font-size:%2010pt;%20color:%20#34495e;%22%3ECondition%3C/span%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%22%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%20color:%20#34495e;%22%3E%7BCondition%7D%3C/span%3E%3C/strong%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_6-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"6"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"","style":"             "},"parentElementKey":"element_block_1_0","elementLabel":"Weather Details-Text-0-clone-0"},{"key":"element_element_block_1_0_outputField_2_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%20slds-text-align_center%22%3E%3Cspan%20style=%22font-size:%2010pt;%20color:%20#34495e;%22%3ETEMPERATURE%3C/span%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%22%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%20color:%20#34495e;%22%3E%7BTempF%7D%20&deg;F%3C/span%3E%3C/strong%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_6-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"6"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"","style":"             "},"parentElementKey":"element_block_1_0","elementLabel":"Weather Details-Text-1-clone-0"}],"elementLabel":"Weather Details","userUpdatedElementLabel":true},{"name":"Action","element":"action","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"stateObj":"{record}","card":"{card}","record":"{record}","stateAction":{"id":"flex-action-1607650896002","type":"Flyout","displayName":"Get 5-Day Forecast","vlocityIcon":"standard:forecasts","openUrlIn":"Current Window","flyoutType":"childCard","openFlyoutIn":"Modal","cardName":"sampleWeatherForecast","flyoutLwc":"sampleWeatherForecast"},"iconColor":"#68B5E6","displayAsButton":true,"buttonVariant":"outline-brand"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"top","size":"small","label":"top:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"iconColor":"#68B5E6"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center slds-p-top_small ","style":"             "},"elementLabel":"Forecast","userUpdatedElementLabel":true}]}},"childCards":["sampleWeatherForecast"],"actions":[],"omniscripts":[]}],"dataSource":{"type":"IntegrationProcedures","value":{"resultVar":"[\"Current\"]","ipMethod":"team_getWeatherForecast","vlocityAsync":false,"inputMap":{"Days":"5","AccountId":"{recordId}"}},"orderBy":{"name":"","isReverse":false},"contextVariables":[{"name":"recordId","val":"001Hu000030kg55QAS","id":2}]},"title":"sampleWeather","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfSampleWeather_1_VU","Id":"0RbHu000000eTswSAM","MasterLabel":"cfSampleWeather_1_VU","NamespacePrefix":"c"},"Id":"a3gHu0000022Z1fQAY","GlobalKey__c":"sampleWeather/VU/1/1607649884607","IsChildCard__c":true};
  export default definition