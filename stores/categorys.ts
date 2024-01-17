import { defineStore } from "pinia"

export const useCategoryStore = defineStore('categorys', {
  state: () => ({
    categorys: [],
    selected: 'all',
    select_countys: 'all',
    isDownloadPopup: false,
    items: []
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment($datas:any) { this.categorys = $datas; },
    
    downPopController($datas:boolean) { this.isDownloadPopup = $datas; },

    setSelected($datas:any) { this.selected = $datas; },
    setSelectedCountys($datas:any) { this.select_countys = $datas; },
    setItems($datas:[], $isFir:boolean) {
      if($isFir){
        this.items = $datas;
      }else{
        this.items.push(...$datas);
      }
    }
  },
})