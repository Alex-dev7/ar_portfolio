// import './header.scss'
// import { motion as m} from "framer-motion"
// import cos from '../../assets/cos.svg'
// import mouse from '../../assets/scroll-down.png'
// import React, { useState, useEffect, useRef, useContext, Suspense } from 'react';
// import ToggleButton from './ToggleButton';
// import { ToggleContext } from '../../context/ToggleContext';


// const ThreeDComponent = React.lazy(() => import('../../3Dmodel/ThreeDComponent'));


// function Header(props){
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const { toggle, setToggle } = useContext(ToggleContext);
//     const helloRef = useRef(null);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//         const timer = setTimeout(() => {
//             setHasAnimated(true);
//         }, 300); // Replace with the duration of your animation
    
//         return () => clearTimeout(timer); // Clean up the timer when the component unmounts
//     }, []);


//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             const { clientX, clientY } = event;
//             const { innerWidth, innerHeight } = window;

//             const xPos = -(clientX - innerWidth / 2) / 60; // Adjust the divisor to change the speed
//             const yPos = -(clientY - innerHeight / 2) / 60; // 

//             if (helloRef.current) {
//                 helloRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
//             }
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         // Clean up the event listener when the component unmounts
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

   
//     return (
//         <m.section
//         id="header"
//         className='header-container'> 
//         <ToggleButton />
//         <img src={mouse} alt='scroll down'  className='mouse'/> 
//         { toggle  ? 
//         <div className='cos-container' style={{animation: hasAnimated ? "floatA 3s ease-in-out infinite" : ''}}>
//                 <div>
//                     <img fetchpriority="high" src={cos} alt='astronaut' width={560} height={400} className='cos' />
//                     <span className='led-light'></span>   
//                     <div className='hello-container' ref={helloRef}>
//                         <h2 className='hello'>Welcome!</h2>
//                         <h2 className="hello" >Explore my work and get in touch!</h2>
//                     </div>                       
//                 </div>
//         </div> 
//                 :
//                 <Suspense fallback={<div style={{color: "green", position: 'absolute', top: "48%"}}>Loading...</div>}>
//                     <ThreeDComponent  />
//                 </Suspense>
                       
//         }          
//             <div  className='text-wrapper'>  
//                 <h1  className="title" >Full Stack Developer </h1>
//             </div>           
//         </m.section>
//     )
// }

// export default Header


