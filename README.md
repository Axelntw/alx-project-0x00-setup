# Project Setup Guide: Next.js with TypeScript

## Requirements
- Node.js
- npm (Node Package Manager)
- Visual Studio Code

## Project Setup Instructions

1. Open Visual Studio Code and create a new terminal:
   ```bash
   Terminal -> New Terminal
   ```

2. Navigate to your project directory:
   ```bash
   cd /path/to/your/project/directory
   ```

3. Create a new Next.js project with TypeScript:
   ```bash
   npx create-next-app@latest alx-project-0x00 --typescript
   ```

4. During the setup, select the following options:
   - Would you like to use ESLint? › Yes
   - Would you like to use Tailwind CSS? › Yes
   - Would you like to use src/ directory? › No
   - Would you like to use App Router? › No
   - Would you like to customize the default import alias (@/*)? › Yes

5. Navigate to the project directory:
   ```bash
   cd alx-project-0x00
   ```

6. Start the development server:
   ```bash
   npm run dev -- -p 3000
   ```

Your application will be available at `http://localhost:3000`

## Available Routes
- Home: http://localhost:3000
- Landing: http://localhost:3000/landing
- About: http://localhost:3000/about

## Project Structure
```
alx-project-0x00/
├── components/
│   ├── Card.tsx
│   └── Pill.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   ├── landing.tsx
│   └── about.tsx
├── public/
├── styles/
├── package.json
├── tsconfig.json
└── README.md
```

## Repository Information
- GitHub repository: alx-project-0x00-setup
- Directory: alx-project-0x00
- Main documentation: README.md