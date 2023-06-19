import React from 'react';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import '../index.css';

import user from '../user.json';
import data from '../data.json';
import freinds from '../friends';
import transactions from '../transactions.json'



export const App = () => {
  return (
    <div
    style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#010101'
    }}
  >

    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>

   <Statistics title="Upload stats" stats={data} />



    <FriendsList data={freinds} />

  <TransactionHistory items={transactions}/>
  </div>

  );
};


