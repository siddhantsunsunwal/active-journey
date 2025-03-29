
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Dumbbell, Zap } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

// Mock data for the workout detail - in a real app this would come from Supabase
const getWorkoutById = (id: string) => {
  const mockWorkouts = {
    "1": {
      id: "1",
      title: "Full Body Blast",
      category: "Strength",
      duration: 45,
      level: "intermediate",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "A comprehensive full-body workout designed to build strength and muscle endurance. This workout targets all major muscle groups through compound movements.",
      exercises: [
        { name: "Barbell Squats", sets: 4, reps: "10-12", rest: "90 sec" },
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
        { name: "Bent-Over Rows", sets: 3, reps: "10-12", rest: "60 sec" },
        { name: "Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec" },
        { name: "Lunges", sets: 3, reps: "12 each leg", rest: "60 sec" },
        { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "45 sec" },
        { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "45 sec" },
        { name: "Plank", sets: 3, reps: "30-60 sec", rest: "30 sec" }
      ]
    },
    "2": {
      id: "2",
      title: "Core Crusher",
      category: "Core",
      duration: 30,
      level: "beginner",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "Focus on your midsection with this effective core workout routine. Perfect for beginners looking to strengthen their abdominal muscles and improve stability.",
      exercises: [
        { name: "Crunches", sets: 3, reps: "15-20", rest: "45 sec" },
        { name: "Russian Twists", sets: 3, reps: "20 total", rest: "45 sec" },
        { name: "Leg Raises", sets: 3, reps: "12-15", rest: "45 sec" },
        { name: "Plank", sets: 3, reps: "30 sec", rest: "30 sec" },
        { name: "Side Planks", sets: 2, reps: "20 sec each side", rest: "30 sec" },
        { name: "Mountain Climbers", sets: 3, reps: "20 total", rest: "45 sec" }
      ]
    },
    "3": {
      id: "3",
      title: "HIIT Circuit",
      category: "Cardio",
      duration: 25,
      level: "advanced",
      imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "An intense high-intensity interval training circuit that will challenge your cardiovascular system and burn calories efficiently. Designed for advanced fitness enthusiasts.",
      exercises: [
        { name: "Burpees", sets: 4, reps: "15", rest: "30 sec" },
        { name: "Box Jumps", sets: 4, reps: "12", rest: "30 sec" },
        { name: "Kettlebell Swings", sets: 4, reps: "15", rest: "30 sec" },
        { name: "Battle Ropes", sets: 4, reps: "30 sec", rest: "30 sec" },
        { name: "Mountain Climbers", sets: 4, reps: "20 each leg", rest: "30 sec" },
        { name: "Jump Squats", sets: 4, reps: "15", rest: "30 sec" }
      ]
    }
  };
  
  return mockWorkouts[id as keyof typeof mockWorkouts] || null;
};

const WorkoutDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const workout = id ? getWorkoutById(id) : null;
  
  if (!workout) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold">Workout Not Found</h2>
          <p className="mb-4 text-fitness-muted">The workout you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')} 
            className="fitness-btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'beginner':
        return 'text-green-500';
      case 'intermediate':
        return 'text-yellow-500';
      case 'advanced':
        return 'text-red-500';
      default:
        return 'text-fitness-light';
    }
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-fitness-primary/50 to-fitness-primary" />
        <img
          src={workout.imageUrl}
          alt={workout.title}
          className="h-64 w-full object-cover object-center md:h-72"
        />
        <button 
          onClick={() => navigate(-1)}
          className="fitness-icon-button absolute left-4 top-4"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="mb-2 inline-block rounded bg-fitness-accent px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-white">
            {workout.category}
          </span>
          <h1 className="mb-2 text-2xl font-bold text-white">{workout.title}</h1>
          <div className="flex items-center text-fitness-light">
            <Clock size={16} className="mr-1" />
            <span className="mr-4">{workout.duration} min</span>
            <Dumbbell size={16} className="mr-1" />
            <span className={`capitalize ${getLevelColor(workout.level)}`}>{workout.level}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-bold">Description</h2>
          <p className="text-fitness-muted">{workout.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">Exercises</h2>
          <div className="space-y-3">
            {workout.exercises.map((exercise, index) => (
              <div key={index} className="fitness-card flex items-center p-4">
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-fitness-accent">
                  <Zap size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <p className="text-sm text-fitness-muted">
                    {exercise.sets} sets × {exercise.reps}
                  </p>
                </div>
                <div className="text-xs text-fitness-light">
                  {exercise.rest} rest
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          {user ? (
            <button className="fitness-btn-primary w-full max-w-md">
              Start Workout
            </button>
          ) : (
            <button 
              onClick={() => navigate('/auth')}
              className="fitness-btn-primary w-full max-w-md"
            >
              Sign In to Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
