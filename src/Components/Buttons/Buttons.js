import './Buttons.css';

const Buttons = ({ setCount, start, setStart,pause, setPause}) => {
    const startFn = () => {
        setStart(true);
    }

    const pauseFn = () => {
        setPause(!pause);
    }

    const stop = () => {
        setCount(0);
        setStart(false);
        setPause(false);
    }
    
    
    return (
        !start ?
        <button onClick={startFn} className='btn'>START</button> : 
        <>
        <button onClick={pauseFn} className='btn pauseBtn'>{pause ? "CONTINUE" : "PAUSE"}</button>
        <button onClick={stop} className='btn'>STOP</button>
        </>
    )
}

export default Buttons;