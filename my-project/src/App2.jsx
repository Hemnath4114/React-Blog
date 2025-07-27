import React from 'react'
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

const App2 = () => {

    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType, setReqType] = useState('');
    const [items, setItems] = useState([]);

    useEffect (() => {
        
        const fetchItems = async () => {
            try{
                const response = await fetch(`${API_URL}${reqType}`);
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.log (err);
            }
        }
        fetchItems();
        },[reqType])
  return (
    <>
    <Form  
        reqType={reqType}
        setReqType={setReqType}
    />
    <List 
        items={items}
    />
    </>
  )
}

export default App2;