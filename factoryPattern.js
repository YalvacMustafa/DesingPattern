/**
Bir nesne üretme sürecini soyutlayarak, hangi türde nesne üretileceğini istemciye (kullanıcıya) bırakır.

Günlük Hayattan Örnek
Araba Üretimi: Bir araba fabrikası, müşteri isteğine göre farklı tipte arabalar üretebilir. Sedan, SUV veya spor araba gibi.

Pizza Siparişi: Bir pizza dükkanına gittiğinizde, menüden seçim yaparsınız ve mutfak size uygun pizzayı hazırlar.
 */
class Car{
    constructor(){
        this.type = 'Car';
    }
}

class Bike {
    constructor(){
        this.type = 'Bike';
    }
}

class VehicleFactory {
    static createVehicle(type){
        switch (type){
            case 'Car':
                return new Car();
            case 'Bike':
                return new Bike();
            default:
                throw new Error('Unknow vehicle type')
        }
    }
}


const myCar = VehicleFactory.createVehicle("car");
console.log(myCar.type); 

const myBike = VehicleFactory.createVehicle("bike");
console.log(myBike.type);