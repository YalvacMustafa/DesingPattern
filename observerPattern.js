/**
Bir nesnede bir değişiklik olduğunda, o değişiklikten haberdar olması gereken diğer nesnelere otomatik olarak bildirim gönderir.

Günlük Hayattan Örnek
YouTube Abonelik Sistemi: Bir kanala abone olduğunuzda, yeni bir video yüklendiğinde bildirim alırsınız.

Borsa Takip Uygulamaları: Hisse senedi fiyatları değiştiğinde, yatırımcılar anında haberdar edilir.
 */

class Observable {
    constructor(){
        this.subscribers = [];
    }
    subscribe(fn){
        this.subscribers.push(fn);
    }
    unsubscribe(fn){
        this.subscribers = this.subscribers.filter(sub => sub !== fn);
    }
    notify (data){
        this.subscribers.forEach(sub => sub(data));
    }
}

const observable = new Observable();

const logger = data => console.log(`Logger: ${data}`);
const notifier = data => console.log(`Notifier: ${data}`);

observable.subscribe(logger);
observable.subscribe(notifier);

observable.notify("New event happened!");
observable.unsubscribe(logger);
observable.notify("Another event occurred!");