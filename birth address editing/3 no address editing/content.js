
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		//'08-100-03-2070-01-01', '08-100-03-2064-01-01', '08-100-03-2072-01-01', '08-100-03-2072-01-03', '08-100-03-2072-01-02'
		
		/*
		'08-100-03-2070-01-01', '08-100-03-2064-01-01', '08-100-03-2072-01-01', 
		'08-100-03-2072-01-03', '08-100-03-2072-01-02'
		*/
		
		var detail = {'08-100-03-2070-01-01': {'2070': [[144, 4], [145, 3], [146, 3], [147, 3], [148, 3], [149, 3], [150, 3], [151, 3], [152, 4], [153, 4], [154, 3], [155, 3], [156, 3], [157, 3], [158, 3], [159, 4]], '2071': [[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 3], [9, 3], [10, 4], [11, 4], [12, 4], [13, 3], [14, 3], [15, 4], [16, 3], [17, 3], [18, 3], [19, 3], [20, 4], [21, 4], [22, 4], [23, 3], [24, 4], [25, 4], [26, 4], [27, 4], [28, 4], [29, 4], [30, 4], [31, 3], [32, 4], [33, 3], [34, 3], [35, 3], [36, 4], [37, 3], [38, 3], [39, 3], [40, 4], [41, 4], [42, 4], [43, 4], [44, 4], [45, 3], [46, 3], [47, 3], [48, 4], [49, 4], [50, 4], [51, 4], [52, 3], [53, 3], [54, 4], [55, 4], [56, 4], [57, 4], [58, 4], [59, 4], [60, 3], [61, 3], [62, 3], [63, 3], [64, 4], [65, 4], [66, 3], [67, 3], [68, 3], [69, 4], [70, 4], [71, 4], [72, 4], [73, 4], [74, 4], [75, 3], [76, 4], [77, 3], [78, 4], [79, 4], [80, 4], [81, 4], [82, 4], [83, 4], [84, 4], [85, 4], [86, 4], [87, 3], [88, 4], [89, 3], [90, 3], [91, 4], [92, 3], [93, 4], [94, 4], [95, 4], [96, 3], [97, 3], [98, 3], [99, 3], [100, 3], [101, 3], [102, 3], [103, 3], [104, 3], [105, 4], [106, 4], [107, 4], [108, 4], [109, 4], [110, 4], [111, 4], [112, 4]]}, '08-100-03-2064-01-01': {'2064': [[1, 3], [2, 4], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 4], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3], [22, 4], [23, 3], [24, 4], [25, 3], [26, 3], [27, 3], [28, 3], [29, 4], [30, 3], [31, 4], [32, 4], [33, 4], [34, 3], [35, 4], [36, 3], [37, 4], [38, 3], [39, 4], [40, 4], [41, 4], [42, 3], [43, 4], [44, 3], [45, 4], [46, 4], [47, 4], [48, 4], [49, 3], [50, 3], [51, 3], [52, 3], [53, 3], [54, 3], [55, 3]], '2065': [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 4], [9, 3], [10, 3], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 3], [17, 4], [18, 4], [19, 4], [20, 4], [21, 3], [22, 4], [23, 3], [24, 3], [25, 3], [26, 3], [27, 3], [28, 4], [29, 4], [30, 3], [31, 4], [32, 3], [33, 3], [34, 3], [35, 4], [36, 4], [37, 4], [38, 4], [39, 4], [40, 4], [41, 4], [42, 3], [43, 4], [44, 4], [45, 3], [46, 4], [47, 4], [48, 4], [49, 4], [50, 3], [51, 3], [52, 3], [53, 3], [54, 4], [55, 4], [56, 4], [57, 3], [58, 4], [59, 3], [60, 4], [61, 4], [62, 3], [63, 4], [64, 3], [65, 4], [66, 4], [67, 4], [68, 3], [69, 3], [70, 3], [71, 4], [72, 4], [73, 4], [74, 4]], '2066': [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 4], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 4], [20, 4], [21, 4], [22, 3], [23, 3], [24, 4], [25, 3], [26, 4], [27, 3], [28, 3], [29, 3], [30, 3], [31, 4], [32, 3], [33, 3], [34, 4], [35, 4], [36, 3], [37, 3], [38, 4], [39, 3], [40, 4], [41, 4], [42, 3], [43, 3], [44, 3], [45, 3], [46, 3], [47, 3], [48, 3], [49, 4], [50, 3], [51, 3], [52, 4], [53, 3], [54, 4], [55, 4], [56, 3], [57, 4], [58, 4], [59, 3], [60, 4], [61, 4], [62, 3], [63, 3], [64, 4], [65, 3], [66, 3], [67, 3], [68, 3], [69, 4], [70, 3], [71, 3], [72, 3], [73, 4], [74, 4], [75, 4], [76, 4], [77, 4], [78, 4], [79, 4], [80, 4], [81, 4], [82, 4], [83, 4], [84, 4], [85, 3], [86, 4], [87, 4], [88, 4], [89, 4], [90, 4], [91, 4], [92, 3], [93, 3], [94, 4], [95, 4], [96, 4], [97, 3], [98, 3], [99, 4], [100, 3], [101, 4], [102, 4], [103, 4], [104, 4], [105, 4], [106, 4], [107, 3], [108, 4], [109, 4], [110, 4], [111, 3], [112, 3], [113, 3], [114, 4], [115, 4], [116, 3], [117, 4], [118, 3], [119, 3], [120, 3], [121, 3], [122, 4], [123, 4], [124, 4], [125, 3]], '2067': [[1, 3], [2, 3], [3, 4], [4, 4], [5, 3], [6, 3], [7, 4], [8, 3], [9, 4], [10, 4], [11, 3], [12, 4], [13, 3], [14, 4], [15, 4], [16, 3], [17, 3], [18, 3], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4], [24, 4], [25, 4], [26, 4], [27, 4], [28, 4], [29, 4], [30, 4], [31, 4], [32, 4], [33, 3], [34, 4], [35, 4], [36, 4], [37, 4], [38, 4], [39, 4], [40, 3], [41, 4], [42, 4], [43, 3], [44, 4], [45, 4], [46, 3], [47, 3], [48, 3], [49, 3], [50, 3], [51, 4], [52, 4], [53, 4], [54, 4], [55, 3], [56, 3], [57, 3], [58, 4], [59, 4], [60, 3], [61, 3], [62, 3], [63, 3], [64, 3], [65, 4], [66, 3], [67, 3], [68, 4], [69, 4], [70, 4], [71, 4], [72, 4], [73, 3], [74, 3], [75, 3], [76, 3], [77, 3], [78, 4], [79, 4], [80, 4], [81, 3], [82, 3], [83, 3], [84, 3], [85, 3], [86, 3], [87, 4], [88, 4], [89, 3], [90, 4], [91, 3], [92, 3], [93, 3], [94, 4], [95, 4], [96, 3], [97, 3], [98, 3], [99, 4], [100, 4], [101, 3], [102, 3], [103, 3], [104, 3], [105, 4], [106, 3], [107, 3]], '2068': [[1, 3], [2, 4], [3, 4], [4, 4], [5, 4], [6, 3], [7, 4], [8, 3], [9, 4], [10, 3], [11, 4], [12, 4], [13, 4], [14, 3], [15, 4], [16, 4], [17, 3], [18, 3], [19, 3], [20, 3], [21, 4], [22, 3], [23, 4], [24, 4], [25, 3], [26, 3], [27, 3], [28, 4], [29, 3], [30, 3], [31, 3], [32, 4], [33, 4], [34, 3], [35, 3], [36, 3], [37, 4], [38, 4], [39, 4], [40, 4], [41, 4], [42, 4], [43, 4], [44, 4], [45, 3], [46, 3], [47, 3], [48, 4], [49, 4], [50, 3], [51, 3], [52, 3], [53, 4], [54, 4], [55, 4], [56, 4], [57, 4], [58, 4], [59, 4], [60, 3], [61, 3], [62, 3], [63, 3], [64, 3], [65, 3], [66, 3], [67, 3], [68, 4], [69, 4], [70, 4], [71, 4], [72, 3], [73, 4], [74, 3]], '2069': [[1, 4], [2, 3], [3, 3], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 3], [14, 4], [15, 4], [16, 4], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3], [22, 4], [23, 4], [24, 4], [25, 4], [26, 4], [27, 3], [28, 4], [29, 3], [30, 3], [31, 4], [32, 4], [33, 4], [34, 4], [35, 4], [36, 4], [37, 4], [38, 4], [39, 3], [40, 4], [41, 4], [42, 4], [43, 4], [44, 4], [45, 4], [46, 4], [47, 4], [48, 3], [49, 4], [50, 4], [51, 4], [52, 4], [53, 3], [54, 3], [55, 3], [56, 4], [57, 4], [58, 4], [59, 3], [60, 3], [61, 4], [62, 3], [63, 4], [64, 3], [65, 3], [66, 3], [67, 3], [68, 4], [69, 3], [70, 3], [71, 4], [72, 3], [73, 3], [74, 3], [75, 3], [76, 3], [77, 4], [78, 4], [79, 4], [80, 4], [81, 4], [82, 3], [83, 4], [84, 3], [85, 3], [86, 4], [87, 3], [88, 4], [89, 4], [90, 3], [91, 3], [92, 3], [93, 3], [94, 3], [95, 3], [96, 3], [97, 4], [98, 4], [99, 4], [100, 4], [101, 3], [102, 3], [103, 3], [104, 4], [105, 3], [106, 3], [107, 3], [108, 4], [109, 3], [110, 3], [111, 3], [112, 4], [113, 3], [114, 3], [115, 4], [116, 4], [117, 4], [118, 4], [119, 4], [120, 4], [121, 4], [122, 4], [123, 3], [124, 3], [125, 3], [126, 4], [127, 4], [128, 4], [129, 4], [130, 4], [131, 3], [132, 3], [133, 3], [134, 3], [135, 3], [136, 3], [137, 4], [138, 3], [139, 3], [140, 3], [141, 3], [142, 3], [143, 3], [144, 3], [145, 3], [146, 4], [147, 4], [148, 4], [149, 4], [150, 3], [151, 3], [152, 3], [153, 3], [154, 3], [155, 3], [156, 3], [157, 4], [158, 4], [159, 4], [160, 4], [161, 3], [162, 4], [163, 3], [164, 3], [165, 3], [166, 3], [167, 3], [168, 4], [169, 4], [170, 4], [171, 4], [172, 4], [173, 4], [174, 3], [175, 4], [176, 4], [177, 4], [178, 4], [179, 3], [180, 3], [181, 3], [182, 4], [183, 3], [184, 4], [185, 3], [186, 3], [187, 4], [188, 3]]},
						'08-100-03-2072-01-01': {'2072': [[1, 4], [2, 4], [3, 6], [4, 2], [5, 2], [6, 3], [7, 5], [8, 8], [9, 1], [10, 1], [11, 1], [12, 8], [13, 2], [14, 5], [15, 5], [16, 7], [17, 7], [18, 8], [19, 7], [20, 2], [21, 5], [22, 5], [23, 3], [24, 3], [25, 5], [26, 5], [27, 1], [28, 1], [29, 6], [30, 6], [31, 5], [32, 7], [33, 2], [34, 6], [35, 7], [36, 8], [37, 3], [38, 4], [39, 7], [40, 7], [41, 7], [42, 5], [43, 5], [44, 5], [45, 2], [46, 2], [47, 8], [48, 8], [49, 7], [50, 5], [51, 5], [52, 5], [53, 5], [54, 5], [55, 6], [56, 2], [57, 8], [58, 2], [59, 7], [60, 7], [61, 7], [62, 5], [63, 2], [64, 2], [65, 2], [66, 5], [67, 5], [68, 7], [69, 5], [70, 4], [71, 5], [72, 4], [73, 7], [74, 4], [75, 3], [76, 4], [77, 7], [78, 5], [79, 5], [80, 2], [81, 8], [82, 5], [83, 4], [84, 4], [85, 4], [86, 4], [87, 6], [88, 4], [89, 4], [90, 6], [91, 5], [92, 1], [93, 1], [94, 4], [95, 4], [96, 5], [97, 4], [98, 5], [99, 5], [100, 5], [101, 4], [102, 5], [103, 4], [104, 5], [105, 4], [106, 4], [107, 7], [108, 4], [109, 8], [110, 8], [111, 8], [112, 5], [113, 2], [114, 3], [115, 2], [116, 3], [117, 4], [118, 6], [119, 4], [120, 7], [121, 6], [122, 6], [123, 8], [124, 5], [125, 5], [126, 3], [127, 3], [128, 2], [129, 2], [130, 8], [131, 1], [132, 1], [133, 5], [134, 5], [135, 5], [136, 5], [137, 3], [138, 6], [139, 5], [140, 8], [142, 2], [143, 2], [144, 8], [145, 8], [146, 5], [147, 6], [148, 8], [149, 8], [150, 8], [151, 2], [152, 2], [153, 2], [154, 5], [155, 3], [156, 3], [157, 3], [158, 6], [159, 6], [160, 6], [161, 6], [162, 8], [163, 7], [164, 7], [165, 5], [166, 6], [167, 4], [168, 8], [169, 8], [170, 5], [171, 1], [172, 1], [173, 6], [174, 7], [175, 1], [176, 3], [177, 3], [178, 2], [179, 2], [180, 3], [181, 8], [182, 4], [183, 8], [184, 2], [185, 5], [186, 2], [187, 6], [188, 3], [189, 7], [190, 7], [191, 8], [192, 3], [193, 8], [194, 8], [195, 8], [196, 6], [197, 6], [198, 4], [199, 8], [200, 8], [201, 7], [202, 7], [203, 6], [204, 3], [205, 3], [206, 3], [207, 6], [208, 6], [209, 6], [210, 1], [211, 2], [212, 2], [213, 2], [214, 6], [215, 5], [216, 6], [217, 8], [218, 3], [219, 8], [220, 8], [221, 8], [222, 8], [223, 8], [224, 8], [225, 6], [226, 3], [227, 2], [228, 3], [229, 6], [230, 1], [231, 5], [232, 5], [233, 3], [234, 4], [235, 4], [236, 1], [237, 3], [238, 4], [239, 6], [240, 5], [241, 2], [242, 2], [243, 2], [244, 2], [245, 2], [246, 5], [247, 8], [248, 8], [249, 1], [250, 3], [251, 2], [252, 4], [253, 6], [254, 8], [255, 4], [256, 8], [257, 5], [258, 2], [259, 2], [260, 2], [261, 6], [262, 6], [263, 6], [264, 4], [265, 8], [266, 6], [267, 6], [268, 6], [269, 3], [270, 4], [271, 3], [272, 6], [273, 3], [274, 5], [275, 2], [276, 8], [277, 6], [278, 6], [279, 6], [280, 6], [281, 6], [282, 5], [283, 6], [284, 1], [285, 1], [286, 4], [287, 6], [288, 2], [289, 7], [290, 4], [291, 2], [292, 8], [293, 6], [294, 5], [295, 6], [296, 6], [297, 5], [298, 1], [299, 1], [300, 1], [301, 5], [302, 1]]}, '08-100-03-2072-01-03': {'2072': [[598, 5], [599, 5], [600, 5], [601, 5], [602, 5], [603, 8], [604, 3], [605, 5], [606, 2], [607, 5], [608, 8], [609, 1], [610, 1], [611, 1], [612, 4], [613, 8], [614, 4], [615, 8], [616, 3], [617, 5], [618, 2], [619, 6], [620, 6], [621, 7], [622, 2], [623, 2], [624, 5], [625, 2], [626, 1], [627, 6], [628, 6], [629, 6], [630, 6], [631, 1], [632, 1], [633, 8], [634, 8], [635, 5], [636, 2], [637, 6], [638, 8], [639, 3], [640, 8], [641, 6], [642, 6], [643, 6], [644, 5], [645, 6], [646, 2], [647, 2], [648, 5], [649, 4], [650, 6], [651, 6], [652, 2], [653, 7], [654, 3], [655, 6], [656, 2], [657, 5], [658, 5], [659, 7], [660, 3], [661, 6], [662, 6], [663, 7], [664, 6], [665, 4], [666, 3], [667, 6], [668, 6], [669, 8], [670, 8], [671, 8], [672, 4], [670, 4], [671, 8], [672, 4], [673, 8], [674, 8], [675, 8], [676, 5], [677, 3], [678, 3], [679, 2], [680, 5], [681, 3], [682, 6], [683, 8], [684, 5], [685, 2], [686, 2], [687, 2], [688, 6], [689, 6], [690, 5], [691, 5], [692, 5]]}, '08-100-03-2072-01-02': {'2072': [[303, 6], [304, 8], [305, 8], [306, 4], [307, 3], [308, 2], [309, 3], [310, 3], [311, 3], [312, 6], [313, 5], [314, 6], [315, 6], [316, 4], [317, 6], [318, 2], [319, 5], [320, 5], [321, 5], [322, 6], [323, 4], [324, 5], [325, 4], [326, 1], [327, 4], [328, 8], [329, 8], [330, 3], [331, 3], [332, 1], [333, 6], [334, 6], [335, 7], [336, 7], [337, 7], [338, 4], [339, 7], [340, 5], [341, 8], [342, 6], [343, 4], [344, 4], [345, 2], [346, 3], [347, 4], [348, 8], [349, 2], [350, 2], [351, 4], [352, 4], [353, 4], [354, 8], [355, 8], [356, 8], [357, 8], [358, 1], [359, 1], [360, 1], [361, 4], [362, 8], [363, 3], [364, 3], [365, 5], [366, 6], [367, 8], [368, 5], [369, 8], [370, 8], [371, 8], [372, 1], [373, 4], [374, 1], [375, 4], [376, 7], [377, 7], [378, 6], [379, 6], [380, 6], [381, 3], [382, 3], [384, 6], [385, 4], [386, 4], [387, 1], [388, 1], [389, 1], [390, 2], [391, 5], [392, 5], [393, 3], [394, 3], [395, 3], [396, 5], [397, 3], [398, 5], [399, 5], [400, 5], [401, 2], [402, 4], [403, 4], [404, 7], [405, 4], [406, 5], [407, 5], [408, 8], [409, 4], [410, 4], [411, 7], [412, 2], [413, 6], [414, 5], [415, 4], [416, 4], [417, 8], [418, 4], [419, 4], [420, 1], [421, 8], [422, 6], [423, 3], [424, 8], [425, 4], [426, 3], [427, 3], [428, 3], [429, 3], [430, 8], [431, 6], [432, 3], [433, 6], [434, 6], [435, 8], [436, 8], [437, 5], [438, 5], [439, 7], [440, 3], [441, 4], [442, 4], [443, 6], [444, 7], [445, 6], [446, 7], [447, 7], [448, 7], [449, 4], [450, 4], [451, 4], [452, 2], [453, 6], [454, 3], [455, 5], [456, 2], [457, 7], [458, 6], [459, 1], [460, 2], [461, 6], [462, 1], [463, 4], [464, 5], [465, 3], [466, 3], [467, 8], [468, 8], [469, 8], [470, 8], [471, 8], [472, 8], [473, 4], [474, 5], [475, 5], [476, 6], [477, 7], [478, 8], [479, 8], [480, 8], [481, 6], [482, 6], [483, 3], [484, 4], [485, 6], [486, 8], [487, 3], [488, 3], [489, 6], [490, 8], [491, 8], [492, 6], [493, 7], [494, 7], [495, 7], [496, 5], [497, 2], [498, 2], [499, 5], [500, 5], [501, 6], [502, 5], [503, 8], [504, 8], [505, 8], [506, 4], [507, 1], [508, 5], [509, 5], [510, 5], [511, 6], [512, 6], [513, 2], [514, 5], [515, 5], [516, 6], [517, 7], [518, 7], [519, 8], [520, 6], [521, 6], [522, 6], [523, 2], [524, 1], [525, 8], [526, 2], [527, 7], [528, 7], [529, 4], [530, 5], [531, 2], [532, 5], [533, 4], [534, 4], [535, 7], [536, 1], [537, 5], [538, 5], [539, 6], [540, 6], [541, 4], [542, 4], [543, 1], [544, 4], [545, 3], [546, 3], [547, 4], [548, 8], [549, 8], [550, 8], [551, 8], [552, 3], [553, 7], [554, 5], [555, 3], [556, 6], [557, 6], [558, 3], [559, 5], [560, 6], [561, 6], [562, 8], [563, 8], [564, 4], [565, 4], [566, 1], [567, 6], [568, 5], [569, 3], [570, 3], [571, 6], [572, 6], [573, 5], [574, 8], [575, 4], [576, 5], [577, 2], [578, 8], [579, 8], [590, 7], [591, 8], [592, 4], [593, 3], [594, 6], [595, 5], [596, 8], [597, 7]]}}

		var bookNoEle = document.getElementById('book-id-edit');
		var bookNoVal = bookNoEle.options[bookNoEle.selectedIndex].innerText;

		var nepaliDateEle = document.getElementById('nepaliDate');
		var yy = nepaliDateEle.value.split("-")[0];

		var regNoEle = document.getElementById("RegistrationNumber");
	   	var regNo = parseInt(regNoEle.value);

		var resutNo=1;

		var checkList = detail[bookNoVal][yy]
		for(i = 0; i<checkList.length; i++)
		{
			if(regNo == checkList[i][0])
			{
				resultNo = checkList[i][1];
			}
		}
		
		//var resultNo = 2
		//var nepWardNew = ['१', '२']
		var nepWardNew = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०']

		if(resultNo > 0)
		{
			var englishPla = "Pakhribas-" + resultNo;
			var nepaliPla = "पाख्रिबास-" + nepWardNew[resultNo-1];
			var engBirthPlace = document.getElementById("BirthPlaceEnglish");
			engBirthPlace.value = englishPla;
	
			var nepBirthPlace = document.getElementById("BirthPlaceNepali");
			nepBirthPlace.value = nepaliPla;
	
			var wadNo = document.getElementById("ward-no");
			wadNo.selectedIndex = resultNo;
	
			var motherWadNo = document.getElementById("mother-ward");
			motherWadNo.selectedIndex = resultNo;
			
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



