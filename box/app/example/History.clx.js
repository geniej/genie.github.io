/*
 * App URI: app/example/History
 * Source Location: app/example/History.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/example/History", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * test.js
			 * Created at 2018. 10. 1. 오후 5:36:29.
			 *
			 * @author ljy
			 ************************************************/
			function ofReady(params, direction) {
				console.log("ofReady param = " + JSON.stringify(params, null, 4) + " / direction = " + direction);
			
			}
			
			/*
			 * "이전" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
			
				backPressed();
			}
			
			/*
			 * "webview1 호출" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var button = e.control;
			
				var param = {
					url: "app/example/History2"
				};
			
				OFHistory.go(param);
			}
			
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad( /* cpr.events.CEvent */ e) {
				setNowPage(app);
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
			button_1.value = "이전";
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				"top": "8px",
				"left": "6px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_2 = new cpr.controls.Button();
			button_2.value = "history 2 호출";
			if(typeof onButtonClick2 == "function") {
				button_2.addEventListener("click", onButtonClick2);
			}
			container.addChild(button_2, {
				"top": "57px",
				"left": "6px",
				"width": "100px",
				"height": "20px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "History";
	cpr.core.Platform.INSTANCE.register(app);
})();
