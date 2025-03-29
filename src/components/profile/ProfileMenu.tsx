
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { 
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

const ProfileMenu: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  
  if (!user) return null;
  
  const userInitials = profile?.first_name && profile?.last_name 
    ? `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase()
    : user.email?.substring(0, 2).toUpperCase() || "U";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-auto">
          <Avatar className="h-8 w-8 cursor-pointer border-2 border-fitness-accent">
            <AvatarImage src={profile?.avatar_url || ""} />
            <AvatarFallback className="bg-fitness-accent text-white">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 border-2 border-fitness-accent">
              <AvatarImage src={profile?.avatar_url || ""} />
              <AvatarFallback className="bg-fitness-accent text-xl text-white">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h3 className="font-semibold">
                {profile?.first_name && profile?.last_name
                  ? `${profile.first_name} ${profile.last_name}`
                  : user.email}
              </h3>
              {profile?.first_name && profile?.last_name && (
                <p className="text-sm text-fitness-muted">{user.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <button className="fitness-btn-secondary w-full">
              Edit Profile
            </button>
            <button 
              className="fitness-btn-primary w-full"
              onClick={signOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileMenu;
