
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Dumbbell, User, ShoppingBag } from "lucide-react";

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-fitness-surface bg-fitness-secondary">
      <div className="flex items-center justify-around py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-fitness-accent" : "text-fitness-muted"
            }`
          }
        >
          <Home size={22} />
          <span className="mt-1 text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/workouts"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-fitness-accent" : "text-fitness-muted"
            }`
          }
        >
          <Dumbbell size={22} />
          <span className="mt-1 text-xs">Workouts</span>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-fitness-accent" : "text-fitness-muted"
            }`
          }
        >
          <ShoppingBag size={22} />
          <span className="mt-1 text-xs">Shop</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-fitness-accent" : "text-fitness-muted"
            }`
          }
        >
          <User size={22} />
          <span className="mt-1 text-xs">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
