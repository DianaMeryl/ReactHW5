import './App.css'
import  ControlledForm from './components/ControlledForm';
import SwitchSection from './components/SwitchSection';
import { useState } from 'react';
import NumberComponent from './components/NumberComponent';

function App() {

  const [page, setPage] = useState('feedback');

  return (
    <>
      <SwitchSection active = {page} onChange={(current) => setPage(current)}/>
        {
          page ==='hw52' && <ControlledForm />
        }
        {
          page === 'hw53' && <NumberComponent />
        }
    </>
  )
}

export default App
