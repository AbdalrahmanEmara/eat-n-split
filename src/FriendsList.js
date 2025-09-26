import { Friend } from "./Friend";

export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((fr) => (
        <Friend friend={fr} key={fr.id} onSelection={onSelection} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
}
