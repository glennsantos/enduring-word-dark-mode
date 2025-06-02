#!/bin/bash

# Package Enduring Word Dark Mode Extension

echo "Packaging Enduring Word Dark Mode Extension..."

# Create a temporary directory for packaging
TEMP_DIR="enduring-word-dark-mode-package"
mkdir -p "$TEMP_DIR"

# Copy necessary files
cp manifest.json "$TEMP_DIR/"
cp dark-mode.css "$TEMP_DIR/"
cp content-script.js "$TEMP_DIR/"
cp popup.html "$TEMP_DIR/"
cp popup.js "$TEMP_DIR/"
cp -r icons "$TEMP_DIR/"

echo "Files copied to $TEMP_DIR"

# Create zip file for distribution
ZIP_NAME="enduring-word-dark-mode-v1.0.zip"
cd "$TEMP_DIR"
zip -r "../$ZIP_NAME" .
cd ..

echo "Extension packaged as $ZIP_NAME"

# Clean up temporary directory
rm -rf "$TEMP_DIR"

echo "Packaging complete!"
echo ""
echo "To install in Firefox:"
echo "1. Open about:debugging"
echo "2. Click 'This Firefox'"
echo "3. Click 'Load Temporary Add-on...'"
echo "4. Select manifest.json from the extracted files"
echo ""
echo "Or extract the zip file and follow the installation instructions in INSTALL.md" 