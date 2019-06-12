window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let solved = "";

    for (let i=0 ; i<string.length; i++){
    const numero = string[i].charCodeAt();
    let formula = ((numero-65)+ offset) % 26 + 65
    let letra = String.fromCharCode(formula)
    solved += letra
    }
    return solved;
  },


  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let solved2 = "";

    for (let i=0 ; i<string.length; i++){
    const numero2 = string[i].charCodeAt();
    let formula2 = ((numero-65)+ offset) % 26 + 65
    let letra2 = String.fromCharCode(formula)
    solved2 += letra

  }
};
