public class AccountAutomations {
    Public static Account setDefaultDescription(Account a){
        If (a.Description != null) return a;
        Else {
            a.Description = 'Default description';
            return a;
        }
    }
    
    public static Account setDefaultShippingAddress(Account a){
        a.ShippingStreet = 'Vaishali Nagar'; 
        a.ShippingState = 'Chicago';
        a.ShippingPostalCode = '60654';
        return a;
    }
    
    public static Account setDefaultPhone(Account a) {
        a.Phone = '9999999';
        return a;
    }
    
    public static Account setDefaultURL(Account a) {
        a.Website = 'www.copado.com'; 
        return a;
    }
}