import nodemailer from "nodemailer";
import { config } from "./config";

export type TransportOptions = {
  host: string | undefined;
  port: string | undefined;
  secure: boolean | undefined;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
};

export type MessageType = {
  subject: string;
  text: string;
};

const carriers: { [key: string]: string } = {
  att: "txt.att.net",
  tmobile: "tmomail.net",
  verizon: "vtext.com",
};

export const transporter = nodemailer.createTransport({
  ...(config.transportOptions as any),
});

/**
 * Sends an SMS message via carrier email
 *
 * @param phoneNumber The 10 digit recipient phone number
 * @param carrier The recipient phone carrier
 * @param message The message containing the subject and text
 */
export function sendSmsMail(
  phoneNumber: string,
  carrier: string,
  message: MessageType
) {
  if (!(carrier in carriers)) {
    throw new Error("Invalid carrier");
  }

  transporter.sendMail(
    {
      from: config.transportOptions.auth.user,
      subject: message.subject,
      text: message.text,
      to: `${phoneNumber}@${carriers[carrier]}`,
    },
    (error) => {
      if (error) {
        throw error;
      }

      console.log("✅ sms sent!");
    }
  );
}

export function sendMail() {}
