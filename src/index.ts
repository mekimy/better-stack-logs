import { appLogger } from "./utils/log";
import { v4 as uuidv4 } from "uuid";

appLogger.info(
  {
    requestId: uuidv4(),
    extra: { data: { body: "Hello World" } },
  },
  "log test"
);
