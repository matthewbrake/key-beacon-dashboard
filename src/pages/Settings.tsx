
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure Key Beacon and manage server settings
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="scripts">Key Scripts</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Server Configuration</CardTitle>
                <CardDescription>
                  Configure the Key Beacon server settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="server-port">Server Port</Label>
                    <Input id="server-port" placeholder="8080" defaultValue="8080" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="key-directory">Default Key Directory</Label>
                    <Input id="key-directory" placeholder="/mnt/keys" defaultValue="/mnt/keys" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-discovery">Auto Discovery</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically discover LUKS containers
                    </p>
                  </div>
                  <Switch id="auto-discovery" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-activate">Auto Activate</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically activate keys on server restart
                    </p>
                  </div>
                  <Switch id="auto-activate" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure authentication and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-token">API Token</Label>
                <div className="flex gap-2">
                  <Input id="api-token" type="password" value="●●●●●●●●●●●●●●●●" readOnly />
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Used for authenticating CLI and script requests
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="require-auth">Require Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require authentication for all requests
                  </p>
                </div>
                <Switch id="require-auth" defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                <Input id="allowed-ips" placeholder="192.168.1.0/24, 10.0.0.1" defaultValue="0.0.0.0/0" />
                <p className="text-xs text-muted-foreground">
                  Comma-separated list of IP addresses or CIDR ranges
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scripts">
          <Card>
            <CardHeader>
              <CardTitle>Key Script Generator</CardTitle>
              <CardDescription>
                Generate client scripts for key management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Script Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <div className="text-left">
                        <div className="font-medium">Bash Script</div>
                        <div className="text-sm text-muted-foreground">Linux/Unix systems</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <div className="text-left">
                        <div className="font-medium">PowerShell</div>
                        <div className="text-sm text-muted-foreground">Windows systems</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <div className="text-left">
                        <div className="font-medium">Python Script</div>
                        <div className="text-sm text-muted-foreground">Cross-platform</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-md">
                  <p className="text-sm">Select a script type to generate a template</p>
                </div>

                <Button className="w-full">Generate Script</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
