import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ addr }) => {
   const mapRef = useRef(null);

   useEffect(() => {
      if (!mapRef.current || !addr) return;

      const script = document.createElement('script');
      script.src =
         '//dapi.kakao.com/v2/maps/sdk.js?appkey=c478a6c0b81261903dc7453cd70a13e0&libraries=services&autoload=false';
      document.head.appendChild(script);

      script.onload = () => {
         const { kakao } = window;

         kakao.maps.load(() => {
            const currentRef = mapRef.current;
            const mapOption = {
               center: new kakao.maps.LatLng(33.450701, 126.570667),
               level: 3,
            };

            const map = new kakao.maps.Map(currentRef, mapOption);

            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(addr, (result, status) => {
               if (status === kakao.maps.services.Status.OK) {
                  const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                  const marker = new kakao.maps.Marker({
                     map: map,
                     position: coords,
                  });

                  const infowindow = new kakao.maps.InfoWindow({
                     content: '<div style="width:150px;text-align:center;padding:6px 0;">보호장소</div>',
                  });
                  infowindow.open(map, marker);

                  map.setCenter(coords);
               }
            });
         });
      };
   }, [mapRef, addr]);

   return <div id="map" ref={mapRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default KakaoMap;
