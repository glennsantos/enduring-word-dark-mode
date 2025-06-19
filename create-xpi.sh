#!/bin/bash

# Create XPI package for Enduring Word Dark Mode Extension

echo "Creating XPI package for Firefox installation..."

# Extension name and version
EXTENSION_NAME="enduring-word-dark-mode"
VERSION="1.0"
XPI_NAME="${EXTENSION_NAME}-v${VERSION}.xpi"

# Create temporary directory for packaging
TEMP_DIR="temp_xpi_build"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

echo "Copying extension files..."

# Copy all necessary files to temp directory
cp manifest.json "$TEMP_DIR/"
cp dark-mode.css "$TEMP_DIR/"
cp content-script.js "$TEMP_DIR/"
cp popup.html "$TEMP_DIR/"
cp popup.js "$TEMP_DIR/"

# Copy icons directory
cp -r icons "$TEMP_DIR/"

# Change to temp directory and create XPI
cd "$TEMP_DIR"

echo "Creating XPI archive..."

# Create the XPI file (which is just a ZIP file with .xpi extension)
# Use specific compression settings for better compatibility
zip -r -9 "../$XPI_NAME" . -x "*.DS_Store" "*.git*" "*.svn*"

# Go back to original directory
cd ..

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo ""
echo "✅ XPI package created successfully!"
echo "📦 File: $XPI_NAME"
echo "📁 Location: $(pwd)/$XPI_NAME"
echo ""
echo "🔧 To install permanently in Firefox:"
echo "1. Open Firefox"
echo "2. Go to about:addons"
echo "3. Click the gear icon (⚙️) in the top right"
echo "4. Select 'Install Add-on From File...'"
echo "5. Choose the $XPI_NAME file"
echo "6. Click 'Add' when prompted"
echo "7. The extension will persist after Firefox restarts"
echo ""
echo "🌐 Or drag and drop the XPI file directly into Firefox!"
echo ""
echo "⚠️  Note: Firefox may show a warning about unsigned extensions."
echo "   This is normal for self-packaged extensions."
echo ""

# Check if file was created successfully
if [ -f "$XPI_NAME" ]; then
    FILE_SIZE=$(ls -lh "$XPI_NAME" | awk '{print $5}')
    echo "📊 Package size: $FILE_SIZE"
    echo "✨ Ready for installation!"
    
    # Test the archive integrity
    echo "🔍 Testing archive integrity..."
    if unzip -t "$XPI_NAME" > /dev/null 2>&1; then
        echo "✅ Archive integrity verified!"
    else
        echo "❌ Archive integrity check failed!"
        exit 1
    fi
else
    echo "❌ Error: XPI file was not created successfully"
    exit 1
fi 