import { create } from "zustand";

type showDialog = {
  showDialog: boolean;
  showDialogTrue: () => void;
  showDialogFalse: () => void;
};
export const useShowDialog = create<showDialog>((set) => ({
  showDialog: false,
  showDialogTrue: () => set({ showDialog: true }),
  showDialogFalse: () => set({ showDialog: false }),
}));
