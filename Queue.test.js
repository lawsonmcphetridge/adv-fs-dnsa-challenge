const { Queue } = require('./Queue.js');

describe('Queue', () => {
  it('should enqueue an item to the queue', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    expect(queue.hasNext()).toEqual(true);
  });

  it('should dequeue an item from the queue', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    expect(queue.dequeue()).toEqual('fox');
  });

  it('should return null when dequeueing from an empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });

  it('should return correct hasNext value', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.dequeue();
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
