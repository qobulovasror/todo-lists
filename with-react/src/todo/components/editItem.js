function EditItem({list, setEditId, setList, editId}) {
    
    const keyHeandler = (e)=>{
        if(e.key==='Enter'){
            const newList = [];
            list.forEach(item => {
                if(item.id.toString()===editId.id.toString()){
                    newList.push({id: item.id, text: editId.text, active: item.active});
                }else
                    newList.push(item)
            });
            setList(newList);
            setEditId({id: -1, text: ""});
        }
    }
    return ( 
        <>
           {
            (editId.id.toString()!=="-1")? 
                <div className="add">
                    <input 
                        type="text" 
                        placeholder="Edit item" 
                        onKeyUp={keyHeandler}
                        value={editId.text}
                        onChange={(e)=>setEditId({...editId, text: e.target.value})}
                    />
                </div>
                :
                <></>
        } 
        </>
     );
}

export default EditItem;