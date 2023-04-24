/**
 * Checks if a given string is a valid URL.
 * @param {string} str - The string to check.
 * @returns {boolean} - true if the string is a valid URL, false otherwise.
 */

function checkForURL(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string argument');
    }
  
    const urlRegex = /^(?!mailto:)(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/i;
    return str.length < 2083 && urlRegex.test(str);
  }
  
  export { checkForURL };
  