/**
Bir nesneye yeni özellikler eklemek için kullanılır. 
Nesnenin kendisini değiştirmeden işlevselliğini genişletmeye olanak tanır.

Günlük Hayattan Örnek
Kahve Siparişi: Kahvenize süt, şeker veya çikolata eklemek istediğinizde, 
temel kahvenin üzerine yeni özellikler eklenmiş olur.

Araba Özellikleri: Bir arabaya ekstra özellikler ekleyebilirsiniz. 
Örneğin, "Standart Model" olan bir arabaya "Sunroof" veya "Spor Jantlar" gibi ek özellikler eklenebilir.
 */

class Coffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  let myCoffee = new Coffee();
  console.log(myCoffee.cost()); 
  
  myCoffee = new MilkDecorator(myCoffee);
  console.log(myCoffee.cost()); 
  
  myCoffee = new SugarDecorator(myCoffee);
  console.log(myCoffee.cost()); 
  