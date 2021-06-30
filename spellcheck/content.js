
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		
		var grandFatherMiddleName = document.getElementById('GrandFatherMiddleNameEnglish');

		if (grandFatherMiddleName.value in  ["bdr" ,"bd", "Bdr", "BDR", "BD"] ){
			grandFatherMiddleName.value = "Bahadur";
		}
		var fatherMiddleName = document.getElementById('FatherMiddleNameEnglish');
		if (fatherMiddleName.value in  ["bdr" ,"bd", "Bdr", "BDR", "BD"] ){
			fatherMiddleName.value = "Bahadur";
		}
		var newBornMiddleName = document.getElementById('MiddleNameEnglish');
		if (newBornMiddleName.value in  ["bdr" ,"bd", "Bdr", "BDR", "BD"] ){
			newBornMiddleName.value = "Bahadur";
		}
		})
