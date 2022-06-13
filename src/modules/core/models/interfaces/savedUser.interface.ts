export interface SavedUser {
  email: string;
  password: string;
  id: number;
  status: boolean;
  name: string;
  address: string;
  role: string;
}

export interface SavedUsers {
  savedUsers: SavedUser[];
}
