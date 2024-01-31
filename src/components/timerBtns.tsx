import { useState } from 'react';

interface TimerBtnsProps {
    timerFunctions: {
        startTimer: () => void;
        stopTimer: () => void;
        resetTimer: () => void;
    };
    isRunning: boolean;
}

const TimerBtns: React.FC<TimerBtnsProps> = ({ timerFunctions, isRunning }) => {

    // for mouse hover event
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <>
            <button onClick={isRunning ? timerFunctions.stopTimer : timerFunctions.startTimer} style={{
                borderWidth: '2px',
                borderColor: isRunning ? 'red' : 'green',
                background: isHovered && isRunning ? 'red' : (isHovered && !isRunning ? 'green' : ''),
                color: isHovered ? 'white' : '',
                transition: 'background 0.3s ease, color 0.3s ease',
            }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={timerFunctions.resetTimer} id="resetbutton">Reset</button>
        </>
    );
};
export default TimerBtns;
