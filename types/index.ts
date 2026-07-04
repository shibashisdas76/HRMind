import { User as FirebaseUser } from "firebase/auth";

export type UserRole = "ADMIN" | "HR" | "EMPLOYEE";

export interface UserData {
  uid: string;
  email: string;
  role: UserRole;
  personalInfo: {
    firstName: string;
    lastName: string;
    phone?: string;
    avatarUrl?: string;
  };
  status: "ACTIVE" | "ON_LEAVE" | "TERMINATED";
}

export interface AuthState {
  user: UserData | null;
  firebaseUser: FirebaseUser | null;
  isLoading: boolean;
  error: Error | null;
}