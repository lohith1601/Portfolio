import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[90vw] overflow-hidden h-[31vh] lg:h-[35vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image src="/bg.png" alt="background image" layout="fill" objectFit="cover" />
                </div>
                <Image src={img} alt={title} layout="fill" objectFit="contain" className="absolute z-10 bottom-0" />
              </div>
              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt={`icon-${index}`} width={50} height={50} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
