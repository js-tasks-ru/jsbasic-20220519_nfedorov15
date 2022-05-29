function checkSpam(str) {
  
    let newStr = str.toLowerCase();
    return newStr.includes("1xbet") || newStr.includes("xxx");
  }
  
  
  
  checkSpam('1XbeT now');
  checkSpam('free xxxxx');
  checkSpam('innocent rabbit');

