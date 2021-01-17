var initialDeposite;
var new_bal;
var bal;
class Account{
    
   
    constructor(initialDeposite){
       this.initialDeposite = initialDeposite; 
    }


    display(bal){
        console.log("The Balance is :-" + bal)
        return bal;
    }

    deposite(amount){
         new_bal  = this.initialDeposite + amount;
         console.log(new_bal);   
    }
    
   
    widhraw(amount){
         bal = new_bal - amount;
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
        if(amount<=0){
            console.log("Insufficient Balance");
        }
        else{
        super.widhraw(amount);
        }
        
    }
    
   

}

bank = new Saving_account(1000 , 2.0);
bank.deposite_saving_acc(700);
bank.widhraw_saving_acc(500);
