@IsTest
private class AccountAutomationsTest {

    @isTest static void testDefaultDescription(){
        // Test data setup
        Account acc = new Account(Name = 'My Test Account');
        insert acc;
        
        // Test null description
        acc = AccountAutomations.setDefaultDescription(acc);
        System.assertEquals('Default description', acc.Description, 
            'When description is null, it should be updated to Default description');

        // Test non-null description
        acc.Description = 'New Description Manual';
        acc = AccountAutomations.setDefaultDescription(acc);
        System.assertNotEquals('Default description', acc.Description, 
            'When description is NOT null, it should NOT be updated to Default description');
    }

    @isTest static void testDefaultShippingAddress(){
        // Test data setup
        Account acc = new Account(Name = 'My Test Account');
        insert acc;
        
        // Test shipping address
        acc = AccountAutomations.setDefaultShippingAddress(acc);
        System.assertEquals('Vaishali Nagar', acc.ShippingStreet, 
            'Default ShippingStreet should be Vaishali Nagar');
        System.assertEquals('Chicago', acc.ShippingState, 
            'Default ShippingState should be Chicago');
        System.assertEquals('60654', acc.ShippingPostalCode, 
            'Default ShippingPostalCode should be 60654');
    }

    @isTest static void testDefaultPhone(){
        // Test data setup
        Account acc = new Account(Name = 'My Test Account');
        insert acc;
        
        // Test phone
        acc = AccountAutomations.setDefaultPhone(acc);
        System.assertEquals('9999999', acc.Phone, 
            'Default phone number should be 9999999');
    }

    @isTest static void testDefaultURL(){
        // Test data setup
        Account acc = new Account(Name = 'My Test Account');
        insert acc;
        
        // Test website URL
        acc = AccountAutomations.setDefaultURL(acc);
        System.assertEquals('www.copado.com', acc.Website, 
            'Default website should be www.copado.com');
    }
}