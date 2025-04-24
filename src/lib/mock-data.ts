
export interface KeyData {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  isOnline: boolean;
  lastUsed?: string;
}

export const mockKeys: KeyData[] = [
  {
    id: "key-1",
    name: "System Drive",
    path: "/mnt/keys/system.key",
    isActive: true,
    isOnline: true,
    lastUsed: "Today at 14:32"
  },
  {
    id: "key-2",
    name: "Backup Drive",
    path: "/mnt/keys/backup-drive.key",
    isActive: false,
    isOnline: false,
    lastUsed: "Yesterday at 09:15"
  },
  {
    id: "key-3",
    name: "External Storage",
    path: "/mnt/keys/external-storage.key",
    isActive: true,
    isOnline: true,
    lastUsed: "2 days ago"
  }
];
