import React from 'react'
import Link from 'next/link'



function Navbar() {
    return (
        <>
            {/* navbar */}
            <nav className="p-4 flex justify-between items-center px-32 bg-[#131128] fixed top-0 w-full z-10">

                {/* Logo */}
                <div className="text-3xl font-bold">
                    <span className="text-white">Coin</span>
                    <span className="text-[#6058EA]">Space .</span>
                </div>

                <div className="flex gap-6 items-center">
                    {/* Navigation Links */}
                    <div className="flex gap-6">
                        <Link href="/Home" className="text-white cursor-pointer hover:text-[#6058EA]">Home</Link>
                        <Link href="/Post" className="text-white cursor-pointer hover:text-[#6058EA]">Post</Link>
                    </div>

                    {/* Profile Icon */}
                    <div className="flex gap-4">
                        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar