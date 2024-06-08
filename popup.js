document.getElementById('extract').addEventListener('click', () => {
  const selector = document.getElementById('selector').value;
  if (selector) {
    chrome.runtime.sendMessage({ action: 'extractCSS', selector: selector });
  } else {
    alert('Please enter a CSS selector.');
  }
});
