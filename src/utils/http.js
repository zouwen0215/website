import Vue from 'vue'

let httpService = new Vue({
	data: {},
	methods: {
		//接口过滤方法
		filterUrl(data, url) {
			for (let key in data) {
				let keys = "{" + key + "}";
				url = url.replace(keys, data[key])
			}
			return url;
		},
		//通用请求
		ajax(method, url, body, sucFunc, errFunc, handOk) {
			let _self = this;
			_self.$http({
				method: method,
				url: url,
				body: body,
				timeout: 10000, //设置超时时间
				headers: {
					Authorization: window.sessionStorage.getItem('tokenString'),
				}
			})
				.then((suc) => {
					if (suc.data.errorCode == '0') {
						sucFunc(suc);
					} else {
						_self.$toast({
							duration: 2000, // 持续展示 toast
							loadingType: 'spinner',
							message: suc.data.errorMessage
						});
					}

				}, (res) => {
					errFunc()
				});
		},

	},
})

export default httpService;