import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1760px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 1c2 0 3.46.963 4.324 2.255l.196.302 11.27 17.691a5 5 0 0 1-4.145 7.746l-.355.006H4.71a5 5 0 0 1-4.5-7.752l11.27-17.691A5 5 0 0 1 16 1zm0 3a2 2 0 0 0-1.631.833l-.084.145L2.958 22.67A2 2 0 0 0 4.71 26h22.58a2 2 0 0 0 1.751-3.33L16.715 4.978A2 2 0 0 0 16 4z"/>
            </svg>
            <span className="text-xl font-bold text-primary">airbnb</span>
          </Link>

          {/* Search Bar - Simplified for demo */}
          <div className="hidden md:flex items-center gap-3 border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-sm font-medium px-4 border-r border-gray-300">
              Anywhere
            </div>
            <div className="text-sm font-medium px-4 border-r border-gray-300">
              Any week
            </div>
            <div className="text-sm text-gray-600 pl-4 pr-2">
              Add guests
            </div>
            <button className="bg-primary text-white p-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:bg-gray-50 rounded-full px-4 py-2 transition-colors">
              Airbnb your home
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full py-1.5 pl-3 pr-2 hover:shadow-md transition-shadow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}