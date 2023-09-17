function ExtensibleObject() {
    // Create an empty object
    const obj = {};
  
    // The extend method
    obj.extend = function(template) {
      for (const prop in template) {
        if (typeof template[prop] === 'function') {
          // Add functions to the prototype
          obj.__proto__[prop] = template[prop];
        } else {
          // Copy properties to the object
          obj[prop] = template[prop];
        }
      }
    };
  
    return obj;
  }