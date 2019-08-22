function decToBin(dec) {
  var output = "";
  var bits = [];
  var base2 = [];

  for(var i=1; i<=dec; i*=2) {
    base2.push(i);
  }
  base2.reverse();

  for(var i=0; i< base2.length; i++) {
    if(base2[i] > dec) {
      bits.push(0);
    } else {
      bits.push(1);
      dec %= base2[i];
    }
  }
  output = parseInt(bits.join(''));

  return output;
}

function binToDec(bin) {
  var bits = bin.split('');
  bits.reverse();
  for(var i=0; i<bits.length; i++) {
    bits[i] = parseInt(bits[i]);
  }
  var output = bits[0];

  for(var i=1; i<bits.length; i++) {
    if(parseInt(bits[i]) > 0) {
      output += Math.pow(2, i);
    }
  }

  return output;
}
