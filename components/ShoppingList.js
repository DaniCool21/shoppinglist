import React from 'react'
import Item from './Item.js'



export default function ShoppingList({ItemList, ToggleItem}) {
  return (
    ItemList.map((item) => (
        <Item key={item.id} ToggleItem={ToggleItem} Item={item}/>
    ))
  )
}
