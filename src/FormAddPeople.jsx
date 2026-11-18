import { useContext, useRef, useState } from 'react';
import { FormContext } from './FormContext';
import Button from './Button';
function FormAddPeople() {
    const {popupRef, setPeople, validateName, validatePhone, validateVacancy} = useContext(FormContext)
    const [error, setError] = useState('')
    const nameRef = useRef('')
    const vacancyRef = useRef('')
    const phoneRef = useRef('')
    function clearAll() {
        setPeople([])
    }
    function onSubmit(e) {
        e.preventDefault()
        const error = {
            name: validateName(nameRef.current.value),
            vacancy: validateVacancy(vacancyRef.current.value),
            phone: validatePhone(phoneRef.current.value)
        }
        if(error.name.length!==0||error.vacancy.length!==0||error.phone.length!==0) {
            setError(error.name + error.vacancy + error.phone)
            return
        }
        if(nameRef.current.value.trim().length!==0&&
            vacancyRef.current.value.trim().length!==0&&
            phoneRef.current.value.trim().length!==0) {
            setPeople((prev)=>{
            const newPeople = [...prev, {
                id: crypto.randomUUID(),
                name:nameRef.current.value, 
                vacancy:vacancyRef.current.value, 
                phone:phoneRef.current.value}]
            return newPeople
        })
            setError('')
        }
    }
    return (
        <>
        <form className='form' onSubmit={onSubmit}>
      <input ref={nameRef} className='name' placeholder='Name' type='text' minLength={2} maxLength={50} required></input>
      <input ref={vacancyRef} className='vacancy' type='text' placeholder='Vacancy' minLength={2} maxLength={60} required></input>
      <input ref={phoneRef} className='phone' type="tel" placeholder='Phone +X XXX XXX XX XX' minLength={11} maxLength={15} required></input>
      <Button className='add'onClick={onSubmit}>Добавить</Button>
      <Button className='clear' onClick={clearAll}>Очистить забор</Button>
      <Button className='search' onClick={()=>popupRef.current.showModal()}>Поиск</Button>
    </form>
    {error.length!==0&&<p className='error'>{error}</p>}
    </>
    )
}
export default FormAddPeople