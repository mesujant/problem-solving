
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	
		 	
	
		
		var detail = {'08-100-02-2070-01-01': {'2070': [[1, 2], [2, 1], [3, 2], [4, 1], [5, 1], [6, 1], [7, 2], [8, 1], [9, 1], [10, 1], [11, 1], [12, 2], [13, 1], [14, 1], [15, 1], [16, 2], [17, 2], [18, 2], [19, 2], [20, 1], [21, 2], [25, 1], [26, 2], [27, 1], [28, 1], [29, 2], [30, 2], [31, 1], [32, 1], [33, 2], [34, 1], [35, 1], [36, 1], [37, 2], [38, 2], [39, 1], [40, 1], [41, 1], [42, 1], [43, 2], [44, 2], [45, 1], [46, 2], [47, 2], [48, 2], [49, 1], [50, 2], [51, 1], [52, 2], [53, 2], [54, 1], [55, 1], [56, 1], [57, 1], [58, 1], [59, 1], [60, 1], [61, 2], [62, 1], [63, 1], [64, 1], [65, 2], [66, 2], [67, 1], [68, 1], [69, 1], [70, 2], [71, 2], [72, 1], [73, 1], [74, 1], [75, 1], [76, 1], [77, 1], [78, 1], [79, 1], [80, 1], [81, 1], [82, 1], [83, 2], [84, 1], [85, 1], [86, 1], [87, 1], [88, 2], [89, 1], [90, 1], [91, 1], [92, 2], [93, 2], [94, 2], [95, 1], [96, 1], [97, 1], [98, 1], [99, 1], [100, 1], [101, 1], [102, 1], [103, 1], [104, 1], [105, 1], [106, 2], [107, 1], [108, 1], [109, 1], [110, 1], [111, 1], [112, 1], [113, 1], [114, 2], [115, 1], [116, 1], [117, 1], [118, 1], [119, 2], [120, 2], [121, 1], [122, 1], [123, 1], [124, 1], [125, 1], [126, 2], [127, 2], [128, 1], [129, 1]], '2071': [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 2], [20, 2], [21, 2], [22, 2], [23, 2], [24, 2], [28, 1], [29, 1], [30, 1], [31, 1], [32, 1], [33, 2], [34, 1], [35, 1], [36, 1], [37, 1], [38, 1], [39, 1], [40, 1], [41, 1], [42, 1], [43, 1], [44, 2], [45, 1], [52, 1], [53, 2], [54, 2], [55, 2], [56, 2], [57, 1], [58, 1], [59, 2], [60, 2], [61, 2], [62, 1], [63, 1], [64, 1], [65, 1], [66, 1], [67, 1], [68, 1], [69, 1], [70, 1], [71, 1], [72, 2], [73, 1], [74, 1], [75, 1], [76, 1], [77, 1], [78, 1]]}}


	 
		var bookNoEle = document.getElementById('book-id-edit');
		var bookNoVal = bookNoEle.options[bookNoEle.selectedIndex].innerText;

		var nepaliDateEle = document.getElementById('nepaliDate');
		var yy = nepaliDateEle.value.split("-")[0];

		var regNoEle = document.getElementById("RegistrationNumber");
	   	var regNo = parseInt(regNoEle.value);
	
	
		var resutNo;

		var checkList = detail[bookNoVal][yy]
		for(i = 0; i<checkList.length; i++)
		{
			if(regNo == checkList[i][0])
			{
				resultNo = checkList[i][1];
			}
		}
		
		var nepWardNew = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०']
		//var resultNo = 7;
		if(resultNo > 0)
		{
			var englishPla = "Pakhribas-" + resultNo;
			var nepaliPla = "पाख्रिबास-" + nepWardNew[resultNo-1];
			//nepWardNew[parseInt(resultNo)-7];
			var engBirthPlace = document.getElementById("BirthPlaceEnglish");
			engBirthPlace.value = englishPla;
	
			var nepBirthPlace = document.getElementById("BirthPlaceNepali");
			nepBirthPlace.value = nepaliPla;
	
			var wadNo = document.getElementById("ward-no");
			wadNo.selectedIndex = resultNo;
	
			//var motherWadNo = document.getElementById("mother-ward");
			//motherWadNo.selectedIndex = resultNo;

			var applicantWardNo = document.getElementById("applicant-ward-no");
			applicantWardNo.selectedIndex = resultNo; 
			 
			var submint = document.getElementsByClassName("btn blue");
			submint[0].click();

			console.log("your work is done");
		}
		else
		{
			console.log("It's not working");
		}
		
		

	console.log("check resutl ");
	
		

	})




