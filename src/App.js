import { useState } from 'react';
import RefForm from './components/RefForm';
import References from './components/References';

function App() {
  const [Referencias, setRefs] = useState([]);

  const makeReferences = (e)=>{
    e.preventDefault();
    console.log(e.target.name.value);    
    setRefs([...Referencias, "Hola"]);
  }

  return (
    <>
      <h1 className='text-4xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800'>Aplicacion para hacer Referencias de Articulos</h1>
      <h2 className='text-3xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800'>Ñe</h2>
      <div className='flex flex-row'>
        <RefForm formHandler={makeReferences} />
        <References Refs={Referencias}/>
      </div>
    </>
  );
}

export default App;
