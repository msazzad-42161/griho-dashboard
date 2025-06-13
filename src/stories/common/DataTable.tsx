import React from 'react';

// DataTableProps interface for dynamic keys, values, and optional title
export interface DataTableProps {
  data: { [key: string]: unknown[] }; // Object where keys are labels and values are arrays for the columns
  title?: string; // Optional table title that spans all columns
  showColumnHeader?:boolean,
  tableStyle?: string; // Optional Tailwind class for table styling
  cellStyle?: string; // Optional Tailwind class for cell styling
}

export const DataTable = ({ data, title, showColumnHeader=false,tableStyle = '', cellStyle = '' }: DataTableProps) => {
  // Get the keys for the first column
  const keys = Object.keys(data);
  // Assume that all values arrays have the same length
  const columnCount = data[keys[0]].length;

  return (
    <table className={`border-separate border-spacing-0 w-full ${tableStyle}`}>
      <thead>
        {/* Render the title if provided, spanning all columns */}
        {title && (
          <tr>
            <th colSpan={columnCount + 1} className={`text-left py-3 px-4 bg-primary text-white text-sm lg:text-lg ${cellStyle}`}>
              {title}
            </th>
          </tr>
        )}
        {showColumnHeader && (
        <tr className="bg-primary text-white">
          {/* Conditionally render columns if no title exists */}
          <th className={`text-left py-3 px-4 text-sm lg:text-lg ${cellStyle}`}>Attribute</th>
          {Array.from({ length: columnCount }, (_, i) => (
            <th key={`col-${i}`} className={`text-left py-3 px-4 text-sm lg:text-lg ${cellStyle}`}>
              Column {i + 1}
            </th>
          ))}
        </tr>
        )}
      </thead>
      <tbody>
        {keys.map((key) => (
          <tr key={key} className="odd:bg-white even:bg-gray-50">
            <td className={`py-3 px-4 ${cellStyle} text-black text-xs lg:text-sm`}>{key}</td> {/* Display the key in the first column */}
            {data[key].map((value, index) => (
              <td key={`${key}-${index}`} className={`py-3 text-black text-end px-4 ${cellStyle} text-xs lg:text-sm`}>
                {React.isValidElement(value) ? value : String(value ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
