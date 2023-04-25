import { useState } from 'react';
function Add({inputs, addHeandler, list}) {
    const [addItem, setAddItem] = useState("")
    const keyHeandler = (e)=>{
        if(e.key==='Enter'){
            const isFound = list.some(elem => {
                if (elem.text === addItem) {
                  return true;
                }
                return false;
              });
            if(!isFound){
                if(addItem!==""){
                    addHeandler(addItem);
                    setAddItem("");
                }else{
                    alert("add input is empty !")
                }
            }else{
                alert("this element had in list !")
            }
        }
    }
  return (
    <>
        {
            (inputs.add)? 
                <div className="add">
                    <input 
                        type="text" 
                        placeholder="Add item" 
                        onKeyUp={keyHeandler}
                        value={addItem}
                        onChange={(e)=>setAddItem(e.target.value)}
                    />
                </div>
                :
                <></>
        }
    </>
  );
}

export default Add;
