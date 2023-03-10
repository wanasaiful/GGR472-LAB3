//Define access token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuYXNhaWZ1bCIsImEiOiJjbGR3MGtieDUwMnN6M3JuaGhpYzBwNzN4In0.6rML26l6faKftQC9-b7_PQ';

//Initialize map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/wanasaiful/cle3m9a0j004o01qwe6rfbzmk', // Link to my style URL
    center: [-79.390, 43.663], // Long and lat coordinates 
    zoom: 11, //starting zoom point
});

//Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//Add fullscreen option to the map
map.addControl(new mapboxgl.FullscreenControl());

//Create geocoder variable
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "ca"
});

//Use geocoder div to position geocoder on page
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

//Add data source and draw initial visiualization of layer - added points individually
map.on('load', () => {
    map.addSource('torontomovies', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [

                {
                    "type": "Feature",
                    "properties": {
                        "name": "University of Toronto"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.3952226454677,
                43.661657753111996
                        ],
                        "type": "Point"}},                         


            ]
        }
    })
    map.addLayer({
        'id': 'movie-buildings',
        'type': 'circle',
        'source': 'torontomovies',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#b811eb'
        }
    });
    });

    map.on('load', () => {
        map.addSource('torontomovies1', {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": [

                     {
                         "type": "Feature",
                         "properties": {
                                "name": "Reference Library"
                        },
                        "geometry": {
                            "coordinates": [
                                -79.38685816931142,
                    43.67174613469504
                                    ],
                                    "type": "Point"}},                         
    
    
                ]
            }
        })
        map.addLayer({
            'id': 'movie-buildings1',
            'type': 'circle',
            'source': 'torontomovies1',
            'paint': {
                'circle-radius': 6,
                'circle-color': '#e7f7be'
            }
        });
        });

        map.on('load', () => {
            map.addSource('torontomovies2', {
                type: 'geojson',
                data: {
                    "type": "FeatureCollection",
                    "features": [
    
                        {
                            "type": "Feature",
                            "properties": {
                                "name": "Yonge-Dundas Square"
                            },
                            "geometry": {
                                "coordinates": [
                                    -79.3804362399624,
                        43.65598093426948
                                ],
                                "type": "Point"}},                         
        
        
                    ]
                }
            })
            map.addLayer({
                'id': 'movie-buildings2',
                'type': 'circle',
                'source': 'torontomovies2',
                'paint': {
                    'circle-radius': 6,
                    'circle-color': '#ff0000'
                }
            });
            });

            map.on('load', () => {
                map.addSource('torontomovies3', {
                    type: 'geojson',
                    data: {
                        "type": "FeatureCollection",
                        "features": [
        
                            {
                                "type": "Feature",
                                "properties": {
                                       "name": "City Hall"
                               },
                               "geometry": {
                                   "coordinates": [
                                       -79.38406747486903,
                                           43.65342826123975
                                           ],
                                           "type": "Point"}},                         
            
            
                        ]
                    }
                })
                map.addLayer({
                    'id': 'movie-buildings3',
                    'type': 'circle',
                    'source': 'torontomovies3',
                    'paint': {
                        'circle-radius': 6,
                        'circle-color': '#91ff00'
                    }
                });
                });

                map.on('load', () => {
                    map.addSource('torontomovies4', {
                        type: 'geojson',
                        data: {
                            "type": "FeatureCollection",
                            "features": [
            
                                {
                                    "type": "Feature",
                                    "properties": {
                                           "name": "Elgin and Winter Garden Theatre"
                                   },
                                   "geometry": {
                                       "coordinates": [
                                           -79.3790037037066,
                               43.653058391765484
                                               ],
                                               "type": "Point"}},                         
                
                
                            ]
                        }
                    })
                    map.addLayer({
                        'id': 'movie-buildings4',
                        'type': 'circle',
                        'source': 'torontomovies4',
                        'paint': {
                            'circle-radius': 6,
                            'circle-color': '#001aff'
                        }
                    });
                    });


                    map.on('load', () => {
                        map.addSource('torontomovies5', {
                            type: 'geojson',
                            data: {
                                "type": "FeatureCollection",
                                "features": [
                
                                    {
                                        "type": "Feature",
                                        "properties": {
                                            "name": "Union Station"
                                        },
                                        "geometry": {
                                            "coordinates": [
                                                -79.38066571627058,
                                    43.64530660449944
                                            ],
                                            "type": "Point"}},                         
                    
                    
                                ]
                            }
                        })
                        map.addLayer({
                            'id': 'movie-buildings5',
                            'type': 'circle',
                            'source': 'torontomovies5',
                            'paint': {
                                'circle-radius': 6,
                                'circle-color': '#6d0ee9'
                            }
                        });
                        });

                        map.on('load', () => {
                            map.addSource('torontomovies6', {
                                type: 'geojson',
                                data: {
                                    "type": "FeatureCollection",
                                    "features": [
                    
                                        {
                                            "type": "Feature",
                                            "properties": {
                                                   "name": "Casa Loma"
                                           },
                                           "geometry": {
                                               "coordinates": [
                                                   -79.40936176256574,
                                                   43.67806041746152
                                                       ],
                                                       "type": "Point"}},                         
                        
                        
                                    ]
                                }
                            })
                            map.addLayer({
                                'id': 'movie-buildings6',
                                'type': 'circle',
                                'source': 'torontomovies6',
                                'paint': {
                                    'circle-radius': 6,
                                    'circle-color': '#00ffff'
                                }
                            });
                            });

//Add event listeneer which returns map view to full screen on button click
document.getElementById('returnbutton').addEventListener('click', () => {
    map.flyTo({
        center: [-79.390, 43.663],
        zoom: 11,
        essential: true
    });
});

//Change display of legend based on check box
let legendcheck = document.getElementById('legendcheck');

legendcheck.addEventListener('click', () => {
    if (legendcheck.checked) {
        legendcheck.checked = true;
        legend.style.display = 'block';
    }
    else {
        legend.style.display = "none";
        legendcheck.checked = false;
    }
});
