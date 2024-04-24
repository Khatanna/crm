import { create } from "zustand";

interface State {
  isOpen: boolean;
}

interface Actions {
  toggle: () => void;
}

export const useNavBarStore = create<State & Actions>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
