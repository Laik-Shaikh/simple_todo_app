import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return(
        <main>
            {items.length? 
            (
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : 
            (
                <p style={{ marginTop: '2rem' }}>You Don't Have Any Pending Task</p>
            )}
        </main>
    )
}


export default Content;