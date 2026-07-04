"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/clientApp";
import { UserData, AuthState } from "@/types";

export const AuthContext = createContext<AuthState | undefined>(undefined);

// The { children } destructuring here is critical
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    firebaseUser: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data() as UserData;
            setState({
              user: { ...userData, uid: firebaseUser.uid, email: firebaseUser.email! },
              firebaseUser,
              isLoading: false,
              error: null,
            });
          } else {
            setState({
              user: null,
              firebaseUser,
              isLoading: false,
              error: new Error("User profile not found in database."),
            });
          }
        } catch (error: any) {
          setState({ user: null, firebaseUser, isLoading: false, error });
        }
      } else {
        setState({ user: null, firebaseUser: null, isLoading: false, error: null });
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}