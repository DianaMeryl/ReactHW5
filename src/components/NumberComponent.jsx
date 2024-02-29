import Button from "./Button/Button"; 
import { useState } from 'react';

export default function NumberComponent(){

    //* в useState ми можемо групувати стани як наведено нижче:

    const [form, setForm] = useState({
        name:'',
        hasError: true,
    });

function handleNumber1Change(e){
    setForm((prev) => ({
        ...prev, 
        number1: e.target.value, 
    }))  
}
function handleNumber2Change(e){
    setForm((prev) => ({
        ...prev, 
        number2: e.target.value, 
    }))  
}

return(
<section>
        <h3>Homework53 Number Components </h3>
        <form action="#">
            <label htmlFor="number1">Number1</label>
            <input type="number" id="number1" className="field-input" value={form.number1} onChange={handleNumber1Change}/>
            <label htmlFor="number2">Number2</label>
            <input type="number" id="number2" className="field-input" value={form.number2} onChange={handleNumber2Change}/>
            <p>
                {form.number1} * 0.5 = {form.number1*0.5} <br />
                {form.number2} * 0.05 = {form.number2*0.05} <br />
            </p>
        </form>
</section>
)
}
