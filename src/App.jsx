import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(false);

  const handleAddFriendFormButton = () => {
    setIsAddFriendFormOpen(!isAddFriendFormOpen);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends}></FriendsList>
        {isAddFriendFormOpen && <FormAddFriend></FormAddFriend>}
        <Button handleButtonClick={handleAddFriendFormButton}>
          {isAddFriendFormOpen ? 'Close form' : 'Add friend'}
        </Button>
      </div>

      <FormSplitBill></FormSplitBill>
    </div>
  );
}
