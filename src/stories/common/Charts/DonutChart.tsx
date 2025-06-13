import React, { useState } from 'react';
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer, SectorProps } from 'recharts';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
export interface DonutChartProps {
  data: { name: string; value: number; fill: string }[]; // Data for the chart
  headerText?: string; // Optional header text
  activeIndex?: number; // Optional prop for active sector index
  donutWidth?: number; // Difference between inner and outer radius
  innerRadius?:number
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  headerText = "Donut Chart Overview",
  activeIndex = 0, // Default to the first sector as active
  innerRadius = 60, // Default to the first sector as active
  donutWidth = 40, // Default to the first sector as active
}) => {
  const [activeSectorIndex, setActiveSectorIndex] = useState(activeIndex);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveSectorIndex(index);
  };

  const renderActiveShape = (props: SectorProps) => {
    const { cx, cy, innerRadius, outerRadius = 0, startAngle, endAngle, fill } = props;
    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  };

  return (
    <Card className="flex bg-white flex-col items-center">
      {/* Header */}
      <CardHeader className="w-full bg-primary text-white text-sm lg:text-lg font-bold text-center py-4 rounded-t-md">
        <p>{headerText}</p>
      </CardHeader>

      {/* Donut Chart */}
      <CardContent className="w-full flex-1 p-4">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={innerRadius}
              outerRadius={innerRadius+donutWidth}
              activeIndex={activeSectorIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              strokeWidth={3}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>

      {/* Footer with Dynamic Legend */}
      <CardFooter className="w-full flex justify-around p-4">
        {data.map((item, index) => (
          <div key={index}>
            <p className="text-xl lg:text-2xl font-bold">{item.value}%</p>
            <div className="flex items-center gap-1">
              <span className={`w-3 h-3 inline-block`} style={{ backgroundColor: item.fill }}></span>
              <span className="text-xs lg:text-sm text-gray-600">{item.name}</span>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};
