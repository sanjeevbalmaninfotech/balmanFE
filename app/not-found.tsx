import Link from 'next/link'
import Navbar from './components/navBar'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center px-4 text-center pt-24">
                <h1 className="text-[120px] font-bold text-[#FF5900] leading-none">404</h1>
                <h2 className="text-3xl font-bold mb-4 text-black">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="btn-primary inline-flex items-center justify-center no-underline"
                >
                    Go Home
                </Link>
            </main>
        </div>
    )
}
