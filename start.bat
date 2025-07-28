@echo off
cd /d "%~dp0"
echo Installing dependencies...
if exist yarn.lock (
    yarn install
) else (
    npm install
)
echo Starting Expo...
npx expo start --android
