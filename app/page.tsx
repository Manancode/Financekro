"use client"
// import Navbar from "@/components/navbar";


// import Services from "./services";
// import { useRef } from "react";
// import { BackgroundBeamsDemo } from "@/components/waitlist";
// import Features from "./features";
// import Integration from "./integration";
// import Aboutus from "./aboutus";
import Newsletter from "@/components/newsletter";
// import { TabsDemo } from "./animatedtabs";





export default function Home() {

//   const featuresref = useRef<HTMLDivElement>(null)
//   const integrationref = useRef<HTMLDivElement>(null)
//   const aboutusref = useRef<HTMLDivElement>(null)
  

// const scrollTofeatures = () => {
//     featuresref.current?.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
// };



// const scrollTointegration = () => {
//   integrationref.current?.scrollIntoView({ behavior: "smooth" });
// };

// const scrollToaboutus = () => {
//   aboutusref.current?.scrollIntoView({ behavior: "smooth" });
// };


  return (
//     <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    
//     <Navbar

//     scrollTofeatures = {scrollTofeatures}
    
//     scrollTointegration= {scrollTointegration}
//      scrollToaboutus = {scrollToaboutus}
// /> 

<Newsletter/>
{/*               <div ref={featuresref}><Features/></div>
{/* <div ref={integrationref}> 
              <Integration/></div>               */}
              {/* <div ref={aboutusref}>
              <Aboutus/></div> */}
            
             
            
              
            </div> */}
        
  )
}
