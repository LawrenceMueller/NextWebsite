export default function OverviewFooter() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
            <div className="flex justify-between">
                {/* Calendar Button with Calendar Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-sm">Calendar</span>
                </button>

                {/* Create group with Pen and Paper Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 0 2.1 2.1 0 0 1 0 3l-9 9-4 1 1-4 9-9z"></path>
                    </svg>
                    <span className="text-sm">Create</span>
                </button>

                {/* Me Button with Person Icon */}
                <button className="flex-1 py-4 flex flex-col items-center hover:bg-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4 0-7 3-7 7m14 0c0-4-3-7-7-7m0 0c3 0 5-2 5-5S15 4 12 4 7 6 7 9s2 5 5 5"></path>
                    </svg>
                    <span className="text-sm">Profile</span>
                </button>
            </div>
        </footer>
    );
}