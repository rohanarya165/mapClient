export interface ClientUser {
  email: string;
  password: string;
  id: number;
  status: boolean;
  name: string;
  address: string;
  role: string;
  longitude: number;
  latitude: number;
}

export interface ClientUsers {
  clientUsers: ClientUser[];
}
