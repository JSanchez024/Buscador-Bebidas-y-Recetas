import { type StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotifiactionSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}


export const createNotificationSlice: StateCreator<NotifiactionSliceType & FavoritesSliceType, [], [], NotifiactionSliceType> = (set) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification : (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
})