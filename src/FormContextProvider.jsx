import { useState, useRef, useEffect } from "react";
import { FormContext } from './FormContext';
import { validateName, validatePhone, validateVacancy } from './validate';

function FormContextProvider({children}) {
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const [people, setPeople] = useState(()=>{
    return JSON.parse(localStorage.getItem('people'))??[]
  })
  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people))
  }, [people])
  const [query, setQuery] = useState('')
  const [editingPerson, setEditingPerson] = useState('')
  const popupRef = useRef('')
  const [flag, setFlag] = useState(true)
  const editPopupRef = useRef(null)
  return (
    <FormContext.Provider
    value={{
      alphabet,
        people, 
        setPeople,
        query, 
        setQuery, 
        popupRef, 
        flag,
        setFlag,
        editPopupRef,
        editingPerson, 
        setEditingPerson,
        validateName,
        validatePhone,
        validateVacancy
    }
    }>{children}</FormContext.Provider>
  )
}
export default FormContextProvider