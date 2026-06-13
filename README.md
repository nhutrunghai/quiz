# Quiz API

A simple quiz backend built with **Node.js** and **Express**. The project provides a small server foundation for serving quiz-related data and practicing REST API development.

## Overview

This repository is a learning project for building a lightweight quiz service with JavaScript on the backend. It uses Express for routing and can be extended into a complete quiz application with categories, questions, scoring, and user progress.

## Tech Stack

- Node.js
- Express.js
- CORS
- node-fetch
- JavaScript ES Modules

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

The server entry in `package.json` is currently configured as:

```bash
node server.js
```

If your entry file is `index.js`, either rename it to `server.js` or update the `start` script in `package.json`.

## Project Structure

```text
index.js           # Main source file currently in the repository
package.json       # Project metadata and dependencies
package-lock.json  # Locked dependency versions
```

## Recommended Cleanup

The repository currently contains `node_modules`. For a cleaner public GitHub project, remove it from Git tracking and keep dependencies managed through `package.json` and `package-lock.json`.

Recommended local commands:

```bash
git rm -r --cached node_modules
git commit -m "Remove committed node_modules"
git push
```

## Future Improvements

- Add question and category routes
- Add scoring logic
- Add request validation
- Add environment configuration
- Add API documentation examples
- Add tests for quiz endpoints

## Author

Developed by [Nhữ Trung Hải](https://github.com/nhutrunghai).
