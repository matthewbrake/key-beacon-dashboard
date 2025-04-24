
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Key, Settings, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 ease-in-out bg-sidebar border-r border-sidebar-border",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold">
            KB
          </div>
          {isOpen && <span className="ml-3 font-semibold text-lg">Key Beacon</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="hidden lg:flex"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex-grow overflow-y-auto py-4 px-2">
        <nav className="space-y-1">
          <NavItem to="/" isOpen={isOpen} icon={<Key className="mr-2 h-4 w-4" />} text="Keys" />
          <NavItem to="/settings" isOpen={isOpen} icon={<Settings className="mr-2 h-4 w-4" />} text="Settings" />
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Button className="w-full" size={isOpen ? "default" : "icon"}>
          <Plus className="h-4 w-4" />
          {isOpen && <span className="ml-2">Add Key</span>}
        </Button>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  isOpen: boolean;
  icon: React.ReactNode;
  text: string;
}

const NavItem = ({ to, isOpen, icon, text }: NavItemProps) => {
  return (
    <Link
      to={to}
      className="flex items-center px-2 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group"
    >
      <div className="flex items-center">
        {icon}
        {isOpen && <span className="truncate">{text}</span>}
      </div>
      {!isOpen && (
        <div className="absolute left-16 transform -translate-y-1/2 bg-popover text-popover-foreground px-2 py-1 rounded opacity-0 invisible transition-opacity group-hover:opacity-100 group-hover:visible whitespace-nowrap">
          {text}
        </div>
      )}
    </Link>
  );
};

export default Sidebar;
