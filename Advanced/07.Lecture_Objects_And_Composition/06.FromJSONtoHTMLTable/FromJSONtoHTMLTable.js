function fromJSONtoHTMLTable(inp) {
  let arr = JSON.parse(inp);
  let firstRow = "<table>\n";
  let lastRow = "</table>";
  let len = arr.length;
  let strLeft = '<tr>' , strMid = '', strRight = '</tr>' ;
  for ( let i = 0 ; i < len ; i ++) {
    let objToArr = Object.keys(arr[0]) ;
      for ( let j = 0 ; j < objToArr.length ; j ++ ) {
        strMid += '<th>' + escapeHtml(objToArr[j].trim()) + '</th>'
      }
    break;
  }
  let strHeder = '\t' + strLeft + strMid + strRight + '\n' ;
  let strBody = '' ;
  strMid = '' ;
  for ( let i = 0 ; i < len ; i ++) {
    let objToArr = Object.values(arr[i]) ;
    let strRowMid = ''
    for ( let j = 0 ; j < objToArr.length ; j ++ ) {
      strMid = '<td>' + escapeHtml(objToArr[j]) + '</td>' ;      
      strRowMid += strMid;
    }
    strRow = '\t' + strLeft + strRowMid + strRight + '\n' ;
    strBody += strRow ;
  }
  let htmlText = firstRow + strHeder + strBody + lastRow ;
  console.log(htmlText);  
  //--------------------------------------------------------------------
  function escapeHtml(value) {
      return value
          .toString()
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
  }
}

fromJSONtoHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

console.log("-------------------------");

fromJSONtoHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
