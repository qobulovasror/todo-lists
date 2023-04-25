import './style.css'

function Alert({alert, setAlert}) {
    const handler = (param)=>{
        setAlert({active: false, result: param});
    }
    return ( 
        <>
            {
                (alert.active)? 
                    <div className='alert'>
                        <div className="column">
                            <h3>{alert.text}</h3>
                            <div className="row around">
                                <button 
                                    className="btn" 
                                    onClick={()=>handler(1)}
                                    >Ok</button>
                                <button 
                                    className="btn"
                                    onClick={()=>handler(0)}
                                    >Cancel</button>
                            </div>
                        </div>
                    </div>
                :
                <></>
            }
        </>
     );
}

export default Alert;