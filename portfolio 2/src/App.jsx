import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profile from './assets/vaibhav profile.jpeg'
import dc from './assets/Courage_Bot.png'
import bee from './assets/bee.png'
import dice from './assets/dice game.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "motion/react";


function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // const transition = {
  //   duration: 0.8,
  //   delay: 0.5,
  //   ease: [0, 0.71, 0.2, 1.01],
  // }


  return (
    <>
      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center px-4'>
        {/* Navigation Bar */}
        <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-700 shadow-xl 
                      w-full max-w-6xl rounded-b-lg sticky top-0 z-50'>

          {/* Desktop Navigation */}
          <div className='hidden md:flex justify-around items-center h-16 text-gray-400 text-lg px-4'>
            <a href="#home"><h3 className='font-mono hover:text-white transition-colors cursor-pointer'>Home</h3></a>
            <a href="#about"><h3 className='font-mono hover:text-white transition-colors cursor-pointer'>About</h3></a>
            <a href="#projects"><h3 className='font-mono hover:text-white transition-colors cursor-pointer'>Projects</h3></a>
            <a href="#contact"><h3 className='font-mono hover:text-white transition-colors cursor-pointer'>Contact</h3></a>
          </div>

          {/* Mobile Navigation Header */}
          <div className='md:hidden flex justify-between items-center h-16 px-4 text-gray-400'>
            <h2 className='font-mono text-lg'>&lt;Vaibhav Patel/&gt;</h2>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-mono hover:text-white transition-colors focus:outline-none'
            >
              <div className='space-y-1'>
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-t border-gray-700 transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className='flex flex-col py-4 px-4 space-y-3 text-gray-400 text-base'>
              <a href="#home" onClick={closeMenu}><h3 className='font-mono hover:text-white transition-colors cursor-pointer py-2'>Home</h3></a>
              <a href="#about" onClick={closeMenu}><h3 className='font-mono hover:text-white transition-colors cursor-pointer py-2'>About</h3></a>
              <a href="#projects" onClick={closeMenu}><h3 className='font-mono hover:text-white transition-colors cursor-pointer py-2'>Projects</h3></a>
              <a href="#contact" onClick={closeMenu}><h3 className='font-mono hover:text-white transition-colors cursor-pointer py-2'>Contact</h3></a>
            </div>
          </div>
        </div>




        {/* MacBook Terminal Style Window */}
        <motion.div id='home' initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="mt-15 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
            <span className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>

            </span>
            <h3 className="text-gray-400 font-mono">vaibhav@coder:~$ whoami</h3>
          </div>
          {/* Terminal Content */}
          <div className="p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
            <span className="text-gray-400">vaibhav@macbook</span>:<span className="text-blue-400">~</span>$ Hello, welcome to my portfolio!
            <br />

            <span className="text-blue-400">~</span>$ 🚀Computer science student.
            <br />
            <span className="text-blue-400">~</span>$ 🌟 Aspiring to contribute to open-source projects.
            <br />
            <span className="text-blue-400">~</span>$ 📚 Exploring data structures, AI, and backend development to expand my skill set.
            <br />


          </div>
        </motion.div>


        {/* Profile.sh and about me section */}

        <div id='about' className="flex flex-col md:flex-row mt-5 w-full max-w-5xl gap-4 mx-auto overflow-hidden">



          <motion.div initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="mt-15 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>

              </span>
              <h3 className="text-gray-400 font-mono">profile.sh</h3>
            </div>
            {/* Terminal Content */}
            <div className="p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
              <div className='flex flex-col justify-center items-center'>
                <img className='rounded-full w-40 h-40 shadow-[0_0_18px_4px_rgba(255,200,80,0.25)]' src={profile} alt="" />
                <br />
                <h3 className='text-gray-400 font-mono'>$ echo User</h3>
                <h1 className='text-lg font-mono'>Vaibhav Patel</h1>

                <h3 className='text-gray-400 font-mono'>$ echo Location</h3>
                <h1 className='text-lg font-mono'>India</h1>
                <div className='flex flex-col my-4 md:flex-row gap-4 justify-center items-center'>
                  <div className='shadow-md bg-orange-500 hover:bg-orange-600 text-white text-lg justify-center items-center rounded-md p-2 font-mono transition-colors duration-200'>Projects:5+</div>
                  <div className='bg-orange-500 hover:bg-orange-600 text-white text-lg justify-center items-center rounded-md p-2 font-mono shadow-md transition-colors duration-200'>Experience:1 year</div>
                </div>

              </div>
            </div>
          </motion.div>




          <motion.div initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="mt-15 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>

              </span>
              <h3 className="text-gray-400 font-mono">About.js</h3>
            </div>
            {/* Terminal Content */}
            <div className="flex flex-col p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
              <h1 className='text-gray-400 font-mono'>// Welcome to Vaibhav's Digital Space</h1>
              <br />
              <pre className="text-base" style={{ background: "transparent", color: "inherit", margin: 0, padding: 0 }}>
                <span>const obj =</span> <span>{'{'}</span>
                <br />
                <br />
                <span>  <span className="text-blue-400">name</span>: <span className="text-yellow-400">"Vaibhav Patel"</span>,</span>
                <br />
                <span>  <span className="text-blue-400">country</span>: <span className="text-yellow-400">"India"</span>,</span>
                <br />
                <span>  <span className="text-blue-400">skills</span>: [</span>
                <br />
                <span>    <span className="text-yellow-400">"Mongo Db"</span>, <span className="text-yellow-400">"Express.js"</span>, <span className="text-yellow-400">"React.js"</span>,</span>
                <br />
                <span>    <span className="text-yellow-400">"Node.js"</span>, <span className="text-yellow-400">"Java"</span>, <span className="text-yellow-400">"Tailwind"</span>,</span>
                <br />
                <span>    <span className="text-yellow-400">"HTML"</span>, <span className="text-yellow-400">"CSS"</span>, <span className="text-yellow-400">"JavaScript"</span></span>
                <br />
                <span>  ],</span>
                <br />
                <span>  <span className="text-blue-400">passion</span>: <span className="text-yellow-400">"Transforming Imagination <br />            into code ;)"</span></span>
                <br />
                <br />
                <span>{'}'}</span>
              </pre>
            </div>


          </motion.div>

        </div>{/* ending */}


        {/* techStack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row mt-5 w-full max-w-5xl gap-4 mx-auto overflow-hidden"
        >
          <div id='techStack' className="my-2 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </span>
              <h3 className=" bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-gray-400 font-mono">TechStack.py</h3>
            </div>
            {/* Terminal Content */}
            <div className="flex flex-col p-6 font-mono text-base bg-gray-900 min-h-[120px]">
              <h1 className='text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 underline underline-offset-4 decoration-2 decoration-orange-400'>Tech Stack</h1>
              <p className='mb-4 text-base text-pink-300'>Here are the technologies and tools I use regularly, along with how I use them in my projects:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-900/60 via-gray-900 to-blue-800/60 border border-blue-500/30 rounded-lg p-4 flex flex-col gap-2 mb-2 shadow-lg"
                >
                  <h2 className="text-blue-300 font-bold text-lg mb-1 border-b-2 border-blue-400 pb-1">Frontend</h2>
                  <p className="text-blue-200 text-sm mb-2">Building beautiful, responsive, and interactive user interfaces. I focus on modern web standards and seamless user experience.</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-1 rounded-full shadow font-semibold">React</span>
                    <span className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-3 py-1 rounded-full shadow font-semibold">HTML</span>
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full shadow font-semibold">CSS</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white px-3 py-1 rounded-full shadow font-semibold">JavaScript</span>
                    <span className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-1 rounded-full shadow font-semibold">Tailwind</span>
                  </div>
                  <ul className="list-disc list-inside text-blue-100 text-xs">
                    <li className="text-[15px] text-blue-200">Responsive layouts</li>
                    <li className="text-[15px] text-blue-200">Component-based architecture</li>
                    <li className="text-[15px] text-blue-200">Modern CSS frameworks</li>
                  </ul>
                </motion.div>
                {/* Backend */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-green-900/60 via-gray-900 to-green-800/60 border border-green-500/30 rounded-lg p-4 flex flex-col gap-2 mb-2 shadow-lg"
                >
                  <h2 className="text-green-300 font-bold text-lg mb-1 border-b-2 border-green-400 pb-1">Backend</h2>
                  <p className="text-green-200 text-sm mb-2">Developing robust APIs and server-side logic to power web applications, with a focus on scalability and security including latest technologies.</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="bg-gradient-to-r from-green-600 to-green-400 text-white px-3 py-1 rounded-full shadow font-semibold">Express.js</span>
                    <span className="bg-gradient-to-r from-green-800 to-green-600 text-white px-3 py-1 rounded-full shadow font-semibold">Node.js</span>
                    <span className="bg-gradient-to-r from-violet-500 to-violet-400 text-white px-3 py-1 rounded-full shadow font-semibold">Passport.js</span>
                  </div>
                  <ul className="list-disc list-inside text-green-100 text-xs">
                    <li className="text-[15px] text-green-200">RESTful API design</li>
                    <li className="text-[15px] text-green-200">Authentication & authorization</li>
                    <li className="text-[15px] text-green-200">Real-time data handling</li>
                  </ul>
                </motion.div>
                {/* Database */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-teal-900/60 via-gray-900 to-teal-800/60 border border-teal-500/30 rounded-lg p-4 flex flex-col gap-2 mb-2 shadow-lg"
                >
                  <h2 className="text-teal-300 font-bold text-lg mb-1 border-b-2 border-teal-400 pb-1">Database</h2>
                  <p className="text-teal-200 text-sm mb-2">Storing and managing data efficiently for both small and large-scale applications.</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="bg-gradient-to-r from-teal-600 to-teal-400 text-white px-3 py-1 rounded-full shadow font-semibold">MySQL</span>
                    <span className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1 rounded-full shadow font-semibold">MongoDB</span>
                  </div>
                  <ul className="list-disc list-inside text-teal-100 text-xs">
                    <li className="text-[15px] text-teal-200">Relational & NoSQL databases</li>
                    <li className="text-[15px] text-teal-200">Data modeling & indexing</li>
                    <li className="text-[15px] text-teal-200">Efficient querying</li>
                  </ul>
                </motion.div>
                {/* Design */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-pink-900/60 via-gray-900 to-pink-800/60 border border-pink-500/30 rounded-lg p-4 flex flex-col gap-2 mb-2 shadow-lg"
                >
                  <h2 className="text-pink-300 font-bold text-lg mb-1 border-b-2 border-pink-400 pb-1">Design</h2>
                  <p className="text-pink-200 text-sm mb-2">Crafting visually appealing and user-friendly designs for web and mobile interfaces.</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-3 py-1 rounded-full shadow font-semibold">Canva</span>
                    <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-3 py-1 rounded-full shadow font-semibold">Figma</span>
                  </div>
                  <ul className="list-disc list-inside text-pink-100 text-xs">
                    <li className="text-[15px] text-pink-200">UI/UX prototyping</li>
                    <li className="text-[15px] text-pink-200">Branding & graphics</li>
                    <li className="text-[15px] text-pink-200">Wireframing</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* projects */}

        <motion.div id='projects' initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col md:flex-row mt-5  w-full max-w-5xl gap-4 mx-auto overflow-hidden">
          <div id='techStack' className="my-2 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </span>
              <h3 className="text-gray-400 font-mono">Projects.java</h3>
            </div>

            {/* Terminal Content */}
            <div className=" cursor-pointer flex flex-col p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='bg-gray-800 p-4 rounded-md flex flex-col gap-4 justify-center items-center mb-5'>
                <img className="w-auto h-auto rounded-md shadow-md" src={dc} alt="" />
                <h1 className='md:text-2xl text-yellow-400'>Courage BOT</h1>
                <h1 className='md:text-lg text-center text-green-400'>A feature-rich Discord music bot that supports multiple music platforms and languages
                  High-quality music playback using Lavalink
                  Multi-platform support:
                  YouTube
                  SoundCloud
                  Spotify
                  Support for links, text searches, and playlists
                  Roast command with savage comebacks
                  Easy setup and configuration
                </h1>
                <div className='flex gap-5'>
                  <span className='bg-orange-500 px-2 py-1 text-white rounded-full'>Express.js</span><span className='bg-blue-500 px-2 py-1 text-white rounded-full'>Discord.js</span>
                </div>
                <br />
                <a target='_blank' href="https://discord.com/oauth2/authorize?client_id=1342201785317851249"><button className="font-bold text-xl text-white bg-blue-600 hover:bg-blue-800 rounded-lg px-4 py-2 transition-colors duration-300">
                  Try it out
                </button></a>
              </motion.div>
              {/* /// */}

              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='bg-gray-800 p-4 rounded-md flex flex-col gap-4 justify-center items-center mb-5'>
                <img className=" h-auto rounded-md shadow-md" src={bee} alt="" />
                <h1 className='md:text-2xl text-white'>BeExplorer</h1>
                <h1 className='md:text-lg text-center text-violet-400'>A modern property listing website built with React frontend and Node.js backend with MongoDB.

                  Features
                  Display property listings in a beautiful, responsive grid
                  Mobile-friendly design
                  Modern UI with smooth animations
                  Real-time data fetching from backend API
                  Property details including images, prices, and locations
                </h1>
                <div className='flex justify-center items-center gap-5 flex-wrap'>
                  <span className='bg-orange-500 px-2 py-1 text-white rounded-full'>Express.js</span>
                  <span className='bg-blue-500 px-2 py-1 text-white rounded-full'>React.js</span>
                  <span className='bg-yellow-500 px-2 py-1 text-white rounded-full'>Node.js</span>
                  <span className='bg-red-500 px-2 py-1 text-white rounded-full'>Mongo DB</span>
                  <span className='bg-violet-500 px-2 py-1 text-white rounded-full'>Passport.js</span>
                  <span className='bg-purple-500 px-2 py-1 text-white rounded-full'>Tailwind</span>
                </div>
                <br />
                <a target='_blank' href="https://beexplorer-com-piws.onrender.com"><button className="font-bold text-xl text-white bg-blue-600 hover:bg-blue-800 rounded-lg px-4 py-2 transition-colors duration-300">
                  Try it out
                </button></a>
                {/* /// */}
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='bg-gray-800 p-4 rounded-md flex flex-col gap-4 justify-center items-center mb-5'>
                <img className=" h-auto rounded-md shadow-md" src={dice} alt="" />
                <h1 className='md:text-2xl text-orange-400'>Dice Game</h1>
                <h1 className='md:text-lg text-center text-purple-400'>
                  A basic Dice game in which the player has to select the number and if the number is different from the number that appears on the dice player gains the points
                  <br />
                  How to play dice game
                  <br />-&gt; Select any number
                  <br />-&gt; Click on dice image
                  <br />-&gt; If the number you selected matches the number on dice your score will be deducted by 1
                  <br />-&gt; If the number does not match with number on dice your score will inc. by number on dice
                </h1>
                <div className='flex gap-5'>
                  <span className='bg-orange-500 px-2 py-1 text-white rounded-full'>React.js</span>

                </div>
                <br />
                <a target='_blank' href="https://gilded-smakager-4108a0.netlify.app/"><button className="font-bold text-xl text-white bg-blue-600 hover:bg-blue-800 rounded-lg px-4 py-2 transition-colors duration-300">
                  Try it out
                </button></a>

              </motion.div>




            </div>
          </div>
        </motion.div>

        {/* philosphy */}

        <motion.div initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.34, 1.56, 0.64, 1],
          }} className="flex flex-col md:flex-row w-full max-w-2xl gap-4 mx-auto overflow-hidden">
          <div id='techStack' className="my-15 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </span>
              <h3 className="text-gray-400 font-mono">philosophy.txt</h3>
            </div>

            {/* Terminal Content */}
            <div className=" cursor-pointer flex flex-col p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
              <h1 className='text-md text-center text-orange-500'>$cat thoughts.md</h1>
              <br />
              <h1 className='text-center'>"Chase infinity until you reach what is infinity to others."</h1>
              <h1 className='text-center'>-Vaibhav Patel</h1>
            </div>
          </div>
        </motion.div>



        {/* contectme */}


        <motion.div id='contact' initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col md:flex-row w-full max-w-5xl gap-4 mx-auto overflow-hidden">
          <div id='techStack' className="mt-1 mb-20 w-full max-w-5xl mx-auto rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-800 border-b border-gray-700">
              <span className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </span>
              <h3 className="text-gray-400 font-mono">Contact_Me.sh</h3>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col p-6 font-mono text-green-400 text-base bg-gray-900 min-h-[120px]">
              <ContactForm />
            </div>
          </div>
        </motion.div>


      </div>
    </>
  )
}

export default App

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-purple-500 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-sm">Let's discuss your next project!</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="group">
          <label className="block text-gray-300 text-sm font-medium mb-2 group-hover:text-orange-400 transition-colors">
            <span className="text-orange-400 mr-2">$</span>Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 placeholder-gray-500 hover:bg-gray-800/70"
            placeholder="Enter your name"
          />
        </div>

        <div className="group">
          <label className="block text-gray-300 text-sm font-medium mb-2 group-hover:text-orange-400 transition-colors">
            <span className="text-orange-400 mr-2">$</span>Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 placeholder-gray-500 hover:bg-gray-800/70"
            placeholder="Enter your email"
          />
        </div>

        <div className="group">
          <label className="block text-gray-300 text-sm font-medium mb-2 group-hover:text-orange-400 transition-colors">
            <span className="text-orange-400 mr-2">$</span>Message
          </label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 placeholder-gray-500 hover:bg-gray-800/70 resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="flex items-center justify-center">
            <span className="mr-2"></span>
            Send Message
          </span>
        </button>

        {status && (
          <div className={`mt-4 p-3 rounded-lg text-center font-medium transition-all duration-300 ${status.includes('successfully')
              ? 'bg-green-900/50 border border-green-500 text-green-400'
              : 'bg-red-900/50 border border-red-500 text-red-400'
            }`}>
            {status.includes('successfully') ? ' ' : ' '}{status}
          </div>
        )}
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">Or reach out directly:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:vaibhav00070@gmail.com" className="bg-gray-800 p-2 rounded-lg text-orange-400 hover:text-orange-300 transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-patel-8417a6276/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg text-blue-400 hover:text-blue-300 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/vaibha-v7" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-gray-300 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
