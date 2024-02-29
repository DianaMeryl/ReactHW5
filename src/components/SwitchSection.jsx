import Button from './Button/Button';


export default function SwitchSection({active, onChange}){
    return(
        <section style={{marginBottom:'1rem'}}>
            <Button isActive ={active === 'hw52'} onClick={()=>onChange('hw52')}>Homework52</Button>
            <Button isActive ={active === 'hw53'} onClick={()=>onChange('hw53')}>Homework53</Button>
        </section>
    )
}
