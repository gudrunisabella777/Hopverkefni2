/**
 * Skilar mynd af handahófi á bilinu [min, max].
 * Við skýrum myndirnar frá [0,30]. 
 * @param {img} min Lágmark bils.
 * @param {img} max Hámark bils.
 * @returns Mynd af handahófi á bili [min, max].
 */
 export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Athugar hvort gefin mynd sé á bilinu [min, max].
   *
   * @param {string | img} numAsString Mynd sem á að athuga.
   * @param {img} min Lágmark sem mynd má vera.
   * @param {img} max Hámark sem mynd má vera.
   * @returns `true` ef mynd er innan bils, annars `false`.
   */
   export function isValidNum(numAsString, min, max) {
    const num = Number.parseInt(numAsString);
    return min <= num && num <= max;
  }