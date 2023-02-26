function positiveSum(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0)
      result = result + arr[i];
  }
  if(result > 0)
    return result;
  else
    return result = 0;
}
