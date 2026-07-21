export default function Footer() {
    return (
        <>
           <footer className="relative flex justify-center p-2 text-white bg-blue-900 bottom-0">
             <p>&copy; {new Date().getFullYear()} Momentum</p>
           </footer>
        </>
    )
}