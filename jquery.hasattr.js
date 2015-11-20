


/* HAS ATTRIBUTE */

$.fn.hasAttr = function(attrName){
  var element = this[0];
  
  if(element.hasAttribute){
    return element.hasAttribute(attrName);
  }
  
  return element[attrName] !== undefined;
}