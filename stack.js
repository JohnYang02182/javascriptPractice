class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {//加入節點
    let newNode = new Node(val);
    if(!this.first) { //如果沒有節點
      this.first = newNode;
      this.last = newNode;
    } 
    else {//已有節點時
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
　　 }
    return ++this.length;
   }
   pop() {//移除節點
     if(!this.first) {
       return null; //如果還沒有任何節點，回傳空值。
     }
     let temp = this.first;
     if(this.first === this.last) { //如果只有一個節點
       this.last = null;
     }
     this.first = this.first.next;
     this.length--;
     return temp.val;
   }
  size() {//所有元素
    return this.length;
  }
}
const mystack = new Stack();
console.log(mystack.push(1));
console.log(mystack.push(2));
console.log(mystack.push(3));
console.log(mystack.pop());
console.log(mystack.size());