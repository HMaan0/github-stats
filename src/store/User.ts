import { create } from "zustand";

type useUsernames = {
  usernames: string[];
  setUsernames: (newUsername: string) => void;
};
export const useUsernames = create<useUsernames>((set) => ({
  usernames: [],
  setUsernames: (newUsername: string) =>
    set((state) => ({ usernames: [...state.usernames, newUsername] })),
}));
