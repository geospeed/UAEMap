(async () => {

    const topology = await fetch(
        // 'https://code.highcharts.com/mapdata/custom/europe.topo.json'
        'https://code.highcharts.com/mapdata/countries/ae/ae-all.topo.json'
    ).then(response => response.json());

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology,
            margin: 1
        },

        title: {
            text: 'Categories of UAE capitals',
            style: {
                textOutline: '5px contrast'
            }
        },

        subtitle: {
            text: 'Map markers in Highcharts',
            style: {
                textOutline: '5px contrast'
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                alignTo: 'spacingBox',
                verticalAlign: 'bottom'
            }
        },

        mapView: {
            padding: [0, 0, 85, 0]
        },

        legend: {
            floating: true,
            backgroundColor: '#ffffffcc'
        },

        plotOptions: {
            mappoint: {
                keys: ['id', 'lat', 'lon', 'name'],
                marker: {
                    lineWidth: 1,
                    lineColor: '#000',
                    symbol: 'mapmarker',
                    radius: 8
                },
                dataLabels: {
                    enabled: false
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF</span> ' +
                '{point.key}<br/>',
            pointFormat: '{series.name}'
        },

        series: [{
            allAreas: true,
            name: 'Coastline',
            states: {
                inactive: {
                    opacity: 0.2
                }
            },
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false,
            showInLegend: false,
            borderColor: 'blue',
            opacity: 0.3,
            borderWidth: 10
        }, {
            allAreas: true,
            name: 'Countries',
            states: {
                inactive: {
                    opacity: 1
                }
            },
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false,
            showInLegend: false,
            borderColor: 'rgba(0, 0, 0, 0.25)'
        }, {
            name: 'Coastal',
            color: 'rgb(124, 181, 236)',
            data: cityData,
            type: 'mappoint'
        }]
    });

})();