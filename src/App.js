import React, { useState } from "react";
import Header from './components/Header';
import Content from "./components/Content";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";

const App = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('TodoList')) || [])
    const [newItem, setNewItem] = useState('')
    const [searchItem, setSearchItem] = useState('')


    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id +1 : 1;
        const myNewItem = {id, checked: false, item}
        const listItem = [...items, myNewItem]
        setAndSaveItem(listItem)
    }

    const setAndSaveItem = (newItems) => {
       setItems(newItems)
       localStorage.setItem('TodoList', JSON.stringify(newItems)); 
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setAndSaveItem(listItems);
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setAndSaveItem(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }
    
    return(
        <div className="App">
            <Header title="Todo List" />
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                searchItem={searchItem}
                setSearchItem={setSearchItem}
            />
            <Content 
                items={items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
           
            <Footer
                length={items.length}
            />
        </div>
    )

}


export default App;