import React from 'react'

function ListItems() {

  //const foodlist=["burger","pizza","kfc","starbucks","kepsa"];
  const foodlist=[];

  if(foodlist.length===0){
    return <h1>no food available</h1>
  }

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
