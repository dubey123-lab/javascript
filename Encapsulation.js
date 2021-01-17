var name;
var acc_no;
class Encapulation {

    getName(){
        return this.name;
    }

    setName(name){
        return this.name = name;
    }

   getAcc_no(){
        return this.acc_no;
   }

   setAcc_no(acc_no){
        return this.acc_no = acc_no;
   }


    
}

var acc = new Encapulation()
acc.setAcc_no(147852369852147);
acc.setName("Abhishek");
console.log(acc.getAcc_no());
console.log(acc.getName());