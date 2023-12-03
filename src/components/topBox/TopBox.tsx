import './topBox.scss';
import {topMembers} from '../../data.ts';

const TopBox = () => {
  return (
    <div className='topBox'>
    <h1>Top Members</h1>
    <div className="list">
      {topMembers.map((user) => (
        <div className="listItem" key={user.id}>
          <div className="user">
            <img src={user.img} alt={user.username} />
            <div className="userTexts">
              <span className="username">{user.username}</span>
              <span className="email">{user.email}</span>
            </div>
          </div>
          <span className="amount">{user.amount}</span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TopBox;