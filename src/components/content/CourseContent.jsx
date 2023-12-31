import LiveclassCard from "../cards/LiveclassCard";
import { Player } from "@lottiefiles/react-lottie-player";

export default function CourseContent() {
  return (
    <div className="w-full md:w-3/4 h-full overflow-hidden rounded-xl p-3">
      <div className="w-full h-[20%] flex flex-col md:flex-row justify-between items-end">
        <div className="flex flex-col gap-2 md:border-b-2 md:border-slate-300 md:pb-2">
          <h1 className="text-2xl md:text-3xl font-black text-slate-600">
            An Important Class
          </h1>
          <h1 className="text-base md:text-lg text-slate-400">15 December</h1>
        </div>
        <LiveclassCard />
      </div>

      <div className="w-full h-[55vh] overflow-x-hidden overflow-y-scroll flex justify-center items-center">
        {/* Your content goes here, adjust styling as needed */}
        <Player
          src="https://lottie.host/43d4f558-8315-4ca7-8566-9b0c7522ab46/JElMdQaXRp.json"
          className="w-full md:w-[200px]"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
