function translatePossessed (message: string): string {
  //validar message === blank
  if(message.trim() === "") return ""
  //separar message y revertir cada palabra
  return message.split(" ").map(palabra => [...palabra].reverse().join("")).join(" ")
}
const frase = translatePossessed("i yojne gnihctaw uoy")
console.log(frase)
