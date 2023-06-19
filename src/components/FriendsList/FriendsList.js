import friends from '../../friends.json'
import FriendsListitem from 'components/FriendsListItem/FriendsListItem';
import style from './friendslist.module.css'
import PropTypes from 'prop-types';



const FriendsList =()=> {

  return(
    <ul className={style.friendslist}>
      {friends.map((friend)=>(
        <FriendsListitem key={friend.id} {...friend}/>
      ))}
</ul>
  )
}
export default FriendsList;


FriendsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
