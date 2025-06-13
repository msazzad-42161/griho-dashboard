import React from 'react';

interface RecieptPrintIconProps {
  height?: number;
  width?: number;
  className?: string;
  fillColor?: string;
}

export const RecieptPrintIcon: React.FC<RecieptPrintIconProps> = ({height = 24, width = 24, className, fillColor = "none"}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill={fillColor} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 3.5L18 2H6L4.5 3.5L3 5V19L4.5 20.5L6 22H18L19.5 20.5L21 19V5L19.5 3.5ZM19 18.5L18 19.5H6L5 18.5V5.5L6 4.5H18L19 5.5V18.5Z" fill="white"/>
      <path d="M12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7Z" fill="white"/>
      <path d="M12 12C14.2091 12 16 13.7909 16 16H8C8 13.7909 9.79086 12 12 12Z" fill="white"/>
    </svg>
  );
};
