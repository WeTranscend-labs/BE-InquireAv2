
# InquireA - Backend
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![Ancient8](https://img.shields.io/badge/Blockchain-Ancient8-green.svg)

  

Welcome to the robust engine powering **InquireA**! This backend is the silent force behind the scenes, managing off-chain data, optimizing blockchain interactions, and syncing seamlessly with the **Ancient8 Chain**. Whether you’re asking questions or earning rewards for answers, this backend ensures your experience is fast, secure, and effortlessly brilliant. Let’s explore the machinery that drives this decentralized Q&A revolution! 🧠💰

----------

## Table of Contents

-   [What is InquireA - Backend?](#what-is-inquirea---backend)
-   [How to Get Started](#how-to-get-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Technologies Powering InquireA](#technologies-powering-inquirea)
-   [Project Structure](#project-structure)
-   [How to Contribute](#how-to-contribute)
-   [License](#license)

  

----------


## What is InquireA - Backend?

**InquireA - Backend** is the sturdy backbone of a blockchain-powered Q&A platform. While the frontend shines with user interactions, this backend works tirelessly to:

-   Store off-chain data like question metadata and user activity for blazing-fast performance ⚡
-   Optimize gas fees for smart contract interactions on the **Ancient8 Chain**
-   Integrate seamlessly with blockchain to manage rewards and reputation 🧙‍♂️  
    It’s the perfect blend of efficiency and tech, ensuring every question and answer flows like a masterpiece. Ready to see what keeps InquireA thriving?

----------

## How to Get Started

Ready to ignite the backend and power the Q&A ecosystem? Follow these steps to get it running on your machine and unleash the magic!

### Prerequisites

Before you begin, make sure you have:

-   **Node.js**: Version 16 or higher—your engine for this Q&A backend.
-   **npm**: Your trusty tool to summon dependencies.
-   **Prisma**: Database wizardry (install globally if needed: npm install -g prisma).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/WeTranscend-labs/BE-InquireAv2.git
   cd BE-InquireAv2
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=<your-database-url>
     ```
4. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```
5. **Sync the schema with the database**:
   ```bash
   npx prisma db push
   ```   
6.  **Start the development server**:  
	   ```bash
	   npm run dev
	```
7. **Access the Backend**:
-  The server will be live at http://localhost:8080.
  
-   Grab a coffee and watch the backend magic unfold! ☕✨

----------


## Technologies Powering InquireA

This backend is built with a powerful stack of modern tools, merging seamless data management with blockchain integration. Here’s the tech fueling the platform:

-   **Next.js**: A React framework for fast, scalable APIs and server-side logic.
-   **Prisma**: Next-gen ORM for effortless database management of questions and answers.
-   **Zod**: Schema validation to ensure data integrity and security.
-   **TypeScript**: Static typing for robust, bug-free code.

Together, these tools handle off-chain data, optimize blockchain transactions, and sync with **Ancient8 Chain**—making InquireA a well-oiled knowledge machine!

----------

## Project Structure

```
.
├── prisma/                   # Contains Prisma configuration for database management
│   └── schema.prisma         # Defines the database schema 
├── src/                      # Main source code directory for the backend
│   ├── app/                  # Holds API routes and server-side logic
│   │   └── api/              # API endpoints for client requests
│   │       ├── answer/       # Endpoints for managing answers off-chain
│   │       └── question/     # Endpoints for managing questions off-chain
│   ├── common/               # Shared utilities, constants, or helper functions (e.g., data validation, formatting)
│   ├── exception/            # Custom error classes or handlers for API responses (e.g., invalid input, server errors)
│   └── module/               # Separate modules or services for business logic
│       ├── answer/           # Logic for answer-related operations 
│       └── question/         # Logic for question-related operations 
└── .env                      # Environment configuration file for sensitive data 
```
----------

## How to Contribute

Want to shape the future of decentralized Q&A? We’d love your help! Fork the repository, make some brilliant changes, and send us a pull request. Whether it’s optimizing APIs, adding features, or squashing bugs, every contribution makes **InquireA** even more extraordinary! 🧠⚡

----------

## License 

**InquireA - Backend** is released under the **MIT License**. Feel free to explore, tweak, and share—just check the [LICENSE](./LICENSE) file for details.
