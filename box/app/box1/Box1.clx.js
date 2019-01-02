/*
 * App URI: app/box1/Box1
 * Source Location: app/box1/Box1.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/box1/Box1", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * LB.js
			 * Created at 2018. 12. 31. 오전 9:25:06.
			 *
			 * @author ljy
			 ************************************************/
			 
			// 
			 	 openBoxLoaded_1 = function(){
							
							alert("openBoxLoaded_1 ");
						};
						
			 
			
			function ofReady(params, direction) {
				
				  	alert(params);
				
				console.log("ofReady param = " + JSON.stringify(params, null, 4) + " / direction = " + direction);
			
			}
			
			onToolbarCallback = function(result) {
				console.log("onToolbarCallback = " + JSON.stringify(result));
			};
			
			onNavigatorCallback = function(result) {
				console.log("onNavigatorCallback = " + JSON.stringify(result));
			};
			
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad( /* cpr.events.CEvent */ e) {
				
				alert("-----2323232-----");
				
				openBoxLoaded();
				
				openBoxLoaded_1();
				
				setNowPage(app);
				hideToolbar();
				hideNavigator();
				
			}
			
			/*
			 * "이전 1" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
			
				backPressed();
			}
			
			/**
			 * toolbar 숨김
			 */
			function hideToolbar() {
				var param = {
					'type': 0
				};
			
				if (getUserAgent() != "else") {
					OFPlugin.menu.callToolbar(onToolbarCallback, param);
				} else {
					alert("지원안함");
				}
			}
			
			/**
			 * navigator 숨김
			 */
			function hideNavigator() {
				var param = {
					'type': 0,
					'title': ""
				};
			
				if (getUserAgent() != "else") {
					OFPlugin.menu.callNavigator(onNavigatorCallback, param);
				} else {
					alert("지원안함");
				}
			}
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button();
			button_1.value = "이전 1";
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				"top": "10px",
				"left": "10px",
				"width": "100px",
				"height": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "Box1";
	cpr.core.Platform.INSTANCE.register(app);
})();
