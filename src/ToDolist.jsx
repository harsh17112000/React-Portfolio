import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from "./ListComp";

const ToDolist = ()=>{

    const [items,setItems] = useState("");

    // get items in storage
    const getItems = ()=>{
        const lists = localStorage.getItem("list");

        if(lists){
            return JSON.parse(localStorage.getItem("list"));
        }else{
            return [];
        }
    }
    const [newItem,setNewItem] = useState(getItems());

    let ctime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(ctime)


    const itemEvent = (event)=>{
        setItems(event.target.value);
    };


    const listOfItems = ()=>{
        ctime = new Date().toLocaleTimeString();
        setTime(ctime);

        setNewItem((olditems)=>{
            return [...olditems,items]
        });
        setItems("");
    };

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(newItem))
    },[newItem])


    return (
        <>
            <div className = "main_div">
                <div className= "center_div">
                    <br />
                    <h1>ToDolist</h1>
                    <br />
                    <input type = "text" 
                    placeholder = "Add an items"
                    onChange = {itemEvent}
                    value = {items}
                     />
                    <Button className ="newBtn" onClick = {listOfItems}>
                        <AddIcon  />
                    </Button>

                    <br />
                    <ol>
                        
                        {newItem.map((val,index)=>{
                               return  <ListComp key = {index} 
                                   text = {val}
                                   id = {index}
                                    time = {time}
                         />
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
};

export default ToDolist;