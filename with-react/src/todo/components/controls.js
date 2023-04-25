function Controls({setInputs, inputs, list, setList, setFilter, filter}) {
    const addEneble = ()=>{
        (!inputs.add)?  setInputs({ search: false, add: true})
        : setInputs({search: false, add: false})
    }
    const searchEneble = ()=>{
        (!inputs.search)?  setInputs({add: false, search: true}) 
        : setInputs({add: false, search: false})
    }
    const clearList = ()=>{
      if(list.length>0){
        if(window.confirm("Is list clearing ?"))
          setList([]);
      }
    }

    const filterChanget = (param)=>{
      setFilter(param);
    }
  return (
    <>
      <div className="controls row between">
        <ul className="row">
          <li>
            <button className="btn" onClick={addEneble}><i className='bx bx-plus'></i></button>
          </li>
          <li>
            <button className="btn" onClick={searchEneble}><i className='bx bx-search'></i></button>
          </li>
          <li>
            <button className="btn" onClick={clearList}><i className='bx bxs-eraser'></i></button>
          </li>
          <li>|</li>
          <li className="counts">
            <span>items cout: {list.length}</span>
          </li>
        </ul>
        <ul className="row">
          <li>
            <button 
              className={(filter==="All")? "btn active": "btn"} 
              onClick={()=>filterChanget("All")}
              >All</button>
          </li>
          <li>
            <button 
              className={(filter==="Active")? "btn active": "btn"} 
              onClick={()=>filterChanget("Active")}
              >Active</button>
          </li>
          <li>
            <button 
              className={(filter==="Completed")? "btn active": "btn"} 
              onClick={()=>filterChanget("Completed")}
              >Completed</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Controls;
