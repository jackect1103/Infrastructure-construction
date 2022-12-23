/**
 * @name: layout
 * @author: 黄俊炎
 * @date: 2022-08-10 17:13
 * @description：layout
 * @update: 2022-08-10 17:13
 */
import { defineStore } from 'pinia'

interface StateProps {
  projectName: string
  isSpreading: boolean
}

export const useSettingStore = defineStore({
  id: 'setting',

  state: (): StateProps => ({
    projectName: import.meta.env.VITE_PROJECT_NAME,
    isSpreading: false
  }),

  actions: {
    changeIsSpreading() {
      this.isSpreading = !this.isSpreading
    }
  }
})
