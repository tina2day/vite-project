import './App.css'
import FormAddPeople from './FormAddPeople';
import Popup from './Popup';
import FormPeopleList from './FormPeopleList';

function App() {
  
  return (
    <>
    <h1 className='title'>Заборчик</h1>
    <FormAddPeople />
    <FormPeopleList />
    <Popup/>
    </>
  )
}

export default App
