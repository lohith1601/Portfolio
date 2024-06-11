'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./globe";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from 'next/image';
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1  md:grid-cols-5  gap-8  max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
 
    navigator.clipboard.writeText('lohithganapathy16@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-5",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>


        {id === 3 && (
  <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 ">
    <div className="flex flex-col justify-center gap-3 md:gap-3 lg:gap-8">
      {["Next.js", "React.js", "Javascript"].map((item) => (
        <span
          key={item}
          className="lg:py-4 lg:px-3 py-2 px-1 text-xl lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
      <span className="py-4 px-3 text-center bg-[#10132E]" />
    </div>

    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
      <span className="py-4 px-3 text-center bg-[#10132E]" />
      {["Typescript", "Node.js", "MongoDB"].map((item) => (
        <span
          key={item}
          className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)}

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50  flex items-center justify-center text-white font-bold " /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-s lg:text-base text-sm text-[#dddde2] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg  lg:text-2xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          <div
  className={`absolute right-0 -bottom-5 ${
    id === 5 && "w-full opacity-80 text-"
  } `}
>
  {spareImg && (
    <img
      src={spareImg}
      alt={spareImg}
      width={220}
      className="object-cover object-center w-full h-full"
    />
  )}
</div>
          {id===6 && (
            <div className="mt-5 relative">
              <div  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block" }`}>
               <Image src="/confetti.gif" alt="confetti" width={220} height={220} />
              <Lottie options={{
                loop:copied,
                autoplay:copied,
                animationData,
                rendererSettings:{
                  preserveAspectRatio :'xMidYMid slice'
                }
              }}  />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          ) }
        </div>
      </div>
    </div>
  );
};