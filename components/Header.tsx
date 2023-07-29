import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-gray-200 w-screen shadow">
            <nav className="container flex px-2 py-2 gap-5 ">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </div>

    )
}