import React from 'react'

export default function Item({Item, ToggleItem}) {

    function handdleItemClick()
    {
        ToggleItem(Item.id);
    }

  return (
    <div>
        <label>
            <input type="checkbox" checked={Item.completed} onChange={handdleItemClick}/> 
            {Item.name}
        </label>
    </div>
  )
}
