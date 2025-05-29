"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../lib/FirebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as signOutFirebase,
} from "firebase/auth";

export interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

type UserContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};
const UserContext = createContext<UserContextType | undefined>(undefined);

const provider = new GoogleAuthProvider();

export const STORAGE_KEY = "eSimStoreUser";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user: User = {
      displayName: result.user.displayName ?? null,
      email: result.user.email ?? null,
      photoURL: result.user.photoURL ?? null,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    setUser(user);
  };

  const signOut = async () => {
    await signOutFirebase(auth);
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
