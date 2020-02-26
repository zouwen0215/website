import Vue from 'vue'

let validation = new Vue({
	data: {},
	methods: {
		checkArrFunc(checkArr) {　
			let _self = this;
			for(let i of checkArr) {
				for(let i = 0; i < checkArr.length; i++) {
					if(checkArr[i]) {
						_self.$toast({
							duration: 1000, // 持续展示 toast
							loadingType: 'spinner',
							message: checkArr[i]
						});
						return false;
					}
				}
			}
		},

		checkNull(val, msg) {
			if(String(val).length < 1) {
				return msg + '不能为空';
			} else {
				return false;
			}
		},
		checkZero(val, msg) {
			if(Number(val) == 0) {
				return msg + '不能为0';
			} else {
				return false;
			}
		},
		
		checkMinus(val, msg) {
			if(Number(val) < 0) {
				return msg + '不能为负数';
			} else {
				return false;
			}
		},
		
		checkMoney: function(data) {
			let reg = /^\d+(\.\d{0,2})?$|^\.\d{1,2}$/;
			if(data == '') {
				return "价格不能为空";
			} else if(!reg.test(data)) {
				return "请输入正确的价格,必须为数字,至多保留两位小数";
			} else {
				return false;
			}
		},
		getAreaMap(json, arr) {
			var areaAddress = '';
			for(let i = 0; i < json.length; i++) {
				if(json[i].value == arr[0]) {
					areaAddress = json[i].label;
					for(let j = 0; j < json[i].children.length; j++) {
						if(json[i].children[j].value == arr[1]) {
							areaAddress = areaAddress + json[i].children[j].label;
							for(let k = 0; k < json[i].children[j].children.length; k++) {
								if(json[i].children[j].children[k].value == arr[2]) {
									areaAddress = areaAddress + json[i].children[j].children[k].label;
								}
							}
						}
					}
				}
			}
			return areaAddress;
		},
		mobileCheck(val, msg) {
			let telRegex = /^((13[0-9])|(14[5,7,9])|(15[^4])|(16[6])|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8,9]))\d{8}$/;
			if(!telRegex.test(val)) {
				return msg;
			} else {
				return false;
			}

		},
		commonRet(obj, key) {
			if(key == undefined) {
				key = "undefined";
			}
			let result = obj[key.toString()];
			return result ? result : obj["default_value"];
		},
		serviceType(value) {
			let obj = {
				"bar": "柜台服务型",
				"table": "桌台服务型",
				"retail": "零售服务型",
				"all": "全部",
				"default_value": "未知状态"
			};
			return this.commonRet(obj, value);
		},
		reset(val) {
			for(let key in val) {
				val[key] = '';
			}
			return val;
		},
		total(value) {
			try{
				value = Number(value.headers.map['Content-Range'][0].split('/')[1])
			}catch(e){
				value = Number(value.headers.map['content-range'][0].split('/')[1])
			}
			
			return value
		},
		fmtDate(obj) {
			var date = new Date(obj);
			var y = 1900 + date.getYear();
			var m = "0" + (date.getMonth() + 1);
			var d = "0" + date.getDate();
			return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
		},
		//深度克隆
		clone(obj) {
			var result;
			if(obj instanceof Array) {
				result = [];
				for(let key of obj) {
					result[key] = key;
				}
			} else {
				result = {};
				for(let key in obj) {
					result[key] = obj[key];
				}
			}
			return result;
		},
		formatDate(obj,format) {
			function add0(m) {
				return m < 10 ? '0' + m : m
			}
			//shijianchuo是整数，否则要parseInt转换
			var time = new Date(obj);
			var y = time.getFullYear();
			var m = time.getMonth() + 1;
			var d = time.getDate();
			var h = time.getHours();
			var mm = time.getMinutes();
			var s = time.getSeconds();
			if(format == 'yyyy-mm-dd') {
				return y + '-' + add0(m) + '-' + add0(d)
			} else if(format == 'yyyy-mm-dd hh:mm:ss') {
				return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
			} else {
				return y + '-' + add0(m) + '-' + add0(d) + '-' + add0(h) + ':' + add0(mm);
			}
		},
		formatDatefor(obj, format) {
			function add0(m) {
				return m < 10 ? '0' + m : m
			}
			//shijianchuo是整数，否则要parseInt转换
			var time = new Date(obj);
			var y = time.getFullYear();
			var m = time.getMonth() + 1;
			var d = time.getDate();
			var h = time.getHours();
			var mm = time.getMinutes();
			var s = time.getSeconds();
			if(format == 'yyyy-mm-dd') {
				return y + '-' + add0(m) + '-' + add0(d)
			} else if(format == 'yyyy-mm-dd hh:mm:ss') {
				return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
			} else {
				return y + '-' + add0(m) + '-' + add0(d) + '-' + add0(h) + ':' + add0(mm);
			}

		},
		isJSON(str) {
			if(typeof str == 'string') {
				try {
					var obj = JSON.parse(str);
					if(typeof obj == 'object' && obj) {
						return true;
					} else {
						return false;
					}

				} catch(e) {
					console.log('error：' + str + '!!!' + e);
					return false;
				}
			}
			console.log('It is not a string!')
		}

	},
})

export default validation;