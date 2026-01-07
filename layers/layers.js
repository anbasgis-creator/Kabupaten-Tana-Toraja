var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_MitigationPriorityIndexMPIP5Banjir_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P5 Banjir<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP5Banjir_2_0.png" /> MPI Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP5Banjir_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP4Banjir_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P4 Banjir<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP4Banjir_3_0.png" /> Bahaya Longsor Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP4Banjir_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP3Banjir_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P3 Banjir<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP3Banjir_4_0.png" /> MPI Sedang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP3Banjir_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP2Banjir_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P2 Banjir<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP2Banjir_5_0.png" /> MPI Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP2Banjir_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP1Banjir_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P1 Banjir<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP1Banjir_6_0.png" /> MPI Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP1Banjir_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_HazardH5Banjir_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H5 Banjir<br />\
    <img src="styles/legend/HazardH5Banjir_7_0.png" /> Bahaya Banjir Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH5Banjir_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288142.987600, -377553.317967, 13363292.987600, -305009.062819]
        })
    });
var lyr_HazardH4Banjir_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H4 Banjir<br />\
    <img src="styles/legend/HazardH4Banjir_8_0.png" /> Bahaya Banjir Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH4Banjir_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288142.987600, -377553.317967, 13363292.987600, -305009.062819]
        })
    });
var lyr_HazardH3Banjir_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H3 Banjir<br />\
    <img src="styles/legend/HazardH3Banjir_9_0.png" /> Bahaya Banjir Sedang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH3Banjir_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288142.987600, -377553.317967, 13363292.987600, -305009.062819]
        })
    });
var lyr_HazardH2Banjir_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H2 Banjir<br />\
    <img src="styles/legend/HazardH2Banjir_10_0.png" /> Bahaya Banjir Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH2Banjir_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288142.987600, -377553.317967, 13363292.987600, -305009.062819]
        })
    });
var lyr_HazardH1Banjir_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H1 Banjir<br />\
    <img src="styles/legend/HazardH1Banjir_11_0.png" /> Bahaya Banjir Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH1Banjir_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288142.987600, -377553.317967, 13363292.987600, -305009.062819]
        })
    });
var lyr_MitigasiLongsorSOPdanEvakuasi_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigasi Longsor - SOP dan Evakuasi<br />\
    <img src="styles/legend/MitigasiLongsorSOPdanEvakuasi_12_0.png" />  <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigasiLongsorSOPdanEvakuasi_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288143.120506, -377547.728508, 13363293.120506, -305003.473314]
        })
    });
var lyr_MitigasiLongsorMitigasiStrukturDPTSoilNailingPengaturanDrainase_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigasi Longsor - Mitigasi Struktur (DPT, Soil Nailing, Pengaturan Drainase)<br />\
    <img src="styles/legend/MitigasiLongsorMitigasiStrukturDPTSoilNailingPengaturanDrainase_13_0.png" />  <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigasiLongsorMitigasiStrukturDPTSoilNailingPengaturanDrainase_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288143.120506, -377555.774354, 13363293.120506, -305011.519226]
        })
    });
var lyr_MitigasiLongsorRelokasidanReboisasi_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigasi Longsor - Relokasi dan Reboisasi<br />\
    <img src="styles/legend/MitigasiLongsorRelokasidanReboisasi_14_0.png" />  <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigasiLongsorRelokasidanReboisasi_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288143.120506, -377555.774354, 13363293.120506, -305011.519226]
        })
    });
var lyr_MitigationPriorityIndexMPIP5Longsor_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P5 Longsor<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP5Longsor_15_0.png" /> MPI Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP5Longsor_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP4Longsor_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P4 Longsor<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP4Longsor_16_0.png" /> MPI Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP4Longsor_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP3Longsor_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P3 Longsor<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP3Longsor_17_0.png" /> MPI Sedang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP3Longsor_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP2Longsor_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P2 Longsor<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP2Longsor_18_0.png" /> MPI Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP2Longsor_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_MitigationPriorityIndexMPIP1Longsor_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mitigation Priority Index (MPI) - P1 Longsor<br />\
    <img src="styles/legend/MitigationPriorityIndexMPIP1Longsor_19_0.png" /> MPI Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MitigationPriorityIndexMPIP1Longsor_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288132.598800, -377558.134600, 13363312.598800, -305013.879491]
        })
    });
var lyr_HazardH5Longsor_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H5 Longsor<br />\
    <img src="styles/legend/HazardH5Longsor_20_0.png" /> Bahaya Longsor Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH5Longsor_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288113.615000, -377545.729899, 13363293.615000, -305001.474689]
        })
    });
var lyr_HazardH4Longsor_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H4 Longsor<br />\
    <img src="styles/legend/HazardH4Longsor_21_0.png" /> Bahaya Longsor Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH4Longsor_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288113.615000, -377545.729899, 13363293.615000, -305001.474689]
        })
    });
var lyr_HazardH3Longsor_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H3 Longsor<br />\
    <img src="styles/legend/HazardH3Longsor_22_0.png" /> Bahaya Longsor Sedang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH3Longsor_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288113.615000, -377545.729899, 13363293.615000, -305001.474689]
        })
    });
var lyr_HazardH2Longsor_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H2 Longsor<br />\
    <img src="styles/legend/HazardH2Longsor_23_0.png" /> Bahaya Longsor Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH2Longsor_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288113.615000, -377545.729899, 13363293.615000, -305001.474689]
        })
    });
var lyr_HazardH1Longsor_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hazard H1 Longsor<br />\
    <img src="styles/legend/HazardH1Longsor_24_0.png" /> Bahaya Longsor Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HazardH1Longsor_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13288113.615000, -377545.729899, 13363293.615000, -305001.474689]
        })
    });
var format_KabupatenTanaToraja_25 = new ol.format.GeoJSON();
var features_KabupatenTanaToraja_25 = format_KabupatenTanaToraja_25.readFeatures(json_KabupatenTanaToraja_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenTanaToraja_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenTanaToraja_25.addFeatures(features_KabupatenTanaToraja_25);
var lyr_KabupatenTanaToraja_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenTanaToraja_25, 
                style: style_KabupatenTanaToraja_25,
                popuplayertitle: 'Kabupaten Tana Toraja',
                interactive: false,
                title: '<img src="styles/legend/KabupatenTanaToraja_25.png" /> Kabupaten Tana Toraja'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(false);lyr_MitigationPriorityIndexMPIP5Banjir_2.setVisible(false);lyr_MitigationPriorityIndexMPIP4Banjir_3.setVisible(false);lyr_MitigationPriorityIndexMPIP3Banjir_4.setVisible(false);lyr_MitigationPriorityIndexMPIP2Banjir_5.setVisible(false);lyr_MitigationPriorityIndexMPIP1Banjir_6.setVisible(false);lyr_HazardH5Banjir_7.setVisible(false);lyr_HazardH4Banjir_8.setVisible(false);lyr_HazardH3Banjir_9.setVisible(false);lyr_HazardH2Banjir_10.setVisible(false);lyr_HazardH1Banjir_11.setVisible(false);lyr_MitigasiLongsorSOPdanEvakuasi_12.setVisible(false);lyr_MitigasiLongsorMitigasiStrukturDPTSoilNailingPengaturanDrainase_13.setVisible(false);lyr_MitigasiLongsorRelokasidanReboisasi_14.setVisible(false);lyr_MitigationPriorityIndexMPIP5Longsor_15.setVisible(false);lyr_MitigationPriorityIndexMPIP4Longsor_16.setVisible(false);lyr_MitigationPriorityIndexMPIP3Longsor_17.setVisible(false);lyr_MitigationPriorityIndexMPIP2Longsor_18.setVisible(false);lyr_MitigationPriorityIndexMPIP1Longsor_19.setVisible(false);lyr_HazardH5Longsor_20.setVisible(false);lyr_HazardH4Longsor_21.setVisible(false);lyr_HazardH3Longsor_22.setVisible(false);lyr_HazardH2Longsor_23.setVisible(false);lyr_HazardH1Longsor_24.setVisible(false);lyr_KabupatenTanaToraja_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRIWorldTopo_1,lyr_MitigationPriorityIndexMPIP5Banjir_2,lyr_MitigationPriorityIndexMPIP4Banjir_3,lyr_MitigationPriorityIndexMPIP3Banjir_4,lyr_MitigationPriorityIndexMPIP2Banjir_5,lyr_MitigationPriorityIndexMPIP1Banjir_6,lyr_HazardH5Banjir_7,lyr_HazardH4Banjir_8,lyr_HazardH3Banjir_9,lyr_HazardH2Banjir_10,lyr_HazardH1Banjir_11,lyr_MitigasiLongsorSOPdanEvakuasi_12,lyr_MitigasiLongsorMitigasiStrukturDPTSoilNailingPengaturanDrainase_13,lyr_MitigasiLongsorRelokasidanReboisasi_14,lyr_MitigationPriorityIndexMPIP5Longsor_15,lyr_MitigationPriorityIndexMPIP4Longsor_16,lyr_MitigationPriorityIndexMPIP3Longsor_17,lyr_MitigationPriorityIndexMPIP2Longsor_18,lyr_MitigationPriorityIndexMPIP1Longsor_19,lyr_HazardH5Longsor_20,lyr_HazardH4Longsor_21,lyr_HazardH3Longsor_22,lyr_HazardH2Longsor_23,lyr_HazardH1Longsor_24,lyr_KabupatenTanaToraja_25];
lyr_KabupatenTanaToraja_25.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabupatenTanaToraja_25.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabupatenTanaToraja_25.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KabupatenTanaToraja_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});