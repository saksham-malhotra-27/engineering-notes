import {NotificationType} from "../enums/NotificationType"

export class Preference{
    constructor(slack = false, sms = false) {
        this.slack = slack;
        this.sms = sms;
    }
    canSend(serviceName){
        return this[serviceName];
    }
}