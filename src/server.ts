import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono with Bun!"));

// Export the app instance directly
export default app;
