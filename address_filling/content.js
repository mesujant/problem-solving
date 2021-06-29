
var isFirst = true;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		

	
		
	//vdcId.selectedIndex = 1;

	
	//eId.selectedIndex = 2;


	var wardNo = document.getElementById('ward-no');
	if (isNaN(parseInt(wardNo.value))){
		 
	
	let checkTime = 100;
	

	let timer = setInterval(() =>{
		console.log("check 1");
		var did = document.getElementById("district-id");	
		if(did.length > 1)
		{
			did.selectedIndex = 8;
			// $(did).change();
			did.dispatchEvent(new Event("change"));
			
			let timer1 = setInterval(() =>{
				console.log("check 2");
				var vdcId = document.getElementById("vdcmu-id");
		if(vdcId.length > 1)
		{
			vdcId.selectedIndex = 1;
			//$(vdcId).change();
			vdcId.dispatchEvent(new Event("change"));
			console.log("second done");
			let timer2 = setInterval(() =>{
				console.log("check 3");
				var eId = document.getElementById("ward-no");	
		if(eId.length > 1)
		{
			eId.selectedIndex = 5;
			//$(eId).change();
			eId.dispatchEvent(new Event("change"));

			clearInterval(timer2);
			console.log("third done");

/*
			var wardNo = document.getElementById('ward-no');
	if ((wardNo.value).length > 0){
		var submint = document.getElementsByClassName("btn blue");
		submint[0].click();

	}
	*/

		}
		
	}, checkTime);
			
clearInterval(timer1);
		}
		
	}, checkTime);
			clearInterval(timer);

		}
		
	}, checkTime);


}
	
/*
	var wardNo = document.getElementById('ward-no');
	if ((wardNo.value).length > 0){
		var submint = document.getElementsByClassName("btn blue");
		submint[0].click();

	}
*/
	
	console.log("check resutl ");
	
		
//शर्मा
	})




