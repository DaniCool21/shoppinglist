import Head from 'next/head'
import styles from '../styles/Home.module.css';
import ShoppingList from '../components/ShoppingList.js';
import Navbar from '../components/Navbar';
import React, {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'shoppingList.items'


export default function Home() {

  const [items, setItems] = useState([]);
  const NewItemRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedItems) setItems( prevItems => [...prevItems, ...storedItems] );
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])


  function AddItem(e)
  {
    const name = NewItemRef.current.value;
    if(name === '') return;
    setItems(prevItems => {
      return [...prevItems, {id: uuidv4(), name: name, completed: false}]
    })
    NewItemRef.current.value = null;
  }

  function ToggleItem(id)
  {
    const newItems = [...items];
    const item = newItems.find(item => item.id === id);
    item.completed = !item.completed;
    setItems(newItems);
  }

  function ClearItems()
  {
    const newItems = [];
    setItems(newItems);
  }

  function ClearCompleted()
  {
    const newItems = items.filter(item => !item.completed);
    setItems(newItems);
  }


  return (
    <div className={styles.NoPadding}>
      <Head>
        <title>Shopping List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.someCSS}>
          <Navbar/>
      </div>
      
        
      <h1 className={styles.Apptitle}>Shopping List</h1>

      <div className={styles.container}>
        <ShoppingList ItemList={items} ToggleItem={ToggleItem}/>
        <input ref={NewItemRef} type="text" placeholder="Add Item"/>
        <button onClick={AddItem}>Add Item</button>
        <button onClick={ClearItems}>Clear all items</button>
        <button onClick={ClearCompleted}>Clear Completed</button>
        <div>Number of item to buy: {items.filter(item => !item.completed).length}</div>
        
      </div>
      
    </div>
  )
}