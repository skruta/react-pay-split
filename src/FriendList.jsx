import FriendCard from './FriendCard';

export default function FriendsList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend}></FriendCard>
      ))}
    </ul>
  );
}
