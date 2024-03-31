import pino from "pino";

const transport = pino.transport({
  target: "@logtail/pino",
  options: { sourceToken: process.env.BETTER_STACK_TOKEN },
});

export const appLogger = pino(transport);

export const featureTypes = {
  USER: "USER",
  AUTH: "AUTH",
};
