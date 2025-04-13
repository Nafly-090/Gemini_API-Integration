import React from 'react';
import { assets } from './assets/assets';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-black flex-1 flex-col ">

            <header className="flex items-center justify-between p-4 border-b border-[#959393]">
                <div className="flex items-center">
                    <span className="font-semibold text-lg">Gemini</span>
                    <span className="ml-2 text-sm text-[#9aa0a6]">2.0 Flash</span>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={assets.user_icon} alt="user " className=' w-12 rounded-full' />
                </div>
            </header>

            <div class="w-65 mx-50 mt-20  text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
                Hello, Smart    
            </div>
            <div class=" mx-50 mt-5  text-4xl font-bold text-gray-400 ">
                How Can I Help you today?  
            </div>


            <footer className="fixed bottom-4 left-0 right-0 p-4 flex justify-center ">
                <div className="w-full h-3 max-w-3xl flex items-center space-x-4">
                    
                    <div className="flex-grow bg-[#cdcccc] rounded-full flex items-center pl-4 px-2">
                        <input
                            type="text"
                            placeholder="Ask Gemini"
                            className="bg-transparent border-none outline-none flex-grow text-black placeholder-[#313030] py-3"
                        />

                        <img src={assets.gallery_icon} alt="mic" className='h-9 w-9 p-1' />
                        <img src={assets.mic_icon} alt="mic" className='h-9 w-9 p-1' />

                        <button className="text-[#9aa0a6]">
                            <img src={assets.send_icon} alt="send" className='items-center ml-2 w-9 p-1 flex flex-col bg-[#9aa0a6] rounded-full ' />
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Home;