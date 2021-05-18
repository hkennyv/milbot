import { config } from "./config";
import { sendSmsMail, MessageType } from "./mailer";

const testMessage: MessageType = {
  subject: "YO",
  text: "SAUMIL!!!!!!!!!!!!!!!",
};

for (const carrier of ["tmobile", "att", "verizon"]) {
  sendSmsMail(config.recipientInfo.phoneTo as string, carrier, testMessage);
}
