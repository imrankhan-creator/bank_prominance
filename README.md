# Prominence Institutional Banking

A high-fidelity, production-ready institutional banking web application built with React, Vite, Tailwind CSS, and Firebase.

## Features

- **Executive Overview**: Real-time portfolio performance and system health monitoring.
- **Institutional Ledger**: Master operating ledger with transaction velocity tracking.
- **Capital Movement**: Multi-step liquidity management and KTT/MT-103 transfers.
- **Market Intelligence**: Global risk indices and institutional sentiment analysis.
- **Zero-Trust Security**: Firebase Auth with Google OAuth and field-level AES-256 encryption.

## Local Setup

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Installation
**Windows Users:**
You can run the automated setup script:
```bash
setup.bat
```

**macOS/Linux Users:**
Run the setup script (you may need to give it execute permissions):
```bash
chmod +x setup.sh
./setup.sh
```

This will install dependencies and create your `.env` file.

**Manual Installation:**
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and populate it with your credentials (use `.env.example` as a template):

```env
GEMINI_API_KEY="your_gemini_api_key"
VITE_FIREBASE_API_KEY="your_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_project.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"
VITE_ENCRYPTION_KEY="your_secret_encryption_key"
```

### 4. Development
Start the development server (Express + Vite):
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 5. Production Build
Build the static assets:
```bash
npm run build
```
The production-ready files will be in the `dist/` directory.

## Security Note
This application implements field-level encryption for sensitive data. Ensure your `VITE_ENCRYPTION_KEY` is kept secure and never committed to version control.
