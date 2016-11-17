/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var longlength = 0;
	var temp = "";
    for (var i = 0; i < s.length; i++) {
    	temp = s[i];
    	for (var j = i + 1; j < s.length; j++) {
    		var index = temp.indexOf(s[j]);
    		if (index == -1) {
    			temp = temp + s[j];
    		}else{
    			break;
    		}
    	}
    	longlength = Math.max(temp.length,longlength);
    	if (longlength > temp.length / 2) {
    		break;
    	}
    }
    return longlength;
}
var fun2 = function (s) {

	var pointa = 0,pointb = 0;
	var currstr = "";
	var longestLength = 0;

	while (pointb < s.length) {
		
		var index = currstr.indexOf(s[pointb])
		if (index>-1) {
			longestLength = longestLength > pointb - pointa?longestLength:pointb-pointa;
			pointa += index + 1;
			currstr = currstr.slice(index + 1);
		}
		currstr += s[pointb];
		pointb++;
	}
	return longestLength > pointb - pointa?longestLength:pointb-pointa;
}

console.log(fun2("abcabcbb"));