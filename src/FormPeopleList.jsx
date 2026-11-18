import { useContext } from 'react';
import { FormContext } from './FormContext';
function FormPeopleList() {
    const {alphabet, people, setPeople} = useContext(FormContext)
    function onClick(id) {
        setPeople((prev)=>prev.filter((item)=>item.id!==id))
    }
    return (
        <div className='list'>{alphabet.map((letter)=>{
        const peopleList = people.filter((man)=> man.name.startsWith(letter))
        return (<div className='list__item'>
        <details>
            <summary>{letter}</summary>
                {peopleList.map((man)=>
                <div>
                    <p>{man.name}</p>
                    <p>{man.vacancy}</p>
                    <p>{man.phone}</p>
                <button className='close' type='button' onClick={()=> onClick(man.id)}>x</button>
                </div>)}
        </details>
        {peopleList.length > 0 && 
        <span className='count'>{peopleList.length}</span>}
        </div>)
      })}</div>
    )
}
export default FormPeopleList