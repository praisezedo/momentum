import { Link } from "react-router-dom";

export default function Home() {

    return (
        <section className="min-h-screen flex justify-center items-center">
           <div className="flex flex-col justify-center items-center gap-7">
             <span className="text-sm text-blue-900 bg-blue-100 p-2 rounded-3xl border border-blue-700">Progress over perfection</span>
            <h1 className="text-7xl font-bold text-blue-900">
             Build Momentum EveryDay
           </h1>
           <p className="px-20 w-70 sm:min-w-150 text-bold text-blue-900">
                Turn your goals into daily progress.
                Track projects, learning and habits
                without losing momentum.
           </p>
           <Link to="/vision" className="text-white hover:cursor-pointer hover:opacity-50 bg-blue-900   p-5 text-2xl font-bold rounded-2xl">Enter Momentum</Link>
           </div>
        </section>
    )
}