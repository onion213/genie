import { Hono } from "hono";
import { handleSlackEvents } from "./handlers/slackEvents";
import { verifySlackRequest } from "./middleware/verifySlackRequest";

const app = new Hono();

app.use("/slack/*", verifySlackRequest());

app.get("/", (c) => c.text("Hello, Hono with Bun!"));
app.post("/slack/events", async (c) => {
  return handleSlackEvents(c);
});
// Export the app instance directly
export default app;
