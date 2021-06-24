import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import userInfo from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './json/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

const App = () => {
  return (
    <>
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData.map(item => {
          return item;
        })}
      />
      {/* ;<Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
