const arr = [];
const variants = (n, include) => {
  let result = include ? [[n, 0]] : [];
  for (let i=1; i<n; i++) {
    result.push([i, n-i]);
    result = [...result, ...variants(n-i).map(a => [i, ...a] )];
  }
  return result.filter(a => a.length);
}


for (let i=1; i<=10; i++) {
  console.log(`For ${i}: `, JSON.stringify(variants(i, true)))
}

