document.addEventListener('DOMContentLoaded', function(){
  const fibonacci = position => {
    //計算次數
    let count = 0;
    let a = 0;
    let b = 1;
    //c為總和
    let c = 0;
    while(count < position){
      a = b;
      b = c;
      c = a + b;
      count ++;
    }
    return c;
  }
  document.write(fibonacci(0));
});