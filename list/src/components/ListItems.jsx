import React from 'react'

function ListItems(pros) {
  const foodlist=pros.items;
 
  return (
    <>
    <h1>foood items</h1>
      {foodlist.length===0 ? <h1>no food available</h1> : null}
      <ul className="list-group">

        {foodlist.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ListItems
