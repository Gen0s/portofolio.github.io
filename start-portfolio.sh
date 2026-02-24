#!/bin/bash

# ----------------------------
# One-command Portfolio Dev Server for Fedora/Linux
# ----------------------------

# 1️⃣ Check Node.js
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Installing LTS via NodeSource..."
    curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
    sudo dnf install -y nodejs
fi

# 2️⃣ Check npm
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Installing npm..."
    sudo dnf install -y npm
fi

# 3️⃣ Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
    echo "Installing project dependencies..."
    npm install
fi

# 4️⃣ Start Vite dev server
echo "Starting Vite dev server..."
# Run in background but separate the PID assignment
npm run dev &
sleep 2
xdg-open http://localhost:5173

# Note: PID capture removed to avoid errors
echo "
Vite dev server started.
Visit http://localhost:5173 in your browser.
To stop the server, press Ctrl+C in this terminal.
"
