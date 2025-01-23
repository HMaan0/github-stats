import { create } from "zustand";

type useSortedUser = {
  sortedUsers: string[];
  setSortedUsers: (users: string[]) => void;
  setNewUsername: (username: string) => void;
};
export const useSortedUsers = create<useSortedUser>((set) => ({
  sortedUsers: [],
  setSortedUsers: (users: string[]) => set({ sortedUsers: [...users] }),
  setNewUsername: (username: string) =>
    set((state) => ({ sortedUsers: [...state.sortedUsers, username] })),
}));
