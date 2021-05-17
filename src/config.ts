import dotenv from "dotenv";
import { TransportOptions } from "./mailer";

export type ConfigType = {
  transportOptions: TransportOptions;
  recipientInfo: {
    phoneTo: string | undefined;
    phoneCarrierTo: string | undefined;
    emailTo: string | undefined;
  };
};

function loadConfig(): ConfigType {
  const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  if (!result.parsed) {
    throw new Error("Config is undefined");
  }

  const parsed = result.parsed;

  return {
    transportOptions: {
      host: parsed.SMTP_HOST,
      port: parsed.SMTP_PORT,
      secure: true,
      auth: {
        user: parsed.EMAIL_USERNAME,
        pass: parsed.EMAIL_PASSWORD,
      },
    },
    recipientInfo: {
      phoneTo: parsed.PHONE_TO,
      emailTo: parsed.EMAIL_TO,
      phoneCarrierTo: parsed.PHONE_CARRIER_TO,
    },
  };
}

export const config: ConfigType = loadConfig();
