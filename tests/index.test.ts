import { app } from "@/src/index"; // Import the Hono app instance

describe("Hono app", () => {
  it("should respond with Hello, Hono with Bun!", async () => {
    const response = await app.request("http://localhost/", {
      method: "GET",
    });

    // Check that the response status is 200 OK
    expect(response.status).toBe(200);

    // Check the response text
    const text = await response.text();
    expect(text).toBe("Hello, Hono with Bun!");
  });
});
