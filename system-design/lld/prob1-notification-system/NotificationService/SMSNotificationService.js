import { NotificationType } from "../enums/NotificationType";
import { SMSAdapter } from "./adapters/SMSAdapter";
import { NotificationService } from "./NotificationService";

export class SMSNotificationService extends NotificationService{
    constructor(){
        super();   
        this.formatter = new SMSAdapter();       
    }
    getType() {
        return NotificationType.sms;
    }
    notify(msg, receiver){
        console.log("sent msg: ", this.formatter.format(msg), " to receiver: ", receiver)
    }
}