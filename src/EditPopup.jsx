import { useContext} from "react"
import { FormContext } from './FormContext';

function EditPopup() {
    const {setPeople, editPopupRef, editingPerson, setEditingPerson} = useContext(FormContext)
    function onSubmit(e) {
        e.preventDefault()
        if (!editingPerson) return
        setPeople((prev)=>{
            return prev.map((people)=>{
                if(people.id===editingPerson.id) {
                    return {...people, name: editingPerson.name, vacancy: editingPerson.vacancy, phone: editingPerson.phone}
                }
                return people
            })
        })
        editPopupRef.current.close()
    }
    return (
        <dialog ref={editPopupRef}>
        <form className='form__popup' onSubmit={onSubmit}>
            <input value={editingPerson?.name ?? ''} onChange={(e)=>setEditingPerson((prev)=>{return {...prev,name:e.target.value}})} />
            <input  value={editingPerson?.vacancy ?? ''} onChange={(e)=>setEditingPerson((prev)=>{return {...prev,vacancy:e.target.value}})} />
            <input  value={editingPerson?.phone ?? ''} onChange={(e)=>setEditingPerson((prev)=>{return {...prev,phone:e.target.value}})} />
            <button type='submit'>Submit</button>
        </form>
        <button className='close' type='button' onClick={()=>{
          editPopupRef.current.close()
          }}>x</button>
    </dialog>
    )
}
export default EditPopup