var wms_layers = [];

var format_Genbrugsplads_0 = new ol.format.GeoJSON();
var features_Genbrugsplads_0 = format_Genbrugsplads_0.readFeatures(json_Genbrugsplads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genbrugsplads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genbrugsplads_0.addFeatures(features_Genbrugsplads_0);
var lyr_Genbrugsplads_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genbrugsplads_0, 
                style: style_Genbrugsplads_0,
                popuplayertitle: ' Genbrugsplads',
                interactive: true,
                title: '<img src="styles/legend/Genbrugsplads_0.png" />  Genbrugsplads'
            });
var format_Kirker_1 = new ol.format.GeoJSON();
var features_Kirker_1 = format_Kirker_1.readFeatures(json_Kirker_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_1.addFeatures(features_Kirker_1);
var lyr_Kirker_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_1, 
                style: style_Kirker_1,
                popuplayertitle: ' Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_1.png" />  Kirker'
            });
var format_Legeplads_2 = new ol.format.GeoJSON();
var features_Legeplads_2 = format_Legeplads_2.readFeatures(json_Legeplads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_2.addFeatures(features_Legeplads_2);
var lyr_Legeplads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_2, 
                style: style_Legeplads_2,
                popuplayertitle: ' Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_2.png" />  Legeplads'
            });
var format_Lgehus_3 = new ol.format.GeoJSON();
var features_Lgehus_3 = format_Lgehus_3.readFeatures(json_Lgehus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehus_3.addFeatures(features_Lgehus_3);
var lyr_Lgehus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehus_3, 
                style: style_Lgehus_3,
                popuplayertitle: ' Lægehus',
                interactive: true,
                title: '<img src="styles/legend/Lgehus_3.png" />  Lægehus'
            });
var format_Parker_4 = new ol.format.GeoJSON();
var features_Parker_4 = format_Parker_4.readFeatures(json_Parker_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_4.addFeatures(features_Parker_4);
var lyr_Parker_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_4, 
                style: style_Parker_4,
                popuplayertitle: ' Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_4.png" />  Parker'
            });
var format_Plejehjem_5 = new ol.format.GeoJSON();
var features_Plejehjem_5 = format_Plejehjem_5.readFeatures(json_Plejehjem_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plejehjem_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plejehjem_5.addFeatures(features_Plejehjem_5);
var lyr_Plejehjem_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plejehjem_5, 
                style: style_Plejehjem_5,
                popuplayertitle: ' Plejehjem',
                interactive: true,
                title: '<img src="styles/legend/Plejehjem_5.png" />  Plejehjem'
            });
var format_Sygehus_6 = new ol.format.GeoJSON();
var features_Sygehus_6 = format_Sygehus_6.readFeatures(json_Sygehus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sygehus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sygehus_6.addFeatures(features_Sygehus_6);
var lyr_Sygehus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sygehus_6, 
                style: style_Sygehus_6,
                popuplayertitle: ' Sygehus',
                interactive: true,
                title: '<img src="styles/legend/Sygehus_6.png" />  Sygehus'
            });
var format_Togstationer_7 = new ol.format.GeoJSON();
var features_Togstationer_7 = format_Togstationer_7.readFeatures(json_Togstationer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_7.addFeatures(features_Togstationer_7);
var lyr_Togstationer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_7, 
                style: style_Togstationer_7,
                popuplayertitle: ' Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_7.png" />  Togstationer'
            });
var format_Andreuddanleser_8 = new ol.format.GeoJSON();
var features_Andreuddanleser_8 = format_Andreuddanleser_8.readFeatures(json_Andreuddanleser_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Andreuddanleser_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andreuddanleser_8.addFeatures(features_Andreuddanleser_8);
var lyr_Andreuddanleser_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Andreuddanleser_8, 
                style: style_Andreuddanleser_8,
                popuplayertitle: 'Andre uddanleser',
                interactive: true,
                title: '<img src="styles/legend/Andreuddanleser_8.png" /> Andre uddanleser'
            });
var format_Badestrand_9 = new ol.format.GeoJSON();
var features_Badestrand_9 = format_Badestrand_9.readFeatures(json_Badestrand_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Badestrand_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Badestrand_9.addFeatures(features_Badestrand_9);
var lyr_Badestrand_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Badestrand_9, 
                style: style_Badestrand_9,
                popuplayertitle: 'Badestrand ',
                interactive: true,
                title: '<img src="styles/legend/Badestrand_9.png" /> Badestrand '
            });
var format_Brnehaver_10 = new ol.format.GeoJSON();
var features_Brnehaver_10 = format_Brnehaver_10.readFeatures(json_Brnehaver_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_10.addFeatures(features_Brnehaver_10);
var lyr_Brnehaver_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_10, 
                style: style_Brnehaver_10,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_10.png" /> Børnehaver'
            });
var format_Fodboldbaner_11 = new ol.format.GeoJSON();
var features_Fodboldbaner_11 = format_Fodboldbaner_11.readFeatures(json_Fodboldbaner_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_11.addFeatures(features_Fodboldbaner_11);
var lyr_Fodboldbaner_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_11, 
                style: style_Fodboldbaner_11,
                popuplayertitle: 'Fodboldbaner ',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_11.png" /> Fodboldbaner '
            });
var format_Folkeskoler_12 = new ol.format.GeoJSON();
var features_Folkeskoler_12 = format_Folkeskoler_12.readFeatures(json_Folkeskoler_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_12.addFeatures(features_Folkeskoler_12);
var lyr_Folkeskoler_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_12, 
                style: style_Folkeskoler_12,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_12.png" /> Folkeskoler'
            });
var format_ForsyningElladestandere_13 = new ol.format.GeoJSON();
var features_ForsyningElladestandere_13 = format_ForsyningElladestandere_13.readFeatures(json_ForsyningElladestandere_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForsyningElladestandere_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForsyningElladestandere_13.addFeatures(features_ForsyningElladestandere_13);
var lyr_ForsyningElladestandere_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForsyningElladestandere_13, 
                style: style_ForsyningElladestandere_13,
                popuplayertitle: 'Forsyning El-lade standere',
                interactive: true,
                title: '<img src="styles/legend/ForsyningElladestandere_13.png" /> Forsyning El-lade standere'
            });
var format_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14 = new ol.format.GeoJSON();
var features_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14 = format_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.readFeatures(json_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.addFeatures(features_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14);
var lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14, 
                style: style_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14,
                popuplayertitle: 'Geopac_lokalplan-forslag_andre-uddannelser — Hvidovre_kommune_lokalplan_forslag',
                interactive: true,
    title: 'Geopac_lokalplan-forslag_andre-uddannelser — Hvidovre_kommune_lokalplan_forslag<br />\
    <img src="styles/legend/Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14_0.png" /> 153<br />\
    <img src="styles/legend/Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14_1.png" /> 155<br />\
    <img src="styles/legend/Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14_2.png" /> 242<br />\
    <img src="styles/legend/Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14_3.png" /> <br />' });
var format_Havn_15 = new ol.format.GeoJSON();
var features_Havn_15 = format_Havn_15.readFeatures(json_Havn_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havn_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havn_15.addFeatures(features_Havn_15);
var lyr_Havn_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havn_15, 
                style: style_Havn_15,
                popuplayertitle: 'Havn',
                interactive: true,
                title: '<img src="styles/legend/Havn_15.png" /> Havn'
            });
var format_HvidovreApotek_16 = new ol.format.GeoJSON();
var features_HvidovreApotek_16 = format_HvidovreApotek_16.readFeatures(json_HvidovreApotek_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreApotek_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreApotek_16.addFeatures(features_HvidovreApotek_16);
var lyr_HvidovreApotek_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreApotek_16, 
                style: style_HvidovreApotek_16,
                popuplayertitle: 'Hvidovre Apotek ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreApotek_16.png" /> Hvidovre Apotek '
            });
var format_HvidovreRdhus_17 = new ol.format.GeoJSON();
var features_HvidovreRdhus_17 = format_HvidovreRdhus_17.readFeatures(json_HvidovreRdhus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreRdhus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreRdhus_17.addFeatures(features_HvidovreRdhus_17);
var lyr_HvidovreRdhus_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreRdhus_17, 
                style: style_HvidovreRdhus_17,
                popuplayertitle: 'Hvidovre Rådhus ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreRdhus_17.png" /> Hvidovre Rådhus '
            });
var format_Hvidovrekommune_18 = new ol.format.GeoJSON();
var features_Hvidovrekommune_18 = format_Hvidovrekommune_18.readFeatures(json_Hvidovrekommune_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommune_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommune_18.addFeatures(features_Hvidovrekommune_18);
var lyr_Hvidovrekommune_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommune_18, 
                style: style_Hvidovrekommune_18,
                popuplayertitle: 'Hvidovre kommune ',
                interactive: false,
                title: '<img src="styles/legend/Hvidovrekommune_18.png" /> Hvidovre kommune '
            });
var format_Kirkegrde_19 = new ol.format.GeoJSON();
var features_Kirkegrde_19 = format_Kirkegrde_19.readFeatures(json_Kirkegrde_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirkegrde_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirkegrde_19.addFeatures(features_Kirkegrde_19);
var lyr_Kirkegrde_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirkegrde_19, 
                style: style_Kirkegrde_19,
                popuplayertitle: 'Kirkegårde',
                interactive: false,
                title: '<img src="styles/legend/Kirkegrde_19.png" /> Kirkegårde'
            });
var format_Kommuneplan_20 = new ol.format.GeoJSON();
var features_Kommuneplan_20 = format_Kommuneplan_20.readFeatures(json_Kommuneplan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_20.addFeatures(features_Kommuneplan_20);
var lyr_Kommuneplan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_20, 
                style: style_Kommuneplan_20,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_20.png" /> Kommuneplan'
            });
var format_Lokal_plan_4_21 = new ol.format.GeoJSON();
var features_Lokal_plan_4_21 = format_Lokal_plan_4_21.readFeatures(json_Lokal_plan_4_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokal_plan_4_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokal_plan_4_21.addFeatures(features_Lokal_plan_4_21);
var lyr_Lokal_plan_4_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokal_plan_4_21, 
                style: style_Lokal_plan_4_21,
                popuplayertitle: 'Lokal_plan_4',
                interactive: true,
    title: 'Lokal_plan_4<br />\
    <img src="styles/legend/Lokal_plan_4_21_0.png" /> 001<br />\
    <img src="styles/legend/Lokal_plan_4_21_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokal_plan_4_21_2.png" /> 102<br />\
    <img src="styles/legend/Lokal_plan_4_21_3.png" /> 103<br />\
    <img src="styles/legend/Lokal_plan_4_21_4.png" /> 104<br />\
    <img src="styles/legend/Lokal_plan_4_21_5.png" /> 105<br />\
    <img src="styles/legend/Lokal_plan_4_21_6.png" /> 106<br />\
    <img src="styles/legend/Lokal_plan_4_21_7.png" /> 108<br />\
    <img src="styles/legend/Lokal_plan_4_21_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokal_plan_4_21_9.png" /> 112<br />\
    <img src="styles/legend/Lokal_plan_4_21_10.png" /> 115<br />\
    <img src="styles/legend/Lokal_plan_4_21_11.png" /> 116<br />\
    <img src="styles/legend/Lokal_plan_4_21_12.png" /> 118<br />\
    <img src="styles/legend/Lokal_plan_4_21_13.png" /> 119<br />\
    <img src="styles/legend/Lokal_plan_4_21_14.png" /> 120<br />\
    <img src="styles/legend/Lokal_plan_4_21_15.png" /> 121<br />\
    <img src="styles/legend/Lokal_plan_4_21_16.png" /> 122<br />\
    <img src="styles/legend/Lokal_plan_4_21_17.png" /> 124<br />\
    <img src="styles/legend/Lokal_plan_4_21_18.png" /> 126<br />\
    <img src="styles/legend/Lokal_plan_4_21_19.png" /> 127<br />\
    <img src="styles/legend/Lokal_plan_4_21_20.png" /> 128<br />\
    <img src="styles/legend/Lokal_plan_4_21_21.png" /> 131<br />\
    <img src="styles/legend/Lokal_plan_4_21_22.png" /> 132<br />\
    <img src="styles/legend/Lokal_plan_4_21_23.png" /> 133<br />\
    <img src="styles/legend/Lokal_plan_4_21_24.png" /> 134<br />\
    <img src="styles/legend/Lokal_plan_4_21_25.png" /> 135<br />\
    <img src="styles/legend/Lokal_plan_4_21_26.png" /> 137<br />\
    <img src="styles/legend/Lokal_plan_4_21_27.png" /> 139<br />\
    <img src="styles/legend/Lokal_plan_4_21_28.png" /> 140<br />\
    <img src="styles/legend/Lokal_plan_4_21_29.png" /> 141<br />\
    <img src="styles/legend/Lokal_plan_4_21_30.png" /> 142<br />\
    <img src="styles/legend/Lokal_plan_4_21_31.png" /> 143<br />\
    <img src="styles/legend/Lokal_plan_4_21_32.png" /> 144<br />\
    <img src="styles/legend/Lokal_plan_4_21_33.png" /> 147<br />\
    <img src="styles/legend/Lokal_plan_4_21_34.png" /> 148<br />\
    <img src="styles/legend/Lokal_plan_4_21_35.png" /> 149<br />\
    <img src="styles/legend/Lokal_plan_4_21_36.png" /> 150<br />\
    <img src="styles/legend/Lokal_plan_4_21_37.png" /> 151<br />\
    <img src="styles/legend/Lokal_plan_4_21_38.png" /> 152<br />\
    <img src="styles/legend/Lokal_plan_4_21_39.png" /> 154<br />\
    <img src="styles/legend/Lokal_plan_4_21_40.png" /> 202<br />\
    <img src="styles/legend/Lokal_plan_4_21_41.png" /> 203<br />\
    <img src="styles/legend/Lokal_plan_4_21_42.png" /> 206<br />\
    <img src="styles/legend/Lokal_plan_4_21_43.png" /> 207<br />\
    <img src="styles/legend/Lokal_plan_4_21_44.png" /> 208<br />\
    <img src="styles/legend/Lokal_plan_4_21_45.png" /> 209<br />\
    <img src="styles/legend/Lokal_plan_4_21_46.png" /> 210<br />\
    <img src="styles/legend/Lokal_plan_4_21_47.png" /> 211<br />\
    <img src="styles/legend/Lokal_plan_4_21_48.png" /> 216<br />\
    <img src="styles/legend/Lokal_plan_4_21_49.png" /> 220<br />\
    <img src="styles/legend/Lokal_plan_4_21_50.png" /> 221<br />\
    <img src="styles/legend/Lokal_plan_4_21_51.png" /> 225<br />\
    <img src="styles/legend/Lokal_plan_4_21_52.png" /> 226<br />\
    <img src="styles/legend/Lokal_plan_4_21_53.png" /> 228<br />\
    <img src="styles/legend/Lokal_plan_4_21_54.png" /> 229<br />\
    <img src="styles/legend/Lokal_plan_4_21_55.png" /> 230<br />\
    <img src="styles/legend/Lokal_plan_4_21_56.png" /> 231<br />\
    <img src="styles/legend/Lokal_plan_4_21_57.png" /> 232<br />\
    <img src="styles/legend/Lokal_plan_4_21_58.png" /> 233<br />\
    <img src="styles/legend/Lokal_plan_4_21_59.png" /> 234<br />\
    <img src="styles/legend/Lokal_plan_4_21_60.png" /> 236<br />\
    <img src="styles/legend/Lokal_plan_4_21_61.png" /> 237<br />\
    <img src="styles/legend/Lokal_plan_4_21_62.png" /> 238<br />\
    <img src="styles/legend/Lokal_plan_4_21_63.png" /> 239<br />\
    <img src="styles/legend/Lokal_plan_4_21_64.png" /> 240<br />\
    <img src="styles/legend/Lokal_plan_4_21_65.png" /> 241<br />\
    <img src="styles/legend/Lokal_plan_4_21_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokal_plan_4_21_67.png" /> 303<br />\
    <img src="styles/legend/Lokal_plan_4_21_68.png" /> 304<br />\
    <img src="styles/legend/Lokal_plan_4_21_69.png" /> 305<br />\
    <img src="styles/legend/Lokal_plan_4_21_70.png" /> 306<br />\
    <img src="styles/legend/Lokal_plan_4_21_71.png" /> 313<br />\
    <img src="styles/legend/Lokal_plan_4_21_72.png" /> 314<br />\
    <img src="styles/legend/Lokal_plan_4_21_73.png" /> 316<br />\
    <img src="styles/legend/Lokal_plan_4_21_74.png" /> 322<br />\
    <img src="styles/legend/Lokal_plan_4_21_75.png" /> 323<br />\
    <img src="styles/legend/Lokal_plan_4_21_76.png" /> 324<br />\
    <img src="styles/legend/Lokal_plan_4_21_77.png" /> 325<br />\
    <img src="styles/legend/Lokal_plan_4_21_78.png" /> 326<br />\
    <img src="styles/legend/Lokal_plan_4_21_79.png" /> 327<br />\
    <img src="styles/legend/Lokal_plan_4_21_80.png" /> 328<br />\
    <img src="styles/legend/Lokal_plan_4_21_81.png" /> 329<br />\
    <img src="styles/legend/Lokal_plan_4_21_82.png" /> 330<br />\
    <img src="styles/legend/Lokal_plan_4_21_83.png" /> 331<br />\
    <img src="styles/legend/Lokal_plan_4_21_84.png" /> 332<br />\
    <img src="styles/legend/Lokal_plan_4_21_85.png" /> 335<br />\
    <img src="styles/legend/Lokal_plan_4_21_86.png" /> 338<br />\
    <img src="styles/legend/Lokal_plan_4_21_87.png" /> 339<br />\
    <img src="styles/legend/Lokal_plan_4_21_88.png" /> 340<br />\
    <img src="styles/legend/Lokal_plan_4_21_89.png" /> 341<br />\
    <img src="styles/legend/Lokal_plan_4_21_90.png" /> 342<br />\
    <img src="styles/legend/Lokal_plan_4_21_91.png" /> 343<br />\
    <img src="styles/legend/Lokal_plan_4_21_92.png" /> 345<br />\
    <img src="styles/legend/Lokal_plan_4_21_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokal_plan_4_21_94.png" /> 404<br />\
    <img src="styles/legend/Lokal_plan_4_21_95.png" /> 405<br />\
    <img src="styles/legend/Lokal_plan_4_21_96.png" /> 407<br />\
    <img src="styles/legend/Lokal_plan_4_21_97.png" /> 408<br />\
    <img src="styles/legend/Lokal_plan_4_21_98.png" /> 409<br />\
    <img src="styles/legend/Lokal_plan_4_21_99.png" /> 411<br />\
    <img src="styles/legend/Lokal_plan_4_21_100.png" /> 412<br />\
    <img src="styles/legend/Lokal_plan_4_21_101.png" /> 418<br />\
    <img src="styles/legend/Lokal_plan_4_21_102.png" /> 423<br />\
    <img src="styles/legend/Lokal_plan_4_21_103.png" /> 429<br />\
    <img src="styles/legend/Lokal_plan_4_21_104.png" /> 432<br />\
    <img src="styles/legend/Lokal_plan_4_21_105.png" /> 433<br />\
    <img src="styles/legend/Lokal_plan_4_21_106.png" /> 440<br />\
    <img src="styles/legend/Lokal_plan_4_21_107.png" /> 441<br />\
    <img src="styles/legend/Lokal_plan_4_21_108.png" /> 447<br />\
    <img src="styles/legend/Lokal_plan_4_21_109.png" /> 448<br />\
    <img src="styles/legend/Lokal_plan_4_21_110.png" /> 452<br />\
    <img src="styles/legend/Lokal_plan_4_21_111.png" /> 454<br />\
    <img src="styles/legend/Lokal_plan_4_21_112.png" /> 455<br />\
    <img src="styles/legend/Lokal_plan_4_21_113.png" /> 456<br />\
    <img src="styles/legend/Lokal_plan_4_21_114.png" /> 457<br />\
    <img src="styles/legend/Lokal_plan_4_21_115.png" /> 458<br />\
    <img src="styles/legend/Lokal_plan_4_21_116.png" /> 459<br />\
    <img src="styles/legend/Lokal_plan_4_21_117.png" /> 462<br />\
    <img src="styles/legend/Lokal_plan_4_21_118.png" /> 463<br />\
    <img src="styles/legend/Lokal_plan_4_21_119.png" /> 464<br />\
    <img src="styles/legend/Lokal_plan_4_21_120.png" /> 466<br />\
    <img src="styles/legend/Lokal_plan_4_21_121.png" /> 467<br />\
    <img src="styles/legend/Lokal_plan_4_21_122.png" /> 468<br />\
    <img src="styles/legend/Lokal_plan_4_21_123.png" /> 469<br />\
    <img src="styles/legend/Lokal_plan_4_21_124.png" /> 470<br />\
    <img src="styles/legend/Lokal_plan_4_21_125.png" /> 471<br />\
    <img src="styles/legend/Lokal_plan_4_21_126.png" /> 472<br />\
    <img src="styles/legend/Lokal_plan_4_21_127.png" /> 473<br />\
    <img src="styles/legend/Lokal_plan_4_21_128.png" /> 475<br />\
    <img src="styles/legend/Lokal_plan_4_21_129.png" /> 476<br />\
    <img src="styles/legend/Lokal_plan_4_21_130.png" /> 504<br />\
    <img src="styles/legend/Lokal_plan_4_21_131.png" /> 507<br />\
    <img src="styles/legend/Lokal_plan_4_21_132.png" /> 508<br />\
    <img src="styles/legend/Lokal_plan_4_21_133.png" /> 510<br />\
    <img src="styles/legend/Lokal_plan_4_21_134.png" /> 511<br />\
    <img src="styles/legend/Lokal_plan_4_21_135.png" /> 516<br />\
    <img src="styles/legend/Lokal_plan_4_21_136.png" /> 518<br />\
    <img src="styles/legend/Lokal_plan_4_21_137.png" /> 519<br />\
    <img src="styles/legend/Lokal_plan_4_21_138.png" /> A1<br />\
    <img src="styles/legend/Lokal_plan_4_21_139.png" /> A10<br />\
    <img src="styles/legend/Lokal_plan_4_21_140.png" /> A11<br />\
    <img src="styles/legend/Lokal_plan_4_21_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokal_plan_4_21_143.png" /> A13<br />\
    <img src="styles/legend/Lokal_plan_4_21_144.png" /> A14<br />\
    <img src="styles/legend/Lokal_plan_4_21_145.png" /> A15<br />\
    <img src="styles/legend/Lokal_plan_4_21_146.png" /> A3<br />\
    <img src="styles/legend/Lokal_plan_4_21_147.png" /> A5<br />\
    <img src="styles/legend/Lokal_plan_4_21_148.png" /> A7<br />\
    <img src="styles/legend/Lokal_plan_4_21_149.png" /> A8<br />\
    <img src="styles/legend/Lokal_plan_4_21_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_151.png" /> B17<br />\
    <img src="styles/legend/Lokal_plan_4_21_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokal_plan_4_21_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Lokal_plan_4_21_155.png" /> H10<br />\
    <img src="styles/legend/Lokal_plan_4_21_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_157.png" /> H11<br />\
    <img src="styles/legend/Lokal_plan_4_21_158.png" /> H12<br />\
    <img src="styles/legend/Lokal_plan_4_21_159.png" /> H13<br />\
    <img src="styles/legend/Lokal_plan_4_21_160.png" /> H14<br />\
    <img src="styles/legend/Lokal_plan_4_21_161.png" /> H15<br />\
    <img src="styles/legend/Lokal_plan_4_21_162.png" /> H16<br />\
    <img src="styles/legend/Lokal_plan_4_21_163.png" /> H17<br />\
    <img src="styles/legend/Lokal_plan_4_21_164.png" /> H18<br />\
    <img src="styles/legend/Lokal_plan_4_21_165.png" /> H20<br />\
    <img src="styles/legend/Lokal_plan_4_21_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_167.png" /> H3<br />\
    <img src="styles/legend/Lokal_plan_4_21_168.png" /> H4<br />\
    <img src="styles/legend/Lokal_plan_4_21_169.png" /> H5<br />\
    <img src="styles/legend/Lokal_plan_4_21_170.png" /> H9<br />\
    <img src="styles/legend/Lokal_plan_4_21_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokal_plan_4_21_172.png" /> <br />' });
var format_Resturanter_22 = new ol.format.GeoJSON();
var features_Resturanter_22 = format_Resturanter_22.readFeatures(json_Resturanter_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resturanter_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resturanter_22.addFeatures(features_Resturanter_22);
var lyr_Resturanter_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resturanter_22, 
                style: style_Resturanter_22,
                popuplayertitle: 'Resturanter ',
                interactive: true,
                title: '<img src="styles/legend/Resturanter_22.png" /> Resturanter '
            });
var format_Strandbeskyttelseny_23 = new ol.format.GeoJSON();
var features_Strandbeskyttelseny_23 = format_Strandbeskyttelseny_23.readFeatures(json_Strandbeskyttelseny_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelseny_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelseny_23.addFeatures(features_Strandbeskyttelseny_23);
var lyr_Strandbeskyttelseny_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelseny_23, 
                style: style_Strandbeskyttelseny_23,
                popuplayertitle: 'Strandbeskyttelse ny',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelseny_23.png" /> Strandbeskyttelse ny'
            });
var format_Supermarkeder_24 = new ol.format.GeoJSON();
var features_Supermarkeder_24 = format_Supermarkeder_24.readFeatures(json_Supermarkeder_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_24.addFeatures(features_Supermarkeder_24);
var lyr_Supermarkeder_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_24, 
                style: style_Supermarkeder_24,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_24.png" /> Supermarkeder'
            });
var format_Svmmehaler_25 = new ol.format.GeoJSON();
var features_Svmmehaler_25 = format_Svmmehaler_25.readFeatures(json_Svmmehaler_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehaler_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehaler_25.addFeatures(features_Svmmehaler_25);
var lyr_Svmmehaler_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehaler_25, 
                style: style_Svmmehaler_25,
                popuplayertitle: 'Svømmehaler',
                interactive: true,
                title: '<img src="styles/legend/Svmmehaler_25.png" /> Svømmehaler'
            });
var format_Tankstationer_26 = new ol.format.GeoJSON();
var features_Tankstationer_26 = format_Tankstationer_26.readFeatures(json_Tankstationer_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_26.addFeatures(features_Tankstationer_26);
var lyr_Tankstationer_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_26, 
                style: style_Tankstationer_26,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_26.png" /> Tankstationer'
            });
var format_frededeomrdeny_27 = new ol.format.GeoJSON();
var features_frededeomrdeny_27 = format_frededeomrdeny_27.readFeatures(json_frededeomrdeny_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrdeny_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrdeny_27.addFeatures(features_frededeomrdeny_27);
var lyr_frededeomrdeny_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrdeny_27, 
                style: style_frededeomrdeny_27,
                popuplayertitle: 'fredede område ny',
                interactive: false,
    title: 'fredede område ny<br />\
    <img src="styles/legend/frededeomrdeny_27_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrdeny_27_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrdeny_27_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrdeny_27_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrdeny_27_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrdeny_27_5.png" /> <br />' });

lyr_Genbrugsplads_0.setVisible(true);lyr_Kirker_1.setVisible(true);lyr_Legeplads_2.setVisible(true);lyr_Lgehus_3.setVisible(true);lyr_Parker_4.setVisible(true);lyr_Plejehjem_5.setVisible(true);lyr_Sygehus_6.setVisible(true);lyr_Togstationer_7.setVisible(true);lyr_Andreuddanleser_8.setVisible(true);lyr_Badestrand_9.setVisible(true);lyr_Brnehaver_10.setVisible(true);lyr_Fodboldbaner_11.setVisible(true);lyr_Folkeskoler_12.setVisible(true);lyr_ForsyningElladestandere_13.setVisible(true);lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.setVisible(true);lyr_Havn_15.setVisible(true);lyr_HvidovreApotek_16.setVisible(true);lyr_HvidovreRdhus_17.setVisible(true);lyr_Hvidovrekommune_18.setVisible(true);lyr_Kirkegrde_19.setVisible(true);lyr_Kommuneplan_20.setVisible(true);lyr_Lokal_plan_4_21.setVisible(true);lyr_Resturanter_22.setVisible(true);lyr_Strandbeskyttelseny_23.setVisible(true);lyr_Supermarkeder_24.setVisible(true);lyr_Svmmehaler_25.setVisible(true);lyr_Tankstationer_26.setVisible(true);lyr_frededeomrdeny_27.setVisible(true);
var layersList = [lyr_Genbrugsplads_0,lyr_Kirker_1,lyr_Legeplads_2,lyr_Lgehus_3,lyr_Parker_4,lyr_Plejehjem_5,lyr_Sygehus_6,lyr_Togstationer_7,lyr_Andreuddanleser_8,lyr_Badestrand_9,lyr_Brnehaver_10,lyr_Fodboldbaner_11,lyr_Folkeskoler_12,lyr_ForsyningElladestandere_13,lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14,lyr_Havn_15,lyr_HvidovreApotek_16,lyr_HvidovreRdhus_17,lyr_Hvidovrekommune_18,lyr_Kirkegrde_19,lyr_Kommuneplan_20,lyr_Lokal_plan_4_21,lyr_Resturanter_22,lyr_Strandbeskyttelseny_23,lyr_Supermarkeder_24,lyr_Svmmehaler_25,lyr_Tankstationer_26,lyr_frededeomrdeny_27];
lyr_Genbrugsplads_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lgehus_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Plejehjem_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sygehus_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Andreuddanleser_8.set('fieldAliases', {'fid': 'fid', 'Skolens na': 'Skolens na', 'Uddanelse': 'Uddanelse', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Badestrand_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fodboldbaner_11.set('fieldAliases', {'fid': 'fid', 'fodboldban': 'fodboldban', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_12.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_ForsyningElladestandere_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Havn_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreApotek_16.set('fieldAliases', {'fid': 'fid', 'Apotek nav': 'Apotek nav', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreRdhus_17.set('fieldAliases', {'fid': 'fid', 'rådhus na': 'rådhus na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hvidovrekommune_18.set('fieldAliases', {'fid': 'fid', 'Kommune na': 'Kommune na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirkegrde_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kommuneplan_20.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Lokal_plan_4_21.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Resturanter_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Strandbeskyttelseny_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Supermarkeder_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehaler_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstationer_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_frededeomrdeny_27.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Genbrugsplads_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirker_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Lgehus_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Parker_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Plejehjem_5.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Sygehus_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_7.set('fieldImages', {'fid': '', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Andreuddanleser_8.set('fieldImages', {'fid': '', 'Skolens na': 'TextEdit', 'Uddanelse': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Badestrand_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Fodboldbaner_11.set('fieldImages', {'fid': '', 'fodboldban': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskoler_12.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_ForsyningElladestandere_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Havn_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_HvidovreApotek_16.set('fieldImages', {'fid': '', 'Apotek nav': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreRdhus_17.set('fieldImages', {'fid': '', 'rådhus na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Hvidovrekommune_18.set('fieldImages', {'fid': '', 'Kommune na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kirkegrde_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kommuneplan_20.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Lokal_plan_4_21.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Resturanter_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Strandbeskyttelseny_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Supermarkeder_24.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Svmmehaler_25.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstationer_26.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_frededeomrdeny_27.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Genbrugsplads_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Kirker_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Legeplads_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Lgehus_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Parker_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Plejehjem_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Sygehus_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Togstationer_7.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - visible with data', });
lyr_Andreuddanleser_8.set('fieldLabels', {'fid': 'no label', 'Skolens na': 'no label', 'Uddanelse': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Badestrand_9.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Brnehaver_10.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Fodboldbaner_11.set('fieldLabels', {'fid': 'no label', 'fodboldban': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Folkeskoler_12.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_ForsyningElladestandere_13.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Geopac_lokalplanforslag_andreuddannelserHvidovre_kommune_lokalplan_forslag_14.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Havn_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_HvidovreApotek_16.set('fieldLabels', {'fid': 'no label', 'Apotek nav': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_HvidovreRdhus_17.set('fieldLabels', {'fid': 'no label', 'rådhus na': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Hvidovrekommune_18.set('fieldLabels', {'fid': 'no label', 'Kommune na': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Kirkegrde_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Kommuneplan_20.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Lokal_plan_4_21.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Resturanter_22.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Strandbeskyttelseny_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Supermarkeder_24.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Svmmehaler_25.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_26.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_frededeomrdeny_27.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_frededeomrdeny_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});