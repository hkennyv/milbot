import { config } from "./config";
import { sendSmsMail, MessageType } from "./mailer";

const testMessage: MessageType = {
  subject: "milbot",
  text: "test message!!",
};

for (const carrier of ["tmobile", "att", "verizon"]) {
  sendSmsMail(config.recipientInfo.phoneTo as string, carrier, testMessage);
}
