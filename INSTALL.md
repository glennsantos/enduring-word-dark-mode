# Installation Guide

## Install the Enduring Word Dark Mode Extension Permanently

### Method 1: Using Pre-built XPI Package (Recommended)

1. **Build the XPI Package**
   ```bash
   ./create-xpi.sh
   ```
   This creates `enduring-word-dark-mode-v1.0.xpi`

2. **Install in Firefox**
   - Open Firefox
   - Go to `about:addons` (or Menu > Add-ons and Themes)
   - Click the gear icon (⚙️) in the top right
   - Select "Install Add-on From File..."
   - Choose the `.xpi` file you just created
   - Click "Add" when prompted
   
   **Alternative**: Drag and drop the `.xpi` file directly into Firefox

3. **Accept the Installation**
   - Firefox may show a warning about unsigned extensions
   - This is normal for self-packaged extensions
   - Click "Add" to confirm installation

4. **Verify Installation**
   - The extension should appear in your Add-ons list
   - The extension icon should appear in your Firefox toolbar
   - **The extension will persist after Firefox restarts**

### Method 2: Bypass Signing Requirements (Advanced Users)

⚠️ **Warning**: These instructions are for experienced Firefox users. Changing settings can affect browser stability and security.

#### Option A: Use Firefox Developer Edition
1. Download and install [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Install the XPI package normally - unsigned extensions are allowed by default

#### Option B: Disable Signing in Regular Firefox
1. Open Firefox and type `about:config` in the address bar
2. Click "Accept the Risk and Continue"
3. Search for `xpinstall.signatures.required`
4. Double-click to change the value to `false`
5. Install your XPI package - Firefox will now accept unsigned extensions

**Note**: This setting will allow ALL unsigned extensions, which may pose security risks.

### Method 3: Developer Installation (Temporary)

⚠️ **Note**: This method creates a temporary installation that won't persist after Firefox restarts.

1. **Open Firefox Developer Tools**
   - Type `about:debugging` in your address bar and press Enter
   - Click "This Firefox" in the left sidebar

2. **Load the Extension**
   - Click "Load Temporary Add-on..."
   - Navigate to the extension folder
   - Select the `manifest.json` file
   - Click "Open"

### Testing the Extension

1. **Navigate to Enduring Word**
   - Go to [enduringword.com](https://enduringword.com)
   - The page should automatically display in dark mode

2. **Toggle Dark Mode**
   - Click the extension icon in the toolbar
   - Use the popup to toggle dark mode on/off

### Troubleshooting

- **Extension not working**: Make sure you're on enduringword.com
- **Dark mode not applying**: Try refreshing the page
- **Toggle not working**: Check the browser console for errors
- **Extension disappeared after restart**: Use Method 1 (XPI installation) instead of Method 3
- **Firefox blocks unsigned extension**: Use Method 2 to bypass signing requirements

### Updating the Extension

To update the extension:
1. Build a new XPI package with `./create-xpi.sh`
2. Uninstall the old version from `about:addons`
3. Install the new XPI file

### For Other Browsers

This extension is specifically designed for Firefox. For Chrome/Edge, significant modifications would be needed due to Manifest V3 requirements.

---

**Note**: This extension persists across Firefox restarts when installed via XPI package (Method 1). For maximum compatibility, always use the XPI installation method. If Firefox blocks unsigned extensions, use Firefox Developer Edition or disable signing requirements as described in Method 2. 