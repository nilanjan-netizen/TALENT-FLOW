import { motion } from "framer-motion";
import { BarChart3, Settings, FileText, PenTool } from "lucide-react";

const dashboardApps = [
  {
    id: 1,
    title: "App1",
    icon: BarChart3,
    emoji: "📊",
    description: "Analytics & Reports",
    gradient: "from-blue-500 to-purple-600",
    path: "/app1"
  },
  {
    id: 2,
    title: "App2", 
    icon: Settings,
    emoji: "⚙️",
    description: "System Settings",
    gradient: "from-green-500 to-teal-600",
    path: "/app2"
  },
  {
    id: 3,
    title: "App3",
    icon: FileText,
    emoji: "📁",
    description: "File Management",
    gradient: "from-orange-500 to-red-600",
    path: "/app3"
  },
  {
    id: 4,
    title: "App4",
    icon: PenTool,
    emoji: "📝",
    description: "Content Editor",
    gradient: "from-purple-500 to-pink-600",
    path: "/app4"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  }
};

export function DashboardCards() {
  const handleCardClick = (path: string) => {
    console.log(`Navigating to ${path}`);
    // Add navigation logic here
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
    >
      {dashboardApps.map((app, index) => (
        <motion.div
          key={app.id}
          variants={item}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCardClick(app.path)}
          className="group cursor-pointer"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="glass-card hover-lift float-animation relative h-48 p-6 rounded-2xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-4">
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow`}
              >
                <span className="text-2xl">{app.emoji}</span>
              </motion.div>

              {/* App Title */}
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-glow transition-colors">
                {app.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center group-hover:text-foreground/80 transition-colors">
                {app.description}
              </p>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                initial={false}
              />
            </div>

            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-3xl" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}