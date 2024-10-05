import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import ONGCImg from '../../assets/ongc.webp';
import NITPImg from '../../assets/nitp.jpg';
import NITAPImg from '../../assets/nitap.jpeg';

const Experience = () => {
  return (

    <div id='Experience' className='p-10  md:p-24 '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex  flex-wrap items-center  justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8  md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572b6' size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50} />
          </span>


        </div>
        <div className='w-full md:w-1/2 '>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img className='flex justify-center h-32 md:h-32 lg:h-32 ml-2 object-cover' src={ONGCImg} />

            <span className='text-white'>
              <h2 className='leading-tight'>Industrial Training, ONGC</h2>
              <p className='text-sm leading-tight font-thin'>
                Jun 2024 - Jul 2024
              </p>
              <ul className='text-sm p-2'>
                <li>- I got hands-on experience in how computer networks are used in big industries like ONGC.
                </li>
                <li>- I learned how data is sent and received over networks.

                </li>
              </ul>
            </span>
          </div>
          <div className='flex gap-10 bg-slate-950  bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img className='flex justify-center h-32 md:h-32 lg:h-32 ml-2 object-cover' src={NITPImg} />
            <span className='text-white'>
              <h2 className='leading-tight'>Research Intern, NIT Patna</h2>
              <p className='text-sm leading-tight font-thin'>
                Dec 2023 - Jan 2024
              </p>
              <ul className='text-sm p-2'>
                <li>- I analyzed the radiation levels emitted by cell towers in different areas & compared these levels with safety standards.

                </li>
                <li>- I learned how radiation from cell towers can impact human health.
                </li>
              </ul>
            </span>
          </div>
          

          <div className='flex gap-10 bg-slate-950  bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img className='flex justify-center h-32 md:h-32 lg:h-32 ml-2 object-cover ' src={NITAPImg} />
            <span className='text-white'>
              <h2 className='leading-tight'>Research Intern, NIT Arunachal Pradesh</h2>
              <p className='text-sm leading-tight font-thin'>
                Feb 2023 - Mar 2023
              </p>
              <ul className='text-sm p-2'>
                <li>- I researched methods to minimize power consumption.

                </li>
                <li>- I researched how to find the right balance between saving power and increasing speed.   </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience


