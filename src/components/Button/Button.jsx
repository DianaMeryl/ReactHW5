import classes from './Button.module.css';

export default function Button({children, isActive, ...props}){

    return (
        <button {...props} className={isActive ? `${classes.btn} ${classes.active}`: classes.btn}>{children}</button>
        // АБО ТАК:
        // <button className='btn' onDoubleClick={() =>  console.log('button was double clicked')}>{children}</button>
    )
}
