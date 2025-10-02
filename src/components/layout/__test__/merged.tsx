import React from 'react';

// Define props for reusability
interface MergedBoxProps {
  topContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

export const MergedBox: React.FC<MergedBoxProps> = ({ topContent, bottomContent }) => {
  // Common classes for the border style
  const borderStyle = "border border-slate-600";

  return (
    <div className="flex flex-col">
      {/* --- TOP BOX --- */}
      {/* The key is `-mb-px`. This pulls the bottom box up by 1px. */}
      {/* `rounded-t-lg` gives the top corners a nice curve. */}
      <div className={`bg-[#1e293b] p-4 rounded-t-lg ${borderStyle} -mb-px`}>
        {topContent}
      </div>

      {/* --- BOTTOM BOX --- */}
      {/* `rounded-b-lg` completes the shape. */}
      <div className={`bg-[#0f172a] p-8 rounded-b-lg ${borderStyle}`}>
        {bottomContent}
      </div>
    </div>
  );
};
