import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  isAuthenticated: boolean;
  isBooting: boolean;
  login: () => void;
  logout: () => void;
  startBoot: () => void;
  completeBoot: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isBooting: true,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false, isBooting: true }),
      startBoot: () => set({ isBooting: true }),
      completeBoot: () => set({ isBooting: false }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }),
    }
  )
);
