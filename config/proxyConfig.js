module.exports = {
	proxyList: {
		'/tobacco-cloud-mobile': {
			target: 'http://test.junfengtech.com.cn',
//						target: 'http://192.168.195.192:9000',
			changeOrigin: true,
		},
		'/mobile': {
			target: 'http://test.junfengtech.com.cn',
//						target: 'http://192.168.195.192:9000',
			changeOrigin: true,
		}
	}
}