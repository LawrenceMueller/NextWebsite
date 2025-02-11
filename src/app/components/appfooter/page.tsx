export default function AppFooter() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
            <div className="flex justify-between">
                {/* Home Button with House Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5l9-7 9 7M4 10v10h16V10"></path>
                    </svg>
                    <span className="text-sm">Home</span>
                </button>

                {/* Find Button with Magnifying Glass Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round"></circle>
                        <line x1="16" y1="16" x2="22" y2="22" strokeLinecap="round" strokeLinejoin="round"></line>
                    </svg>
                    <span className="text-sm">Find</span>
                </button>

                {/* Me Button with Person Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4 0-7 3-7 7m14 0c0-4-3-7-7-7m0 0c3 0 5-2 5-5S15 4 12 4 7 6 7 9s2 5 5 5"></path>
                    </svg>
                    <span className="text-sm">Me</span>
                </button>
            </div>
        </footer>
    );
}