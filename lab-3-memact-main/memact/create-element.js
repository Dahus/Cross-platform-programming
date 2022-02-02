export const TEXT_ELEMENT = 'TEXT_ELEMENT';

export function createElement(type, props, ...children) {}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}
