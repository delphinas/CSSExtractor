chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractCSS') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getCSS,
        args: [request.selector]
      });
    });
  }
});

function getCSS(selector) {
  const selectedElement = document.querySelector(selector);

  if (!selectedElement) {
    alert(`Element with selector "${selector}" not found.`);
    return;
  }

  const selectedElementCSS = window.getComputedStyle(selectedElement);
  const children = selectedElement.querySelectorAll('*');

  const childrenCSS = Array.from(children).map(child => {
    return {
      selector: getSelector(child),
      css: window.getComputedStyle(child)
    };
  });

  function getSelector(element) {
    if (element.id) {
      return `#${element.id}`;
    } else if (element.className) {
      return `.${element.className.split(' ').join('.')}`;
    } else {
      return element.tagName.toLowerCase();
    }
  }

  function formatCSS(selector, computedStyle) {
    let cssText = `${selector} {\n`;
    for (let i = 0; i < computedStyle.length; i++) {
      const propName = computedStyle[i];
      cssText += `  ${propName}: ${computedStyle.getPropertyValue(propName)};\n`;
    }
    cssText += `}\n`;
    return cssText;
  }

  const elementHTML = selectedElement.outerHTML;
  const elementSelector = getSelector(selectedElement);
  const elementCSS = formatCSS(elementSelector, selectedElementCSS);

  let childrenCSSFormatted = '';
  childrenCSS.forEach(child => {
    childrenCSSFormatted += formatCSS(child.selector, child.css);
  });

  const clipboardText = `/* HTML */\n${elementHTML}\n\n/* CSS */\n${elementCSS}${childrenCSSFormatted}`;

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  copyToClipboard(clipboardText);
  alert('HTML and CSS copied to clipboard!');
}
