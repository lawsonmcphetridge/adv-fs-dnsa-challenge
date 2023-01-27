const { Stack } = require('./Stack.js')

describe('Stack', () => {
  it('should push an item to the stack', () => {
    const stack = new Stack();
    stack.push('fox');
    expect(stack.peek()).toEqual('fox');
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    expect(stack.pop()).toEqual('goose');
  });

  it('should return null when popping from an empty stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});
