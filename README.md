# 🔷 Zod Validation – Beginner to Advanced

<p align="center">
  <strong>Master Zod Validation with TypeScript</strong>
  <br />
  A practical learning repository covering Zod from fundamentals to advanced concepts.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Zod-v4-3E63DD?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/TypeScript-Learning-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Level-Beginner%20to%20Advanced-purple?style=for-the-badge" alt="Level" />
</p>

---

## 📖 About This Repository

This repository is a complete learning resource for understanding **Zod Validation with TypeScript**. It covers fundamental concepts, practical examples, schema validation, type inference, custom validation, and advanced techniques.

Whether you are a beginner or an experienced developer, this repository will help you understand how to validate data and build more reliable applications.

## 🚀 What You'll Learn

### 🟢 Beginner Level
- What is Zod and Why Use It?
- Installation and Project Setup
- Basic Schema Validation
- String, Number & Boolean Validation
- Object Schema
- Array Validation
- Optional & Nullable Values
- Default Values
- Email & URL Validation

### 🟡 Intermediate Level
- Enum Validation
- Union Types
- Tuple Validation
- Nested Objects
- Object Composition
- Custom Error Messages
- Schema Reusability
- Type Inference
- Safe Parse & Error Handling

### 🔴 Advanced Level
- Custom Validation
- Refinements
- Transformations
- Preprocessing
- Complex Schema Validation
- Advanced Type Inference
- API Request Validation
- Form Data Validation
- Real-World Validation Patterns

## 🛠️ Technologies Used

- TypeScript
- Zod v4
- Node.js
- TSX

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/khalekuzzamandev/Zod-Validation.git
```

**2. Navigate to the project**

```bash
cd Zod-Validation
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

## 💻 Basic Example

```ts
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  age: z.number().min(18),
  role: z.enum(["admin", "user"]),
});

const result = userSchema.safeParse({
  name: "Murad",
  email: "murad@example.com",
  age: 22,
  role: "user",
});

console.log(result);
```

## 🎯 Learning Goals

By completing this repository, you will understand how to:

- Validate user input safely.
- Create reusable validation schemas.
- Handle validation errors.
- Infer TypeScript types from schemas.
- Validate API request bodies.
- Build reliable backend applications.

## 📚 Official Documentation

- [Zod Documentation](https://zod.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)

## 🤝 Contributions

Suggestions, improvements, and contributions are always welcome!

If you find this repository helpful, please consider giving it a ⭐ **Star** on GitHub.

## 👨‍💻 Author

**Md. Khalekuzzaman**

- GitHub: [@khalekuzzamandev](https://github.com/khalekuzzamandev)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/khalekuzzamandev/)

---

<p align="center">
  <strong>Learn • Practice • Build • Improve 🚀</strong>
</p>
