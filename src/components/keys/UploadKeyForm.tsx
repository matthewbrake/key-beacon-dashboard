
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FolderOpen } from "lucide-react";

interface UploadKeyFormProps {
  onKeyAdded: () => void;
}

const UploadKeyForm = ({ onKeyAdded }: UploadKeyFormProps) => {
  const [keyName, setKeyName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPath, setSelectedPath] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // In a real app, this would upload to an API
    setTimeout(() => {
      setIsUploading(false);
      onKeyAdded();
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!keyName) {
        setKeyName(file.name.replace(/\.key$/, ""));
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-xl">Add New Key</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyName">Key Name</Label>
            <Input 
              id="keyName"
              placeholder="My LUKS Key" 
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Upload Key File</Label>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <div className="border rounded-md p-2 text-center hover:bg-muted transition-colors">
                    <Upload className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm">
                      {selectedFile ? selectedFile.name : "Select a .key file"}
                    </span>
                  </div>
                </Label>
                <Input 
                  id="file-upload" 
                  type="file" 
                  accept=".key"
                  className="hidden"
                  onChange={handleFileChange} 
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="keyPath">Or Use Existing Path</Label>
            <div className="flex gap-2">
              <Input 
                id="keyPath"
                placeholder="/path/to/keys/mykey.key" 
                value={selectedPath}
                onChange={(e) => setSelectedPath(e.target.value)}
              />
              <Button type="button" variant="outline" size="icon">
                <FolderOpen className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Specify a path to an existing key file on the server
            </p>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isUploading || (!selectedFile && !selectedPath)}
          >
            {isUploading ? "Adding..." : "Add Key"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UploadKeyForm;
