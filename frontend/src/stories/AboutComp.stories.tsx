import React from 'react';
import AboutComp from '../components/AboutComp';

export default {
  title: 'Components/AboutComp',
  component: AboutComp,
};

export const Default = () => <AboutComp />;

export const CustomText = () => {
    return (
      <div className="w-5/6 h-auto max-h-[70vh] bg-gray-400 overflow-y-auto rounded-md mt-6 p-4 scrollbar bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="text-left py-2 px-6 rounded-xl bg-clip-padding">
          <h1 className="text-textgreen font-syke-medium text-xl sm:text-2xl mt-4">
            Our Vision
          </h1>
          <ul className="list-disc pl-6 space-y-2 text-white font-syke text-sm sm:text-base mt-2">
            <li>We aim to build a smarter and more sustainable campus environment.</li>
            <li>Our vision is to enhance the convenience and safety for everyone on campus.</li>
            <li>We strive for seamless integration of technology to improve campus operations.</li>
            <li>We prioritize user experience and accessibility in all our solutions.</li>
          </ul>
  
          <h1 className="text-textgreen font-syke-medium text-2xl mt-4">
            Our Mission
          </h1>
          <ul className="list-disc pl-6 space-y-2 text-white font-syke text-sm sm:text-base mt-2">
            <li>Our mission is to provide innovative solutions for managing campus facilities.</li>
            <li>We aim to make the parking system smarter, more efficient, and easier to use.</li>
            <li>We focus on providing real-time data for better decision-making and resource allocation.</li>
            <li>Our goal is to enhance the overall campus experience by reducing hassles and improving accessibility.</li>
          </ul>
        </div>
      </div>
    );
  };
  

export const DifferentBackground = () => (
  <div className="bg-gray-800 text-white">
    <AboutComp />
  </div>
);
