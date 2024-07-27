module.exports = function toReadable(number) {
  const zeroNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const twentyNinetyn = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number < 20) {
    return zeroNineteen[number]
  }

  if (number < 100) {
    if (number % 10 === 0) {   
      return twentyNinetyn[(number / 10) - 2]
    } else {
      return twentyNinetyn[((number - (number % 10)) / 10) - 2] + ' ' + zeroNineteen[number % 10]
    }
  }

  if (number % 100 === 0) {
    return zeroNineteen[number / 100] + ' hundred'
  }

  if ((number % 100) < 20) {
    return zeroNineteen[(number - (number % 100)) / 100] + ' hundred ' + zeroNineteen[number % 100]
  }
  if ((number % 100) % 10 === 0) {
    return zeroNineteen[(number - (number % 100)) / 100] + ' hundred ' + twentyNinetyn[((number % 100) / 10) - 2]
  }
  return zeroNineteen[(number - (number % 100)) / 100] + ' hundred ' + twentyNinetyn[(((number % 100) - (number % 100 % 10)) / 10) - 2] + ' ' + zeroNineteen[(number % 100) % 10]

}
