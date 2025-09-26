import { Button } from "./App";

export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="number" />

      <label>🧍 Your expense</label>
      <input type="number" />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="number" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option className="user">You</option>
        <option className="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}