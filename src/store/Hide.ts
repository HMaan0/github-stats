import { create } from "zustand";

type useUsernames = {
  hide: Record<string, boolean>;
  setHide: (user: string) => void;
};
export const useHide = create<useUsernames>((set) => ({
  hide: {},
  setHide: (user: string) =>
    set((state) => ({ hide: { ...state.hide, [user]: !state.hide[user] } })),
}));
