import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-gray-400 mb-8">Could not find requested resource</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-all"
      >
        Return Home
      </Link>
    </div>
  )
}
