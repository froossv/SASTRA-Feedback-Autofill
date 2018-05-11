autofillstart();

function autofillstart(){
	document.addEventListener('DOMContentLoaded' , function(){

		var o = document.getElementById('o');
		var t = document.getElementById('t');
		var h = document.getElementById('h');
		var f = document.getElementById('f');
		var i = document.getElementById('i');
		
		o.addEventListener('click',function(){
			chrome.tabs.executeScript({
				file : 'js/response/one.js'
			});
			showMessage("Selected all One!");
		});

		t.addEventListener('click',function(){
			chrome.tabs.executeScript({
				file : 'js/response/two.js'
			});
			showMessage("Selected all Two!");
		});

		h.addEventListener('click',function(){
			chrome.tabs.executeScript({
				file : 'js/response/three.js'
			});
			showMessage("Selected all Three!");
		});

		f.addEventListener('click',function(){
			chrome.tabs.executeScript({
				file : 'js/response/four.js'
			});
			showMessage("Selected all Four!");
		});

		i.addEventListener('click',function(){
			chrome.tabs.executeScript({
				file : 'js/response/five.js'
			});
			showMessage("Selected all Five!");
		});
	});
}

function showMessage(msg){
	$(".message").html(msg);
}