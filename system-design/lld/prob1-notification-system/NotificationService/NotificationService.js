export class NotificationService {
    constructor(){
        if(new.target === NotificationService)
            throw new Error("Cannot instantiate abstract class");
    }
    notify(msg, receiver){

    }
    getType(){

    }
}