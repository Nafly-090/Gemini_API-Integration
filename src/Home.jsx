import React from 'react';
import { assets } from './assets/assets';
import { useContext } from 'react';
import { Context } from './context/context';

const Home = () => {
    const { onSent, recentpromt, showResult, loading, resultdata, setInput, input } = useContext(Context);
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

            {!showResult
                ? <>
                    <div className="w-65 mx-50 mt-20  text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
                        Hello, Smart
                    </div>
                    <div className=" mx-50 mt-5  text-4xl font-bold text-gray-400 ">
                        How Can I Help you today?
                    </div>
                </>
                : <div className='px-50 max-h-[70vh] overflow-y-auto scrollbar-hide '>
                    <div className="mx-auto flex items-center gap-5">
                        <img src={assets.user_icon} className='w-10 rounded-full' alt="" />
                        <p>{recentpromt}</p>
                    </div>

                    <div className="flex px-5 itrms-start gap-5 mt-10">
                        <img src={assets.gemini_icon} className='w-10 h-10' alt="" />
                        {loading ? (
                            <div className='w-full flex flex-col gap-2'>
                                <hr className='rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[800px_50px] h-5 animate-loader' />
                                <hr className='rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[800px_50px] h-5 animate-loader' />
                                <hr className='rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[800px_50px] h-5 animate-loader' />
                                
                            </div>
                        ) : (
                            <p className='text-lg/ font-normal ' dangerouslySetInnerHTML={{ __html: resultdata }} />
                        )}

                    </div>
                </div>

            }


            <footer className="fixed bottom-4 left-0 right-0 p-4 flex justify-center ">
                <div className="w-full h-3 max-w-3xl flex items-center space-x-4">

                    <div className="flex-grow bg-[#cdcccc] rounded-full flex items-center pl-4 px-2">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Ask Gemini"
                            className="Search-box bg-transparent border-none outline-none flex-grow text-black placeholder-[#313030] py-3"
                        />

                        <img src={assets.gallery_icon} alt="mic" className='h-9 w-9 p-1' />
                        <img src={assets.mic_icon} alt="mic" className='h-9 w-9 p-1' />

                        <button className="text-[#9aa0a6]">
                            <img onClick={() => onSent()} src={assets.send_icon} alt="send" className='items-center ml-2 w-9 p-1 flex flex-col bg-[#9aa0a6] rounded-full ' />
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Home;