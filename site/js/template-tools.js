/*
 * @Author: miaomiao612 dddoctorr612@gmail.com
 * @Date: 2022-10-15 22:49:43
 * @LastEditors: miaomiao612 dddoctorr612@gmail.com
 * @LastEditTime: 2022-10-16 04:32:50
 * @FilePath: \school-explorer\site\js\template-tools.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* ====================
The following two functions take a string of HTML and create DOM element objects
representing the tags, using the `template` feature of HTML. See the following
for more information: https://stackoverflow.com/a/35385518/123776
==================== */

/* eslint-disable no-unused-vars */

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
  const template = document.createElement('template');
  const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = trimmedHtml;
  return template.content.firstChild;
}

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
function htmlToElements(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.childNodes;
}

window.htmlToElement = htmlToElement;
window.htmlToElements = htmlToElements;

export {
  htmlToElement,
  htmlToElements,
};