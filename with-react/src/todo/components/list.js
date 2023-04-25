//import Alert from "../alert";
function List({list, setList, setEditId, search, filter}) {
  const itemCheked = (e)=>{
    let newList = [];
    list.forEach(item => {
      if(item.id.toString()===e.target.id.toString()){
        if(item.active){
          newList.push({id: item.id, text: item.text, active: false});
        }else{
          newList.push({id: item.id, text: item.text, active: true});
        }
      }else{
        newList.push(item);
      }
    });
    setList(newList);
  }
  const deleteItem = (id)=>{
    if(!window.confirm("Selection item deleted  ?"))
      return;
    let newList = [];
    list.forEach(elem => {
      if(elem.id.toString()!==id.toString())
        newList.push(elem);
    });
    setList(newList);
  }
  const viewList = [];
  list.forEach(elem => {
    if(elem.text.toLowerCase().indexOf(search.toLowerCase())===-1)
      return;
    if(filter!=="All")
      if(filter==="Active" && !elem.active)
        return;
      else{
        if(filter==="Completed" && elem.active)
          return
      }
    viewList.push(elem);
  });
  return (
    <>
      <div className="list">
        <ul className="column">
            {
              (viewList.length!==0)?
                viewList.sort((a, b)=>(a.active&&b.active)? 1: (a.active)? -1:1)
                .map((item)=>(
                    <li className="row" key={item.id}>
                        <div className="item row between">
                          <div>
                              <input 
                                type="checkbox" 
                                id={item.id} 
                                onClick={itemCheked}
                                defaultChecked={(!item.active)}
                              />
                              <span>{
                                  (item.active)? (item.text) : <del>{item.text}</del> 
                              }
                              </span>
                          </div>
                          <div>
                              <button 
                                className="btn" 
                                onClick={()=>setEditId({id: item.id, text: item.text})}
                              >edit
                              </button>
                              <button 
                                className="btn"
                                onClick={()=>deleteItem(item.id)}
                              >delete</button>
                          </div>
                        </div>
                    </li>
                ))
                :
                (<h3>List empty</h3>)
            }
        </ul>
      </div>
    </>
  );
}

export default List;
