export default function StreakCard({streak}: {streak: number}) {
    return (
        <>
       <div className="flex flex-col justify-start gap-7">
                 <p className="text-2xl text-blue-900 ">🔥 Current Streak: <strong>{streak} days </strong></p>
                <span className="text-shadow-xl text-blue-900 text-3xl">
                    keeps building momentum towards your  future.  
                </span>
         </div>
        </>
    )
}