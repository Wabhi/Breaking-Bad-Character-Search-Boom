import React from 'react'

const CharacterItem = ({item}) => {
    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1 style={{color:"#b80716"}}>{item.name}</h1>
          <ul>
            <li>
              <strong style={{color:"#0696cf"}}>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>            
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Appearance:</strong> {item.appearance}
             </li>
           <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem;
