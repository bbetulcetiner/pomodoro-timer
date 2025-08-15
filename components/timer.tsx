"use client"

import useTimer from "@/hooks/use-timer";

export default function Timer() {
    const { mode, timeLeft, toggleTimer, isActive, resetTimer, switchMode, sessions } = useTimer();
    console.log(mode);
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return <div className="max-w-sm shadow-xl w-full p-8 rounded-xl" style={{ backgroundColor: "#E1E9C9" }}>
    <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium capitalize" style={{ color: "#393C52" }}>
            {mode === "focus" ? "✍︎ Focus" : "☕︎ Break"}
        </h2>
        <div className="text-sm text-gray-500">Sessions: {sessions}</div>
    </div>
    
    <div className="text-center text-6xl font-bold mb-6" style={{ fontFamily:"'Tourney', sans-serif", color: "#4A7473"}}>
        {formattedTime}
    </div>
    
    <div className="flex justify-center space-x-4 mb-4 font-bold" style={{ color: "#393C52" }}>
        <button 
            onClick={toggleTimer} 
            className={`px-5 py-2 rounded-xl ${
                isActive
                    ? "bg-yellow-100"
                    : "bg-yellow-200"
            }`}
            >
            {isActive ? "Pause" : "Start"}
        </button>
    
        <button 
            onClick={resetTimer} 
            className=" px-5 py-2 rounded-xl" 
            style={{ backgroundColor: "#FFFFF0"}}
            onMouseEnter={ (e) => e.currentTarget.style.backgroundColor = "#EEEED9"}
            onMouseLeave={ (e) => e.currentTarget.style.backgroundColor = "#FFFFF0"}
        >
            Reset
        </button>
    </div>
    
    <div className="flex justify-center">
        <button 
            onClick={switchMode}
            className="text-center px-9 rounded-lg"
            style={{ backgroundColor: "#FFFFFF", color: "#393C52"}}
            onMouseEnter={ (e) => e.currentTarget.style.backgroundColor = "#F5F8F8"}
            onMouseLeave={ (e) => e.currentTarget.style.backgroundColor = "#FFFFFF"}
        >
            Switch to {mode === "focus" ? "Break" : "Focus"}
        </button>
    </div>
    
    
    </div>
}
