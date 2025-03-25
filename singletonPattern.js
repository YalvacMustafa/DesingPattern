/**
Bir sınıfın sadece tek bir örneğinin (instance) olmasını sağlar. 
Yani, bir sınıftan ne kadar nesne üretmeye çalışırsak çalışalım, hep aynı nesneyi alırız.

Günlük Hayattan Örnek
Başkanlık Sistemi: Bir ülkede tek bir başkan olur. 
Yeni bir başkan seçildiğinde eski başkanın yerine geçer, ancak aynı anda birden fazla başkan olamaz.

Uygulama Ayarları: 
Telefonunuzda veya bilgisayarınızda sistem ayarları vardır. 
Ayarlar nesnesini her çağırdığınızda aynı nesneye erişirsiniz.
 */

class Singleton {
    constructor(){
        if (!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    SayHello(){
        console.log('Merhaba')
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
instance1.SayHello();