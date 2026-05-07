<div align="center">

# 🚀 _CRUD API with Express & TypeScript_ 🛜

A production-ready RESTful CRUD API built with Node.js, Express, TypeScript, and JSON file storage.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### **Built with clean architecture:**

![UUID](https://img.shields.io/badge/UUID-Generator-FF6B6B?style=flat-square&logo=javascript&logoColor=white)
![File System](https://img.shields.io/badge/File_System-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-00C7B7?style=flat-square&logo=fastapi&logoColor=white)

</div>

---

## 📋 Table of Contents

- [🚀 _CRUD API with Express \& TypeScript_ 🛜](#-crud-api-with-express--typescript-)
  - [**Built with clean architecture:**](#built-with-clean-architecture)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🏗️ Architecture](#️-architecture)
  - [📁 Project Structure](#-project-structure)
  - [⚙️ Installation \& Setup](#️-installation--setup)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
    - [Environment Variables (Optional)](#environment-variables-optional)
  - [🚀 Running the Project](#-running-the-project)
    - [Development Mode (with auto-reload)](#development-mode-with-auto-reload)
    - [Build for Production](#build-for-production)
    - [Run Production Build](#run-production-build)
  - [📡 API Endpoints](#-api-endpoints)
    - [📥 GET All Items](#-get-all-items)
      - [Response (200 OK)](#response-200-ok)
    - [📤 POST Create Item](#-post-create-item)
      - [Request Body](#request-body)
      - [Response (201 Created)](#response-201-created)
    - [📝 PUT Update Item](#-put-update-item)
      - [Request Body](#request-body-1)
      - [Response (200 OK)](#response-200-ok-1)
      - [Error Response (404 Not Found)](#error-response-404-not-found)
    - [🗑️ DELETE Remove Item](#️-delete-remove-item)
      - [Response (200 OK)](#response-200-ok-2)
      - [Error Response (404 Not Found)](#error-response-404-not-found-1)
  - [📊 HTTP Status Codes](#-http-status-codes)
  - [🧹 Separation of Concerns](#-separation-of-concerns)
    - [Benefits of this architecture:](#benefits-of-this-architecture)
  - [📦 NPM Scripts](#-npm-scripts)
  - [🧪 Testing with Postman](#-testing-with-postman)
    - [Example cURL Commands](#example-curl-commands)
  - [🔮 Future Enhancements](#-future-enhancements)
  - [👨‍💻 Author](#-author)
  - [📄 License](#-license)
    - [⭐ Star this repository if you find it helpful for learning backend development!](#-star-this-repository-if-you-find-it-helpful-for-learning-backend-development)

---

## ✨ Features

| Category             | Features                                  |
| -------------------- | ----------------------------------------- |
| **CRUD Operations**  | Create, Read, Update, Delete items        |
| **Data Persistence** | JSON file storage using Node.js FS module |
| **Type Safety**      | Full TypeScript support throughout        |
| **Architecture**     | Separation of concerns (MVC-like pattern) |
| **ID Generation**    | UUID-based unique identifiers             |
| **Error Handling**   | Proper HTTP status codes                  |
| **Validation**       | Request body validation                   |
| **Scalability**      | Modular structure for easy expansion      |

---

## 🛠️ Tech Stack

<div align="center">

| Technology     | Version  | Purpose             | Badge                                                                                             |
| -------------- | -------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| **Node.js**    | 18+      | Runtime Environment | ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)        |
| **Express.js** | 4.x      | Web Framework       | ![Express](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white)       |
| **TypeScript** | 5.x      | Type Safety         | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) |
| **UUID**       | 9.x      | ID Generation       | ![UUID](https://img.shields.io/badge/UUID-9.x-FF6B6B?logo=javascript&logoColor=white)             |
| **FS Module**  | Built-in | File Operations     | ![FS](https://img.shields.io/badge/File_System-Built_in-339933?logo=node.js&logoColor=white)      |

</div>

---

## 🏗️ Architecture

The project follows a **clean layered architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│                    Client Request                    │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│                    Routes Layer                      │
│         (API endpoint definitions)                   │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│                  Controllers Layer                   │
│      (Request/Response handling & validation)        │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│                   Services Layer                     │
│          (Business logic & data operations)          │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│                    Utils Layer                       │
│        (File system operations & helpers)            │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│                   data.json                          │
│                 (Persistent storage)                 │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```console
crud-api/
│
├── 📁 src/
│   │
│   ├── 📁 controllers/
│   │   └── 📄 item.controller.ts      # Request handlers & responses
│   │
│   ├── 📁 routes/
│   │   └── 📄 item.routes.ts          # API endpoint definitions
│   │
│   ├── 📁 services/
│   │   └── 📄 item.service.ts         # Business logic & CRUD operations
│   │
│   ├── 📁 utils/
│   │   └── 📄 fileHandler.ts          # JSON file read/write operations
│   │
│   ├── 📁 types/
│   │   └── 📄 item.types.ts           # TypeScript interfaces & types
│   │
│   ├── 📁 data/
│   │   └── 📄 data.json               # Persistent data storage
│   │
│   └── 📄 server.ts                   # Application entry point
│
├── 📄 package.json                    # Dependencies & scripts
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 .gitignore                      # Git ignore rules
└── 📄 README.md                       # Documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Quick Start

```console
# Clone the repository
git clone https://github.com/elyse502/crud-exercise.git

# Navigate to project directory
cd crud-exercise

# Install dependencies
npm install

# Set up environment (if needed)
cp .env.example .env  # Optional: configure port
```

### Environment Variables (Optional)

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

---

## 🚀 Running the Project

### Development Mode (with auto-reload)

```console
npm run dev
```

> Uses `ts-node-dev` for hot reloading during development

### Build for Production

```console
npm run build
```

> Compiles TypeScript to JavaScript in the `dist/` folder

### Run Production Build

```console
npm start
```

> Runs the compiled JavaScript from the `dist/` folder

---

## 📡 API Endpoints

**Base URL:** `http://localhost:3000/api/items`

---

### 📥 GET All Items

Retrieve all items from the database.

```http
GET /api/items
```

#### Response (200 OK)

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Laptop",
    "price": 1200
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Mouse",
    "price": 25
  }
]
```

---

### 📤 POST Create Item

Add a new item to the database.

```http
POST /api/items
```

#### Request Body

```json
{
  "name": "Laptop",
  "price": 1200
}
```

#### Response (201 Created)

```json
{
  "message": "Item created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Laptop",
    "price": 1200
  }
}
```

---

### 📝 PUT Update Item

Update an existing item by ID.

```http
PUT /api/items/:id
```

#### Request Body

```json
{
  "name": "Gaming Laptop",
  "price": 1500
}
```

#### Response (200 OK)

```json
{
  "message": "Item updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Gaming Laptop",
    "price": 1500
  }
}
```

#### Error Response (404 Not Found)

```json
{
  "message": "Item not found"
}
```

---

### 🗑️ DELETE Remove Item

Delete an item from the database by ID.

```http
DELETE /api/items/:id
```

#### Response (200 OK)

```json
{
  "message": "Item deleted successfully"
}
```

#### Error Response (404 Not Found)

```json
{
  "message": "Item not found"
}
```

---

## 📊 HTTP Status Codes

| Status Code | Meaning         | Usage                                      |
| ----------- | --------------- | ------------------------------------------ |
| **200**     | ✅ Success      | GET, PUT, DELETE successful operations     |
| **201**     | 🆕 Created      | POST successful resource creation          |
| **400**     | ❌ Bad Request  | Invalid request body or missing fields     |
| **404**     | 🔍 Not Found    | Resource with given ID doesn't exist       |
| **500**     | 💥 Server Error | Internal server error or file system issue |

---

## 🧹 Separation of Concerns

The project follows a clean architecture with distinct layers:

| Layer           | Responsibility                                       | Files                |
| --------------- | ---------------------------------------------------- | -------------------- |
| **Routes**      | API endpoint definitions & HTTP method mapping       | `item.routes.ts`     |
| **Controllers** | Request/response handling, validation, status codes  | `item.controller.ts` |
| **Services**    | Business logic, CRUD operations, data transformation | `item.service.ts`    |
| **Utils**       | Reusable helpers (file operations, ID generation)    | `fileHandler.ts`     |
| **Types**       | TypeScript interfaces & type definitions             | `item.types.ts`      |

### Benefits of this architecture:

- ✅ **Maintainability** - Easy to locate and update code
- ✅ **Testability** - Each layer can be tested independently
- ✅ **Scalability** - Add new features without breaking existing code
- ✅ **Reusability** - Services and utils can be reused across modules

---

## 📦 NPM Scripts

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Starts development server with auto-reload |
| `npm run build` | Compiles TypeScript to JavaScript          |
| `npm start`     | Runs production build                      |

---

## 🧪 Testing with Postman

You can test all CRUD endpoints using:

| Tool                                                                                                        | Description               |
| ----------------------------------------------------------------------------------------------------------- | ------------------------- |
| ![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)                        | Desktop API testing tool  |
| ![Thunder Client](https://img.shields.io/badge/Thunder_Client-FF6C37?logo=visualstudiocode&logoColor=white) | VS Code extension         |
| ![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white)                     | Cross-platform API client |
| ![cURL](https://img.shields.io/badge/cURL-073551?logo=curl&logoColor=white)                                 | Command-line tool         |

### Example cURL Commands

```console
# GET all items
curl http://localhost:3000/api/items

# POST create item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":1200}'

# PUT update item
curl -X PUT http://localhost:3000/api/items/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"name":"Gaming Laptop","price":1500}'

# DELETE item
curl -X DELETE http://localhost:3000/api/items/550e8400-e29b-41d4-a716-446655440000
```

---

## 🔮 Future Enhancements

- [ ] 🗄️ **Database Integration** - Migrate from JSON to PostgreSQL/MongoDB
- [ ] 🔐 **Authentication** - JWT-based user authentication
- [ ] 🛡️ **Validation** - Add Zod or Joi for request validation
- [ ] 📝 **Logging** - Implement Winston or Morgan for request logging
- [ ] 🧪 **Testing** - Add unit & integration tests with Jest
- [ ] 📚 **API Documentation** - Integrate Swagger/OpenAPI
- [ ] 🚦 **Rate Limiting** - Prevent abuse with express-rate-limit
- [ ] 🔄 **Pagination** - Add pagination for GET endpoints
- [ ] 🔍 **Search & Filter** - Implement query parameters for filtering
- [ ] 📎 **File Upload** - Support for image/file attachments

---

## 👨‍💻 Author

[**Elysée NIYIBIZI**](https://elyseedev.netlify.app)

_Junior Fullstack Software Engineer_

[![GitHub](https://img.shields.io/badge/GitHub-elyse502-181717?logo=github&logoColor=white)](https://github.com/elyse502)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Elysée_Niyibizi-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/niyibizi-elysée)
[![Email](https://img.shields.io/badge/Email-elysee@example.com-D14836?logo=gmail&logoColor=white)](mailto:elyseniyibizi502@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/elyse502/crud-exercise/blob/main/LICENSE) file for details.

```groovy
MIT License

Copyright (c) 2026 Elysée NIYIBIZI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

<div align="center">

### ⭐ Star this repository if you find it helpful for learning backend development!

**Built with 💻, TypeScript, and Clean Architecture**

---

_Questions or suggestions? Open an issue or reach out!_

[⬆ Back to Top](#-table-of-contents)

</div>
