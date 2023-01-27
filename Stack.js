class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item);
  }

  pop() {
    if (this.#list.length === 0) {
      return null;
    }
    return this.#list.pop();
  }

  peek() {
    if (this.#list.length === 0) {
      return null;
    }
    return this.#list[this.#list.length - 1];
  }
}
module.exports = { Stack };
const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push('llama');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
