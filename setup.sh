#!/bin/bash

echo "==================================================="
echo "  Prominence Institutional Banking - Local Setup   "
echo "==================================================="
echo

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "[1/4] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "[ERROR] npm install failed."
    exit 1
fi

echo
echo "[2/4] Setting up environment variables..."
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "[SUCCESS] Created .env from .env.example"
        echo "[ACTION] PLEASE OPEN .env AND ADD YOUR FIREBASE CREDENTIALS."
    else
        echo "[WARNING] .env.example not found. Skipping .env creation."
    fi
else
    echo "[INFO] .env already exists."
fi

echo
echo "[3/4] Verifying build..."
npm run build
if [ $? -ne 0 ]; then
    echo "[WARNING] Initial build failed. This is expected if .env is not yet configured."
fi

echo
echo "[4/4] Setup complete."
echo "==================================================="
echo
read -p "Would you like to start the development server now? (y/n): " start_now

if [[ $start_now =~ ^[Yy]$ ]]; then
    echo "Starting server..."
    npm run dev
else
    echo
    echo "To start the server later, run: npm run dev"
    echo
fi
