var award = {};
jQuery(document).ready(function($) {
	var carousel;
	var readyTime = 5000;
	award.number = localStorage.number || 212;
	award.data = localStorage.data ? localStorage.data.split(",") : [];
	award.selectedArr = localStorage.selectedArr ? localStorage.selectedArr.split(",") : [];
	award.html = "";
	award.awardHtml = "";
	award.start = $("#auto-scroll");
	award.nameList = "num1-曹芹,num2-邓国山,num3-刘董,num4-舒广,num5-田泽望,num6-峗总,num7-裴俊龙,num8-冉竞真,num9-沈晓宇,num10-孙水波,num11-阴硕,num12-余元,num13-张博雅,num14-张才溢,num15-张德纛,num16-张国平,num17-张露莹,num18-张敏,num19-张璇,num20-张子强,num21-周慧,num22-李昶,num23-蔡颖卓,num24-陈鹏,num25-杜嘉琳,num26-李磊,num27-李瑶,num28-牛岩,num29-卜璐,num30-陈小雨,num31-程楠,num32-冯冰,num33-孔志青,num34-施精卫,num35-孙雨昕,num36-王红川,num37-姚佳丽,num38-张相启,num39-郑迪予,num40-李超,num41-王俊,num42-肖萌,num43-杨春和,num44-游瑞平,num45-阿庆春,num46-杜娟（总）,num47-刘丽莉,num48-唐敏,num49-张清清,num50-杜婷,num51-冯露君,num52-李晓辉,num53-祁迎迎,num54-任黄燕,num55-唐瑾,num56-王帅征,num57-张洪涛,num58-李永,num59-马凌宇,num60-余睿,num61-陈赓,num62-陈元俊,num63-程先楠,num64-樊屹然,num65-范朦,num66-方飞,num67-顾峻尧,num68-郭宗杰,num69-胡卓尔,num70-蒋婕,num71-蒋舒扬,num72-李谷瑜,num73-李欢欢,num74-李璐,num75-李文鹏,num76-李峥,num77-刘欢欢,num78-卢倩,num79-骆芳,num80-吕文路,num81-穆欣,num82-庞燕,num83-彭敏,num84-施奕,num85-王良军,num86-王无,num87-吴晓,num88-向叶,num89-严昇帆,num90-杨丽香,num91-翟艳娜,num92-赵昌兴,num93-周超,num94-周久力,num95-邹姗,num96-葛兆生,num97-王和俊,num98-刘颜彬,num99-孟祥坤,num100-盛曦,num101-施力,num102-王哲,num103-张殿英,num104-赵帆,num105-朱炜明,num106-常璟,num107-高洪涛,num108-孔海彪,num109-张利明,num110-张青,num111-陈昕怡,num112-段亚波,num113-雷瑗,num114-李昊洋,num115-李建发,num116-李扬,num117-刘惠,num118-刘胜男,num119-刘政尧,num120-戎玺之,num121-茹立晨,num122-谭媛,num123-王诗铖,num124-肖清,num125-张天亚,num126-钟巍,num127-陈诺,num128-龚海涛,num129-何畔,num130-贾岩,num131-汪祺,num132-王星,num133-郁如霏,num134-张海旭,num135-朱志欣,num136-黄涛,num137-张斌,num138-程灏,num139-董子杨,num140-高永会,num141-冀伟,num142-杨帆,num143-朱超杰,num144-朱元恺,num145-付微,num146-黄燕燕,num147-李邦彦,num148-陆青妍,num149-罗望,num150-万禺,num151-张鹏飞,num152-乔云峰,num153-何松檑,num154-廖才文,num155-刘涛境,num156-楼宇波,num157-孟智炜,num158-倪云,num159-王超,num160-吴佩,num161-吴兴华,num162-严龙,num163-杨韵,num164-于晰,num165-张吉杭,num166-张雪春,num167-赵岚,num168-常志成,num169-程思思,num170-邓超,num171-胡皓宇,num172-黄礼林,num173-解畅,num174-金梦,num175-李昂,num176-李砚琪,num177-彭颖,num178-秦雯,num179-瞿路航,num180-阮立坤,num181-闻卫,num182-翁佳杰,num183-吴天明,num184-周鹏,num185-戴珺,num186-郭小栋,num187-刘芳,num188-刘静总,num189-赵阳,num190-周游,num191-李金潞,num192-刘建华,num193-马睿,num194-毛文,num195-宋平,num196-唐珂,num197-王珊,num198-王艳芳,num199-谢国钢,num200-徐曦,num201-杨永忠,num202-尹曦,num203-于波,num204-程英杰,num205-苏颖,num206-王健,num207-徐绍华,num208-许世乾,num209-窦韫希,num210-柳丹凤,num211-秦少敏,num212-杨丽萍";
	award["award-0"] = localStorage["award-0"];
	award["award-1"] = localStorage["award-1"];
	award["award-2"] = localStorage["award-2"];
	award["award-3"] = localStorage["award-3"];
	award["award-4"] = localStorage["award-4"];
	award["award-5"] = localStorage["award-5"];
	award["award-6"] = localStorage["award-6"];
	localStorage.selectedItem = localStorage.selectedItem || 0;
	award.init = function() {
		award.draw();
		$("#list-jiang option").eq(parseInt(localStorage.selectedItem)).prop("selected", true);
		currentReset();
	};
	award.nameListDraw = function(){
		award.readyAwardHtml(0, award["award-0"] ? award["award-0"].split(",") : new Array(1));
		award.readyAwardHtml(1, award["award-1"] ? award["award-1"].split(",") : new Array(2));
		award.readyAwardHtml(2, award["award-2"] ? award["award-2"].split(",") : new Array(6));
		award.readyAwardHtml(3, award["award-3"] ? award["award-3"].split(",") : new Array(8));
		award.readyAwardHtml(4, award["award-4"] ? award["award-4"].split(",") : new Array(16));
		award.readyAwardHtml(5, award["award-5"] ? award["award-5"].split(",") : new Array(90));
		award.readyAwardHtml(6, award["award-6"] ? award["award-6"].split(",") : new Array(1));
	};
	award.draw = function() {
		award.readyHtml();
		if ($('#carousel').length == 1) {
			var width = $(window).width() - 150;
			carousel = $('#carousel').carousel({
				width: width,
				height: 280,
				itemWidth: 180,
				itemHeight: 180,
				horizontalRadius: width / 2,
				verticalRadius: 100,
				resize: true,
				scaleRatio: 0.2,
				autoScroll: false,
				itemSelect: onItemSelect
			});
			carousel.scrollToItem(0);
		}
	};
	award.reload = function() {
		award.draw();
	};
	award.havedData = function() {
		return localStorage.data ? true : false;
	};
	//准备数据
	award.readyData = function() {
		if (!award.havedData()) {
			var data = award.nameList.split(",");
			for (var j = 1; j <= award.number; j++) {
				award.data.push(data[j - 1] + ".png");
			}
			localStorage.data = award.data;
		} else {
			award.data = localStorage.data.split(",");
		}
	};
	//填充html
	award.readyHtml = function() {
		award.readyData();
		award.html = "";
		for (var i = 0; i < award.data.length; i++) {
			award.html += ('<li><img src="images/' + award.data[i] + '" /></li>');
		}
		$("#carousel").html(award.html);
	};
	//填充中奖名单
	award.readyAwardHtml = function(grade, arr) {
		award.awardHtml = "";
		for (var i = 0; i < arr.length; i++) {
			award.awardHtml += ('<li><img src="images/' + (arr[i] ? arr[i] : '/img-404.jpg') + '" /><p>' + (arr[i] ? arr[i].split(".")[0].split("-")[1] : '姓名') + '</p></li>');
		}
		$("#list-" + grade).empty().html(award.awardHtml);
	};
	//填充当前中奖名单
	award.readyCurrentAwardHtml = function(grade, arr){
		var html = "";
		for (var i = 0; i < arr.length; i++) {
			html += ('<li><img src="images/' + (arr[i] ? arr[i] : '/img-404.jpg') + '" /><p>' + arr[i].split(".")[0].split("-")[1] + '</p></li>');
		}
		$("#list-" + grade).empty().html(html);
	}

	
	//开始暂停
	$("body").on("click", "#btn-start", function() {
		var $this = $(this);
		$this.html("开始");
		if (award.start.timer) {
			$this.attr("disabled", "disabled");
			setTimeout(function() {
				var num = parseInt($("#num").val());
				var grade = parseInt($("#list-jiang").val());
				var tempData = award.data.concat();
				var times = 0;
				award.selectedArr = [];
				clearInterval(award.start.timer);
				award.start.timer = 0;
				var randomArr = createRandom(num, 0, award.number);
				var first = 0;
				for (var i = 1; i <= num; i++) {
					var index = randomArr[i - 1] - 1;
					if (times == 0) {
						carousel.scrollToItem(index - 1);
						first = index;
					}
					$("#carousel img").eq(index).addClass("selected");
					award.selectedArr.push(award.data[index]);
					tempData.splice(index, 1);
					award.number -= 1;
					times++;
				}
				//$("#carousel img").eq(first).addClass("current");
				award.data = award.data.deleteRepeat(award.selectedArr);
				localStorage.data = award.data;
				localStorage.number = award.number;
				localStorage.selectedArr = award.selectedArr;
				if (localStorage["award-" + grade]) {
					localStorage["award-" + grade] += ("," + award.selectedArr);
				} else {
					localStorage["award-" + grade] = award.selectedArr;
				}
				award.readyCurrentAwardHtml("current", award.selectedArr);
				$("#carousel img[src='images/" + award.selectedArr[0] + "']").addClass("current");
			}, Math.random() * 6 * 1000);
		} else {
			if (award.data.length > 0) {
				$this.html("暂停");
				award.start.timer = setInterval(function() {
					carousel.scrollToNext();
				}, 35);
			} else {
				alert("名单已抽完");
			}
		}
	});
	//准备
	$("body").on("click", "#btn-ready", function() {
			$('#carousel').remove();
			$('<ul id="carousel" class="carousel"></ul>').prependTo($("body"));
			$("#btn-start").removeAttr("disabled");
			award.reload();
			currentReset();
	});
	//重置
	$("body").on("click", "#btn-reset", function() {
		var bConfirm = confirm("确认重置？");
		if(bConfirm){
			localStorage.clear();
			window.location.reload();
		}		
	});
	//雪花
	$.fn.snow({
		minSize: 50, //雪花的最小尺寸
		maxSize: 50, //雪花的最大尺寸
		newOn: 1000 //雪花出现的频率 这个数值越小雪花越多
	});
	//特等奖
	$("body").on("change", "#list-jiang", function(){
		currentReset();
		localStorage.selectedItem = $(this).val();
	});
	
	function currentReset(){
		$("#h1").text($("#list-jiang").find("option:selected").text());
		$("#list-current").empty().html('<li><img src="images/img-404.jpg" alt=""><p>姓名</p></li>');
	}
});
/*
num 要产生多少个随机数
from 产生随机数的最小值
to 产生随机数的最大值
*/
function createRandom(num, from, to) {
	var arr = [];
	var json = {};
	while (arr.length < num) {
		//产生单个随机数
		var ranNum = Math.ceil(Math.random() * (to - from)) + from;
		//通过判断json对象的索引值是否存在 来标记 是否重复
		if (!json[ranNum]) {
			json[ranNum] = 1;
			arr.push(ranNum);
		}

	}
	return arr;
}
//console.log(createRandom(30,0,30));//生成10个从0-50之间不重复的随机数
//删除数组重复数据
Array.prototype.deleteRepeat = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < this.length; j++) {
			if (this[j] == arr[i]) {
				this.splice(j, 1);
			}
		}
	}
	return this;
};

function toggleAutoScroll() {
	if (carousel.settings.autoScroll) {
		carousel.stopAutoScroll();
		$('#controls #auto-scroll').css('background-position', '-38px 0px');
	} else {
		carousel.startAutoScroll();
		$('#controls #auto-scroll').css('background-position', '0px 0px');
	}
}

function nextItem() {
	setInterval(function() {
		carousel.scrollToNext();
	}, 35);
}

function previousItem() {
	carousel.scrollToPrevious();
}

function onItemSelect(event) {
	$('#text #selected-title').html(event.index);
	$('#text #selected-description').html(event.data.description);
}