import Timer from "../components/timer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#FFFFF0" }}>
      <h1 className="text-3xl mb-8" style={{ fontFamily: "Nabla"}}>Pomodoro</h1>
      <Timer />
    </div>  
  );
}
