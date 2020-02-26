<template>
	<div class="detail">
        <mt-header title="君风科技" >
		  <router-link to="/" slot="left">
		    <mt-button icon="back" @click="handleClose">返回</mt-button>
		  </router-link>
		</mt-header>
   <div class="contain">
   	
  
	<img :src="'./static/icon/C'+num+'.png'" class="photo">

<div class="aa">
	

<div class="box">
	<p class="title">{{list[num].name}}</p>
	<p class="position">{{list[num].position}}</p>
	<p class="describe"  v-for="(item,index) in list[num].honer">{{item}}</p>
</div>
</div>
 </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
        num: this.$route.query.index,
        list: [
          {
            name: "刘伟纲",
            position: "总经理",
            honer: [
              "连续创业者，毕业于复旦大学;",
              "曾任职IBM大中华区高管；",
              "深圳希之光科技公司创始人、总经理；",
              "深圳嘟嘟牛科技创始人、董事；",
              "深圳云高信息股份创始人、董事；",
              "江西优码创达公司董事；",
              "江西君和软件创始人、董事；",
              "江西君风科技创始人、总经理，并参与投资了多家高新企业、互联网企业等，以及上市公司产业投资及并购。"
            ]
          },
          {
            name: "张伟春",
            position: "副总经理",
            honer: [
              " 毕业于华南理工大学；",
              "15年IT行业工作经验，超过8年的团队管理经验, 超过3年的企业IT管理咨询领域工作经验，超过10年的项目实施管理经验；",
              "曾任职世界知名外企，全球技术服务解决方案专家、华南区技术总监；",
              "广州麦青信息技术有限公司 创始人；",
              "2018年9月正式成为君风创始团队成员之一。"
            ]
          },
          {
            name: "林振荣",
            position: "技术顾问",
            honer: [
              "南昌大学计算机系副教授、硕士生导师、江西省科技项目评审专家，主要研究方向为WEB信息安全、大数据行业应用、数据挖掘等。在微服务、容器、中台等领域有显著成果并实际运用于项目研发。",
              "管理及负责的部分项目：国家软件与信息服务公共支撑平台项目；江西省公安厅审计系统；江西省工信委新产品登记系统;江西省财政运维大数据分析平台；南昌市人社SOA综合管理平台等。"
            ]
          }
        ],
    };
  },
  methods: {
  handleClose(){
  	 window.history.go(-1);
  }

  },
  created() {
   
}
}
</script>

<style lang="less" scoped>
.detail	{
	background-color: #F3F3F3;
	.mint-header{
		background-color:#f9f9f9;
	}
	.contain{
		background-color: #F3F3F3;
		.photo{
			
	position: absolute;	
	margin-left: -72px;
	margin-top: -20px;
	padding-top:40px;
	width:148px;
	height: 192px;
	
	}
	.aa{
		padding-top: 120px;
	.box{
		
	margin: 0 auto;
	width: 250px;
	height: 386px;	
    background-color: #FFFFFF;
	padding-left: 20px;
	padding-right: 20px;
	padding-top:70px;
	line-height: 18px;
	.title{
		font-size: 16px;

	color: #84c108;
	}
	.position{
		font-size: 11px;
	padding-top: 10px;
	padding-bottom: 10px;
	letter-spacing: 0px;
	color: #747474;
	}
	 .describe{
	 	
	 	float: left;
	 	text-align: left;
	font-size: 11px;
	line-height: 18px;
	letter-spacing: 0px;
	color: #747474;
	}
	}	
	}
	}
	
	

	
}
</style>