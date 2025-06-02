# Quick Installation Guide

## Install the Enduring Word Dark Mode Extension

### For Firefox

1. **Download the Extension**
   - Download all files from this repository to a folder on your computer

2. **Open Firefox Developer Tools**
   - Type `about:debugging` in your address bar and press Enter
   - Click "This Firefox" in the left sidebar

3. **Load the Extension**
   - Click "Load Temporary Add-on..."
   - Navigate to the folder where you downloaded the extension files
   - Select the `manifest.json` file
   - Click "Open"

4. **Verify Installation**
   - You should see "Enduring Word Dark Mode" appear in the list of extensions
   - The extension icon should appear in your Firefox toolbar

5. **Test the Extension**
   - Navigate to [enduringword.com](https://enduringword.com)
   - The page should automatically display in dark mode
   - Click the extension icon to toggle dark mode on/off

### For Chrome/Edge (with modifications)

If you want to use this in Chrome or Edge, you'll need to:

1. Change `manifest_version` from 2 to 3 in `manifest.json`
2. Update the permissions structure for Manifest V3
3. Follow Chrome's extension loading process

### Troubleshooting

- **Extension not working**: Make sure you're on enduringword.com
- **Dark mode not applying**: Try refreshing the page
- **Toggle not working**: Check the browser console for errors

### Permanent Installation

For permanent installation, you would need to:
1. Package the extension as a .xpi file (Firefox) or .crx file (Chrome)
2. Submit to the respective browser extension stores
3. Or use Firefox's "Install Add-on From File" option with a packaged .xpi file

---

**Note**: This is a development version. For production use, consider packaging the extension properly and submitting it to the Firefox Add-ons store. 