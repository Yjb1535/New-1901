function arrayReverse(arr){
	var a = [];
	for(var i = arr.length - 1;i>=0;i--){
		a.push(arr[i]);
	}
	return a;
}
function convert(a,b){
		a = parseInt(a);
		b = parseInt(b);
		var res = "";
		var str = "";
		var rem = 0;
		while(1){
		rem = parseInt(a%b);
		a = parseInt(a/b);
		switch(rem){
			case 10:
				rem = "A";
				break;
			case 11:
				rem = "B";
				break;
			case 12:
				rem = "C";
				break;
			case 13:
				rem = "D";
				break;
			case 14:
				rem = "E";
				break;
			case 15:
				rem = "F";
				break;
		}
		res += rem;
		if(a<b){
			res += a;
			break;
		}
	}
		res = res.split("");
		res.reverse();
		for(var i in res){
			str +=res[i];
		}
		return str;	
}
function countNum(str){
	var upcase = 0;
	var lowercase = 0;
	var number = 0;
	var space = 0;
	var other = 0;
	for(var i = 0;i<str.length;i++){
		if(str.charAt(i)>="A" && str.charAt(i)<="Z"){
			upcase++;
		}if(str.charAt(i)>="a" && str.charAt(i)<="z"){
			lowercase++;
		}if(str.charAt(i)>="1" && str.charAt(i)<="9"){
			number++;
		}if(str.charAt(i) == " "){
			space++;
		}
		other = str.length-(upcase+lowercase+number+space)
	}
	return "小写字母："+upcase+"个 大写字母："+lowercase+"个 数字："+number+"个 空格："+space+"个 其他字符："+other+"个";
}

function insertNum(a,nun){
	a.push(num);
	for(var i = 0;i<a.length-1;i++){
	for(var j = 0;j < a.length -i -1;j++){
		if(a[j]>a[j+1]){
			[a[j],a[j+1]] = [a[j+1],a[j]];
		}
	}
	}
	return a;
}
function removeRepeat(str){
	var s = "";
	for(var i = 0;i<str.length;i++){
		if(s.indexOf(str.charAt(i)) == -1){
			s += str.charAt(i);
		}
	}
	return s;
}