/*
 * @Author: miaomiao612 dddoctorr612@gmail.com
 * @Date: 2022-10-19 20:43:19
 * @LastEditors: miaomiao612 dddoctorr612@gmail.com
 * @LastEditTime: 2022-10-19 23:37:06
 * @FilePath: \school-explorer\site\js\schools-map.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//*Create a function called `makeSchoolFeature` to transform one of the school elements into a GeoJSON-like feature.
function basemap () {
    let schoolMap = L.map('school-map').setView([39.99893891432174, -75.13162463991333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(schoolMap);
    return schoolMap;
}




function makeSchoolFeature(schools)
{
    return {
        "type": "Feature",
        "id": schools['sdp_id'],
        "properties": {
            "school_name": schools["name"],
            "address": schools["Street Address"],
            "Grade 1": schools['Grade 1'],
        "Grade 2": schools['Grade 2'],
        "Grade 3": schools['Grade 3'],
        "Grade 4": schools['Grade 4'],
        "Grade 5": schools['Grade 5'],
        "Grade 6": schools['Grade 6'],
        "Grade 7": schools['Grade 7'],
        "Grade 8": schools['Grade 8'],
        "Grade 9": schools['Grade 9'],
        "Grade 10": schools['Grade 10'],
        "Grade 11": schools['Grade 11'],
        "Grade 12": schools['Grade 12'],
        "Grade k": schools['Grade K'],
        },
        "geometry": schools["geom"],
    };
}

//Use the function to display all the `schools` data on the map.

function showSchoolsOnMap(schoolsToShow, schoolMap) {
    if (schoolMap.schoolLayer !== undefined){
        schoolMap.removeLayer(schoolMap.schoolLayer);
    }

    const schoolFeatureCollection = {
        "type": "FeatureCollection",
        "features": schoolsToShow.map(makeSchoolFeature),
    };


    schoolMap.schoolLayer = L.geoJSON(schoolFeatureCollection, {
        pointToLayer: (geoJsonPoint, latlng) => L.circleMarker(latlng),
        style:{
            stroke: null,
            fillOpacity: 0.7,
            radius: 3,
            color: '#430184',
        },
    })
    .bindTooltip(layer => layer.feature.properties['school_name'])
    .addTo(schoolMap);
}

export {
    showSchoolsOnMap,

    basemap
};