import { defineStore } from "pinia"

export const useCategoryStore = defineStore('tabs', {
  state: () => ({
    tabIdx: 0,
    datas : null,
    latLng: {latitude:0, longitude:0},
    visibleMap : false
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setTabIdx($idx:number) { this.tabIdx = $idx; },
    setDatas($datas:any) { this.datas = $datas; },
    setLatLag($lat:any,$lng:any) {
      this.latLng = {latitude:$lat, longitude:$lng};
    },
    setVisibleMap($boo:Boolean){
      this.visibleMap = $boo;
    }

  },
})