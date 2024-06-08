
# CSS and HTML Extractor Chrome Extension

This Chrome extension allows you to extract and copy the HTML and CSS of a selected element and its children directly to your clipboard. This is especially useful for web developers who need to quickly get the styles and structure of specific elements on a webpage.

## Features

-   Extracts HTML and CSS of the selected element and all its children.
-   Copies the extracted HTML and CSS to the clipboard.
-   Simple and easy-to-use interface.

## Installation

### Step 1: Download the Extension Files

1.  Clone this repository or download the files as a ZIP and extract them.

    bash

    Copy code

    `git clone <repository-url>
    cd <repository-directory>`


### Step 2: Load the Extension in Chrome

1.  Open Chrome and navigate to `chrome://extensions/`.
2.  Enable "Developer mode" by toggling the switch in the top right corner.
3.  Click on the "Load unpacked" button.
4.  Select the directory where you downloaded/extracted the extension files.

The extension should now appear in your list of installed extensions.

## Usage

1.  Click on the extension icon in the Chrome toolbar to open the popup.
2.  Enter the CSS selector of the element you want to extract in the input field.
3.  Click the "Extract CSS" button.
4.  The HTML and CSS of the selected element and its children will be copied to your clipboard.
5.  An alert will notify you that the content has been copied successfully.

## File Structure

-   `manifest.json`: Contains metadata about the extension.
-   `background.js`: Handles background tasks and scripts execution.
-   `content.js`: (Optional) Can be used for additional DOM manipulations.
-   `popup.html`: The popup interface of the extension.
-   `popup.js`: Handles interactions in the popup.
-   `styles.css`: (Optional) Styles for the popup interface.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any issues or questions, please open an issue in this repository.