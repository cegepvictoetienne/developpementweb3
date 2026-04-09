function createTooltip(text, translation) {
  const span = document.createElement('span');
  span.classList.add('tooltip');
  span.textContent = text;

  const tooltipText = document.createElement('span');
  tooltipText.classList.add('tooltiptext');
  tooltipText.textContent = translation;

  span.appendChild(tooltipText);
  return span;
}

function underlineAndTranslate(translations) {
  const contentElement = document.getElementsByTagName('main')[0];
  const walker = document.createTreeWalker(
    contentElement,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    let nodeValue = node.nodeValue;

    for (const [french, english] of Object.entries(translations)) {
      const french_with_spaces = french.replace(/_/g, ' ');
      const regex = new RegExp(`\\b${french_with_spaces}\\b`, 'g');
      nodeValue = nodeValue.replace(regex, (match) => {
        const span = createTooltip(match, english).outerHTML;
        return span;
      });
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nodeValue;

    while (tempDiv.firstChild) {
      node.parentNode.insertBefore(tempDiv.firstChild, node);
    }

    node.parentNode.removeChild(node);
  });
}

fetch('/donnees/traductions.json')
  .then((response) => response.json())
  .then((response) => underlineAndTranslate(response));
