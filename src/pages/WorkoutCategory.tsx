
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WorkoutCard from "../components/workout/WorkoutCard";

// Mock data for workouts by category - in a real app this would come from Supabase
const getWorkoutsByCategory = (category: string) => {
  const allWorkouts = [
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
    },
    {
      id: "4",
      title: "Upper Body Power",
      category: "Strength",
      duration: 40,
      level: "intermediate" as const,
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "5",
      title: "Lower Body Focus",
      category: "Strength",
      duration: 35,
      level: "beginner" as const,
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "6",
      title: "Quick Morning Cardio",
      category: "Cardio",
      duration: 15,
      level: "beginner" as const,
      imageUrl: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "7",
      title: "Tabata Training",
      category: "Cardio",
      duration: 20,
      level: "advanced" as const,
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "8",
      title: "Express Core Workout",
      category: "Core",
      duration: 15,
      level: "beginner" as const,
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];
  
  const quickWorkouts = allWorkouts.filter(workout => workout.duration <= 20);
  
  switch (category.toLowerCase()) {
    case 'strength':
      return allWorkouts.filter(workout => workout.category === 'Strength');
    case 'cardio':
      return allWorkouts.filter(workout => workout.category === 'Cardio');
    case 'core':
      return allWorkouts.filter(workout => workout.category === 'Core');
    case 'quick':
      return quickWorkouts;
    default:
      return [];
  }
};

const getCategoryTitle = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'strength':
      return 'Strength Workouts';
    case 'cardio':
      return 'Cardio Workouts';
    case 'core':
      return 'Core Workouts';
    case 'quick':
      return 'Quick Workouts';
    default:
      return 'Workouts';
  }
};

const WorkoutCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const workouts = category ? getWorkoutsByCategory(category) : [];
  const categoryTitle = category ? getCategoryTitle(category) : 'Workouts';
  
  return (
    <div className="animate-fade-in pb-20">
      <div className="relative mb-6 bg-fitness-secondary p-6">
        <button 
          onClick={() => navigate(-1)}
          className="fitness-icon-button absolute left-4 top-4"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="mt-8 text-center text-2xl font-bold">{categoryTitle}</h1>
        <p className="mt-2 text-center text-sm text-fitness-muted">
          {workouts.length} workouts available
        </p>
      </div>

      <div className="px-4">
        {workouts.length > 0 ? (
          <div>
            {workouts.map((workout) => (
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
        ) : (
          <div className="my-12 text-center">
            <p className="mb-2 text-xl font-semibold">No workouts found</p>
            <p className="mb-6 text-fitness-muted">
              We couldn't find any workouts in this category.
            </p>
            <button 
              onClick={() => navigate('/')} 
              className="fitness-btn-primary"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCategory;
