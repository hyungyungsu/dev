var today = new Date();
var yearstart = today.getFullYear()
var monthstart = today.getMonth()

window.onload = function(){
	document.getElementById('txt').value = yearstart + "/" + (monthstart +1);
	calender()
};

function calender() {
	var dateInput = document.getElementById('txt').value;
	var inputYear = dateInput.slice(0,4);
	var inputMonth = dateInput.slice(5);

	var startYear = new Date(inputYear,inputMonth-1);
	var starWeek = startYear.getDay()+1 ;//1日の曜日
	var endDate_b = new Date(inputYear,inputMonth,0);
	var endDate = endDate_b.getDate();//月末日
	//calenderのヘッダ作成
	var weekArr =["日", "月", "火", "水", "木", "金",  "土",];
	var calTable = '<table border="1" width="500"><tr>';//calender作成用
	for (var i=0;i<7; i++){
		calTable += "<th>" + weekArr[i]+ "</th>";
	}
	calTable += "</tr>";
	//calenderの日付作成
	for (var i=0; i<endDate+starWeek-1; i++){
		if(i== 0 && starWeek == i ){
				calTable += "<tr><td>1</td>";
		}else{
			if(starWeek <= (i+1)){
				if(i%7 == 0){
					calTable += "<tr><td>"+ (i+2-starWeek) + "</td>";
				}else if(i%7 == 6) {
					calTable += "<td>"+ (i+2-starWeek) + "</td></tr>";
				}else{
					calTable += "<td>"+ (i+2-starWeek) + "</td>";
				}
			}else{
				if(i%7 == 6) {
					calTable += "<td></td></tr>";
				}else{
					calTable += "<td></td>";
				}
			}
		};
	};

	calTable += "</table>";
	document.getElementById('display1').innerHTML=calTable;
	document.getElementById('year').innerHTML = inputYear + "年度"
};

