import { create } from "zustand";

type useTime = {
  time: Record<string, string | null>;
  setTime: (user: string, fetchedTime: string) => void;
};
export const useTime = create<useTime>((set) => ({
  time: {},
  setTime: (user: string, fetchedTime: string) =>
    set((state) => ({ time: { ...state.time, [user]: fetchedTime } })),
}));
