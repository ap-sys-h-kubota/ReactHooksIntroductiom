import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(5);

  // const decrement = () => {
  //   // setCount(count - 1);
  //   setCount((currentCount) => currentCount - 1);
  // };

  // const increment = () => {
  //   // setCount(count + 1);
  //   setCount((currentCount) => currentCount + 1);
  // };

  // const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 });

  // const voteKinoko = () => {
  //   // setVote({ ...vote, kinoko: vote.kinoko + 1 });
  //   vote.kinoko = vote.kinoko + 1;
  //   setVote(vote);
  // };

  // const voteTakenoko = () => {
  //   // setVote({ ...vote, takenoko: vote.takenoko + 1 });
  //   vote.takenoko = vote.takenoko + 1;
  //   setVote(vote);
  // };

  const [items, setItems] = useState([{ name: "きのこ" }]);

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    };
    // setItems([...items, newItem]);
    items.push(newItem);
    setItems(items);
  };

  const deleteItem = (index) => {
    // setItems(items.filter((_, i) => i !== index));
    items.splice(index, 1);
    setItems(items);
  };

  return (
    <>
      {/* <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button> */}

      {/* <p>きのこ：{vote.kinoko}</p>
      <p>たけのこ：{vote.takenoko}</p>
      <button onClick={voteKinoko}>きのこ</button>
      <button onClick={voteTakenoko}>たけのこ</button> */}

      <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}
