
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	
		/*
		//'08-100-08-2070-01-01', '08-100-08-2048-01-01', '08-100-08-2060-01-01', 
		'08-100-08-2063-01-01', '08-100-08-2064-01-01' 
		

		
		var detail = {'08-100-08-2070-01-01': {'2070': [[146, 7], [147, 7], [148, 7], [148, 7], [149, 7], [150, 7], [151, 8], [152, 8], [153, 7], [154, 7], [155, 8], [1, 8], [2, 7], [3, 8]], '4-7-223': [], '7-9-249': [[10, 7], [11, 8], [12, 8], [13, 7], [14, 7], [15, 8], [16, 8], [17, 7], [18, 7], [12, 7], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [25, 7], [26, 8], [27, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [32, 7], [33, 7], [34, 7], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 7], [45, 7], [46, 7], [47, 7], [48, 7], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 8], [61, 7], [62, 8], [63, 8], [64, 7], [65, 8], [66, 8], [67, 8], [68, 7], [69, 8], [70, 8], [71, 8], [71, 8], [72, 8], [73, 8], [74, 8]]}, '08-100-08-2048-01-01': {'2049': [[15, 8], [16, 8], [17, 8], [18, 7], [19, 8], [20, 7], [21, 8], [22, 8], [23, 8], [24, 7], [25, 7], [26, 8], [27, 8], [28, 7], [29, 7], [30, 7], [31, 8], [32, 8], [33, 8], [34, 8], [38, 8], [39, 8], [40, 7], [41, 8], [42, 7], [43, 8], [44, 8], [45, 7], [46, 7], [47, 7], [48, 8], [49, 7], [50, 7], [51, 7], [52, 7], [52, 7], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 7], [61, 7], [62, 7], [63, 7], [64, 7], [65, 7], [66, 8], [67, 7], [68, 7], [69, 8], [70, 8], [71, 8]], '2050': [[1, 8], [2, 8], [3, 8], [4, 7], [5, 7], [6, 7], [7, 7], [8, 8], [9, 8], [10, 8], [11, 7], [12, 7], [13, 7], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 7], [23, 7], [24, 7], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [32, 7], [33, 7], [34, 7], [35, 7], [36, 7], [37, 7], [38, 7], [39, 7], [40, 7], [41, 8], [42, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 7], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 7], [60, 7], [61, 8], [62, 8], [63, 8], [64, 7], [65, 7], [66, 7], [67, 7], [68, 7], [69, 7], [70, 7], [71, 7], [72, 7], [73, 7], [77, 8], [78, 7], [79, 7], [80, 7], [81, 7], [82, 7], [83, 8], [84, 8], [85, 7], [86, 7], [87, 7], [88, 7], [89, 7], [90, 7]], '2051': [[1, 8], [2, 8], [3, 7], [4, 7], [5, 7], [6, 7], [7, 8], [8, 8], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [16, 7], [17, 7], [18, 7], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7], [24, 7], [25, 8], [26, 7], [27, 7], [28, 7], [29, 7], [30, 8], [31, 8], [32, 8], [33, 8], [34, 7], [35, 8], [36, 7], [37, 7], [38, 8], [39, 7], [40, 8], [41, 8], [42, 7], [43, 7], [44, 7], [45, 7], [46, 7], [47, 7], [48, 7], [49, 8], [50, 7], [51, 7], [52, 7], [53, 7], [54, 7], [55, 7], [56, 7], [57, 7], [58, 7], [59, 7], [60, 7], [61, 7], [62, 7], [63, 8], [64, 8], [65, 8], [66, 8], [67, 7], [68, 7], [69, 7], [70, 7], [71, 7], [72, 7], [73, 7], [74, 8], [75, 8], [76, 8], [77, 7], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 8]], '2052': [[1, 7], [2, 7], [3, 8], [4, 8], [5, 8], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 8], [15, 8], [16, 8], [17, 8], [18, 7], [19, 7], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7], [30, 7], [31, 7], [32, 7], [33, 8], [34, 8], [35, 8], [36, 8], [37, 7], [38, 7], [39, 7], [40, 7], [41, 7], [42, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 7], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 7], [55, 7], [56, 7], [57, 7], [58, 7], [59, 7], [60, 7], [61, 7], [62, 7], [63, 7], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [70, 7], [71, 8], [72, 8], [73, 8], [74, 7], [75, 7], [76, 8], [77, 8], [78, 8], [79, 7], [80, 7], [81, 7], [82, 8], [83, 8], [84, 8], [85, 8], [86, 7], [87, 7], [88, 8], [89, 7], [90, 7], [91, 7], [92, 7], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 8], [103, 7], [104, 7], [105, 8], [106, 8]], '2053': [[1, 8], [2, 8], [3, 8], [4, 7], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 7], [14, 8], [15, 7], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 7], [22, 8], [23, 7], [24, 7], [25, 7], [26, 7], [27, 7], [28, 8], [29, 8], [30, 8], [31, 7], [32, 7], [33, 8], [34, 8], [35, 8], [36, 7], [37, 7], [38, 7], [39, 8], [40, 7], [41, 7], [42, 7], [43, 8], [44, 8], [45, 7], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [55, 7], [56, 7], [57, 7], [58, 7], [59, 7], [60, 8], [61, 7], [62, 8], [63, 8], [64, 8], [65, 8], [66, 7], [67, 8], [68, 8], [69, 8], [70, 8], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 7], [26, 7], [27, 8], [28, 7], [29, 8], [30, 7], [31, 7], [32, 7], [33, 7], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 7], [41, 7], [42, 7], [43, 7], [44, 8], [45, 8], [46, 8], [47, 8], [48, 7], [49, 7], [50, 7], [51, 7], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 7], [58, 8], [59, 8], [60, 8], [61, 7], [62, 7], [63, 7], [64, 7], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 7], [80, 7], [81, 8], [82, 7], [83, 8], [84, 8], [85, 8], [86, 8], [87, 8], [88, 8], [89, 8]], '2055': [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 8], [8, 7], [9, 8], [10, 8], [11, 7], [12, 7], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 7], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 7], [40, 8], [41, 7], [42, 8], [43, 7], [44, 7], [45, 8], [46, 8], [47, 8], [48, 7], [49, 8], [50, 7], [51, 8], [52, 8], [53, 8], [54, 8], [55, 7], [57, 7], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 7], [69, 7], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 7], [85, 7], [86, 7], [87, 8], [88, 8], [89, 8], [90, 8], [91, 8], [92, 8], [93, 7], [94, 7], [95, 7], [96, 8], [97, 8], [98, 8], [99, 7]], '2056': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 7], [17, 7], [18, 7], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 7], [39, 8], [40, 8], [41, 7], [42, 8], [43, 8], [44, 7], [45, 8], [46, 7], [47, 7], [57, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 7], [63, 7], [64, 7], [65, 7], [66, 8], [67, 8], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8]], '2057': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 7], [9, 7], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 7], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 7], [36, 7], [37, 7], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 7], [45, 7], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 7], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 8], [87, 8], [88, 8], [89, 8], [90, 8], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 8], [103, 8], [104, 8], [105, 8], [106, 8], [107, 8], [108, 8], [109, 8], [110, 8], [111, 8], [112, 8], [113, 8], [114, 8], [115, 8], [116, 8], [117, 7], [118, 7], [117, 8], [116, 8], [115, 7], [126, 8], [127, 8], [128, 8], [129, 8], [130, 8], [131, 7], [132, 7], [134, 7], [135, 7], [136, 7], [137, 7], [138, 8], [139, 8], [140, 8], [141, 8], [142, 8], [143, 8], [144, 8], [145, 8], [146, 8], [147, 8], [148, 8], [149, 8], [150, 8], [151, 8], [152, 8], [153, 8], [154, 8], [155, 8], [156, 8], [157, 8], [158, 8], [159, 8], [160, 8], [161, 8], [162, 8], [163, 8], [164, 8], [165, 8], [166, 8], [167, 8], [168, 8], [169, 8], [170, 8], [171, 8], [172, 8], [173, 8], [174, 8], [175, 8], [176, 8], [177, 8], [178, 7], [177, 7], [176, 7], [175, 7], [174, 8], [173, 8], [172, 8], [171, 8], [170, 8], [169, 8], [168, 8], [167, 8], [166, 8], [165, 8], [164, 8], [163, 8], [162, 8], [161, 8], [160, 8], [159, 8], [158, 8], [157, 8], [156, 8], [155, 8], [186, 8], [187, 8], [188, 8], [189, 8], [190, 8], [191, 8], [192, 8], [193, 8], [194, 8], [195, 8], [196, 8], [179, 7], [180, 8], [181, 8], [182, 8], [183, 8], [184, 8], [185, 8], [186, 8], [187, 8], [188, 8], [189, 8], [190, 8], [191, 8], [192, 8], [193, 8], [194, 8], [195, 8], [196, 8], [197, 8], [198, 8], [199, 8], [200, 8], [201, 8], [202, 8], [203, 8], [204, 8], [205, 8], [206, 8], [207, 8], [208, 8], [209, 8], [210, 8], [211, 8], [212, 8], [213, 8], [214, 8], [215, 8], [216, 7], [217, 8], [218, 8], [219, 8], [220, 8], [221, 8], [222, 8], [223, 8], [224, 8], [225, 8], [226, 8], [227, 8], [228, 8], [229, 8], [230, 7], [231, 7], [232, 7], [233, 7], [234, 7], [235, 7], [236, 7], [237, 8], [238, 8], [239, 8], [240, 8], [241, 8], [242, 8], [243, 8], [244, 8], [245, 8], [246, 8], [247, 8], [248, 8], [249, 8], [250, 8], [251, 8], [252, 8], [253, 8], [254, 8], [255, 8], [256, 8], [257, 8], [258, 7], [259, 8], [260, 8], [261, 7], [262, 7], [263, 8], [264, 8], [265, 8], [266, 8], [267, 8], [268, 8], [269, 8], [270, 8], [271, 8], [272, 8], [273, 8], [274, 8], [275, 8], [276, 8], [277, 8], [278, 7], [279, 7], [280, 8], [281, 8], [282, 8], [283, 8], [284, 8], [285, 8], [286, 8], [287, 8], [288, 8], [289, 8], [290, 8], [291, 8], [292, 8], [293, 8], [294, 8], [295, 8], [296, 7], [297, 7], [298, 8], [299, 8], [300, 7], [301, 7], [302, 7], [303, 8], [304, 8], [305, 8], [306, 8], [307, 8], [308, 8], [309, 8], [310, 8], [311, 8], [312, 8], [313, 8], [314, 8], [315, 8], [316, 8], [317, 8], [318, 8], [319, 8], [320, 8], [321, 8], [322, 8], [323, 8], [324, 8], [325, 8], [326, 8], [327, 8], [328, 8], [329, 8], [330, 8], [331, 8], [332, 7], [334, 8], [335, 8], [336, 8], [337, 8], [338, 8], [339, 8], [340, 8], [341, 8], [342, 8], [343, 8], [344, 8], [345, 8], [346, 8], [347, 8], [348, 8], [349, 8], [350, 8], [351, 8], [352, 8], [353, 8], [354, 8], [355, 8], [356, 7]], '2058': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 7], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 7], [14, 7], [15, 7], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 7], [26, 8], [27, 7], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 7], [36, 7], [37, 7], [38, 7], [39, 8], [40, 8], [41, 8], [42, 8], [43, 7], [44, 7], [45, 7], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 7], [59, 8], [60, 8], [61, 8], [62, 8], [63, 7], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 7], [70, 8], [71, 8], [72, 7], [73, 7], [74, 7], [75, 7], [76, 8], [77, 7], [78, 7], [79, 7], [80, 8], [81, 7], [82, 7], [83, 7], [84, 7], [85, 8], [86, 8], [87, 8], [88, 8], [89, 8], [90, 7], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 8], [103, 7], [104, 7], [105, 7], [106, 7], [107, 8], [108, 8], [109, 8], [110, 8], [111, 8], [112, 8], [113, 8], [114, 8], [115, 8], [116, 8], [117, 8], [118, 7], [119, 8], [120, 8], [121, 8], [122, 7], [123, 7], [124, 7], [125, 7], [126, 7], [127, 7], [128, 7], [129, 8], [130, 8], [131, 8], [132, 8], [133, 8], [134, 8], [135, 8], [136, 7], [137, 7], [138, 7], [139, 8], [140, 8], [141, 7], [142, 8], [143, 8], [144, 8], [145, 7], [146, 7], [147, 7], [148, 7], [149, 7], [150, 8], [151, 7], [152, 8], [153, 8], [154, 7], [155, 7], [156, 8], [157, 8], [158, 8], [159, 7], [160, 7], [161, 7], [162, 7], [163, 8], [164, 8], [165, 8], [176, 7], [177, 8], [178, 8], [179, 7], [180, 7], [181, 7], [182, 8], [183, 8], [184, 8], [185, 8], [186, 8], [187, 8], [188, 7], [189, 8]], '2059': [[1, 8], [2, 8], [3, 8], [4, 7], [5, 7], [6, 8], [7, 8], [8, 8], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 8], [16, 8], [17, 8], [18, 8], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7], [24, 7], [25, 7], [26, 7], [27, 8], [28, 8], [29, 8], [30, 7], [31, 7], [32, 7], [33, 7], [34, 8], [35, 8], [36, 8], [37, 7], [38, 7], [39, 7], [40, 7], [41, 7], [42, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 7], [58, 8], [59, 8], [60, 8], [61, 8], [62, 7], [63, 7], [64, 7], [65, 7], [66, 7], [67, 8], [68, 7], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 7], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 7], [86, 7], [87, 7], [88, 8], [89, 8], [90, 8], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 7], [103, 7], [104, 8], [105, 8], [106, 8], [107, 8], [108, 8], [109, 8], [110, 8], [111, 7], [112, 8], [113, 8], [114, 7], [115, 7], [116, 7], [117, 7], [118, 8], [119, 8], [120, 8], [121, 8], [122, 7], [123, 8]], '2060': [[1, 7], [2, 7], [3, 7], [4, 7], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 7], [12, 7], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 8], [87, 8], [88, 8], [89, 8], [90, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 7], [26, 8], [27, 8], [28, 8], [29, 7], [30, 7], [31, 7], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 7], [43, 7], [44, 8], [45, 8], [46, 7], [47, 7], [48, 7], [49, 7], [50, 7], [51, 7], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 8], [61, 7], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 7], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 7], [74, 7], [75, 7], [76, 7], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 7], [85, 8], [86, 8], [87, 8], [88, 8], [89, 8], [90, 7], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8]]}, '08-100-08-2060-01-01': {'2060': [[98, 7], [99, 7], [99, 7], [100, 8], [101, 7], [102, 7], [103, 7], [104, 7], [105, 7], [106, 7], [107, 8], [108, 8], [109, 8], [110, 8], [111, 8], [112, 7], [113, 7], [114, 7], [115, 7], [116, 8], [117, 8], [118, 7], [119, 7], [120, 8], [121, 8], [122, 8], [123, 8], [124, 8], [125, 8], [126, 8], [137, 8], [136, 8], [135, 8], [136, 8], [137, 8], [138, 7]], '2061': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 7], [6, 7], [7, 8], [8, 8], [9, 8], [10, 7], [11, 8], [12, 8], [13, 7], [14, 7], [15, 7], [16, 7], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 7], [24, 7], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 8], [45, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 7], [53, 8], [54, 8], [73, 7], [74, 8], [75, 8], [76, 8], [77, 8], [78, 7], [79, 7], [80, 7], [81, 8], [82, 7], [83, 7], [84, 7], [85, 7], [86, 8], [87, 8], [88, 8], [89, 8], [90, 7], [91, 7], [92, 7], [93, 7], [94, 7], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8]], '2062': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 7], [12, 7], [13, 7], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 7], [23, 8], [24, 8], [25, 8], [26, 8], [27, 7], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 7], [34, 8], [35, 8], [36, 8], [37, 8], [38, 7], [39, 8], [40, 8], [41, 7], [42, 8], [43, 8], [44, 7], [45, 7], [46, 7], [47, 7], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [56, 7], [57, 8], [58, 7], [59, 7], [60, 7], [61, 8], [62, 8], [63, 8], [64, 7], [65, 7], [66, 8], [67, 8], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 7], [87, 8], [88, 8], [89, 8], [90, 8], [91, 8], [92, 8], [93, 7], [94, 7], [95, 7], [96, 7], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 8], [103, 8], [104, 8]], '2063': [[1, 8], [2, 8], [3, 8], [4, 7], [5, 7], [6, 7], [7, 7]]}, '08-100-08-2063-01-01': {'2063': [[1, 8], [2, 8], [3, 8], [4, 7], [5, 7], [6, 7], [7, 7], [8, 8], [9, 7], [10, 8], [11, 8], [12, 7], [13, 8], [14, 7], [15, 7], [16, 7], [17, 7], [18, 7], [19, 8], [20, 8], [21, 8], [22, 7], [23, 7], [24, 8], [25, 8], [26, 7], [27, 7], [28, 7], [29, 7], [30, 7], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 8], [45, 8], [46, 7], [47, 7], [48, 8], [49, 7], [50, 7], [51, 8], [52, 8], [53, 8], [54, 7], [55, 7], [56, 8], [57, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 7], [69, 8], [70, 8], [71, 7], [72, 7], [73, 8], [74, 8], [75, 8], [76, 8], [77, 7], [78, 7], [79, 7], [80, 7], [81, 7], [82, 7], [83, 7], [84, 8], [85, 8], [86, 8], [87, 7], [88, 7], [89, 7], [90, 7], [91, 8], [92, 8], [93, 8], [94, 7], [95, 8], [96, 7], [97, 8], [98, 8], [99, 8], [100, 8], [101, 8], [102, 7], [103, 7], [104, 7], [105, 7], [106, 7], [107, 8], [108, 8], [109, 7], [110, 7], [111, 8], [112, 8], [113, 7], [114, 7], [115, 8], [116, 8], [117, 8], [118, 8], [119, 8], [120, 8], [121, 8], [122, 8], [123, 8], [124, 8], [125, 8], [126, 8], [127, 8], [128, 8], [129, 8], [130, 8], [131, 8], [132, 7], [133, 7], [134, 7], [135, 8], [136, 7], [137, 7], [138, 8], [139, 7], [140, 7], [141, 8], [142, 8], [143, 7], [144, 7], [145, 8], [146, 8], [147, 8], [148, 7], [149, 7], [150, 7], [151, 7], [152, 7], [153, 7], [154, 7], [155, 7], [156, 7], [157, 7], [158, 7], [159, 7], [160, 7], [161, 7], [162, 7], [163, 7], [164, 7], [165, 7], [166, 7], [167, 7], [168, 7], [169, 8], [170, 8], [171, 8], [172, 8], [173, 7], [174, 7], [175, 7], [176, 7], [177, 7], [178, 8], [179, 8], [180, 8], [181, 8], [182, 8], [183, 7], [184, 8], [185, 8], [186, 7], [187, 7], [188, 7], [189, 7], [208, 7], [209, 7], [210, 7], [211, 8], [212, 7], [213, 7], [214, 7], [215, 7], [216, 7], [217, 8], [218, 8], [219, 8], [220, 8], [221, 8], [222, 8], [223, 8], [224, 8], [225, 8], [226, 8], [227, 8], [228, 8], [229, 7], [230, 7], [231, 7], [232, 8], [233, 8], [234, 7], [335, 8], [336, 7], [337, 7], [338, 8], [339, 8], [340, 7], [341, 8], [342, 8], [343, 8], [344, 8], [345, 8], [346, 8], [244, 8], [245, 7], [246, 8], [247, 7], [248, 8], [249, 8], [250, 7], [251, 8], [252, 7], [253, 8], [254, 7], [255, 7], [256, 8], [257, 8], [258, 7], [259, 7], [260, 8], [261, 7], [262, 8], [263, 7], [264, 7], [265, 8], [266, 7], [267, 8], [268, 8], [269, 8], [270, 8], [271, 7], [272, 7], [273, 8], [274, 8], [275, 8], [276, 8], [277, 8], [278, 7], [279, 8], [280, 8], [281, 7], [282, 7], [283, 8], [284, 7], [285, 8], [286, 8], [287, 8], [288, 7], [289, 7], [290, 8], [291, 8], [292, 8], [293, 7], [294, 8], [295, 8], [296, 8], [297, 8], [298, 8], [299, 8], [300, 7], [301, 7], [302, 7], [303, 7], [304, 8], [305, 8], [306, 8], [307, 8], [308, 8], [309, 8], [310, 8], [311, 8], [312, 8], [313, 8], [314, 8], [315, 8], [316, 8], [317, 8], [318, 8], [319, 8], [320, 8], [321, 8], [322, 8], [323, 8], [324, 8], [325, 8], [326, 8], [327, 8], [328, 8], [329, 8], [330, 8], [331, 8], [332, 8], [333, 8], [334, 8], [335, 8], [336, 8], [337, 8], [338, 8], [339, 8], [340, 8], [341, 8], [342, 8], [343, 8], [344, 8], [345, 8], [346, 8], [347, 8], [348, 8], [349, 8], [350, 8]], '2064': [[1, 7], [2, 7], [3, 8]]}, '08-100-08-2064-01-01': {'2064': [[1, 7], [2, 7], [3, 8], [4, 7], [5, 7], [6, 7], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 7], [14, 8], [15, 8], [16, 8], [17, 7], [18, 7], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 7], [32, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 8], [45, 7], [46, 7], [47, 7], [57, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [60, 8], [61, 8], [62, 7], [63, 7], [64, 8], [65, 8], [66, 8], [67, 7], [68, 8], [69, 7], [70, 8], [71, 7], [72, 7], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 8], [87, 7], [88, 8], [89, 7], [90, 8], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 7], [99, 8], [100, 8], [101, 8], [102, 8], [103, 8], [104, 7], [105, 8], [106, 8], [107, 8], [108, 8], [109, 8], [110, 8], [111, 7], [112, 7]], '2065': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 7], [7, 8], [8, 8], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 8], [15, 7], [16, 7], [17, 7], [18, 7], [19, 8], [20, 8], [21, 8], [22, 7], [23, 7], [24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7], [30, 7], [31, 8], [32, 8], [33, 8], [34, 8], [35, 7], [36, 7], [37, 7], [38, 7], [39, 7], [40, 8], [41, 8], [42, 7], [43, 8], [44, 7], [45, 8], [46, 8], [47, 8], [48, 8], [49, 7], [50, 8], [51, 8], [52, 8], [53, 7], [54, 8], [55, 7], [56, 7], [57, 7], [58, 7], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 7], [66, 7], [67, 8], [68, 8], [69, 8], [70, 8], [71, 8], [72, 8], [73, 8], [74, 8], [75, 8], [76, 7], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 7], [84, 7], [85, 7], [86, 8], [87, 7], [88, 7], [89, 7], [90, 7], [91, 7], [92, 7], [93, 7], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 7], [101, 8], [102, 8], [103, 8], [104, 8], [105, 8], [106, 8], [107, 8], [108, 8], [109, 7], [110, 7], [111, 8], [112, 8], [113, 8], [114, 8], [115, 8], [116, 7], [117, 7], [118, 7], [119, 8], [120, 8], [121, 7], [122, 8], [123, 7], [124, 8], [125, 8], [126, 8], [127, 7], [128, 7], [129, 7], [130, 8], [131, 8], [132, 8], [133, 8], [134, 8], [135, 8], [136, 7], [137, 7], [138, 8], [139, 8], [140, 8], [141, 8], [142, 8], [143, 8], [144, 8], [145, 8], [146, 8], [147, 8], [148, 8], [149, 7], [150, 8], [151, 8], [152, 8], [153, 8], [154, 8], [155, 8], [156, 8], [157, 8]], '2066': [[1, 8], [2, 7], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 7], [19, 7], [20, 7], [21, 8], [22, 7], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8], [30, 8], [31, 8], [32, 8], [33, 8], [34, 8], [35, 8], [36, 7], [37, 7], [38, 8], [39, 8], [40, 8], [41, 7], [42, 7], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 8], [52, 8], [53, 7], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [54, 7], [55, 8], [56, 8], [57, 7], [58, 7], [59, 7], [60, 8], [61, 8], [62, 8], [63, 7], [64, 8], [65, 8], [66, 7], [67, 7], [68, 7], [69, 8], [70, 8], [71, 8], [72, 7], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 8], [85, 8], [86, 8], [87, 8], [88, 8], [89, 7], [90, 7], [91, 7], [92, 7], [93, 8], [94, 7], [95, 7], [96, 7], [97, 8], [98, 7], [99, 8], [100, 8], [101, 8], [102, 8], [103, 8], [104, 8], [105, 8], [106, 8], [107, 8], [108, 8], [109, 7], [110, 7], [111, 8], [112, 8], [113, 8], [114, 7], [115, 7], [116, 8], [117, 8], [118, 7], [119, 7], [120, 7], [121, 8], [122, 8], [123, 8], [124, 7], [125, 7], [126, 8], [127, 8], [128, 8], [129, 8], [130, 8], [131, 8], [132, 7], [133, 7], [134, 7], [135, 7], [136, 7], [137, 7], [138, 7], [139, 7], [140, 7], [141, 7], [142, 8], [143, 7], [144, 7], [145, 7], [146, 8], [147, 8], [148, 8], [149, 8], [150, 8], [151, 8], [152, 8], [153, 8], [154, 8], [155, 8], [156, 8], [157, 8], [158, 7], [159, 8], [160, 8], [161, 8], [162, 8], [163, 8], [164, 8], [165, 8], [166, 8], [167, 8], [168, 8], [169, 8], [170, 8], [171, 8], [172, 7], [173, 8], [174, 8]], '2067': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 7], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 7], [20, 8], [21, 8], [22, 7], [23, 7], [24, 8], [25, 8], [26, 8], [27, 7], [28, 7], [29, 8], [30, 8], [31, 7], [32, 8], [33, 8], [34, 7], [35, 7], [36, 8], [37, 7], [38, 7], [39, 8], [40, 8], [41, 7], [42, 7], [43, 8], [44, 7], [45, 8], [46, 7], [47, 8], [48, 7], [49, 8], [50, 8], [51, 8], [52, 8], [53, 8], [53, 7], [54, 7], [55, 7], [56, 7], [57, 7], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 7], [68, 8], [69, 8], [70, 8], [71, 8], [72, 7], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [80, 8], [81, 8], [82, 8], [83, 8], [84, 7], [85, 7], [86, 8], [87, 8], [88, 8], [89, 8], [90, 8], [91, 8], [92, 8], [93, 8], [94, 8], [95, 8], [96, 8], [97, 8], [98, 8], [99, 8], [100, 7], [101, 7], [102, 7], [103, 7], [104, 7], [105, 7], [106, 7], [107, 8], [108, 7], [109, 7], [110, 8], [111, 8], [112, 8], [113, 8], [114, 8], [115, 8], [116, 8], [117, 8], [118, 7], [119, 8], [120, 8], [121, 8], [122, 8], [123, 7], [124, 7], [125, 7], [126, 7], [127, 8]], '2068': [[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 7], [18, 7], [19, 7], [20, 8], [21, 8], [22, 7], [23, 7], [24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7], [30, 8], [31, 8], [32, 7], [33, 7], [34, 7], [35, 7], [36, 7], [37, 7], [38, 8], [39, 8], [40, 8], [41, 8], [42, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [49, 8], [50, 8], [51, 7], [52, 8], [53, 8], [54, 8], [55, 8], [56, 8], [57, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [63, 8], [64, 7], [65, 7], [66, 7], [67, 7], [68, 8], [69, 7], [70, 8], [71, 8], [72, 7], [73, 7], [74, 7], [75, 8], [76, 7], [77, 7], [78, 8], [79, 8], [80, 7], [81, 8], [82, 8], [83, 8], [84, 8], [85, 7], [86, 7], [87, 8], [88, 7], [89, 8], [90, 8], [91, 7], [92, 8], [93, 8], [94, 8], [95, 8], [96, 7], [97, 7], [98, 7], [99, 8], [100, 8], [101, 8], [102, 8], [103, 8], [104, 8], [105, 8], [106, 8], [107, 8], [108, 7], [109, 8], [110, 8], [111, 8], [112, 7], [113, 7], [114, 8], [115, 8], [116, 8], [117, 8], [118, 8], [119, 8], [120, 8], [121, 8], [122, 8], [123, 8], [124, 8], [125, 7], [126, 8], [127, 8], [128, 7], [129, 7], [130, 7], [131, 8], [132, 8], [133, 8], [134, 7], [135, 7], [136, 8], [137, 7], [138, 7], [139, 7], [140, 8], [141, 8], [142, 8], [143, 8], [144, 8], [145, 8], [146, 8], [147, 8], [148, 8], [149, 8], [150, 8], [151, 8], [152, 8], [153, 8], [154, 8], [155, 8], [156, 8], [157, 8], [158, 8], [159, 8], [160, 8], [161, 8], [162, 8], [163, 8], [164, 8], [165, 8], [166, 8], [167, 8], [168, 8], [169, 8], [170, 8], [171, 8], [172, 8], [173, 8], [174, 8], [175, 8], [176, 8], [177, 8], [178, 8], [179, 8], [180, 8], [181, 8], [182, 8], [183, 8], [184, 8], [185, 8], [186, 8], [187, 8], [188, 8], [189, 8], [190, 8], [191, 8], [192, 8], [193, 8], [194, 8], [195, 8], [196, 8], [197, 8], [198, 8], [199, 8], [200, 8], [201, 8], [202, 7], [203, 7], [204, 7], [205, 7], [206, 7], [207, 8], [208, 7], [209, 7], [210, 7]]}}
	 
		var bookNoEle = document.getElementById('book-id-edit');
		var bookNoVal = bookNoEle.options[bookNoEle.selectedIndex].innerText;

		var nepaliDateEle = document.getElementById('nepaliDate');
		var yy = nepaliDateEle.value.split("-")[0];

		var regNoEle = document.getElementById("RegistrationNumber");
	   	var regNo = parseInt(regNoEle.value);
	
	
		var resutNo = 7;

		//var checkList = detail[bookNoVal][yy]
		for(i = 0; i<checkList.length; i++)
		{
			if(regNo == checkList[i][0])
			{
				resultNo = checkList[i][1];
			}
		}
		*/
		//var nepWardNew = ['७', '८']
		var resultNo = 7;
		if(resultNo > 0)
		{
			var englishPla = "Pakhribas-" + resultNo;
			var nepaliPla = "पाख्रिबास-" + '७';
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




