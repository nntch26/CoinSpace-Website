import React from 'react'

function Homepage() {
    return (
        <div className="bg-[#1a1b2e] text-white min-h-screen">


            {/* navbar */}
            <nav className="p-4 flex justify-between items-center bg-[#1F1F1F]">
                {/* Logo */}
                <div className="text-3xl font-bold">
                    <span className="text-white">Coin</span>
                    <span className="text-[#6058EA]">Space .</span>
                </div>

                <div className="flex gap-6 items-center">
                    {/* Navigation Links */}
                    <div className="flex gap-6">
                        <h2 className="text-white cursor-pointer hover:text-[#6058EA]">Home</h2>
                        <h2 className="text-white cursor-pointer hover:text-[#6058EA]">Post</h2>
                        <h2 className="text-white cursor-pointer hover:text-[#6058EA]">About</h2>
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


            <main className="container mx-auto px-4">
                <div className="bg-[#1E1B3E] rounded-xl p-8 mb-8">
                    <div className="flex justify-between items-center px-16">
                        <div className="max-w-lg">
                            <h1 className="text-[5.5rem] font-bold">
                                <span className="text-white">Coin</span>
                                <span className="text-[#6058EA]">Space .</span>
                            </h1>
                            <p className="mb-2">
                                <span className="underline">Django</span> is one of the most complete web development frameworks available.
                            </p>
                            <p className="text-gray-400 mb-16">
                                It's fast, secure, and scalable. With the power of Python.
                            </p>
                            <div className="flex gap-8">
                                <button className="bg-[#6058EA] px-6 py-2 rounded-lg">Dashboard</button>
                                <button className="border border-[#6058EA] px-6 py-2 rounded-lg flex items-center gap-2">
                                    <span>+</span> Start a new topic
                                </button>
                            </div>
                        </div>
                        <div className="relative w-96">
                            <img src="https://static.vecteezy.com/system/resources/previews/021/628/001/non_2x/osmosis-osmo-coin-stacks-cryptocurrency-3d-render-illustration-free-png.png" alt="Mobile app mockup" className="w-full" />
                        </div>
                    </div>
                </div>


                {/* { Cryptocurrency} */}
                <section>
                    <h2 className="text-xl font-bold mb-6">Cryptocurrency</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Bitcoin Card */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">₿</div>
                                <span className="text-2xl">$93,782.00</span>
                            </div>
                            <div className="text-gray-400">Bitcoin</div>
                            <div className="text-gray-400">BTC/USD</div>
                            <div className="mt-4 text-gray-400">Market Cap: 20</div>
                        </div>

                        {/* Ethereum Card */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">Ξ</div>
                                <span className="text-2xl">$93,782.00</span>
                            </div>
                            <div className="text-gray-400">Ethereum</div>
                            <div className="text-gray-400">ETH/USD</div>
                            <div className="mt-4 text-gray-400">Market Cap: 20</div>
                        </div>

                        {/* XRP Card */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">X</div>
                                <span className="text-2xl">$93,782.00</span>
                            </div>
                            <div className="text-gray-400">XRP</div>
                            <div className="text-gray-400">XRP/USD</div>
                            <div className="mt-4 text-gray-400">Market Cap: 20</div>
                        </div>

                        {/* Shiba Inu Card */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center">🦊</div>
                                <span className="text-2xl">$93,782.00</span>
                            </div>
                            <div className="text-gray-400">Shiba Inu</div>
                            <div className="text-gray-400">SHIB/USD</div>
                            <div className="mt-4 text-gray-400">Market Cap: 20</div>
                        </div>
                    </div>
                </section>


                {/* Post */}
                <section className="mt-8">
                    <h2 className="text-xl font-bold mb-6">Post</h2>
                    <div className="grid grid-cols-3 gap-4">

                        {/* First Post */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">CryptoAnalyst</div>
                                    <div className="text-sm text-gray-400">#Bitcoin</div>
                                </div>
                            </div>
                            <h3 className="text-lg mb-4">Bitcoin (BTC) Decoupling From Wall Street: A Signal for New Records in 2025?</h3>
                            <div className="flex gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    2.1K
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                    2.1K
                                </div>
                            </div>
                        </div>

                        {/* Second Post - Double width */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">ETHExplorer</div>
                                    <div className="text-sm text-gray-400">#Ethereum</div>
                                </div>
                            </div>
                            <h3 className="text-lg mb-4">Ethereum's Shift to PoS: Environmental Impact and Future Scalability Analysis</h3>
                            <div className="flex gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    3.4K
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                    2.8K
                                </div>
                            </div>
                        </div>

                        {/* Third Post - Double width */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">DeFiResearcher</div>
                                    <div className="text-sm text-gray-400">#DeFi #Finance</div>
                                </div>
                            </div>
                            <h3 className="text-lg mb-4">DeFi Market Analysis: Top Performing Protocols and TVL Growth in Q1 2025</h3>
                            <div className="flex gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    4.2K
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                    3.7K
                                </div>
                            </div>
                        </div>

                        {/* Fourth Post */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">NFTInsider</div>
                                    <div className="text-sm text-gray-400">#NFT #Art</div>
                                </div>
                            </div>
                            <h3 className="text-lg mb-4">NFT Market Recovery: Blue Chip Collections Lead the Way</h3>
                            <div className="flex gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    1.8K
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                    1.5K
                                </div>
                            </div>
                        </div>

                        {/* Fifth Post - Full width */}
                        <div className="bg-[#1E1B3E] p-6 rounded-xl col-span-3">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <div className="font-bold">CryptoEducator</div>
                                    <div className="text-sm text-gray-400">#Education #Blockchain</div>
                                </div>
                            </div>
                            <h3 className="text-lg mb-4">Comprehensive Guide: Understanding Blockchain Technology and Its Real-World Applications</h3>
                            <div className="flex gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    5.6K
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                    4.9K
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Homepage
