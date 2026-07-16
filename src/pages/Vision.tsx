import { Link } from "react-router-dom";
import { points } from "../data/features";
import type { Feature } from "../types/features";

export default function Vision() {
    return (
        <>
           <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-5xl text-blue-900 font-bold">Momentum</h1>
                <p className="font-bold text-xl text-blue-900">Built for people who refuse to stay still.</p>
            </div>

            <ul className="grid grid-cols-2 gap-7 my-5 ">
                {points.map((point: Feature) => {
                     return <li key={point.id} className="font-bold text-blue-900 text-2xl">✓ {point.title}</li>
                })}
            </ul>

            <Link to="/dashboard" className="text-xl text-blue-900 font-bold border-blue-900 border rounded-2xl p-3 hover:cursor-pointer hover:opacity-50">Continue →</Link>
           </section>
        </>
    )
}