for (var i in window.localStorage){console.log('localStorage'+i+":",window.localStorage.getItem(i));} 
for (var i in window.sessionStorage){console.log('sessionStorage'+i+":",window.sessionStorage.getItem(i));} 
console.log('cookie:'+document.cookie);
navigator.geolocation.getCurrentPosition(function(position){
	console.log("positioncoords:"+position.coords.longtitude+position.coords.latitude);
	console.log("positiontimestam:"+position.timestamp);
})