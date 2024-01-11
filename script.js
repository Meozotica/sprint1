function adivinhaNumero() {
  // Obtém o número digitado pelo usuário
  const numero = document.getElementById("numero").value;

  // Verifica se o número é válido
  if (numero.length != 4) {
    alert("O número deve ter quatro dígitos.");
    return;
   } //else{

//     alert("o numero deve conter quatro digitos");
//   }

  // Gera um número aleatório entre 1000 e 9999
  const numeroEsperado = Math.floor(Math.random() * 9000) + 1000;
  console.log(numeroEsperado);

  // Verifica se o número digitado é igual ao número esperado
  if (numero === numeroEsperado) {
    alert("Parabéns! Você acertou o número!");
  } else {
    // Verifica se o número digitado é maior ou menor que o número esperado
    if (numero > numeroEsperado) {
      alert("O próximo número deve ser menor.");
    } else {
      alert("O próximo número deve ser maior.");
    }
  }
}