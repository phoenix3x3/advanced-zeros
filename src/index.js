module.exports = function getZerosCount(number, base) {

  function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  let power = [], fraction = 0, result = [], den = 0, k = 0, j = 0, final = [];

  while (k <= base) {
    result[k] = 0;
    power[k] = 0;
    k++;
  }

  for (let i = 2; i <= base; i++) {
    while (base % i === 0) {
      power[i]++;
      base /= i;
    }
  }
  if (base != 1) {
    power[base]++;
  }
  k = 1;
  for (let i = 0; i < power.length; i++) {
    k = 1;
    if (power[i] !== 0) {
      while (true) {
        denominator = Math.pow(i, k);
        fraction = Math.floor(number / denominator);
        if (fraction < 1) break;
        else result[i] += fraction;
        k++;
      }
    }
    result[i] = Math.floor(result[i] / power[i]);
    if (!isNaN(result[i])) {
      final[j] = result[i];
      j++;
    }
  }
  final.sort(compare);
  const answer = final[0];
  return answer;
}
