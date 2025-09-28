import { Home, BarChart3, Settings, FileText, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Users" },
  { icon: FileText, label: "Documents" },
  { icon: Settings, label: "Settings" },
  { icon: Zap, label: "Integrations" },
];

export function DashboardSidebar() {
  return (
    <TooltipProvider>
      <motion.aside
        initial={{ x: -280, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -280, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-20 h-screen border-r border-border/50 bg-gradient-secondary p-4"
      >
        <div className="space-y-4">
          {/* Logo */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Button
                      variant={item.active ? "default" : "ghost"}
                      size="sm"
                      className={`w-12 h-12 p-0 transition-all duration-200 ${
                        item.active 
                          ? "bg-gradient-primary shadow-glow hover:shadow-hover" 
                          : "hover:bg-muted/30 hover:scale-105"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-popover/95 backdrop-blur-xl border-border/50">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </motion.aside>
    </TooltipProvider>
  );
}