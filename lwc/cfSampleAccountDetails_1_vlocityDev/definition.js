let definition = 
                {"states":[{"fields":[{"name":"['AccountName']","label":"Name","displayLabel":"['AccountName']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['AccountWebsite']","label":"Website","displayLabel":"['AccountWebsite']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['AccountPhone']","label":"Phone","displayLabel":"['AccountPhone']","type":"phone","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['AccountPriContactName']","label":"Contact","displayLabel":"['AccountPriContactName']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false}],"conditions":{"group":[{"field":"$scope.data.status","operator":"===","value":"'active'","type":"system"}]},"definedActions":{"actions":[{"type":"Vlocity Action","id":"sample Update Primary Contact","displayName":"Change Contact","iconName":"action:change_owner","collapse":true,"isCustomAction":false,"hasExtraParams":false},{"type":"Vlocity Action","id":"sample Update Account","displayName":"Update Account","iconName":"standard:account","collapse":true,"isCustomAction":false,"hasExtraParams":false}]},"name":"Active","lwc":{"MasterLabel":"wideCardSlim","DeveloperName":"wideCardSlim","Id":"0RbHu000000mJUNSAC","name":"wideCardSlim"},"isSmartAction":false,"smartAction":{},"sObjectType":"Account","actionCtxId":"['AccountId']"}],"filter":{},"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"sample_getMasterAccountDetails","optionsMap":{"vlcClass":"vlocity_cmt.IntegrationProcedureService"},"inputMap":{"AccountId":"{{params.id}}"},"resultVar":"['Account']"},"contextVariables":[{"name":"params.id","val":"001Hu000030kg8DQAS"}]},"title":"Account","enableLwc":true,"GlobalKey__c":"sample Account Details/vlocityDev/1/1594252426118"}; 
            export default definition