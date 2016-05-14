// Utility promise wrapper around geolocation API
const geoPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      // cache geocoords for 5 minutes
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 300000}
    );
  });
};
// Utility function to get GeoIP from free provider
const getGeoIP = () => {
  return fetch('//freegeoip.net/json/')
    .then((res) => res.json())
    .then((resData) => {
      return {
        lat: resData.latitude,
        lng: resData.longitude
      };
    })
    .catch((err) => err);
};
// Function that returns a promise that resolves to geocoordinates, either
// from geolocation or geoIP
export const findGeoCoords = () => {
  return geoPromise()
    .then((pos) => {
      return {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
    })
    .catch(() => {
      return getGeoIP()
        .then((coords) => {
          return {
            latitude: coords.lat,
            longitude: coords.lng,
          };
        })
        .catch((err) => err);
    });
};
