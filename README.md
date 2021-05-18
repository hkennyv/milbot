# milbot

## Usage

To run the bot, ensure you have [node.js](https://nodejs.org/en/download/)
(v14 LTS recommended) and [yarn](https://yarnpkg.com/) installed.

### Install dependencies

```
yarn install
```

### Run the bot

The entry point is at `src/main.ts`. The following will transpile the `*.ts`
to `*.js` and run it. Alternatively, you can use
[`ts-node`](https://github.com/TypeStrong/ts-node) as a typescript runtime.

Ensure you have completed the [configuration](#configuration) before running.

```
yarn start
```

## Configuration

A sample configuration is provided at `.env.sample`. This bot will load a
`.env` file, so copy and rename the sample one and fill it out.

| Variable       | Description                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| EMAIL_USERNAME | Your email that will be used to send the messages                                                 |
| EMAIL_PASSWORD | Create an [app password](https://support.google.com/accounts/answer/185833?hl=en) and use it here |
| EMAIL_TO       | **TODO**: the recipient email                                                                     |
| PHONE_TO       | The 10-digit recipient phone number                                                               |
| PHONE_CARRIER  | The recipient's phone carrier. Currently supports "att", "tmobile", "verizon"                     |
| SMTP_HOST      | Your SMTP host server. If using gmail, you should use `smtp.gmail.com`                            |
| SMTP_PORT      | The secure SMTP port number (probably 465)                                                        |
