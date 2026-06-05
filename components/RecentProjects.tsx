"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow, FaGithub } from "react-icons/fa"

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A small selection of {` `}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map((project) => (
                <div key={project.id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]'>
                    <PinContainer title={project.liveLink} href={project.liveLink}>
                        <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="./bg.png" alt="bg-img" />
                            </div>
                            <img src={project.img} alt={project.title} className="z-10 absolute " />
                        </div>
                        
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {project.title}
                        </h1>
                        
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-3'>
                            {project.des}
                        </p>
                        
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            {/* أيقونات التكنولوجي المستخدمة */}
                            <div className='flex items-center'>
                                {project.iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>
                            
                            {/* ديف الأزرار - تم حمايته بـ preventDefault لمنع التداخل والفتح المزدوج */}
                            <div 
                              className='flex justify-center items-center gap-4 z-50 relative' 
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                              }} 
                            >
                                {/* زرار الـ Live Link */}
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault(); // تفجير السلوك الافتراضي للـ anchor الخارجي 💥
                                    window.open(project.liveLink, '_blank');
                                  }}
                                  className='flex items-center hover:opacity-80 transition cursor-pointer'
                                >
                                    <p className='flex lg:text-lg md:text-xs text-sm text-purple font-medium'>Live</p>
                                    <FaLocationArrow className="ms-1.5" color="#CBACF9" size={14} />
                                </div>

                                {/* زرار الـ GitHub Repo */}
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault(); // تفجير السلوك الافتراضي للـ anchor الخارجي 💥
                                    window.open(project.repoLink, '_blank');
                                  }}
                                  className='flex items-center hover:opacity-80 transition border-l border-white/[0.2] pl-3 cursor-pointer'
                                >
                                    <p className='flex lg:text-lg md:text-xs text-sm text-gray-400 hover:text-white transition font-medium'>GitHub</p>
                                    <FaGithub className="ms-1.5" color="#A0AEC0" size={16} />
                                </div>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects;