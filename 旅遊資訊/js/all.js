

var xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send(null);
xhr.onload = function(){
dataobj = JSON.parse(xhr.responseText);
var dataarr =[];
dataarr.push(dataobj.result.records);
var data = dataarr[0];



var list = document.querySelector('.tour');
var length = data.length;
var changearea = document.getElementById('area');
var lin = document.querySelector('.purple');
var sang = document.querySelector('.orange');
var shin = document.querySelector('.yellow');
var yang = document.querySelector('.blue');
var titlearea = document.querySelector('.area-title');
var footer = document.querySelector('.footer');
area.addEventListener('change',change,false);
lin.addEventListener('click',arealist,false);
sang.addEventListener('click',arealist,false);
shin.addEventListener('click',arealist,false);
yang.addEventListener('click',arealist,false);

function change(e){
	var select = e.target.value;
	listadd(select);
}
function arealist(e){
	var areaname = e.target.textContent;
	listadd(areaname);
}

function listadd(areaname){
	var str='';
	titlearea.textContent = areaname;
	for(var i=0 ; i<length;i++){
		if(data[i].Zone==areaname){
			var pic = data[i].Picture1;
			var name = data[i].Name;
			var opentime = data[i].Opentime;
			var local = data[i].Add;
			var phone = data[i].Tel;
			var free = data[i].Ticketinfo;
			var area = data[i].Zone;
			var content = '<li><div class="float"><img src=' + pic + '><p class="tour-name">'+name+'</p><p class="tour-area">'+area+'</p><div class="tour-data"><img src="assets/icons_clock.png"><span>'+opentime+'</span><br><img src="assets/icons_pin.png"><span>'+local+'</span><br><img src="assets/icons_phone.png"><span class="fix">'+phone+'</span><div class="fix2"><img src="assets/icons_tag.png"><span>'+free+'</span></div></div></div></li>';
			str += content;
			}
		}
		list.innerHTML = str;
	}	




};










