import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  theme: "dark" | "light";
}

interface Actions {
  setTheme: (theme: State["theme"]) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<State & Actions>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage",
    },
  ),
);
