const degToRad = a => Math.PI / 180 * a;
const radToDeg = a => 180 / Math.PI * a;

const latlonToXyz = latlon => {
    const [lat, lon] = latlon.map(degToRad);
    return [
        Math.cos(lat) * Math.cos(lon),
        Math.cos(lat) * Math.sin(lon),
        Math.sin(lat)
    ];
};

const xyzToLatlon = xyz => {
    const [x, y, z] = xyz;
    return [
        Math.atan2(z, (x ** 2 + y ** 2) ** 0.5),
        Math.atan2(y, x)
    ].map(radToDeg);
};

const midXyz = (xyz1, xyz2) => [
    (xyz1[0] + xyz2[0]) / 2,
    (xyz1[1] + xyz2[1]) / 2,
    (xyz1[2] + xyz2[2]) / 2
];

const midLatlon = (latlon1, latlon2) => xyzToLatlon(midXyz(
    latlonToXyz(latlon1),
    latlonToXyz(latlon2)
)); 

const test = (latlon1, latlon2) => {
    console.log(JSON.stringify([latlon1, latlon2, midLatlon(latlon1, latlon2)]));
};

test([60, 45], [60, 45]); 
test([60, 45], [61, 46]); 
test([0, 90], [90, 0]); 
test([80, 90], [80, -90]); 
