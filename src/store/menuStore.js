import { create } from "zustand";

const menuStore = create((set) => ({
    show: false,
    setShow: () => {
        set({show: !menuStore.getState().show})        
    }
}))

export default menuStore;