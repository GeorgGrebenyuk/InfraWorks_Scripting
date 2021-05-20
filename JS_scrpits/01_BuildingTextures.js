var facadeColors = [  
    [234, 215, 199],  
    [204, 205, 208],  
    [214, 218, 225],  
    [217, 215, 210],  
    [228, 225, 212],  
    [212, 210, 210],  
    [179, 204, 218],  
    [231, 226, 215],  
    [172, 178, 154],  
    [230, 215, 204],  
    [243, 234, 226],  
    [232, 233, 228],  
    [242, 232, 215],  
    [230, 196, 192],  
    [243, 235, 218],  
    [243, 239, 233],  
    [245, 237, 205],  
    [239, 241, 231],  
    [239, 220, 212],  
    [222, 206, 189],  
    [192, 207, 222],  
    [229, 212, 194],  
    [226, 235, 226],  
    [242, 240, 241],  
    [238, 188, 192],  
    [222, 213, 203],  
    [228, 225, 218],  
    [195, 196, 199],  
    [241, 234, 230],  
    [235, 235, 238],  
    [228, 218, 216],  
    [215, 215, 217],  
    [215, 214, 214],  
    [246, 244, 240],  
    [187, 190, 189]   
];
var randomFacadeColor = function() { 
    var r = Math.random(); 
    var i = 0 | (r * facadeColors.length); 
    var c = facadeColors[i]; 
    var rgb = c[2] | (c[1] << 8) | (c[0] << 16); 
    var hex = '#' + rgb.toString(16); 
    return hex; 
}

var facadeStyles = [  
"Facade/BREZHNEVKY/1-LG-606",
"Facade/BREZHNEVKY/111-90",
"Facade/BREZHNEVKY/111-96",
"Facade/BREZHNEVKY/135",
"Facade/BREZHNEVKY/1605AM-5",
"Facade/BREZHNEVKY/1605AM-9",
"Facade/BREZHNEVKY/1LG-600",
"Facade/BREZHNEVKY/1MG-600",
"Facade/BREZHNEVKY/1MG-601-441",
"Facade/BREZHNEVKY/1MG-601",
"Facade/BREZHNEVKY/1MG-601D",
"Facade/BREZHNEVKY/1MG-601J",
"Facade/BREZHNEVKY/H-5416",
"Facade/BREZHNEVKY/I-491A",
"Facade/BREZHNEVKY/I-522A",
"Facade/BREZHNEVKY/I-III-3",
"Facade/BREZHNEVKY/II-18-9",
"Facade/BREZHNEVKY/II-18",
"Facade/BREZHNEVKY/II-49",
"Facade/BREZHNEVKY/II-57",
"Facade/BREZHNEVKY/II-66",
"Facade/BREZHNEVKY/II-67",
"Facade/BREZHNEVKY/II-68-01",
"Facade/BREZHNEVKY/II-68-02",
"Facade/BREZHNEVKY/II-68-03",
"Facade/BREZHNEVKY/II-68-04",
"Facade/BREZHNEVKY/II-68",
"Facade/BREZHNEVKY/KOPE",
"Facade/BREZHNEVKY/M-464",
"Facade/BREZHNEVKY/P-3",
"Facade/BREZHNEVKY/P-4",
"Facade/BREZHNEVKY/P-42",
"Facade/BREZHNEVKY/P-43",
"Facade/BREZHNEVKY/P-44",
"Facade/BREZHNEVKY/P-46",
"Facade/BREZHNEVKY/VULHA",
"Facade/HRUSHEVKY/1-335",
"Facade/HRUSHEVKY/1-439",
"Facade/HRUSHEVKY/1-440",
"Facade/HRUSHEVKY/1-447",
"Facade/HRUSHEVKY/1-464",
"Facade/HRUSHEVKY/1-466",
"Facade/HRUSHEVKY/1-467",
"Facade/HRUSHEVKY/1-510",
"Facade/HRUSHEVKY/1-511",
"Facade/HRUSHEVKY/1-515-5",
"Facade/HRUSHEVKY/1-515-9",
"Facade/HRUSHEVKY/1605-AM",
"Facade/HRUSHEVKY/1MG-300",
"Facade/HRUSHEVKY/1R-303-2",
"Facade/HRUSHEVKY/II-07-19",
"Facade/HRUSHEVKY/II-07",
"Facade/HRUSHEVKY/II-17",
"Facade/HRUSHEVKY/II-18-01-09 MIK",
"Facade/HRUSHEVKY/II-18-01",
"Facade/HRUSHEVKY/II-29",
"Facade/HRUSHEVKY/II-32",
"Facade/HRUSHEVKY/II-34",
"Facade/HRUSHEVKY/II-35",
"Facade/HRUSHEVKY/II-38",
"Facade/HRUSHEVKY/K-7",
"Facade/SOVREMEN/111-83",
"Facade/SOVREMEN/111-97",
"Facade/SOVREMEN/141",
"Facade/SOVREMEN/182",
"Facade/SOVREMEN/349-01",
"Facade/SOVREMEN/600.11",
"Facade/SOVREMEN/75",
"Facade/SOVREMEN/87",
"Facade/SOVREMEN/90 LO",
"Facade/SOVREMEN/90 LOM",
"Facade/SOVREMEN/BOD-1",
"Facade/SOVREMEN/D-25N1",
"Facade/SOVREMEN/GMS-1",
"Facade/SOVREMEN/GMS-3",
"Facade/SOVREMEN/I-155",
"Facade/SOVREMEN/I-1630",
"Facade/SOVREMEN/I-1723",
"Facade/SOVREMEN/I-1724",
"Facade/SOVREMEN/I-1809",
"Facade/SOVREMEN/I-1834",
"Facade/SOVREMEN/I-79-99",
"Facade/SOVREMEN/IP-46S",
"Facade/SOVREMEN/KOLOS",
"Facade/SOVREMEN/KONTAKT-SP",
"Facade/SOVREMEN/KOPE-M",
"Facade/SOVREMEN/MAK",
"Facade/SOVREMEN/MAS-84",
"Facade/SOVREMEN/MPSM",
"Facade/SOVREMEN/P-3M",
"Facade/STALINKY/HOROH",
"Facade/STALINKY/II-01",
"Facade/STALINKY/II-02",
"Facade/STALINKY/II-03",
"Facade/STALINKY/II-04",
"Facade/STALINKY/II-05",
"Facade/STALINKY/II-08",
"Facade/STALINKY/II-14",
"Facade/STALINKY/MG-1",
"Facade/STALINKY/MG-2",
"Facade/STALINKY/SAKB",
"Facade/STALINKY/SM-1",
"Facade/STALINKY/SM-3"       
]; 
var randomFacadeStyle = function() {       
    var r = Math.random();                 
    var i = 0 | (r * facadeStyles.length); 
    return facadeStyles[i];                
} 

var roofColors = [
    [158, 156, 156],
    [ 95, 96, 102], 
    [168, 141, 123],
    [128, 130, 130],
    [126, 118, 116],
    [197, 187, 180],
    [154, 120, 108],
    [189, 148, 124],
    [132, 133, 137],
    [110, 105, 108],
    [ 68, 71, 83],  
    [178, 172, 167],
    [116, 119, 125],
    [123, 121, 121],
    [120, 118, 117],
    [ 83, 84, 97],  
    [176, 181, 193],
    [194, 197, 205],
    [198, 191, 183],
    [178, 180, 193],
    [123, 91, 87],  
    [127, 129, 133],
    [ 95, 95, 103], 
    [ 82, 82, 91],  
    [133, 125, 119],
    [121, 120, 126],
    [128, 129, 133],
    [165, 158, 152],
    [151, 153, 155],
    [167, 128, 109],
    [ 90, 86, 94],  
    [190, 188, 186],
    [ 84, 87, 99],  
    [167, 142, 139],
    [183, 187, 198],
    [128, 124, 123] 
];
var randomRoofColor = function() { 
    var r = Math.random(); 
    var i = 0 | (r * roofColors.length); 
    var c = roofColors[i]; 
    var rgb = c[2] | (c[1] << 8) | (c[0] << 16); 
    var hex = '#' + rgb.toString(16); 
    return hex; 
}

function Process(SOURCE, BUILDINGS) {
    BUILDINGS.BASE_COLOR = randomFacadeColor();
    BUILDINGS.EXTERNAL_ID = SOURCE["ID"];
    BUILDINGS.ROOF_HEIGHT = 10;
    BUILDINGS.ROOF_MATERIAL = randomRoofColor();
    BUILDINGS.RULE_STYLE = randomFacadeStyle();
    BUILDINGS.ROOF_SLOPE = 15;

    return true;
}
