import React from 'react';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export function BentoGridDemo() {
  return (
    <div className="w-full p-4 bg-black">
      <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className="p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: 'Financial Planning & Analysis',
    description:
      'Simplify the budgeting process by creating, managing, and adjusting budgets with ease, ensuring your company stays on track financially.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-8 w-8 text-blue-500" />,
  },
  {
    title: 'Real-Time Reporting',
    description:
      'Access real-time, customizable dashboards that provide a clear and comprehensive overview of your company’s financial health, allowing for quick and informed decision-making.',
    header: <Skeleton />,
    icon: <IconFileBroken className="h-8 w-8 text-green-500" />,
  },
  {
    title: 'Cash Flow Management',
    description:
      'Stay ahead of your financial needs with precise cash flow forecasts, helping you anticipate and manage liquidity requirements effectively.',
    header: <Skeleton />,
    icon: <IconSignature className="h-8 w-8 text-red-500" />,
  },
  {
    title: 'Compliance & Risk Management',
    description:
      'Ensure your financial practices comply with relevant regulations and standards, reducing the risk of penalties and legal issues through continuous monitoring.',
    header: <Skeleton />,
    icon: <IconTableColumn className="h-8 w-8 text-purple-500" />,
  },
  {
    title: 'Integration & Scalability',
    description:
      'Integrate effortlessly with existing ERP systems to streamline financial data management, enhance operational efficiency, and improve overall workflow.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: 'Decision Support & Insights',
    description:
      'Utilize AI-driven analytics to gain deeper insights into financial data, uncover hidden opportunities, and make smarter business decisions.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-8 w-8 text-pink-500" />,
  },
  {
    title: 'Expense Management',
    description:
      'Monitor and categorize all company expenses in real-time, ensuring accurate financial records and better budget control.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-8 w-8 text-teal-500" />,
  },
  {
    title: 'Customer Support',
    description:
      'Access round-the-clock support from financial experts to resolve any issues quickly and keep your operations running smoothly.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-8 w-8 text-indigo-500" />,
  },
];
