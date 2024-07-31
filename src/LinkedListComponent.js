import React, { useState, useEffect } from "react";
import SinglyLinkedList from "./SinglyLinkedList";
import DoublyLinkedList from "./DoublyLinkedList";
import Queue from "./Queue";
import Stack from "./Stack";
import "./LinkedListComponent.css";

const LinkedListComponent = () => {
  const [singlyList] = useState(new SinglyLinkedList());
  const [doublyList] = useState(new DoublyLinkedList());
  const [queue] = useState(new Queue());
  const [stack] = useState(new Stack());
  const [inputValue, setInputValue] = useState("");
  const [singlyOutput, setSinglyOutput] = useState("");
  const [doublyOutput, setDoublyOutput] = useState("");
  const [queueOutput, setQueueOutput] = useState("");
  const [stackOutput, setStackOutput] = useState("");

  useEffect(() => {
    displaySinglyList();
    displayDoublyList();
    displayQueue();
    displayStack();
  }, []);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAction = (action, listType, parseValue = true) => {
    if (inputValue) {
      const value = parseValue ? parseInt(inputValue) : inputValue;
      listType[action](value);
      setInputValue("");
      listType === singlyList ? displaySinglyList() : displayDoublyList();
    }
  };

  const handleQueueAction = (action) => {
    if (inputValue && action === "enqueue") {
      queue.enqueue(parseInt(inputValue));
      setInputValue("");
    } else if (action === "dequeue") {
      queue.dequeue();
    }
    displayQueue();
  };

  const handleStackAction = (action) => {
    if (inputValue && action === "push") {
      stack.push(parseInt(inputValue));
      setInputValue("");
    } else if (action === "pop") {
      stack.pop();
    }
    displayStack();
  };

  const handleContains = (listType, setOutput) => {
    if (inputValue) {
      const contains = listType.contains(parseInt(inputValue));
      setOutput(`Linked List contains ${inputValue}: ${contains}`);
      setInputValue("");
    }
  };

  const handleReverse = (listType, displayList) => {
    listType.reverse();
    displayList();
  };

  const handleTraverse = (listType, setOutput) => {
    const values = listType.traverse();
    setOutput(`Linked List: ${values.join(", ")}`);
  };

  const displaySinglyList = () => handleTraverse(singlyList, setSinglyOutput);
  const displayDoublyList = () => handleTraverse(doublyList, setDoublyOutput);
  const displayQueue = () =>
    setQueueOutput(`Queue: ${queue.traverse().join(", ")}`);
  const displayStack = () =>
    setStackOutput(`Stack: ${stack.traverse().join(", ")}`);

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input"
      />

      <div className="dropdown">
        <button className="dropbtn">Singly Linked List</button>
        <div className="dropdown-content">
          <a onClick={() => handleAction("add", singlyList)}>Add</a>
          <a onClick={() => handleAction("prepend", singlyList)}>Prepend</a>
          <a onClick={() => handleAction("remove", singlyList)}>Remove</a>
          <a onClick={() => handleContains(singlyList, setSinglyOutput)}>
            Contains
          </a>
          <a onClick={() => handleReverse(singlyList, displaySinglyList)}>
            Reverse
          </a>
          <a onClick={() => handleTraverse(singlyList, setSinglyOutput)}>
            Traverse
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Doubly Linked List</button>
        <div className="dropdown-content">
          <a onClick={() => handleAction("add", doublyList)}>Add</a>
          <a onClick={() => handleAction("prepend", doublyList)}>Prepend</a>
          <a onClick={() => handleAction("remove", doublyList)}>Remove</a>
          <a onClick={() => handleContains(doublyList, setDoublyOutput)}>
            Contains
          </a>
          <a onClick={() => handleReverse(doublyList, displayDoublyList)}>
            Reverse
          </a>
          <a onClick={() => handleTraverse(doublyList, setDoublyOutput)}>
            Traverse
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Queue</button>
        <div className="dropdown-content">
          <a onClick={() => handleQueueAction("enqueue")}>Enqueue</a>
          <a onClick={() => handleQueueAction("dequeue")}>Dequeue</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Stack</button>
        <div className="dropdown-content">
          <a onClick={() => handleStackAction("push")}>Push</a>
          <a onClick={() => handleStackAction("pop")}>Pop</a>
        </div>
      </div>

      <div className="output">{singlyOutput}</div>
      <div className="output">{doublyOutput}</div>
      <div className="output">{queueOutput}</div>
      <div className="output">{stackOutput}</div>
    </div>
  );
};

export default LinkedListComponent;
