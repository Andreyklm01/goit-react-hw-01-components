import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import statisticData from './Statistics/statistical-data.json';

import FriendList from './FriendList/FriendList';
import friendsData from './FriendList/friends.json';

import TransactionHistory from './Transaction-history/Transaction-history';
import transactionsData from './Transaction-history/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        id={user.id}
      />
      <Statistics title="SOME TEST TITLE" stats={statisticData} />
      <Statistics stats={statisticData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </>
  );
}

export default App;
