import { create } from "zustand";

type useScore = {
  scores: Record<string, number>;
  setScore: (user: string, score: number) => void;
  getScore: (user: string) => number;
};
export const useScore = create<useScore>((set, get) => ({
  scores: {},
  setScore: (user, score) =>
    set((state) => ({ scores: { ...state.scores, [user]: score } })),
  getScore: (user) => get().scores[user],
}));
