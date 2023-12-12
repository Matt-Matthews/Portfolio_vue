import { defineStore } from "pinia"

export const useGlobalStore = defineStore('global', {
   state: () =>({
    isActive: 0,
    links: ["home", "about", "projects", "contact"]
   }),
   actions: {
    handlePageChange(index){
        this.isActive = index
    }
   }
})