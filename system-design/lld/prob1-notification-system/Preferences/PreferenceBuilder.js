import { Preference } from "./Preference";

export class PreferenceBuilder {
    constructor() {
        this.pref = {
            slack: false,
            sms: false
        };
    }

    setSlack(slack) {
        this.pref.slack = slack;
        return this;
    }

    setPhoneForSMS(sms) {
        this.pref.sms = sms;
        return this;
    }

    build() {
        return new Preference(this.pref.slack, this.pref.sms);
    }
}