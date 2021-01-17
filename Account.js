class Account{
    
   
    constructor(initialDeposite){
       this.initialDeposite = initialDeposite; 
    }

    deposite(amount){
        var new_bal  = this.initialDeposite + amount;
        console.log(new_bal);
    }
    
   
    widhraw(amount){
        var bal = this.new_bal - amount;
         console.log(bal);
        
     }

     

     
   
}

class Saving_account extends Account{

    constructor(initialDeposite , intrest){
        super(initialDeposite);
        this.intrest = intrest ;

    }

    deposite_saving_acc(amount){
        super.deposite(amount);
    }

    widhraw_saving_acc(amount){
        super.widhraw(amount);
        
    }
    
   

}

bank = new Saving_account(1000 , 2.0);
bank.deposite_saving_acc(700);
bank.widhraw_saving_acc(500);
