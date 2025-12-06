@echo off
echo Initializing Git repository for Credit Card Advisor AI
echo =====================================================

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed on your system.
    echo Please download and install Git from https://git-scm.com/downloads
    echo Then run this script again.
    pause
    exit /b
)

echo Git found. Initializing repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Failed to initialize Git repository.
    pause
    exit /b
)

echo Adding all files to Git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files to Git.
    pause
    exit /b
)

echo Committing files...
git commit -m "Initial commit: Credit Card Advisor AI"
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit files.
    pause
    exit /b
)

echo Git repository initialized successfully!
echo ======================================
echo Next steps:
echo 1. Create a new repository on GitHub (https://github.com/new)
echo 2. Follow GitHub's instructions to push your code
echo 3. Deploy to Vercel (https://vercel.com)
echo.
pause