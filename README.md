# Enduring Word Dark Mode Firefox Extension

A Firefox extension that applies a comfortable dark theme to [enduringword.com](https://enduringword.com) for better reading experience during evening Bible study sessions.

## Features

- **Automatic Dark Mode**: Instantly transforms the bright white background of Enduring Word into a comfortable dark theme
- **Eye-friendly Colors**: Carefully chosen color palette that reduces eye strain
- **Dynamic Content Support**: Handles dynamically loaded content and maintains dark mode across page navigation
- **Toggle Control**: Easy on/off toggle through the extension popup
- **Optimized for Reading**: Maintains excellent readability while providing a dark aesthetic

## Installation

### Method 1: Load as Temporary Extension (for testing)

1. Download or clone this repository to your local machine
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on..."
5. Navigate to the extension folder and select the `manifest.json` file
6. The extension will be loaded and active

### Method 2: Install as Developer Extension

1. Download or clone this repository
2. Open Firefox and navigate to `about:addons`
3. Click the gear icon and select "Install Add-on From File..."
4. Navigate to the extension folder and select the `manifest.json` file
5. Confirm the installation

## Usage

1. Navigate to any page on [enduringword.com](https://enduringword.com)
2. The dark mode will be automatically applied
3. Click the extension icon in the toolbar to access the toggle control
4. Use the toggle switch to enable/disable dark mode as needed

## What Gets Transformed

The extension applies dark mode styling to:

- Main content areas and text
- Navigation menus and headers
- Sidebar content and widgets
- Footer sections
- Bible verse text and commentary
- Search boxes and form elements
- Buttons and interactive elements
- Tables and structured content
- Modal dialogs and popups
- Cookie notices

## Color Scheme

- **Background**: Dark gray (#1a1a1a)
- **Secondary Background**: Medium gray (#2d2d2d)
- **Text**: Light gray (#e0e0e0)
- **Links**: Blue (#4a9eff)
- **Accents**: Blue (#0066cc)
- **Borders**: Dark gray (#404040)

## Technical Details

- **Manifest Version**: 2 (compatible with Firefox)
- **Permissions**: Access to enduringword.com only
- **Content Scripts**: Automatically injected CSS and JavaScript
- **Dynamic Content**: Mutation observer handles dynamically loaded content
- **Storage**: Remembers user preference for dark mode toggle

## Files Structure

```
enduring-word-dark-mode/
├── manifest.json          # Extension manifest
├── dark-mode.css         # Main dark mode styles
├── content-script.js     # Content script for dynamic handling
├── popup.html           # Extension popup interface
├── popup.js             # Popup functionality
├── icons/               # Extension icons
└── README.md           # This file
```

## Browser Compatibility

- **Firefox**: Fully supported (Manifest V2)
- **Chrome/Edge**: Compatible with minor modifications to manifest

## Contributing

Feel free to submit issues or pull requests to improve the extension. When contributing:

1. Test on multiple pages of enduringword.com
2. Ensure readability is maintained
3. Follow the existing code style
4. Update documentation as needed

## License

This extension is provided as-is for personal use. The Enduring Word website and its content are owned by their respective copyright holders.

## Changelog

### Version 1.0
- Initial release
- Basic dark mode functionality
- Toggle control via popup
- Dynamic content support
- Comprehensive styling for all page elements 