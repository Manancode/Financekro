"use client"
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import WebsiteDesign from "./website-design";
import Videoediting from "./video-editing";
import Shortsediting from "./shorts-editing";
import Graphicdesign from "./graphic-design";
import Brands from "./brands";
import Services from "./services";
import { useRef } from "react";



export default function Home() {

  const WebsiteDesignref = useRef<HTMLDivElement>(null)
  const shortseditref = useRef<HTMLDivElement>(null)
  const videoeditref = useRef<HTMLDivElement>(null)
  const graphicdesignref = useRef<HTMLDivElement>(null)

const scrollToWebsiteDesign = () => {
    WebsiteDesignref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const scrollToGraphicDesign = () => {
  graphicdesignref.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollTovideoedit = () => {
  videoeditref.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToshortsedit = () => {
  shortseditref.current?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    
    <Navbar

    scrollToWebsiteDesign = {scrollToWebsiteDesign}
    scrollToGraphicDesign = {scrollToGraphicDesign}
    scrollTovideoedit= {scrollTovideoedit}
     scrollToshortsedit = {scrollToshortsedit}

    
    />
    <Spotlight className=" left-80" fill="white"/>
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">

            <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"> 
                  Your one stop solution for  <br/> Video Editors

            </div>
            <p className="mt-1 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
            We specialize in short-form editing, transforming your raw footage into engaging stories perfect for social media and online ads
            </p>
            <Link href={"/book"} className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white">
            Book a call
            </Link>
            <div>
              <SliderOne/>
              <div ref={WebsiteDesignref}><WebsiteDesign/></div>
              <div ref={videoeditref}> 
              <Videoediting/></div>
              <div ref={shortseditref}>
              <Shortsediting/></div>
              <div ref={graphicdesignref}> <Graphicdesign/> </div>
             
             
              
              <Brands/>
              <Services/>
              
            </div>
        </div>
    </div>
  )
}
