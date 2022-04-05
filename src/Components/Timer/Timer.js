import './Timer.css';

const Timer = ({count}) => {
    const minutes = ("0" + Math.floor((count/(1000*60) % 60))).slice(-2)
    const seconds = ("0" + Math.floor((count/(1000) % 60))).slice(-2)
    const miliSec = ("0" + Math.floor((count/(10)%(1000)))).slice(-2)
    return (
        <div className='timer'>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>:</span>
            <span>{miliSec}</span>
        </div>
    )
}

export default Timer;