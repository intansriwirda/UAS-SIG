var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_perumahan_1 = new ol.format.GeoJSON();
var features_perumahan_1 = format_perumahan_1.readFeatures(json_perumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan_1.addFeatures(features_perumahan_1);
var lyr_perumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan_1, 
                style: style_perumahan_1,
                popuplayertitle: 'perumahan',
                interactive: true,
                title: '<img src="styles/legend/perumahan_1.png" /> perumahan'
            });
var format_rumahh_2 = new ol.format.GeoJSON();
var features_rumahh_2 = format_rumahh_2.readFeatures(json_rumahh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahh_2.addFeatures(features_rumahh_2);
var lyr_rumahh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahh_2, 
                style: style_rumahh_2,
                popuplayertitle: 'rumahh',
                interactive: true,
                title: '<img src="styles/legend/rumahh_2.png" /> rumahh'
            });
var format_type1_3 = new ol.format.GeoJSON();
var features_type1_3 = format_type1_3.readFeatures(json_type1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type1_3.addFeatures(features_type1_3);
var lyr_type1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_type1_3, 
                style: style_type1_3,
                popuplayertitle: 'type1',
                interactive: true,
                title: '<img src="styles/legend/type1_3.png" /> type1'
            });
var format_lapangan_4 = new ol.format.GeoJSON();
var features_lapangan_4 = format_lapangan_4.readFeatures(json_lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_4.addFeatures(features_lapangan_4);
var lyr_lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_4, 
                style: style_lapangan_4,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_4.png" /> lapangan'
            });
var format_Taman_5 = new ol.format.GeoJSON();
var features_Taman_5 = format_Taman_5.readFeatures(json_Taman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_5.addFeatures(features_Taman_5);
var lyr_Taman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_5, 
                style: style_Taman_5,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_5.png" /> Taman'
            });
var format_jalan_6 = new ol.format.GeoJSON();
var features_jalan_6 = format_jalan_6.readFeatures(json_jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_6.addFeatures(features_jalan_6);
var lyr_jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_6, 
                style: style_jalan_6,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_6.png" /> jalan'
            });
var format_jalankecil_7 = new ol.format.GeoJSON();
var features_jalankecil_7 = format_jalankecil_7.readFeatures(json_jalankecil_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankecil_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankecil_7.addFeatures(features_jalankecil_7);
var lyr_jalankecil_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankecil_7, 
                style: style_jalankecil_7,
                popuplayertitle: 'jalan kecil',
                interactive: true,
                title: '<img src="styles/legend/jalankecil_7.png" /> jalan kecil'
            });
var format_mesjid_8 = new ol.format.GeoJSON();
var features_mesjid_8 = format_mesjid_8.readFeatures(json_mesjid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid_8.addFeatures(features_mesjid_8);
var lyr_mesjid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid_8, 
                style: style_mesjid_8,
                popuplayertitle: 'mesjid',
                interactive: true,
                title: '<img src="styles/legend/mesjid_8.png" /> mesjid'
            });
var format_PosRonda_9 = new ol.format.GeoJSON();
var features_PosRonda_9 = format_PosRonda_9.readFeatures(json_PosRonda_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosRonda_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosRonda_9.addFeatures(features_PosRonda_9);
var lyr_PosRonda_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosRonda_9, 
                style: style_PosRonda_9,
                popuplayertitle: 'Pos Ronda',
                interactive: true,
                title: '<img src="styles/legend/PosRonda_9.png" /> Pos Ronda'
            });
var format_possatpam_10 = new ol.format.GeoJSON();
var features_possatpam_10 = format_possatpam_10.readFeatures(json_possatpam_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_possatpam_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_possatpam_10.addFeatures(features_possatpam_10);
var lyr_possatpam_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_possatpam_10, 
                style: style_possatpam_10,
                popuplayertitle: 'pos satpam',
                interactive: true,
                title: '<img src="styles/legend/possatpam_10.png" /> pos satpam'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_perumahan_1.setVisible(true);lyr_rumahh_2.setVisible(true);lyr_type1_3.setVisible(true);lyr_lapangan_4.setVisible(true);lyr_Taman_5.setVisible(true);lyr_jalan_6.setVisible(true);lyr_jalankecil_7.setVisible(true);lyr_mesjid_8.setVisible(true);lyr_PosRonda_9.setVisible(true);lyr_possatpam_10.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_perumahan_1,lyr_rumahh_2,lyr_type1_3,lyr_lapangan_4,lyr_Taman_5,lyr_jalan_6,lyr_jalankecil_7,lyr_mesjid_8,lyr_PosRonda_9,lyr_possatpam_10];
lyr_perumahan_1.set('fieldAliases', {'id': 'id', });
lyr_rumahh_2.set('fieldAliases', {'id': 'id', 'no': 'no', 'luas_m2': 'luas_m2', 'status': 'status', 'tipe': 'tipe', });
lyr_type1_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Luas': 'Luas', 'Status': 'Status', 'tipe': 'tipe', });
lyr_lapangan_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_Taman_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_jalan_6.set('fieldAliases', {'id': 'id', });
lyr_jalankecil_7.set('fieldAliases', {'id': 'id', });
lyr_mesjid_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_PosRonda_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_possatpam_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_perumahan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_rumahh_2.set('fieldImages', {'id': 'TextEdit', 'no': 'TextEdit', 'luas_m2': '', 'status': '', 'tipe': '', });
lyr_type1_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Luas': 'TextEdit', 'Status': '', 'tipe': '', });
lyr_lapangan_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_Taman_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', });
lyr_jalan_6.set('fieldImages', {'id': 'TextEdit', });
lyr_jalankecil_7.set('fieldImages', {'id': 'TextEdit', });
lyr_mesjid_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', });
lyr_PosRonda_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', });
lyr_possatpam_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_perumahan_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_rumahh_2.set('fieldLabels', {'id': 'hidden field', 'no': 'inline label - always visible', 'luas_m2': 'inline label - always visible', 'status': 'inline label - always visible', 'tipe': 'inline label - always visible', });
lyr_type1_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Status': 'inline label - always visible', 'tipe': 'inline label - always visible', });
lyr_lapangan_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_Taman_5.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_jalan_6.set('fieldLabels', {'id': 'hidden field', });
lyr_jalankecil_7.set('fieldLabels', {'id': 'hidden field', });
lyr_mesjid_8.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_PosRonda_9.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_possatpam_10.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_possatpam_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});