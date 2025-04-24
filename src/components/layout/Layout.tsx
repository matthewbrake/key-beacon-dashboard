
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-grow">
        <header className="h-16 flex items-center px-6 border-b">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-medium">Key Beacon</h1>
        </header>
        
        <main className="flex-grow p-6">
          {children}
        </main>

        <footer className="h-12 border-t flex items-center justify-center text-sm text-muted-foreground">
          Key Beacon Dashboard &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
