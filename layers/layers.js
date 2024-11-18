var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ULB_Boundary_1 = new ol.format.GeoJSON();
var features_ULB_Boundary_1 = format_ULB_Boundary_1.readFeatures(json_ULB_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULB_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULB_Boundary_1.addFeatures(features_ULB_Boundary_1);
var lyr_ULB_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULB_Boundary_1, 
                style: style_ULB_Boundary_1,
                popuplayertitle: "ULB_Boundary",
                interactive: true,
    title: 'ULB_Boundary<br />\
    <img src="styles/legend/ULB_Boundary_1_0.png" /> Addanki<br />\
    <img src="styles/legend/ULB_Boundary_1_1.png" /> Amadalavalasa<br />\
    <img src="styles/legend/ULB_Boundary_1_2.png" /> Amalapuram<br />\
    <img src="styles/legend/ULB_Boundary_1_3.png" /> Atmakur-Kurnool<br />\
    <img src="styles/legend/ULB_Boundary_1_4.png" /> Atmakur-Nellore<br />\
    <img src="styles/legend/ULB_Boundary_1_5.png" /> Badvel<br />\
    <img src="styles/legend/ULB_Boundary_1_6.png" /> Bapatla<br />\
    <img src="styles/legend/ULB_Boundary_1_7.png" /> Bobbili<br />\
    <img src="styles/legend/ULB_Boundary_1_8.png" /> Chimakurthy<br />\
    <img src="styles/legend/ULB_Boundary_1_9.png" /> Chirala<br />\
    <img src="styles/legend/ULB_Boundary_1_10.png" /> Dhone<br />\
    <img src="styles/legend/ULB_Boundary_1_11.png" /> Giddalur<br />\
    <img src="styles/legend/ULB_Boundary_1_12.png" /> Gollaprollu<br />\
    <img src="styles/legend/ULB_Boundary_1_13.png" /> Gudur-Kurnool<br />\
    <img src="styles/legend/ULB_Boundary_1_14.png" /> Gudur-Nellore<br />\
    <img src="styles/legend/ULB_Boundary_1_15.png" /> Ichapuram<br />\
    <img src="styles/legend/ULB_Boundary_1_16.png" /> Jaggiahpeta<br />\
    <img src="styles/legend/ULB_Boundary_1_17.png" /> Jammalamadugu<br />\
    <img src="styles/legend/ULB_Boundary_1_18.png" /> Jangareddy Gudem<br />\
    <img src="styles/legend/ULB_Boundary_1_19.png" /> Kadiri<br />\
    <img src="styles/legend/ULB_Boundary_1_20.png" /> Kalyandurgam<br />\
    <img src="styles/legend/ULB_Boundary_1_21.png" /> Kandukur<br />\
    <img src="styles/legend/ULB_Boundary_1_22.png" /> Kovvur<br />\
    <img src="styles/legend/ULB_Boundary_1_23.png" /> Macherla<br />\
    <img src="styles/legend/ULB_Boundary_1_24.png" /> Mandapeta<br />\
    <img src="styles/legend/ULB_Boundary_1_25.png" /> Markapur<br />\
    <img src="styles/legend/ULB_Boundary_1_26.png" /> Mumidivaram<br />\
    <img src="styles/legend/ULB_Boundary_1_27.png" /> Mydukur<br />\
    <img src="styles/legend/ULB_Boundary_1_28.png" /> Nagari<br />\
    <img src="styles/legend/ULB_Boundary_1_29.png" /> Naidupet<br />\
    <img src="styles/legend/ULB_Boundary_1_30.png" /> Nandigama<br />\
    <img src="styles/legend/ULB_Boundary_1_31.png" /> Narsapur<br />\
    <img src="styles/legend/ULB_Boundary_1_32.png" /> Narsipatnam<br />\
    <img src="styles/legend/ULB_Boundary_1_33.png" /> Nellimarla<br />\
    <img src="styles/legend/ULB_Boundary_1_34.png" /> Nidadavole<br />\
    <img src="styles/legend/ULB_Boundary_1_35.png" /> Nuzivid<br />\
    <img src="styles/legend/ULB_Boundary_1_36.png" /> Palacole<br />\
    <img src="styles/legend/ULB_Boundary_1_37.png" /> Palakonda<br />\
    <img src="styles/legend/ULB_Boundary_1_38.png" /> Palamaneru<br />\
    <img src="styles/legend/ULB_Boundary_1_39.png" /> Palasa Kasibugga<br />\
    <img src="styles/legend/ULB_Boundary_1_40.png" /> Parvathipuram<br />\
    <img src="styles/legend/ULB_Boundary_1_41.png" /> Pedana<br />\
    <img src="styles/legend/ULB_Boundary_1_42.png" /> Peddapuram<br />\
    <img src="styles/legend/ULB_Boundary_1_43.png" /> Piduguralla<br />\
    <img src="styles/legend/ULB_Boundary_1_44.png" /> Pithapuram<br />\
    <img src="styles/legend/ULB_Boundary_1_45.png" /> Ponnur<br />\
    <img src="styles/legend/ULB_Boundary_1_46.png" /> Punganur<br />\
    <img src="styles/legend/ULB_Boundary_1_47.png" /> Puttur<br />\
    <img src="styles/legend/ULB_Boundary_1_48.png" /> Rajam<br />\
    <img src="styles/legend/ULB_Boundary_1_49.png" /> Rajampeta<br />\
    <img src="styles/legend/ULB_Boundary_1_50.png" /> Ramachandrapuram<br />\
    <img src="styles/legend/ULB_Boundary_1_51.png" /> Rayadurg<br />\
    <img src="styles/legend/ULB_Boundary_1_52.png" /> Repalle<br />\
    <img src="styles/legend/ULB_Boundary_1_53.png" /> Salur<br />\
    <img src="styles/legend/ULB_Boundary_1_54.png" /> Samalkot<br />\
    <img src="styles/legend/ULB_Boundary_1_55.png" /> Sattenapalli<br />\
    <img src="styles/legend/ULB_Boundary_1_56.png" /> Tanuku<br />\
    <img src="styles/legend/ULB_Boundary_1_57.png" /> Tiruvuru<br />\
    <img src="styles/legend/ULB_Boundary_1_58.png" /> Tuni<br />\
    <img src="styles/legend/ULB_Boundary_1_59.png" /> Venkatagiri<br />\
    <img src="styles/legend/ULB_Boundary_1_60.png" /> Vinukonda<br />\
    <img src="styles/legend/ULB_Boundary_1_61.png" /> Vuyyuru<br />\
    <img src="styles/legend/ULB_Boundary_1_62.png" /> Yeleswaram<br />\
    <img src="styles/legend/ULB_Boundary_1_63.png" /> Yellamanchali<br />\
    <img src="styles/legend/ULB_Boundary_1_64.png" /> Yerraguntla<br />\
    <img src="styles/legend/ULB_Boundary_1_65.png" /> <br />'
        });
var format_STPs_2 = new ol.format.GeoJSON();
var features_STPs_2 = format_STPs_2.readFeatures(json_STPs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STPs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_2.addFeatures(features_STPs_2);
var lyr_STPs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_2, 
                style: style_STPs_2,
                popuplayertitle: "STPs",
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_2_0.png" /> NSTP<br />\
    <img src="styles/legend/STPs_2_1.png" /> STP<br />\
    <img src="styles/legend/STPs_2_2.png" /> <br />'
        });
var format_AP_3 = new ol.format.GeoJSON();
var features_AP_3 = format_AP_3.readFeatures(json_AP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_3.addFeatures(features_AP_3);
var lyr_AP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_3, 
                style: style_AP_3,
                popuplayertitle: "AP",
                interactive: true,
                title: '<img src="styles/legend/AP_3.png" /> AP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ULB_Boundary_1.setVisible(true);lyr_STPs_2.setVisible(true);lyr_AP_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ULB_Boundary_1,lyr_STPs_2,lyr_AP_3];
lyr_ULB_Boundary_1.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULB', 'Total_ulb': 'Total No. of Projects (STP+NSTP)', 'No_STP': 'No of STP', 'No_NSTP': 'No of NSTP', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of STP', 'Total_Pop': 'Total_Pop', });
lyr_STPs_2.set('fieldAliases', {'UN_ID': 'UN_ID', 'DIST_NAME': 'District Name', 'ULB_NAME': 'Name of ULB', 'LOCATION': 'STP Location', 'CAPACITY_M': 'Proposed  STP Capacity (MLD)', 'TYPE': 'TYPE', 'TECHNOLOGY': 'TECHNOLOGY', 'LAND_OWNER': 'Land Ownership', 'LAND_REQ': 'Land Required(AC)', 'STATUS_POS': 'Status of Land Possession', 'PROJ_ST_1': 'Status of Construction(20-09-2024)', 'PROJ_ST_2': 'Status of Construction(25-09-2024)', 'Proj_Cost': 'Proj_Cost', });
lyr_AP_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_ULB_Boundary_1.set('fieldImages', {'Shape_Area': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'TextEdit', });
lyr_STPs_2.set('fieldImages', {'UN_ID': 'Range', 'DIST_NAME': 'TextEdit', 'ULB_NAME': 'TextEdit', 'LOCATION': 'TextEdit', 'CAPACITY_M': 'TextEdit', 'TYPE': 'TextEdit', 'TECHNOLOGY': 'TextEdit', 'LAND_OWNER': 'TextEdit', 'LAND_REQ': 'TextEdit', 'STATUS_POS': 'TextEdit', 'PROJ_ST_1': 'TextEdit', 'PROJ_ST_2': 'TextEdit', 'Proj_Cost': 'TextEdit', });
lyr_AP_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ULB_Boundary_1.set('fieldLabels', {'Shape_Area': 'inline label - always visible', 'UN_ID': 'inline label - always visible', 'Name_ULB': 'inline label - always visible', 'Total_ulb': 'inline label - always visible', 'No_STP': 'inline label - always visible', 'No_NSTP': 'inline label - always visible', 'Status_con': 'inline label - always visible', 'Status_STP': 'inline label - always visible', 'Total_Pop': 'inline label - always visible', });
lyr_STPs_2.set('fieldLabels', {'UN_ID': 'inline label - always visible', 'DIST_NAME': 'inline label - always visible', 'ULB_NAME': 'inline label - always visible', 'LOCATION': 'inline label - always visible', 'CAPACITY_M': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'TECHNOLOGY': 'inline label - always visible', 'LAND_OWNER': 'inline label - always visible', 'LAND_REQ': 'inline label - always visible', 'STATUS_POS': 'inline label - always visible', 'PROJ_ST_1': 'inline label - always visible', 'PROJ_ST_2': 'inline label - always visible', 'Proj_Cost': 'inline label - always visible', });
lyr_AP_3.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_AP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});