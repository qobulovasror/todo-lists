import { useState, useEffect } from "react";
import Controls from "./components/controls";
import Search from "./components/search";
import Add from "./components/add";
import List from "./components/list";
import EditItem from "./components/editItem";
//import Alert from './alert';

import './style.css';

function Todo() {
    const [list, setList] = useState([]);
    const [inputs, setInputs] = useState({search: false, add: false});
    const [editId, setEditId] = useState({id: -1, text: ""});
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    //const [alert, setAlert] = useState({active: false, result: "", text: ""});

    const addHeandler = (text)=>{
        let i=0;
        if(list.length > 0)
            i=list[list.length-1].id + 1; 
        setList([...list, {id: i, text: text, active: true}]);
    }

    useEffect(()=>{
        if(editId!=={id: -1, text: ""}){
            setInputs({search: false, add: false});
        }
    },[editId])

    return ( 
        <>
           <div className='container'>
            {/* <Alert alert={alert} setAlert={setAlert}/> */}
                <div className="box">
                    <h2>TODO list</h2>
                    <Controls 
                        inputs={inputs} 
                        setInputs={setInputs} 
                        list={list} 
                        setList={setList}
                        setFilter={setFilter}
                        filter={filter}
                    />
                    <Search 
                        inputs={inputs}
                        setSearch={setSearch}
                    />
                    <Add 
                        addHeandler={addHeandler} 
                        inputs={inputs} 
                        list={list}
                    />
                    <EditItem
                        setEditId={setEditId}
                        list={list}
                        setList={setList}
                        editId={editId}
                    />
                    <List 
                        list={list}
                        setList={setList}
                        setEditId={setEditId}
                        search={search}
                        filter={filter}
                    />
                </div>
            </div> 
        </> 
    );
}

export default Todo;