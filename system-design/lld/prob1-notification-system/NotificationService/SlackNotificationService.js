import { NotificationType } from "../enums/NotificationType";
import { SlackAdapter } from "./adapters/SlackAdapter";
import { NotificationService } from "./NotificationService";

export class SlackNotificationService extends NotificationService{
    constructor(formatter){
        super();
        this.formatter = formatter; 
    }
    getType() {
        return NotificationType.slack;
    }
    notify(msg, receiver){
        console.log("sent msg: ", this.formatter.format(msg), " to receiver: ", receiver)
   }
}