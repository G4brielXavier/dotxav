import { atom } from 'jotai'

export const current_ui = atom<string>("");
export const current_layout = atom<string>("home");


export const getCurrentLayout = atom((get) => get(current_layout))
