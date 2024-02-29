import Button from "./Button/Button"; 
import { useState } from 'react';

export default function ControlledForm(){

    //* в useState ми можемо групувати стани як наведено нижче:

    const [form, setForm] = useState({
        name:'',
        hasError: true,
    });

function handleNameChange(e){
    setForm((prev) => ({
        ...prev, 
        name: e.target.value, 
        hasError: e.target.value.trim().length ===0
    }))  
}
function handleEmailChange(e){
    setForm((prev) => ({
        ...prev, 
        email: e.target.value, 
        hasError: e.target.value.trim().length ===0
    }))  
}
function handleTelChange(e){
    setForm((prev) => ({
        ...prev, 
        tel: e.target.value, 
        hasError: e.target.value.trim().length ===0
    }))  
}


return(
<section>
        <h3>Homework52 Controlled Input</h3>
        <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="field-input" value={form.name} style={{border:form.hasError?"1px solid red":null,}} onChange={handleNameChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="field-input" value={form.email} style={{border:form.hasError?"1px solid red":null,}} onChange={handleEmailChange}/>
            <label htmlFor="tel">Phone</label>
            <input type="tel" id="tel" className="field-input" value={form.tel} style={{border:form.hasError?"1px solid red":null,}} onChange={handleTelChange}/>
            <p>
                `Name: {form.name} <br />
                Email: {form.email} <br />
                Phone: {form.tel} <br />
                `
            </p>
            <Button disabled={form.hasError} isActive={!form.hasError}>Відправити</Button>
        </form>
</section>
)
}
