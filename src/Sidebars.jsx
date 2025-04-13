import React, { useState } from 'react';
import { assets } from './assets/assets';

const SliderUI = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  return (
    <div className="flex  flex-col items-center justify-between py-4 h-screen w-20 bg-[#e3e3e3] relative"> 

    <img src={assets.menu_icon} alt="menu" className='  border-b border-[#959393] my-1' />
    <button type='button' className='items-center  bg-[#e6e5e5] '>
      <img src={assets.plus_icon} alt="New" className='w-8 ' />
    </button>
      <div className="space-y-4 mt-8">
      <img src={assets.question_icon} alt="history"className='m1 w-8 h-8'   />
      <img src={assets.history_icon} alt="history"className='m1 w-8 h-8'   />
      <img src={assets.setting_icon} alt="history"className='m1 w-8 h-8'   />
      </div>

    </div>
  );
};

export default SliderUI;