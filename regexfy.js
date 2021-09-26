
function Regexfy() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var ufila = sheet.getLastRow();

  var vector = SpreadsheetApp.getActiveSpreadsheet().getRange("B4:B" + ufila).getValues().flat()
  const agrupify = vector.map(url  => url+ "|")
                          .join("")
                          .replace(",","")  

  const str2 = agrupify.substring(0, agrupify.length - 1);

  if(str2.length>4096){
    ss.getRange("F4:F4").setValue("Límite de carácteres superado, elimina alguna URL").setBackgroundColor("#ea9999")
  }else{
    ss.getRange("F4:F4").setValue(str2).setBackgroundColor("#b6d7a8")
  }
  

}

