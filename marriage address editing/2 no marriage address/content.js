
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	
		/*
		chumang
		['08-100-10-2063-01-01', '08-100-10-2065-01-01', '08-100-10-2067-01-01', '08-100-10-2068-01-01', 
		'08-100-10-2073-01-01', '08-100-10-2071-01-01', '08-100-10-2070-01-01', '08-100-10-2058-01-01']
		
		var detail = {'08-100-10-2063-01-01': {'2063': [[75, 9], [76, 9], [77, 9], [78, 9], [79, 9], [80, 10], [81, 10], [82, 9], [83, 9], [84, 9], [85, 9], [86, 9], [87, 9], [88, 9], [89, 9], [90, 9], [91, 10], [92, 9], [93, 9], [94, 9], [95, 9], [96, 9], [97, 9], [98, 9], [99, 9], [100, 9], [101, 9], [102, 10], [103, 10], [104, 10], [105, 10], [106, 10], [107, 10], [108, 10], [109, 10], [110, 9], [111, 9], [112, 9], [113, 10], [114, 10], [115, 10], [116, 10], [117, 9], [118, 10], [119, 10], [120, 10], [121, 10], [122, 10], [123, 10], [124, 10], [125, 10], [126, 10], [127, 9], [128, 9], [129, 10], [130, 9], [131, 10], [132, 9], [133, 9], [134, 10], [135, 10], [136, 10], [137, 10], [138, 10], [139, 10], [140, 10], [141, 10], [142, 9], [143, 10], [144, 9], [145, 9], [146, 10], [147, 9], [148, 9], [149, 9], [150, 9], [151, 9], [152, 9], [153, 9], [154, 9], [155, 10], [156, 9], [157, 9], [158, 9], [159, 9], [160, 10], [161, 9], [162, 9], [163, 9], [164, 9], [165, 9], [166, 10], [167, 9], [168, 9], [169, 9], [170, 10], [171, 10], [172, 10], [173, 10], [174, 10], [175, 9], [176, 9], [177, 9], [178, 10], [179, 10], [180, 10], [181, 9], [182, 10], [183, 9], [184, 10], [185, 9], [186, 9], [187, 10], [188, 10], [189, 9], [190, 9], [191, 9], [192, 9], [193, 9], [194, 9], [195, 9], [196, 10], [197, 10], [198, 9], [199, 9], [200, 9], [201, 9], [202, 10], [203, 10], [204, 10], [205, 9], [206, 9], [207, 10], [208, 9], [209, 9], [210, 9], [211, 9], [212, 10], [213, 9], [214, 10], [215, 10], [216, 10], [217, 10], [218, 10], [219, 9], [220, 10], [221, 9], [222, 10], [223, 9], [224, 10], [225, 10], [226, 9], [227, 9], [228, 9], [229, 9], [230, 10], [231, 9], [232, 10], [233, 10], [234, 10], [235, 10], [236, 10], [237, 10], [238, 10], [239, 10], [240, 10], [241, 10], [242, 9], [243, 9], [244, 9], [245, 9], [246, 9], [247, 9], [248, 9], [249, 9], [250, 9], [251, 9], [252, 10], [253, 10], [254, 9], [255, 9], [256, 10], [257, 9], [258, 10], [259, 9], [260, 10], [261, 9], [262, 10], [263, 9], [264, 10], [265, 9], [266, 9], [267, 9], [268, 9], [269, 9], [270, 10], [271, 10], [272, 10], [273, 9], [274, 10], [275, 9], [276, 9], [277, 9], [278, 9], [279, 9], [280, 9], [281, 9], [282, 9], [283, 9], [284, 9], [285, 9], [286, 9], [287, 9], [288, 9], [289, 10], [290, 9], [291, 9], [292, 9], [293, 9], [294, 9], [295, 9], [296, 9]], '2064': [[1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 9], [18, 9], [19, 9], [20, 9], [21, 10], [22, 10], [23, 9], [24, 9], [25, 10], [26, 10], [27, 10], [28, 10], [29, 9], [30, 9], [31, 10], [32, 9], [33, 9], [34, 9], [35, 9], [36, 9], [37, 9], [38, 10], [39, 9], [40, 9], [41, 10], [42, 9], [43, 10], [44, 10], [45, 10], [46, 9], [47, 10], [48, 10], [49, 10], [50, 9], [51, 10], [52, 10], [53, 10], [54, 9], [55, 9], [56, 10], [57, 9], [58, 9], [59, 9], [60, 9], [61, 9], [62, 9], [63, 9], [64, 9], [65, 9], [66, 10], [67, 10], [68, 9], [69, 10], [70, 9], [71, 9], [72, 9], [73, 9], [74, 9], [75, 9], [76, 10], [77, 9], [78, 9], [79, 9], [80, 9], [81, 10], [82, 9], [83, 9], [84, 9], [85, 10], [86, 9], [87, 9], [88, 9], [89, 9], [90, 9], [91, 9], [92, 9], [93, 9], [94, 10], [95, 10], [96, 10], [97, 10], [98, 10], [99, 10], [100, 9], [101, 9], [102, 10], [103, 9], [104, 9], [105, 9], [106, 10], [107, 10], [108, 9], [109, 9], [110, 9], [111, 10]], '2065': [[1, 10], [2, 10], [3, 9], [4, 10], [5, 9], [6, 9], [7, 9], [8, 10], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 10], [16, 9], [17, 10], [18, 9], [19, 9], [20, 9], [21, 9], [22, 9], [23, 9], [24, 10], [25, 9], [26, 9], [27, 9], [28, 9], [29, 10], [30, 10], [31, 9], [32, 9], [33, 9], [34, 9], [35, 9], [36, 9], [37, 10], [38, 9], [39, 9], [40, 9], [41, 9], [42, 9], [43, 9], [44, 10], [45, 10], [46, 9], [47, 10], [48, 10], [49, 10], [50, 9], [51, 9], [52, 9], [53, 9], [54, 9], [55, 9], [56, 10], [57, 10], [58, 10], [59, 9], [60, 10], [61, 10], [62, 9], [63, 9], [64, 10], [65, 10], [66, 10], [67, 10], [68, 9], [69, 9], [70, 9], [71, 9], [72, 10]]}, '08-100-10-2065-01-01': {'2065': [[73, 9], [74, 9], [75, 9], [77, 10], [78, 10], [79, 9], [80, 9], [81, 9], [82, 10], [83, 9], [84, 9], [85, 9], [86, 10], [87, 9], [88, 9], [89, 9], [90, 9], [91, 9], [92, 9], [93, 10], [94, 9], [95, 9], [96, 10], [97, 9], [98, 9], [99, 10], [100, 10], [101, 10], [102, 10], [103, 9], [104, 9], [105, 9], [106, 9], [107, 9], [108, 10], [109, 9], [110, 9], [111, 10], [112, 10], [113, 10], [114, 10], [115, 9], [116, 10], [117, 10], [118, 9], [119, 9], [120, 9], [121, 10]], '2066': [[1, 9], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 9], [15, 9], [16, 9], [17, 10], [18, 9], [19, 9], [20, 10], [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], [36, 9], [35, 9], [34, 9], [33, 10], [32, 10], [31, 10], [30, 10], [29, 10], [28, 10], [29, 10], [30, 9], [31, 9], [32, 10], [33, 9], [34, 9], [35, 9], [36, 9], [37, 9], [38, 9], [39, 9], [40, 9], [41, 9], [42, 9], [43, 9], [44, 9], [45, 10], [46, 9], [47, 10], [48, 10], [49, 10], [50, 9], [51, 9], [52, 10], [53, 10], [54, 9], [55, 9], [56, 10], [57, 9], [58, 9], [59, 9], [60, 10], [61, 10], [62, 10], [63, 10], [64, 9], [65, 9], [66, 9], [67, 9], [68, 9], [69, 9], [70, 10], [71, 9], [72, 9], [73, 9], [74, 9], [75, 9], [76, 9], [77, 9], [78, 10], [79, 9], [80, 10], [81, 10], [82, 9], [83, 9], [84, 9], [85, 10], [86, 9], [87, 9], [88, 9], [89, 10], [90, 9], [91, 9], [92, 9], [93, 10], [94, 10], [95, 9], [96, 9], [97, 9], [98, 10], [99, 10], [100, 10], [101, 10], [102, 10], [103, 9], [104, 9], [105, 10], [106, 10], [107, 10], [108, 10], [109, 10], [110, 9], [111, 9], [112, 9], [113, 10], [114, 10], [115, 10], [116, 9], [117, 9], [118, 10], [119, 9], [120, 10], [121, 10], [122, 9], [123, 9], [124, 9], [125, 10], [126, 10], [127, 9], [128, 9], [129, 9], [130, 10], [131, 10], [132, 9], [133, 9], [134, 9], [134, 9], [135, 10], [136, 10], [137, 10], [138, 10], [139, 9], [140, 9], [141, 9], [142, 9], [143, 10], [144, 10], [145, 10], [146, 9], [147, 9], [122, 10]]}, '08-100-10-2067-01-01': {'2067': [[1, 10], [2, 10], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [19, 10], [20, 9], [21, 10], [22, 10], [23, 9], [24, 10], [25, 10], [26, 9], [27, 10], [28, 10], [29, 10], [30, 9], [31, 10], [32, 10], [33, 10], [34, 10], [35, 9], [36, 10], [37, 9], [38, 9], [39, 9], [40, 10], [41, 10], [42, 10], [43, 9], [44, 9], [45, 9], [46, 10], [47, 9], [48, 10], [49, 9], [50, 9], [51, 10], [52, 10], [53, 9], [54, 9], [55, 10], [56, 9], [57, 10], [58, 10], [59, 9], [60, 10], [61, 10], [62, 10], [63, 9], [64, 10], [65, 9], [66, 9], [67, 9], [68, 9], [69, 9], [70, 10], [71, 10], [72, 9], [73, 9], [74, 10], [75, 10], [76, 10], [77, 10], [78, 10], [79, 10], [80, 10], [81, 10], [82, 10], [83, 9], [84, 9], [85, 10], [86, 10], [87, 10], [88, 10], [89, 10], [90, 9], [91, 9], [92, 9], [93, 9], [94, 9], [95, 9], [96, 10], [97, 9], [98, 9], [99, 9], [100, 9], [101, 10], [102, 9], [103, 10], [104, 10], [105, 9], [106, 9], [107, 10], [108, 9], [109, 9], [110, 9], [111, 9], [112, 9], [113, 9], [114, 10], [115, 10], [116, 10], [117, 9], [118, 10], [119, 10], [120, 10], [121, 10], [122, 10], [123, 10], [124, 9], [125, 10], [126, 10], [127, 10], [128, 9], [129, 9], [130, 10], [131, 10], [132, 9], [133, 10], [134, 9], [135, 9], [136, 9], [137, 10], [138, 9], [139, 9], [140, 10], [141, 9], [142, 10], [143, 10], [144, 9]], '': []}, '08-100-10-2068-01-01': {'2068': [[1, 9], [2, 9], [3, 10], [4, 10], [5, 9], [6, 9], [7, 10], [8, 9], [9, 10], [10, 10], [11, 10], [12, 10], [13, 9], [14, 9], [15, 9], [16, 10], [17, 10], [18, 10], [19, 10], [20, 9], [21, 10], [22, 10], [23, 10], [24, 10], [25, 9], [26, 10], [27, 10], [28, 9], [29, 9], [30, 9], [31, 9], [32, 9], [33, 9], [34, 9], [35, 9], [36, 9], [37, 9], [38, 9], [39, 9], [40, 9], [41, 9], [42, 9], [43, 9], [44, 9], [45, 9], [46, 9], [47, 9], [48, 9], [49, 9], [50, 9], [51, 10], [52, 9], [53, 9], [54, 10], [55, 9], [56, 9], [57, 10], [58, 9], [59, 10], [60, 10], [61, 10], [62, 9], [63, 10], [64, 9], [65, 9], [66, 9], [67, 10], [68, 9], [69, 9], [70, 9], [71, 9], [72, 10], [73, 9], [74, 10], [75, 10], [76, 10], [77, 10], [78, 9], [79, 9], [80, 9], [81, 10], [82, 10], [83, 10], [84, 10], [85, 9], [86, 10], [87, 10], [88, 10], [89, 10], [90, 9], [91, 9], [92, 9], [93, 10], [94, 9], [95, 10], [96, 9], [97, 10], [98, 10], [99, 10], [100, 9], [101, 9], [102, 9], [103, 9], [104, 10], [105, 10], [106, 9], [107, 10], [108, 10], [109, 10], [110, 10], [111, 10], [112, 10], [113, 9], [114, 9], [115, 9], [116, 10], [117, 10], [118, 9], [119, 9], [120, 9], [121, 10], [122, 9], [123, 10], [124, 9], [125, 9], [126, 10], [127, 9], [128, 9]], '2069': [[1, 9], [2, 9], [3, 9], [4, 10], [5, 9], [6, 10], [7, 9], [8, 10], [9, 10], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 10], [16, 9], [17, 9], [18, 10], [19, 9], [20, 10], [21, 10], [22, 9], [23, 9], [24, 9], [25, 10], [26, 10], [27, 10], [28, 10], [29, 10], [30, 10], [31, 10], [32, 10], [33, 10], [34, 10], [35, 10], [36, 9], [37, 9], [38, 9], [39, 10], [40, 9], [41, 10], [42, 10], [43, 10], [44, 9], [45, 10], [46, 9], [47, 9], [48, 9], [49, 9], [50, 10], [51, 9], [52, 9], [53, 9], [54, 9], [55, 9], [56, 9], [57, 10], [58, 10], [59, 9], [60, 9], [61, 10], [62, 10], [63, 10], [64, 10], [65, 10], [66, 9], [67, 9], [68, 10], [69, 10], [70, 9], [71, 9], [72, 9], [73, 9], [74, 9], [75, 9], [76, 9], [77, 9], [78, 9], [79, 10], [80, 10], [81, 10], [82, 9], [83, 10], [84, 9], [85, 10], [86, 10], [87, 10], [88, 10], [89, 10], [90, 9], [91, 9], [92, 9], [93, 9], [94, 9], [95, 9], [96, 9], [97, 10], [98, 10], [99, 10], [100, 9], [101, 10], [102, 9], [103, 10], [104, 10], [105, 10], [106, 9], [107, 9], [108, 10], [109, 9], [110, 10], [111, 9], [112, 10], [113, 10], [114, 10], [115, 10], [116, 9], [117, 9], [118, 9], [119, 9]]}, '08-100-10-2073-01-01': {'2073': [[94, 9], [95, 10], [96, 9], [97, 9], [98, 9], [99, 9], [100, 10], [101, 9], [102, 10], [103, 10], [104, 9], [105, 9], [106, 10], [107, 9], [108, 10], [109, 10], [110, 10], [111, 10], [112, 9], [113, 9], [114, 9], [115, 9], [116, 9], [117, 10], [119, 10], [120, 10], [121, 10], [122, 9], [123, 9], [124, 10], [125, 10]]}, '08-100-10-2071-01-01': {'2071': [[122, 9], [123, 9], [124, 10], [125, 9], [126, 9], [127, 9], [131, 10], [132, 10], [133, 10], [134, 10], [135, 10], [136, 10], [137, 10], [138, 9], [139, 10], [140, 10], [141, 10], [142, 10], [143, 10], [144, 10], [145, 9], [146, 9], [147, 9], [148, 10], [149, 9], [150, 10], [151, 10], [152, 9]], '2072': [[1, 10], [2, 9], [3, 10], [4, 10], [5, 10], [6, 9], [7, 9], [8, 9], [9, 10], [10, 9], [11, 9], [12, 9], [13, 9], [14, 10], [15, 10], [16, 10], [17, 9], [18, 10], [19, 10], [20, 9], [21, 9], [22, 10], [23, 9], [24, 9], [25, 9], [26, 10], [27, 10], [29, 10], [30, 10], [31, 10], [32, 9], [33, 10], [34, 9], [35, 9], [36, 9], [37, 9], [38, 9], [39, 10], [40, 10], [41, 10], [42, 9], [43, 9], [44, 9], [45, 9], [46, 9], [47, 9], [48, 9], [49, 9], [50, 9], [51, 10], [52, 10], [53, 10], [54, 10], [55, 9], [56, 9], [57, 10], [58, 10], [59, 9], [60, 9], [61, 10], [62, 10], [63, 10], [64, 10], [65, 10], [66, 10], [67, 10], [68, 9], [69, 10], [70, 10], [71, 10], [72, 10], [73, 10], [74, 10], [75, 10], [76, 10], [77, 10], [78, 9], [79, 10], [80, 9], [81, 9], [82, 10], [83, 9], [84, 9], [85, 9], [86, 9], [87, 10], [88, 9], [89, 10], [90, 10], [91, 10], [92, 9], [93, 9], [94, 9], [95, 10], [96, 10], [97, 10], [98, 9], [99, 9], [100, 10], [101, 10], [102, 9], [103, 9], [104, 10], [105, 10], [106, 10], [107, 9], [108, 9], [109, 10], [110, 10], [111, 9], [112, 9], [113, 10], [114, 10], [1115, 10], [1114, 9], [1113, 9], [1112, 10], [1111, 10], [1110, 10], [1109, 10], [1108, 10], [1107, 10], [1106, 10], [1105, 10], [1104, 10], [1103, 10], [1102, 10], [1101, 10], [1100, 10], [1099, 10], [1098, 10], [1097, 10], [1096, 10], [1095, 10], [1094, 10], [1093, 10], [1092, 10], [1091, 10], [1090, 10], [1089, 10], [1088, 10], [1087, 10], [1086, 10], [1085, 10], [1084, 10], [1083, 10], [1082, 10], [1081, 10], [1080, 10], [1079, 10], [1078, 10], [1077, 10], [1076, 10], [1075, 10], [1074, 10], [1073, 10], [1072, 10], [1071, 10], [1070, 10], [1069, 10], [1068, 10], [1067, 10], [1066, 10], [1065, 10], [1064, 10], [1063, 10], [1062, 10], [1061, 10], [1060, 10], [1059, 10], [1058, 10], [1057, 10], [1056, 10], [1055, 10], [1054, 10], [1053, 10], [1052, 10], [1051, 10], [1050, 10], [1049, 10], [1048, 10], [1047, 10], [1046, 10], [1045, 10], [1044, 10], [1043, 10], [1042, 10], [1041, 10], [1040, 10], [1039, 10], [1038, 10], [1037, 10], [1036, 10], [1035, 10], [1034, 10], [1033, 10], [1032, 10], [1031, 10], [1030, 10], [1029, 10], [1028, 10], [1027, 10], [1026, 10], [1025, 10], [1024, 10], [1023, 10], [1022, 10], [1021, 10], [1020, 10], [1019, 10], [1018, 10], [1017, 10], [1016, 10], [1015, 10], [1014, 10], [1013, 10], [1012, 10], [1011, 10], [1010, 10], [1009, 10], [1008, 10], [1007, 10], [1006, 10], [1005, 10], [1004, 10], [1003, 10], [1002, 10], [1001, 10], [1000, 10], [999, 10], [998, 10], [997, 10], [996, 10], [995, 10], [994, 10], [993, 10], [992, 10], [991, 10], [990, 10], [989, 10], [988, 10], [987, 10], [986, 10], [985, 10], [984, 10], [983, 10], [982, 10], [981, 10], [980, 10], [979, 10], [978, 10], [977, 10], [976, 10], [975, 10], [974, 10], [973, 10], [972, 10], [971, 10], [970, 10], [969, 10], [968, 10], [967, 10], [966, 10], [965, 10], [964, 10], [963, 10], [962, 10], [961, 10], [960, 10], [959, 10], [958, 10], [957, 10], [956, 10], [955, 10], [954, 10], [953, 10], [952, 10], [951, 10], [950, 10], [949, 10], [948, 10], [947, 10], [946, 10], [945, 10], [944, 10], [943, 10], [942, 10], [941, 10], [940, 10], [939, 10], [938, 10], [937, 10], [936, 10], [935, 10], [934, 10], [933, 10], [932, 10], [931, 10], [930, 10], [929, 10], [928, 10], [927, 10], [926, 10], [925, 10], [924, 10], [923, 10], [922, 10], [921, 10], [920, 10], [919, 10], [918, 10], [917, 10], [916, 10], [915, 10], [914, 10], [913, 10], [912, 10], [911, 10], [910, 10], [909, 10], [908, 10], [907, 10], [906, 10], [905, 10], [904, 10], [903, 10], [902, 10], [901, 10], [900, 10], [899, 10], [898, 10], [897, 10], [896, 10], [895, 10], [894, 10], [893, 10], [892, 10], [891, 10], [890, 10], [889, 10], [888, 10], [887, 10], [886, 10], [885, 10], [884, 10], [883, 10], [882, 10], [881, 10], [880, 10], [879, 10], [878, 10], [877, 10], [876, 10], [875, 10], [874, 10], [873, 10], [872, 10], [871, 10], [870, 10], [869, 10], [868, 10], [867, 10], [866, 10], [865, 10], [864, 10], [863, 10], [862, 10], [861, 10], [860, 10], [859, 10], [858, 10], [857, 10], [856, 10], [855, 10], [854, 10], [853, 10], [852, 10], [851, 10], [850, 10], [849, 10], [848, 10], [847, 10], [846, 10], [845, 10], [844, 10], [843, 10], [842, 10], [841, 10], [840, 10], [839, 10], [838, 10], [837, 10], [836, 10], [835, 10], [834, 10], [833, 10], [832, 10], [831, 10], [830, 10], [829, 10], [828, 10], [827, 10], [826, 10], [825, 10], [824, 10], [823, 10], [822, 10], [821, 10], [820, 10], [819, 10], [818, 10], [817, 10], [816, 10], [815, 10], [814, 10], [813, 10], [812, 10], [811, 10], [810, 10], [809, 10], [808, 10], [807, 10], [806, 10], [805, 10], [804, 10], [803, 10], [802, 10], [801, 10], [800, 10], [799, 10], [798, 10], [797, 10], [796, 10], [795, 10], [794, 10], [793, 10], [792, 10], [791, 10], [790, 10], [789, 10], [788, 10], [787, 10], [786, 10], [785, 10], [784, 10], [783, 10], [782, 10], [781, 10], [780, 10], [779, 10], [778, 10], [777, 10], [776, 10], [775, 10], [774, 10], [773, 10], [772, 10], [771, 10], [770, 10], [769, 10], [768, 10], [767, 10], [766, 10], [765, 10], [764, 10], [763, 10], [762, 10], [761, 10], [760, 10], [759, 10], [758, 10], [757, 10], [756, 10], [755, 10], [754, 10], [753, 10], [752, 10], [751, 10], [750, 10], [749, 10], [748, 10], [747, 10], [746, 10], [745, 10], [744, 10], [743, 10], [742, 10], [741, 10], [740, 10], [739, 10], [738, 10], [737, 10], [736, 10], [735, 10], [734, 10], [733, 10], [732, 10], [731, 10], [730, 10], [729, 10], [728, 10], [727, 10], [726, 10], [725, 10], [724, 10], [723, 10], [722, 10], [721, 10], [720, 10], [719, 10], [718, 10], [717, 10], [716, 10], [715, 10], [714, 10], [713, 10], [712, 10], [711, 10], [710, 10], [709, 10], [708, 10], [707, 10], [706, 10], [705, 10], [704, 10], [703, 10], [702, 10], [701, 10], [700, 10], [699, 10], [698, 10], [697, 10], [696, 10], [695, 10], [694, 10], [693, 10], [692, 10], [691, 10], [690, 10], [689, 10], [688, 10], [687, 10], [686, 10], [685, 10], [684, 10], [683, 10], [682, 10], [681, 10], [680, 10], [679, 10], [678, 10], [677, 10], [676, 10], [675, 10], [674, 10], [673, 10], [672, 10], [671, 10], [670, 10], [669, 10], [668, 10], [667, 10], [666, 10], [665, 10], [664, 10], [663, 10], [662, 10], [661, 10], [660, 10], [659, 10], [658, 10], [657, 10], [656, 10], [655, 10], [654, 10], [653, 10], [652, 10], [651, 10], [650, 10], [649, 10], [648, 10], [647, 10], [646, 10], [645, 10], [644, 10], [643, 10], [642, 10], [641, 10], [640, 10], [639, 10], [638, 10], [637, 10], [636, 10], [635, 10], [634, 10], [633, 10], [632, 10], [631, 10], [630, 10], [629, 10], [628, 10], [627, 10], [626, 10], [625, 10], [624, 10], [623, 10], [622, 10], [621, 10], [620, 10], [619, 10], [618, 10], [617, 10], [616, 10], [615, 10], [614, 10], [613, 10], [612, 10], [611, 10], [610, 10], [609, 10], [608, 10], [607, 10], [606, 10], [605, 10], [604, 10], [603, 10], [602, 10], [601, 10], [600, 10], [599, 10], [598, 10], [597, 10], [596, 10], [595, 10], [594, 10], [593, 10], [592, 10], [591, 10], [590, 10], [589, 10], [588, 10], [587, 10], [586, 10], [585, 10], [584, 10], [583, 10], [582, 10], [581, 10], [580, 10], [579, 10], [578, 10], [577, 10], [576, 10], [575, 10], [574, 10], [573, 10], [572, 10], [571, 10], [570, 10], [569, 10], [568, 10], [567, 10], [566, 10], [565, 10], [564, 10], [563, 10], [562, 10], [561, 10], [560, 10], [559, 10], [558, 10], [557, 10], [556, 10], [555, 10], [554, 10], [553, 10], [552, 10], [551, 10], [550, 10], [549, 10], [548, 10], [547, 10], [546, 10], [545, 10], [544, 10], [543, 10], [542, 10], [541, 10], [540, 10], [539, 10], [538, 10], [537, 10], [536, 10], [535, 10], [534, 10], [533, 10], [532, 10], [531, 10], [530, 10], [529, 10], [528, 10], [527, 10], [526, 10], [525, 10], [524, 10], [523, 10], [522, 10], [521, 10], [520, 10], [519, 10], [518, 10], [517, 10], [516, 10], [515, 10], [514, 10], [513, 10], [512, 10], [511, 10], [510, 10], [509, 10], [508, 10], [507, 10], [506, 10], [505, 10], [504, 10], [503, 10], [502, 10], [501, 10], [500, 10], [499, 10], [498, 10], [497, 10], [496, 10], [495, 10], [494, 10], [493, 10], [492, 10], [491, 10], [490, 10], [489, 10], [488, 10], [487, 10], [486, 10], [485, 10], [484, 10], [483, 10], [482, 10], [481, 10], [480, 10], [479, 10], [478, 10], [477, 10], [476, 10], [475, 10], [474, 10], [473, 10], [472, 10], [471, 10], [470, 10], [469, 10], [468, 10], [467, 10], [466, 10], [465, 10], [464, 10], [463, 10], [462, 10], [461, 10], [460, 10], [459, 10], [458, 10], [457, 10], [456, 10], [455, 10], [454, 10], [453, 10], [452, 10], [451, 10], [450, 10], [449, 10], [448, 10], [447, 10], [446, 10], [445, 10], [444, 10], [443, 10], [442, 10], [441, 10], [440, 10], [439, 10], [438, 10], [437, 10], [436, 10], [435, 10], [434, 10], [433, 10], [432, 10], [431, 10], [430, 10], [429, 10], [428, 10], [427, 10], [426, 10], [425, 10], [424, 10], [423, 10], [422, 10], [421, 10], [420, 10], [419, 10], [418, 10], [417, 10], [416, 10], [415, 10], [414, 10], [413, 10], [412, 10], [411, 10], [410, 10], [409, 10], [408, 10], [407, 10], [406, 10], [405, 10], [404, 10], [403, 10], [402, 10], [401, 10], [400, 10], [399, 10], [398, 10], [397, 10], [396, 10], [395, 10], [394, 10], [393, 10], [392, 10], [391, 10], [390, 10], [389, 10], [388, 10], [387, 10], [386, 10], [385, 10], [384, 10], [383, 10], [382, 10], [381, 10], [380, 10], [379, 10], [378, 10], [377, 10], [376, 10], [375, 10], [374, 10], [373, 10], [372, 10], [371, 10], [370, 10], [369, 10], [368, 10], [367, 10], [366, 10], [365, 10], [364, 10], [363, 10], [362, 10], [361, 10], [360, 10], [359, 10], [358, 10], [357, 10], [356, 10], [355, 10], [354, 10], [353, 10], [352, 10], [351, 10], [350, 10], [349, 10], [348, 10], [347, 10], [346, 10], [345, 10], [344, 10], [343, 10], [342, 10], [341, 10], [340, 10], [339, 10], [338, 10], [337, 10], [336, 10], [335, 10], [334, 10], [333, 10], [332, 10], [331, 10], [330, 10], [329, 10], [328, 10], [327, 10], [326, 10], [325, 10], [324, 10], [323, 10], [322, 10], [321, 10], [320, 10], [319, 10], [318, 10], [317, 10], [316, 10], [315, 10], [314, 10], [313, 10], [312, 10], [311, 10], [310, 10], [309, 10], [308, 10], [307, 10], [306, 10], [305, 10], [304, 10], [303, 10], [302, 10], [301, 10], [300, 10], [299, 10], [298, 10], [297, 10], [296, 10], [295, 10], [294, 10], [293, 10], [292, 10], [291, 10], [290, 10], [289, 10], [288, 10], [287, 10], [286, 10], [285, 10], [284, 10], [283, 10], [282, 10], [281, 10], [280, 10], [279, 10], [278, 10], [277, 10], [276, 10], [275, 10], [274, 10], [273, 10], [272, 10], [271, 10], [270, 10], [269, 10], [268, 10], [267, 10], [266, 10], [265, 10], [264, 10], [263, 10], [262, 10], [261, 10], [260, 10], [259, 10], [258, 10], [257, 10], [256, 10], [255, 10], [254, 10], [253, 10], [252, 10], [251, 10], [250, 10], [249, 10], [248, 10], [247, 10], [246, 10], [245, 10], [244, 10], [243, 10], [242, 10], [241, 10], [240, 10], [239, 10], [238, 10], [237, 10], [236, 10], [235, 10], [234, 10], [233, 10], [232, 10], [231, 10], [230, 10], [229, 10], [228, 10], [227, 10], [226, 10], [225, 10], [224, 10], [223, 10], [222, 10], [221, 10], [220, 10], [219, 10], [218, 10], [217, 10], [216, 10], [215, 10], [214, 10], [213, 10], [212, 10], [211, 10], [210, 10], [209, 10], [208, 10], [207, 10], [206, 10], [205, 10], [204, 10], [203, 10], [202, 10], [201, 10], [200, 10], [199, 10], [198, 10], [197, 10], [196, 10], [195, 10], [194, 10], [193, 10], [192, 10], [191, 10], [190, 10], [189, 10], [188, 10], [187, 10], [186, 10], [185, 10], [184, 10], [183, 10], [182, 10], [181, 10], [180, 10], [179, 10], [178, 10], [177, 10], [176, 10], [175, 10], [174, 10], [173, 10], [172, 10], [171, 10], [170, 10], [169, 10], [168, 10], [167, 10], [166, 10], [165, 10], [164, 10], [163, 10], [162, 10], [161, 10], [160, 10], [159, 10], [158, 10], [157, 10], [156, 10], [155, 10], [154, 10], [153, 10], [152, 10], [151, 10], [150, 10], [149, 10], [148, 10], [147, 10], [146, 10], [145, 10], [144, 10], [143, 10], [142, 10], [141, 10], [140, 10], [139, 10], [138, 10], [137, 10], [136, 10], [135, 10], [134, 10], [133, 10], [132, 10], [131, 10], [130, 10], [129, 10], [128, 10], [127, 10], [126, 10], [125, 10], [124, 10], [123, 10], [122, 10], [121, 10], [120, 10], [119, 10], [118, 10], [117, 10], [118, 10], [119, 9], [120, 10], [121, 9], [122, 10], [123, 10], [124, 10], [125, 10], [126, 9], [127, 10], [128, 10], [129, 10], [130, 10], [131, 10], [132, 10], [133, 9], [134, 10], [135, 9], [136, 9], [137, 9], [138, 9], [139, 9], [140, 10], [141, 9], [142, 9], [143, 9], [144, 9], [145, 10], [146, 10], [147, 10], [148, 10], [149, 9], [150, 10]], '2073': [[1, 10], [2, 10], [3, 9], [4, 9], [5, 9], [6, 9], [7, 10], [8, 9], [9, 9], [10, 9], [11, 9], [12, 10], [13, 9], [14, 9], [15, 9], [16, 10], [17, 9], [18, 9], [19, 10], [20, 9], [21, 10], [22, 9], [23, 9], [24, 9], [25, 10], [26, 10], [27, 10], [28, 10], [29, 10], [30, 10], [31, 10], [32, 9], [33, 9], [34, 10], [35, 10], [36, 10], [37, 9], [38, 10], [39, 10], [40, 9], [41, 10], [42, 10], [43, 10], [44, 9], [45, 9], [46, 9], [47, 10], [48, 10], [49, 10], [50, 10], [51, 10], [52, 9], [53, 10], [54, 9], [55, 9], [56, 9], [57, 9], [58, 10], [59, 10], [60, 10], [61, 10], [62, 9], [63, 9], [64, 10], [65, 9], [66, 9], [67, 10], [68, 10], [69, 9], [70, 9], [71, 9], [72, 9], [73, 10], [74, 10], [75, 10], [76, 9], [77, 9], [78, 10], [79, 10], [80, 9], [81, 10], [82, 10], [83, 9], [84, 9], [85, 10], [86, 9], [87, 9], [88, 9], [89, 10], [90, 10], [91, 9], [92, 9], [93, 9]]}, '08-100-10-2070-01-01': {'2070': [[1, 9], [2, 10], [3, 9], [4, 9], [5, 10], [6, 9], [7, 9], [8, 9], [9, 10], [10, 10], [11, 10], [12, 9], [13, 9], [14, 9], [15, 10], [16, 10], [17, 9], [18, 9], [19, 9], [20, 9], [21, 9], [22, 10], [23, 9], [24, 9], [25, 10], [26, 9], [27, 9], [28, 10], [29, 9], [30, 10], [31, 10], [32, 9], [33, 9], [34, 10], [35, 10], [36, 10], [37, 10], [38, 9], [39, 9], [40, 10], [41, 9], [42, 10], [43, 10], [44, 9], [45, 9], [46, 9], [47, 9], [48, 9], [49, 9], [50, 10], [51, 9], [52, 10], [53, 10], [54, 10], [55, 10], [56, 9], [57, 10], [58, 10], [59, 10], [60, 9], [61, 9], [62, 10], [63, 10], [64, 10], [65, 10], [66, 9], [67, 10], [68, 10], [69, 9], [70, 9], [71, 10], [72, 10], [73, 10], [74, 9], [75, 9], [76, 9], [77, 10], [78, 10], [79, 10], [80, 10], [81, 9], [82, 10], [83, 10], [84, 9], [85, 9], [86, 10], [87, 9], [88, 9], [89, 9], [90, 10], [91, 10], [92, 10], [93, 9], [94, 9], [95, 10], [96, 10], [97, 10], [98, 9], [99, 10], [100, 10], [101, 9], [102, 9], [103, 9], [104, 10], [105, 9], [106, 9], [107, 10], [108, 9], [109, 9], [110, 10], [111, 9], [112, 9], [113, 9], [114, 9], [115, 10], [116, 9], [117, 9], [118, 9], [119, 9], [120, 9], [121, 10], [122, 10], [123, 9], [124, 9], [125, 9], [126, 10], [127, 10], [128, 10], [129, 10], [130, 10], [131, 9], [132, 9], [132, 10], [133, 10], [134, 9], [135, 10], [136, 9], [137, 9], [138, 10]]}, '08-100-10-2058-01-01': {'2059': [[164, 9], [163, 10], [162, 9], [161, 10], [160, 9], [159, 10], [160, 9], [159, 10], [158, 10], [157, 10], [156, 10], [155, 10], [154, 10], [153, 10], [152, 9], [151, 9], [150, 10], [149, 10], [148, 10], [147, 10], [146, 10], [145, 9], [144, 9], [143, 9], [142, 10], [141, 9], [140, 9], [139, 9], [138, 9], [137, 9], [136, 10], [135, 9], [134, 10], [133, 10], [132, 10], [131, 10], [130, 9], [129, 10], [128, 10], [127, 9], [126, 10], [125, 9], [124, 9], [123, 9], [122, 10], [121, 10], [120, 9], [119, 10], [118, 10], [117, 10], [116, 9], [115, 10], [114, 9], [113, 10], [112, 9], [111, 10], [110, 10], [109, 9], [108, 10], [107, 10], [106, 10], [105, 10], [104, 10], [103, 10], [102, 10], [101, 10], [100, 10], [99, 10], [98, 10], [97, 10], [98, 9], [97, 10], [96, 10], [95, 9], [94, 10], [93, 9], [92, 10], [91, 10], [90, 10], [89, 10], [88, 9], [87, 10], [86, 9], [85, 9], [84, 9], [83, 10], [82, 10], [81, 10], [80, 9], [79, 9], [78, 9], [77, 10], [76, 9], [75, 10], [74, 9], [73, 9], [72, 10], [71, 10], [70, 9], [69, 9], [68, 10], [67, 9], [66, 10], [65, 10], [64, 10], [63, 10], [62, 9], [61, 9], [60, 9], [59, 10], [58, 10], [57, 10], [56, 10], [55, 10], [54, 10], [53, 10], [52, 10], [51, 10], [50, 10], [49, 9], [48, 10], [47, 9], [46, 9], [45, 10], [44, 9], [43, 9], [42, 9], [41, 9], [40, 9], [39, 10], [38, 10], [37, 10], [36, 10], [35, 10], [34, 10], [33, 10], [32, 10], [31, 10], [30, 10], [29, 10], [28, 10], [27, 9], [26, 9], [25, 10], [24, 10], [23, 10], [22, 10], [21, 10], [20, 9], [19, 10], [18, 10], [17, 9], [16, 10], [15, 10], [14, 10], [13, 10], [12, 9], [11, 9], [10, 10], [9, 10], [8, 9], [7, 9], [6, 9], [5, 10], [4, 10], [3, 10], [2, 10], [1, 9]], '2058': [[162, 10], [161, 10], [160, 10], [159, 10], [158, 10], [157, 9], [176, 9], [175, 9], [174, 10], [173, 10], [172, 9], [171, 9], [170, 9], [169, 10], [168, 10], [167, 10], [166, 10], [165, 10], [164, 10], [163, 10], [162, 10], [161, 10], [160, 10], [159, 10], [158, 10], [157, 10], [156, 10], [149, 10], [148, 10], [147, 10], [146, 10], [145, 10], [144, 10], [143, 9], [142, 10], [141, 9], [140, 9], [139, 10], [138, 9], [137, 9], [136, 9], [135, 10], [134, 10], [133, 10], [135, 10], [134, 9], [133, 9], [132, 9], [131, 10], [130, 10], [129, 10], [128, 10], [127, 10], [126, 9], [125, 10], [124, 10], [123, 10], [124, 9], [125, 10], [126, 9], [127, 9], [128, 10], [129, 10], [130, 10], [131, 10], [132, 10], [133, 10], [134, 10], [135, 10], [136, 10], [137, 10], [138, 10], [117, 9], [116, 9], [115, 9], [114, 10], [113, 10], [112, 10], [111, 10], [110, 10], [109, 10], [108, 9], [107, 9], [106, 10], [105, 9], [104, 10], [103, 10], [102, 10], [101, 10], [100, 10], [99, 10], [98, 10], [97, 10], [96, 10], [95, 10], [94, 10], [93, 10], [92, 10], [91, 9], [90, 9], [89, 9], [88, 10], [87, 9], [86, 9], [85, 9], [84, 9], [83, 10], [82, 10], [81, 10], [80, 10], [79, 9], [78, 10], [77, 9], [76, 10], [75, 9], [74, 10], [73, 10], [72, 9], [71, 10], [70, 10], [69, 10], [68, 10], [67, 10], [66, 10], [65, 10], [64, 10], [63, 10], [62, 10], [61, 10], [60, 9], [59, 9], [58, 9], [57, 10], [56, 10], [55, 9], [54, 9], [53, 9], [52, 9], [51, 10], [50, 10], [49, 9], [48, 9], [47, 9], [46, 10], [45, 10], [44, 9], [43, 9], [42, 10], [41, 10], [40, 10], [39, 10], [38, 10], [37, 10], [36, 10], [35, 10], [34, 10], [33, 9], [32, 9], [31, 9], [30, 9], [29, 9], [28, 10], [27, 10], [26, 10], [25, 10], [24, 10], [23, 10], [22, 10], [21, 10], [20, 10], [19, 10], [18, 10], [17, 10], [16, 10], [15, 9], [14, 10], [13, 10], [12, 9], [11, 10], [10, 9], [9, 10], [8, 10], [7, 9], [6, 10], [5, 9], [4, 9], [3, 9], [2, 9], [1, 9]], '2069': [[120, 9], [121, 10], [122, 9], [123, 10], [124, 10], [125, 10], [126, 10], [127, 9], [128, 9], [129, 9], [130, 9], [131, 9], [132, 9], [133, 10], [134, 9], [135, 9], [136, 10], [137, 10], [138, 10], [139, 9], [140, 10], [141, 10], [142, 10], [143, 10], [144, 10], [145, 10], [146, 10], [147, 9], [148, 10], [149, 10], [150, 10], [151, 10], [152, 9], [153, 10], [154, 10], [155, 10], [156, 10], [157, 10], [158, 10], [159, 9], [160, 10], [161, 10], [162, 9], [163, 9], [164, 9], [165, 9], [166, 10], [167, 10], [168, 9], [169, 9], [170, 9], [171, 9], [172, 10], [173, 9], [174, 9], [175, 9], [176, 9], [177, 10], [178, 10], [179, 10], [180, 10], [181, 9], [182, 9], [183, 9], [184, 10], [185, 9], [186, 10], [187, 10], [188, 10], [189, 10], [190, 9]]}}

		*/
		//'08-100-02-2070-04-01'
		//var detail = {'08-100-02-2070-04-01': {'2070': [[1, 1], [2, 1], [3, 2], [4, 1], [5, 2], [6, 1], [7, 1], [8, 1], [9, 2], [10, 1], [11, 2], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 2], [20, 2], [21, 1], [22, 1], [23, 2], [24, 2], [25, 1], [26, 1], [27, 2], [28, 2], [29, 1], [30, 1], [31, 2], [32, 2], [33, 1], [34, 1], [35, 1], [36, 1], [37, 1], [38, 2], [39, 1], [40, 2], [41, 2], [42, 2], [43, 1], [44, 1], [45, 1], [46, 2], [47, 1], [48, 1], [49, 1], [50, 1], [51, 1], [52, 1], [53, 1], [54, 1], [55, 2], [56, 1], [57, 2]], '58-58-7': [], '2071': [[1, 2], [2, 1], [3, 2], [4, 2], [5, 2], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 2], [12, 1], [13, 2], [14, 1], [15, 2], [16, 2], [17, 2], [18, 1], [19, 1], [20, 1], [21, 1], [22, 2]]}}
	 	
	 	//var detail = {'08-100-02-2070-04-01': {'2070': [[1, 2], [2, 2], [3, 2], [4, 1], [5, 2], [6, 1], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 1], [17, 2], [18, 2], [19, 2], [20, 2], [21, 2], [22, 2], [23, 2], [24, 2], [25, 1], [26, 2], [27, 2], [28, 2], [29, 2], [30, 2], [31, 2], [32, 2], [33, 2], [34, 2], [35, 2], [36, 1], [37, 1], [38, 2], [39, 2], [40, 2], [41, 2], [42, 2], [43, 2], [44, 2], [45, 1], [46, 2], [47, 2], [48, 2], [49, 1], [50, 2], [51, 1], [52, 1], [53, 2], [54, 2], [55, 2], [56, 2], [57, 2], [58, 2]], '2071': [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 1], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [19, 2], [20, 2], [21, 1], [22, 2]]}}
		var detail = {'08-100-02-2063-04-01': {'2063': [[64, 1], [65, 1], [66, 1], [67, 2], [68, 2], [69, 2]], '2064': [[1, 1], [2, 2], [3, 1], [4, 2], [5, 2], [6, 1], [7, 2], [8, 2], [9, 2], [10, 2], [11, 1], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [19, 1], [20, 2]], '2065': [[1, 1], [2, 1], [3, 1], [4, 2], [5, 1], [6, 1], [7, 1], [8, 1], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 1], [15, 1], [16, 1], [17, 2], [18, 1], [19, 1], [20, 2], [21, 2], [22, 2], [23, 1], [24, 1], [25, 2], [26, 2], [27, 2], [28, 2], [29, 2]], '2066': [[1, 2], [5, 2], [6, 2], [7, 1], [8, 1], [9, 2], [10, 1], [11, 1], [12, 2], [13, 2], [14, 2], [15, 2], [16, 1], [17, 1], [18, 2], [19, 2], [20, 2], [21, 1], [22, 2], [23, 2], [24, 2], [25, 1], [26, 1], [27, 2], [28, 2], [29, 1], [30, 1], [31, 1], [32, 2], [33, 1], [34, 1], [35, 1], [36, 1], [37, 1], [39, 1], [40, 2], [41, 2], [42, 2], [43, 2], [44, 1], [45, 1], [46, 1], [47, 1], [48, 2], [49, 1], [50, 1], [51, 2], [52, 2], [53, 2], [54, 2], [55, 2], [56, 1], [57, 2], [58, 2], [59, 2], [60, 2], [61, 1], [62, 2]], '2067': [[1, 2], [2, 1], [3, 2], [4, 2], [5, 2], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 2], [12, 1], [13, 2], [14, 1], [15, 2], [16, 1], [17, 1], [18, 2], [19, 1], [20, 1], [21, 2], [22, 2], [23, 2], [24, 1], [25, 2], [26, 2], [27, 2], [28, 2], [29, 2], [30, 2], [31, 2], [32, 1], [33, 1], [34, 1], [35, 1], [36, 2], [37, 1], [38, 2], [39, 2], [40, 2], [41, 2], [42, 1], [43, 1], [44, 2], [2, 1], [3, 2], [4, 2]]}}

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
		
		if(resultNo > 0)
		{
			/*
			var englishPla = "Pakhribas-" + resultNo;
			
			var nepaliPla = "पाख्रिबास-" + nepWardNew[resultNo-1];
			nepWardNew[resultNo-9];			
			var engBirthPlace = document.getElementById("BirthPlaceEnglish");
			engBirthPlace.value = englishPla;
			var nepBirthPlace = document.getElementById("BirthPlaceNepali");
			nepBirthPlace.value = nepaliPla;
	
	  
	  		var mp = document.getElementById('MarriagePlace');
			mp.value = englishPla;

			*/
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



