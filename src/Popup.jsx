import { useContext } from "react"
import { FormContext } from './FormContext';
import EditPopup from "./EditPopup";

function Popup() {
    const {people, setPeople, query, flag, setQuery, setFlag, popupRef, editPopupRef, setEditingPerson} = useContext(FormContext)
    
    function onClick(id) {
        setPeople((prev)=>prev.filter((item)=>item.id!==id))
    }
    return (
        <dialog ref={popupRef}>
      <h2>Search</h2>
        <input 
            value={query} 
            type='search' 
            placeholder='Поиск по имени...' 
            onChange={(e)=>{
                setQuery(e.target.value) 
                setFlag(true)}}
        />
        <div className='search__answer'>
            {flag?people.filter((man)=> query.trim()!==''&&man.name.toLowerCase().includes(query.trim().toLowerCase())).map((man)=>
            <div key={man.id}>
                <p>{man.name}</p>
                <p>{man.vacancy}</p>
                <p>{man.phone}</p>
                <div className="buttons">
                    <button className='edit' onClick={()=>{
                        setEditingPerson({...man})
                        editPopupRef.current.showModal()
                    }}>✎</button>
                    <button onClick={()=>onClick(man.id)}>x</button>
                </div>
            </div>)
            :people.map((man)=>
            <div key={man.id}>
                <p>{man.name}</p>
                <p>{man.vacancy}</p>
                <p>{man.phone}</p>
                <div className="buttons">
                    <button className='edit' onClick={()=>{
                        setEditingPerson({...man})
                        editPopupRef.current.showModal()
                    }}>✎</button>
                    <button onClick={()=>onClick(man.id)}>x</button>
                </div>
            </div>)}
        </div>
        <EditPopup />
        <button className='show' onClick={()=>setFlag((prev)=>!prev)}>Show All</button>
        <button className='close' type='button' onClick={()=>{
          popupRef.current.close()
          setFlag(true)}}>x</button>
    </dialog>
    )
}
export default Popup