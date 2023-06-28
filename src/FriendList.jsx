import FriendCard from './FriendCard';

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          onSelection={onSelection}
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
        ></FriendCard>
      ))}
    </ul>
  );
}
