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
    <nav className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl mx-4 mt-4 lg:mx-6 shadow-gentle">
      <div className="flex flex-wrap justify-center gap-1 p-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300",
              "hover:bg-primary/10 hover:text-primary",
              location.pathname === path
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
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