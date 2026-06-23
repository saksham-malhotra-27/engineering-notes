import { NotificationService } from "./NotificationService/NotificationService"

export class NotificationManager extends NotificationService {
    notifServices;    
    constructor(notifServices){
        this.notifServices = notifServices;
    } 
    notify(msg, receiver){
        this.notifServices.forEach(service => {
            if( receiver.canSend(service.getType()) )
                service.notify(msg, receiver);
        });
    }
}