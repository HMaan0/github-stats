import { create } from "zustand";

type useUsernames = {
  hide: Record<string, boolean>;
  setHide: (user: string, show: boolean) => void;
};
export const useHide = create<useUsernames>((set) => ({
  hide: {},
  setHide: (user: string, show: boolean) =>
    set((state) => ({ hide: { ...state.hide, [user]: show } })),
}));
