@echo off
SETLOCAL EnableDelayedExpansion

echo ===================================================
echo   Prominence Institutional Banking - Local Setup
echo ===================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [1/4] Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/4] Setting up environment variables...
if not exist .env (
    if exist .env.example (
        copy .env.example .env
        echo [SUCCESS] Created .env from .env.example
        echo [ACTION] PLEASE OPEN .env AND ADD YOUR FIREBASE CREDENTIALS.
    ) else (
        echo [WARNING] .env.example not found. Skipping .env creation.
    )
) else (
    echo [INFO] .env already exists.
)

echo.
echo [3/4] Verifying build...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [WARNING] Initial build failed. This is expected if .env is not yet configured.
)

echo.
echo [4/4] Setup complete.
echo ===================================================
echo.
set /p start_now="Would you like to start the development server now? (Y/N): "

if /i "%start_now%"=="Y" (
    echo Starting server...
    npm run dev
) else (
    echo.
    echo To start the server later, run: npm run dev
    echo.
    pause
)

ENDLOCAL
