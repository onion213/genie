# Genie

**Genie** is an autonomous software development platform designed to revolutionize the software creation process. Leveraging advanced artificial intelligence and a multi-agent system, Genie automates the entire development lifecycle—from understanding user goals to designing, coding, testing, and deploying software.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development Scripts](#development-scripts)
- [Testing](#testing)
- [Git Hooks](#git-hooks)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Autonomous Development**: Automates the software development lifecycle using AI-driven agents.
- **Human-like Communication**: Interacts seamlessly through platforms like Slack.
- **Multi-Agent System**: Specialized agents including Product Manager, Designer, Tech Lead, and Programmer collaborate to achieve development goals.
- **Automated Code Quality**: Ensures high code standards through linting, formatting, and pre-commit hooks.
- **Seamless Integrations**: Integrates with essential tools such as GitHub for version control and Notion for documentation.
- **Scalable Architecture**: Built with Domain-Driven Design (DDD) principles to ensure scalability and maintainability.

## Technology Stack

- **Language**: TypeScript
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Web Framework**: [Hono](https://hono.dev/)
- **Code Formatting & Linting**: [Biome](https://biomejs.dev/)
- **Testing Framework**: [Jest](https://jestjs.io/)
- **Git Hooks Manager**: [Lefthook](https://github.com/evilmartians/lefthook)

## Prerequisites

Before setting up Genie, ensure you have the following installed on your system:

- **[Bun](https://bun.sh/)**: A fast JavaScript runtime and package manager.
- **Git**: Version control system.
- **Node.js** (optional): Required for certain development tools.

## Installation

Follow these steps to set up the Genie project locally:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/genie.git
    cd genie
    ```

2. **Install Dependencies**:

    ```bash
    bun install
    ```

3. **Configure Environment Variables**:

    - Create a `.env` file based on the provided `.env.example`.
    - Populate it with your specific configuration values.

    ```bash
    cp .env.example .env
    ```

    - Edit `.env` to include your environment-specific variables.

## Configuration

Genie uses environment variables to manage sensitive information and configuration settings. Ensure that the `.env` file is properly set up with the required variables.

### Example `.env.example`

```env
# Slack API Token
SLACK_API_TOKEN=your-slack-api-token

# GitHub Token
GITHUB_TOKEN=your-github-token

# OpenAI API Key
OPENAI_API_KEY=your-openai-api-key

# Other environment variables...
```

**Note**: The `.env` file is excluded from version control to protect sensitive information. Refer to the `.gitignore` file for more details.

## Usage

Start the development server with hot module replacement to see real-time updates:

```bash
bun run dev
```

Navigate to `http://localhost:3000` in your browser to view the application. You should see a "Hello, Hono with Bun!" message, indicating that the server is running successfully.

## Development Scripts

Genie provides a suite of scripts to streamline your development workflow. Below are the available scripts:

- **`dev`**: Launches the development server with hot module replacement for real-time updates.

    ```bash
    bun run dev
    ```

- **`test`**: Runs the test suite using Jest to ensure code reliability.

    ```bash
    bun run test
    ```

- **`lint`**: Runs Biome's linting process to identify code issues.

    ```bash
    bun run lint
    ```

- **`format`**: Formats the entire codebase using Biome to maintain consistent code style.

    ```bash
    bun run format
    ```

## Testing

Genie utilizes **Jest** for testing, ensuring that all components function as expected. The testing setup is configured to work seamlessly with ES Modules and TypeScript.

### Running Tests

- **Run All Tests**:

    ```bash
    bun run test
    ```

- **Run Tests in Watch Mode**:

    ```bash
    bun run test:watch
    ```

- **Generate Coverage Report**:

    ```bash
    bun run test:coverage
    ```

### Sample Test

A sample test for the server is located at `tests/server.test.ts`:

```typescript
import app from "@/src/server"; // Import the Hono app instance

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
```

## Git Hooks

Genie utilizes **Lefthook** to manage Git hooks, ensuring that code quality checks are enforced before commits. The pre-commit hooks include:

- **Lint**: Runs `biome check` to identify linting and formatting issues.
- **Test**: Runs `jest` to ensure all tests pass.

These hooks prevent commits that do not meet the project's code quality standards, maintaining a clean and reliable codebase.

### Lefthook Configuration

The `lefthook.yml` file defines the hooks:

```yaml
pre-commit:
  parallel: true
  commands:
    lint:
      run: biome check
    test:
      run: jest
```

## Project Structure

Genie's codebase is organized following **Domain-Driven Design (DDD)** principles, ensuring a clear separation of concerns and scalability. Below is an overview of the directory structure:

```
genie/
├── src/
│   ├── server.ts
├── tests/
│   ├── server.test.ts
├── .gitignore
├── biome.json
├── jest.config.cjs
├── lefthook.yml
├── package.json
├── README.md
├── tsconfig.json
```

- **`src/`**: Contains the main server code.
    - **`server.ts`**: Sets up and exports the Hono application.
- **`tests/`**: Contains test files.
    - **`server.test.ts`**: Tests the Hono server's response.
- **Configuration Files**:
    - **`.gitignore`**: Specifies files and directories to ignore in version control.
    - **`biome.json`**: Configures Biome for code formatting and linting.
    - **`jest.config.cjs`**: Configures Jest for testing.
    - **`lefthook.yml`**: Configures Lefthook for Git hooks.
    - **`package.json`**: Manages project dependencies and scripts.
    - **`tsconfig.json`**: Configures TypeScript compiler options.

## Contributing

While Genie is currently being developed by a single developer, contributions from AI agents are supported. If you wish to contribute or have an AI agent assist in development, please follow the guidelines outlined below.

### How to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page to create your own fork.

2. **Clone Your Fork**:

    ```bash
    git clone https://github.com/yourusername/genie.git
    cd genie
    ```

3. **Create a Feature Branch**:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. **Make Your Changes**: Implement your feature or fix in the appropriate directories.

5. **Run Lint and Tests**:

    ```bash
    bun run lint
    bun run test
    ```

6. **Commit Your Changes**: Follow the [Conventional Commits](https://www.conventionalcommits.org/) guidelines.

    ```bash
    git commit -m "feat(user): add user registration endpoint"
    ```

7. **Push to Your Fork**:

    ```bash
    git push origin feature/your-feature-name
    ```

8. **Open a Pull Request**: Navigate to the original repository and open a pull request from your feature branch.

### AI Agent Contributions

Genie leverages advanced AI agents, including Large Language Models (LLMs) like ChatGPT, to assist in development. To ensure seamless integration and maintain code quality when AI agents contribute, please follow these guidelines:

1. **Code Quality and Standards**:
    - Ensure that AI-generated code adheres to the project's coding standards and formatting rules.
    - Run linting and formatting commands (`bun run lint`, `bun run format`) before submitting code.

2. **Commit Messages**:
    - Follow the Conventional Commits format when committing AI-generated code.
    - Clearly describe the purpose and scope of the changes.

3. **Documentation**:
    - AI agents should document their contributions thoroughly, including code comments and updating relevant documentation files as needed.

4. **Testing**:
    - Write and run tests for any new features or fixes introduced by the AI agent.
    - Ensure that existing tests pass before committing.

5. **Review Process**:
    - AI-generated contributions should be reviewed by a human developer to verify correctness, security, and adherence to project standards.
    - Provide constructive feedback and request modifications if necessary.

6. **Ethical Considerations**:
    - Ensure that AI-generated code does not inadvertently include sensitive information, violate licenses, or introduce security vulnerabilities.

### Example Workflow for AI Agent

1. **Generate Code**:
    - The AI agent generates a feature or fix based on specified requirements.

2. **Run Local Checks**:
    - Execute linting and formatting scripts:

        ```bash
        bun run lint
        bun run format
        ```

3. **Write Tests**:
    - Develop unit and integration tests for the new code.

4. **Commit Changes**:
    - Use a Conventional Commit message:

        ```bash
        git commit -m "feat(authentication): implement JWT-based authentication"
        ```

5. **Push and Open Pull Request**:
    - Push the changes to a feature branch and open a pull request for review.

6. **Human Review**:
    - A human developer reviews the AI-generated code, ensures compliance with standards, and merges the pull request upon approval.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact [your.email@example.com](mailto:your.email@example.com).