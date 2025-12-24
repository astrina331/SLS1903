var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PETA_SLS_1903_202501_1 = new ol.format.GeoJSON();
var features_PETA_SLS_1903_202501_1 = format_PETA_SLS_1903_202501_1.readFeatures(json_PETA_SLS_1903_202501_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETA_SLS_1903_202501_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETA_SLS_1903_202501_1.addFeatures(features_PETA_SLS_1903_202501_1);
var lyr_PETA_SLS_1903_202501_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETA_SLS_1903_202501_1, 
                style: style_PETA_SLS_1903_202501_1,
                popuplayertitle: 'PETA_SLS_1903_202501',
                interactive: true,
                title: '<img src="styles/legend/PETA_SLS_1903_202501_1.png" /> PETA_SLS_1903_202501'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_PETA_SLS_1903_202501_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PETA_SLS_1903_202501_1];
lyr_PETA_SLS_1903_202501_1.set('fieldAliases', {'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'kdsls': 'kdsls', 'idsls': 'idsls', 'kdsubsls': 'kdsubsls', 'idsubsls': 'idsubsls', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'nmsls': 'nmsls', 'rw_dki': 'rw_dki', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', 'posisi': 'posisi', 'layer': 'layer', 'path': 'path', });
lyr_PETA_SLS_1903_202501_1.set('fieldImages', {'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'kdsls': 'TextEdit', 'idsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'idsubsls': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'nmsls': 'TextEdit', 'rw_dki': 'TextEdit', 'tingkat': 'TextEdit', 'nm_gedung': 'TextEdit', 'posisi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETA_SLS_1903_202501_1.set('fieldLabels', {'kdprov': 'inline label - always visible', 'kdkab': 'inline label - always visible', 'kdkec': 'inline label - always visible', 'kddesa': 'inline label - always visible', 'kdsls': 'inline label - always visible', 'idsls': 'inline label - always visible', 'kdsubsls': 'inline label - always visible', 'idsubsls': 'inline label - always visible', 'nmprov': 'inline label - always visible', 'nmkab': 'inline label - always visible', 'nmkec': 'inline label - always visible', 'nmdesa': 'inline label - always visible', 'nmsls': 'inline label - always visible', 'rw_dki': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', 'posisi': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PETA_SLS_1903_202501_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});