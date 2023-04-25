function Search({inputs, setSearch}) {
  return (
    <>
        {
            (inputs.search)?
                <div className="search">
                    <input 
                      type="search" 
                      placeholder="Search item" 
                      onChange={(e)=>setSearch(e.target.value)} 
                    />
                </div>
            :
            <></>
        }
    </>
  );
}

export default Search;
