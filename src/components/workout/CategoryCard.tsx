
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, color, link }) => {
  return (
    <Link to={link} className="block">
      <div 
        className="fitness-card flex flex-col items-center py-6"
        style={{ background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)` }}
      >
        <div 
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-center text-sm font-medium text-fitness-light">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
