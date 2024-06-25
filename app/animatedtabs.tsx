"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsDemo() {
  const tabs = [
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <div className="w-full relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dashboard</p>
          <Image
            src="/Dashboard.jpeg"
            alt="Dashboard Image"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[90%] absolute inset-0 w-full rounded-xl"
          />
        </div>
      ),
    },
    {
      title: "Integration",
      value: "integration",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Integration</p>
          <Image
            src="/integration.jpg"
            alt="Integration Image"
            width={1000}
            height={600}
            className="object-cover object-center h-[60%] md:h-[90%] absolute inset-0 w-full rounded-xl"
          />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground</p>
          <Image
            src="/playground.jpg"
            alt="Playground Image"
            width={1000}
            height={600}
            className="object-cover object-center h-[60%] md:h-[90%] absolute inset-0 w-full rounded-xl"
          />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content</p>
          <Image
            src="/content.jpg"
            alt="Content Image"
            width={1000}
            height={600}
            className="object-cover object-center h-[60%] md:h-[90%] absolute inset-0 w-full rounded-xl"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
