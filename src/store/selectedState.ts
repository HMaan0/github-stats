import { create } from "zustand";

interface OptionsState {
  selected: string;
  setSelected: (option: string) => void;
}
export const useOptionsStore = create<OptionsState>((set) => ({
  selected: "",
  setSelected: (option: string) => set({ selected: option }),
}));
