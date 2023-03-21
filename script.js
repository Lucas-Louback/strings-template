// const nomeusuarioPrompt = prompt("Qual o seu nome?")
// const nomeusuario = nomeusuarioPrompt.toUpperCase()
// const corfavorita = prompt("qual a sua cor favorita?")
// const citacao = prompt("Qual a sua citação fvorita?")
// const fraseConcatenada = 'a cor favorita de '+ nomeusuario + ` é ` + corfavorita
// const fraseTemplateString = `a cor favorita de ${nomeusuario} é ${corfavorita}.`

// console.log(fraseConcatenada)
// console.log(fraseTemplateString)

// const novaFrase = fraseTemplateString + ` ` + citacao

// console.log(novaFrase)

// const dadosUsuario = `O nome do usuário é  ${nomeusuario}\na cor favorita é ${corfavorita}\na citação favorita é "${citacao}"`

// console.log(dadosUsuario)
const nome = prompt("qual o seu nome?")
const email = prompt("qual o seu email?")
const mensagemToUppercase = `O email ${email} foi cadastrado com sucesso. Bem-vindo, ${nome}`.toUpperCase()

const mensagemsub = mensagemToUppercase.replaceAll("R","X")
const arroba = email.includes("@")

console.log(mensagemToUppercase)
console.log(nome.length)
console.log(mensagemsub)
console.log(arroba)



