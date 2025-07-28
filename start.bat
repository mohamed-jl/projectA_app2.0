@echo off
cd /d "%~dp0"
echo Installing dependencies...
if not exist node_modules (
    npm install --force
)
echo Starting Expo...
npx expo start --android
