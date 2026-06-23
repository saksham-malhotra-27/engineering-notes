import { NotificationType } from "../enums/NotificationType";
import { SlackAdapter } from "../NotificationService/adapters/SlackAdapter";
import { SMSAdapter } from "../NotificationService/adapters/SMSAdapter";
import { SlackNotificationService } from "../NotificationService/SlackNotificationService";
import { SMSNotificationService } from "../NotificationService/SMSNotificationService";

export class NotificationServiceFactory {
    static create(service) {
        switch (service) {
            case NotificationType.sms:
                return new SMSNotificationService( new SMSAdapter() );
            case NotificationType.slack:
                return new SlackNotificationService( new SlackAdapter() );
            default:
                throw new Error("Unidentified service");
        }
    }
}