export default function StreakCard({streak , setStreak}: {streak: number , setStreak: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <>
       <div className="flex flex-col gap-4 justify-start">
                 <p className="text-2xl text-blue-900 ">🔥 Current Streak: <strong>{streak} days </strong></p>
                <span className="text-shadow-xl text-blue-900 text-3xl">
                    keeps building momentum towards your  future.  
                </span>
                <button className="bg-white border border-blue-900 rounded-2xl text-blue-900 p-3 hover:cursor-pointer hover:bg-blue-900 hover:text-white" onClick={() => setStreak(streak + 1)}>Completed todays task</button>
         </div>
        </>
    )
}