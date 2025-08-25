# Tasks

## Current Tasks

_None_

## Completed Tasks

- [x] Convert extension to be installable and persistent in Firefox
  - [x] Updated manifest.json with proper Firefox application ID and icon references
  - [x] Enhanced XPI packaging script to include all necessary files (including icons)
  - [x] Ensured extension persists after Firefox restart through proper XPI installation
  - [x] Updated installation documentation with clear persistent installation instructions
  - [x] Successfully built and tested XPI package (8.2K, integrity verified)

- [x] Fix Firefox extension warnings and compatibility issues
  - [x] Updated manifest.json to use `browser_specific_settings` instead of deprecated `applications`
  - [x] Increased minimum Firefox version from 48.0 to 57.0 to support all required APIs
  - [x] Further increased minimum Firefox version to 79.0 for Android compatibility with `browser_action.default_icon`
  - [x] Created proper PNG icon files (16px, 32px, 48px, 128px) to replace corrupted 0-byte files
  - [x] Updated popup.js to use `browser.storage.local` instead of `chrome.storage.sync` for better Firefox compatibility
  - [x] Changed API calls from chrome.* to browser.* namespace for better Firefox support
  - [x] Updated promise handling from callbacks to .then()/.catch() pattern
  - [x] Rebuilt XPI package (14K) with all fixes applied

## Notes

- Extension now properly installable as persistent Firefox add-on via XPI package
- Users can install using `./create-xpi.sh` then installing the generated `.xpi` file
- Extension will persist after Firefox restarts when installed via XPI method
- Added proper application ID: `enduring-word-dark-mode@example.com`
- All icons properly referenced in manifest for better user experience
- Fixed all Firefox compatibility warnings by updating API usage and minimum version requirements
- Icons now have proper dark mode theme with moon crescent design 