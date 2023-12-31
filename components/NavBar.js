import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    console.log("router = ",router)
    return (
        <nav>
            <Link
                href="/"
                className="hello"
                style={{color: router.pathname==="/"?"red":"blue"}}>
                Home</Link>
                <Link
                href="/about"
                className="hello"
                style={{color: router.pathname==="/about"?"red":"blue"}}>
                About</Link>
        </nav>
    )
}