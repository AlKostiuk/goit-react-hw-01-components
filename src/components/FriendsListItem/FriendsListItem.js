
import style from './friendslistitem.module.css'
import PropTypes from 'prop-types';




const FriendsListitem =({avatar, name, isOnline})=> {

  return(
    <li className={style.item}>
  <span className={isOnline === true ? style.status : style.red}>{isOnline}</span>
  <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={style.name}>{name}</p>
</li>
  )
}

export default FriendsListitem;
FriendsListitem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  
}
