export default function useCPFChecker(cpf) {
  let aux = 0
  const numbers = cpf.split('')
  numbers.forEach((number) => (aux += parseInt(number)))
  return JSON.stringify(aux).charAt(0) === JSON.stringify(aux).charAt(1)
}
