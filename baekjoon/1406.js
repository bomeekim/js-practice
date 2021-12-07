const fs = require('fs');
const { Duplex } = require('stream');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const data = input.map(value => value.replace(/\r/g, ''));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;

    while(currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    console.log('---------------------------')
    console.log(node);
    console.log(newValue);
    console.log('---------------------------')

    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    
    while(prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  length() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';

    console.log(displayString);
  }

  getArray() {
    let currentNode = this.head;
    let array = [];

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const string = data[0].split('');
const constructionsNum = data[1];
const linkedList = new SinglyLinkedList();

for (let i=0; i<string.length; i++) {
  linkedList.append(string[i]);
}

solution(data.splice(2, data.length));

function solution(constructions) {
  let currIndex = linkedList.length();
  console.log('currIndex : ', currIndex);

  for (let i=0; i<constructions.length; i++) {
    const [construction, value] = constructions[i].split(' ');
    console.log(construction, value);
  
    switch (construction) {
      case 'L':
        if (currIndex === 0) break;
        else {
          currIndex--;
          break;
        }
      case 'D':
        if (currIndex === string.length) break;
        else {
          currIndex++;
          break;
        }
      case 'B':
        if (currIndex === 0) break;
        else {
          linkedList.remove(linkedList.find(linkedList.getArray()[currIndex - 1].value));
          break;
        }
      case 'P':
        console.log('array>>>>');
        console.log(linkedList.getArray());

        // TODO: 맨 앞에 넣어야할 경우 처리하기
        const findIndex = currIndex > 0 ? currIndex - 1 : currIndex;
        linkedList.insert(linkedList.find(linkedList.getArray()[findIndex]), value);
        currIndex = linkedList.length();
        break;
    }
    console.log('currIndex : ', currIndex, ', linkedList lenght: ', linkedList.length());
    linkedList.display();
  }

  // linkedList.display();
}