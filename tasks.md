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

## Notes

- Extension now properly installable as persistent Firefox add-on via XPI package
- Users can install using `./create-xpi.sh` then installing the generated `.xpi` file
- Extension will persist after Firefox restarts when installed via XPI method
- Added proper application ID: `enduring-word-dark-mode@example.com`
- All icons properly referenced in manifest for better user experience 