<template>
  <div id="map" style="height: 100%; background-color: #eee;"></div>
</template>

<script>
export default {
  props: {
    latLag: Object
  },
  data() {
    return {
      maps: null,
      marker: null
    };
  },
  mounted() {
    if(this.latLag.latitude && this.latLag.latitude != 0){
      kakao.maps.load(this.initMap);
    }
  },
  watch: {
    latLag: {
      immediate: true, 
      handler (val, oldVal) {
        console.log(oldVal,val);
        if(val.latitude && val.latitude != 0){
          kakao.maps.load(this.initMap);
        }
      }
    }
  },
  methods: {
    
    initMap() {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      if(!container) return;

      const latLagPosition =new kakao.maps.LatLng(this.latLag.latitude, this.latLag.longitude);
      const options = {
        center: latLagPosition, //지도의 중심좌표.
        level: 3,
      };
      const imageSrc = 'https://wedqueen.s3.ap-northeast-2.amazonaws.com/test/marker_red.png', // 마커이미지의 주소입니다    
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = {offset: new kakao.maps.Point(27, 69)};
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      const maps = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      this.maps = maps;

      this.marker = new kakao.maps.Marker({
          position: latLagPosition,
          image: markerImage 
      });
      this.marker.setMap(maps);
    }
  },
};
</script>