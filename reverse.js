function translatePossessed(message) {
    //validar message === blank
    if (message.trim() === "")
        return "";
    return message.split(" ").map(palabra => [...palabra].reverse().join("")).join(" ");
}
const frase = translatePossessed("i yojne gnihctaw uoy");
console.log(frase);
