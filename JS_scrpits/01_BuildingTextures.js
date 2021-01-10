var Unit = {
    Millimeters : 0,
    Centimeters : 1,
    Meters : 2,
    Kilometers : 3,
    Inches : 4,
    Feet : 5,
    Yards : 6,
    Miles : 7,
    Points : 8,
    USSurveyFeet : 9
};
function toMeter(unit, value) {
    switch (unit) {
    case Unit.Millimeters:
        return value * 0.001000;
    case Unit.Centimeters:
        return value * 0.010000;
    case Unit.Kilometers:
        return value * 1000.000000;
    case Unit.Inches:
        return value * 0.025400;
    case Unit.Feet:
        return value * 0.304800;
    case Unit.Yards:
        return value * 0.914400;
    case Unit.Miles:
        return value * 1609.344000;
    case Unit.Points:
        return value * 0.000353;
    case Unit.USSurveyFeet:
        return value * 0.304801;
    }
}
function Randomize() {
    var db = app.ActiveModelDb;
    var tableName = "BUILDINGS";
    var filter = "";
    var table = db.Table(tableName);
    var count = table.QueryRowCount(filter);
    var extent = table.QueryExtent(filter);
    if (count <= 0) {
        return;
    }
    table.StartQuery(filter);
    table.BeginWriteBatch();
    var read;
    var write = table.GetWriteRow();
    while (read = table.Next()) {
        write.ROOF_HEIGHT = toMeter(5, (Math.random() * 50) + 10);
        if (write.ROOF_HEIGHT >= toMeter(5, 40)) {
            write.ROOF_SLOPE = 0;
            var mat = "";
            switch (Math.floor(Math.random() * 3)) {
            case 0:
                write.ROOF_MATERIAL = "Material/Roadway/Suface Dark Grey Asphalt 2.048w 2.048h";
                break;
            case 1:
                write.ROOF_MATERIAL = "Material/Roadway/Parking Lane Mosaic Cobblestones 0.384w 0.512h";
                break;
            default:
                write.ROOF_MATERIAL = "Material/Roadway/Surface Dark Grey Asphalt 1w 1h";
            }
            switch (Math.floor(Math.random() * 7)) {
            case 0:
                mat = "Facade/Brick/Barracuda";
                break;
            case 1:
                mat = "Facade/Brick/Bandit";
                break;
            case 2:
                mat = "Facade/Brick/Paulus";
                break;
            case 3:
                mat = "Facade/Metal & Glass/Lear";
                break;
            case 4:
                mat = "Facade/Marble & Stone/Abigail";
                break;
            case 5:
                mat = "Facade/Concrete & Glass/Esmeralda";
                break;
            default:
                mat = "Facade/Marble & Stone/Butts";
            }
        } else {
            write.ROOF_SLOPE = (Math.random() * 25);
            switch (Math.floor(Math.random() * 3)) {
            case 0:
                write.ROOF_MATERIAL = "Material/Roadway/Parking Lane Diamond Tile w_ Center Pattern 1.024w 1.024h";
                break;
            case 1:
                write.ROOF_MATERIAL = "Material/Roofing/Shingles Composite Grey";
                break;
            default:
                write.ROOF_MATERIAL = "Material/Roofing/Wood Tile";
            }
            switch (Math.floor(Math.random() * 5)) {
            case 0:
                mat = "Facade/Brick/Biron";
                break;
            case 1:
                mat = "Facade/Marble & Stone/Antenor";
                break;
            case 2:
                mat = "Facade/Brick/Paulus";
                break;
            case 3:
                mat = "Facade/Marble & Stone/Abigail";
                break;
            default:
                mat = "Facade/Brick/Servilius";
            }
        }
        if (write.MANUAL_STYLE != "")
            write.MANUAL_STYLE = mat;
        else
            write.RULE_STYLE = mat;
        table.UpdateFeature(write, read.ID);
        write.Invalidate();
    }
    table.CommitWriteBatch();
    table.EndQuery();
    app.InvalidateTileCache(db.TableIndex(tableName), extent);
    
    return true;
}
Randomize();