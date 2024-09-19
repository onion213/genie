import { Hono } from "hono";
import slackEventController from "@/src/interfaces/controllers/SlackEventController";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono with Bun!"));
app.route("/slack/events", slackEventController);

export default app;
