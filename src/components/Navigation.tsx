import { Link, useLocation } from "react-router-dom";
import { Heart, FileText, Phone, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/questionnaire", label: "Check-In", icon: BarChart3 },
    { path: "/journal", label: "Journal", icon: FileText },
    { path: "/support", label: "Support", icon: Phone },
  ];

  return (
    <nav className="wellness-card mx-4 mt-4 lg:mx-6 shadow-vibrant">
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105",
              "hover:bg-primary/15 hover:text-primary hover:shadow-glow",
              location.pathname === path
                ? "btn-vibrant pulse-glow"
                : "text-muted-foreground hover:text-wellness-energy"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;