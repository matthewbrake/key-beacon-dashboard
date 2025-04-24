
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import KeyCard from "@/components/keys/KeyCard";
import UploadKeyForm from "@/components/keys/UploadKeyForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { mockKeys, type KeyData } from "@/lib/mock-data";

const Dashboard = () => {
  const [keys, setKeys] = useState<KeyData[]>(mockKeys);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleKeyAdded = () => {
    // In a real app, we would fetch the updated list from an API
    const newKey: KeyData = {
      id: `key-${keys.length + 1}`,
      name: `New Key ${keys.length + 1}`,
      path: `/mnt/keys/new-key-${keys.length + 1}.key`,
      isActive: false,
      isOnline: false,
    };
    
    setKeys([...keys, newKey]);
    setIsDialogOpen(false);
  };

  return (
    <Layout>
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">LUKS Key Management</h1>
          <p className="text-muted-foreground">
            Manage encryption keys and monitor their status
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Key
            </Button>
          </DialogTrigger>
          <DialogContent>
            <UploadKeyForm onKeyAdded={handleKeyAdded} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map((key) => (
          <KeyCard
            key={key.id}
            id={key.id}
            name={key.name}
            path={key.path}
            isActive={key.isActive}
            isOnline={key.isOnline}
            lastUsed={key.lastUsed}
          />
        ))}
      </div>
      
      {keys.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No keys found</p>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Your First Key
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
