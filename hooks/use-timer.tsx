"use client"

import { useEffect, useState } from "react";
type TimerMode = "focus" | "break";
const focusTime = 25;
const breakTime = 5;

export default function useTimer() {
  const [mode, setMode] = useState<TimerMode>("focus")
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const [isActive, setIsActive] = useState<boolean>(false);

  const getDuration = (TimerMode: TimerMode) => {
    return TimerMode === "focus" ? focusTime * 60 : breakTime * 60;
  }

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(getDuration(mode));
  }
  
  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
  let interval: NodeJS.Timeout | null = null;
    
    if(isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          return prev - 1;
        });
      }, 1000);
    } else if(interval){
      clearInterval(interval);
    }


   return () => {
    if(interval) clearInterval(interval);
   };
  }, [isActive]);


  return {
    mode,
    timeLeft,
    toggleTimer,
    isActive,
    resetTimer,
  };
}
