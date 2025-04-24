
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Power, Download, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface KeyCardProps {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  isOnline: boolean;
  lastUsed?: string;
}

const KeyCard = ({ id, name, path, isActive, isOnline, lastUsed }: KeyCardProps) => {
  const [active, setActive] = useState(isActive);
  const [online, setOnline] = useState(isOnline);

  const togglePower = () => {
    // In a real app, this would call an API
    setActive(!active);
    // Simulate connection change
    setTimeout(() => {
      setOnline(!active);
    }, 1000);
  };

  return (
    <Card className="bg-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <StatusIndicator isOnline={online} isActive={active} />
        </div>
      </CardHeader>

      <CardContent className="py-2 flex-grow">
        <div className="text-xs text-muted-foreground mb-2">Path</div>
        <div className="text-sm bg-muted p-2 rounded-md font-mono overflow-x-auto whitespace-nowrap">
          {path}
        </div>
        
        {lastUsed && (
          <div className="mt-4 text-xs text-muted-foreground">
            Last used: {lastUsed}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2 flex gap-2">
        <Button 
          variant={active ? "destructive" : "default"} 
          size="sm" 
          className="flex-1"
          onClick={togglePower}
        >
          <Power className="mr-1 h-4 w-4" />
          {active ? "Deactivate" : "Activate"}
        </Button>
        
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const StatusIndicator = ({ isOnline, isActive }: { isOnline: boolean; isActive: boolean }) => {
  // Not active - gray
  // Active but offline - yellow
  // Active and online - green
  let color = "bg-gray-400";
  let pulseClass = "";
  let statusText = "Inactive";

  if (isActive) {
    if (isOnline) {
      color = "bg-success";
      pulseClass = "animate-pulse-slow";
      statusText = "Online";
    } else {
      color = "bg-warning";
      statusText = "Connecting...";
    }
  }

  return (
    <Badge 
      variant="outline" 
      className="flex items-center gap-1.5 font-normal"
    >
      <div className={cn("w-2 h-2 rounded-full", color, pulseClass)} />
      <span className="text-xs">{statusText}</span>
    </Badge>
  );
};

export default KeyCard;
