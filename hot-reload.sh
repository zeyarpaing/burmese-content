#!/usr/bin/env bash
echo "Checking if Figma is running..."
osascript <<'EOF'
if application "Figma" is running then
    tell application "Figma" to activate
    tell application "System Events" to tell process "Figma"
        keystroke "p" using {command down, option down}
    end tell
    return "Running"
else
    return "Not running"
end if
EOF
