/**
Belirli bir işlemi gerçekleştirmek için farklı algoritmalar arasında dinamik olarak geçiş yapmayı sağlar.

Günlük Hayattan Örnek
Ödeme Yöntemleri: Bir e-ticaret sitesinde farklı ödeme yöntemleri (Kredi Kartı, PayPal, Kripto vb.) bulunur.
 Kullanıcı istediği yöntemi seçer.

Navigasyon Uygulamaları: Google Maps veya Waze, "En Kısa Yol", "Trafiksiz Rota" veya "Toplu Taşıma" gibi farklı rota seçenekleri sunar.
 */

class PayPal {
    pay(amount) {
      console.log(`Paid ${amount} using PayPal.`);
    }
  }
  
  class CreditCard {
    pay(amount) {
      console.log(`Paid ${amount} using Credit Card.`);
    }
  }
  
  class PaymentContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executePayment(amount) {
      this.strategy.pay(amount);
    }
  }
  
  const payment = new PaymentContext(new PayPal());
  payment.executePayment(100); 
  
  payment.setStrategy(new CreditCard());
  payment.executePayment(200); 
  