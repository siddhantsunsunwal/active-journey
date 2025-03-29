
import React from "react";
import { Dumbbell, Heart, Clock } from "lucide-react";
import WorkoutCard from "../components/workout/WorkoutCard";
import CategoryCard from "../components/workout/CategoryCard";
import ProfileMenu from "../components/profile/ProfileMenu";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

// Mock data for workouts
const featuredWorkouts = [
  {
    id: "1",
    title: "Full Body Blast",
    category: "Strength",
    duration: 45,
    level: "intermediate" as const,
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "2",
    title: "Core Crusher",
    category: "Core",
    duration: 30,
    level: "beginner" as const,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "3",
    title: "HIIT Circuit",
    category: "Cardio",
    duration: 25,
    level: "advanced" as const,
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

// Mock data for categories
const categories = [
  {
    title: "Strength",
    icon: <Dumbbell className="h-6 w-6 text-white" />,
    color: "#FF5722",
    link: "/workouts/category/strength"
  },
  {
    title: "Cardio",
    icon: <Heart className="h-6 w-6 text-white" />,
    color: "#38BDF8",
    link: "/workouts/category/cardio"
  },
  {
    title: "Quick",
    icon: <Clock className="h-6 w-6 text-white" />,
    color: "#10B981",
    link: "/workouts/category/quick"
  }
];

const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="animate-fade-in pb-6">
      {/* Hero Section */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-fitness-primary/50 to-fitness-primary" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60"
          alt="Fitness Hero"
          className="h-64 w-full object-cover object-center md:h-72"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
          <div>
            <h1 className="mb-2 text-white">Master<span className="text-fitness-accent">Plan</span></h1>
            <p className="text-lg text-fitness-light">Your personalized fitness journey starts here</p>
            <button className="fitness-btn-primary mt-4">
              Generate Workout Plan
            </button>
          </div>
          {user ? (
            <ProfileMenu />
          ) : (
            <Link to="/auth" className="fitness-btn-secondary">
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        {/* Categories */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Categories</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                icon={category.icon}
                color={category.color}
                link={category.link}
              />
            ))}
          </div>
        </div>

        {/* Featured Workouts */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Featured Workouts</h2>
            <Link to="/workouts" className="text-sm font-medium text-fitness-accent">
              View All
            </Link>
          </div>
          <div>
            {featuredWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                id={workout.id}
                title={workout.title}
                category={workout.category}
                duration={workout.duration}
                level={workout.level}
                imageUrl={workout.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
