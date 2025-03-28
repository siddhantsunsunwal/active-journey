
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkoutCardProps {
  id: string;
  title: string;
  category: string;
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  imageUrl: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  id,
  title,
  category,
  duration,
  level,
  imageUrl,
}) => {
  return (
    <Link to={`/workouts/${id}`}>
      <div className="fitness-card group relative mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-fitness-primary to-transparent opacity-60" />
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="mb-1 inline-block rounded bg-fitness-accent px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-white">
                {category}
              </span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="mt-1 flex items-center text-xs text-fitness-light">
                <span className="mr-3">{duration} min</span>
                <span className="capitalize">{level}</span>
              </div>
            </div>
            <div className="fitness-icon-button">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
