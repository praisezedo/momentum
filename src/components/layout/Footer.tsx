export default function Footer() {
    return (
        <>
           <footer className="relative flex justify-center p-2 text-white bg-blue-900 bottom-0 mt-10">
             <p>&copy; {new Date().getFullYear()} Momentum</p>
           </footer>
        </>
    )
}