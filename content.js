window.onload = setTimeout(function() {
		var twitchclipdownloader_video = document.getElementsByTagName('video')[0].src;
		var twitchclipdownloader_insert = document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-end tw-pd-1')[0];

		var twitchclipdownloader_insert_style = document.createAttribute('style');
		twitchclipdownloader_insert_style.value = 'position:relative;';
		twitchclipdownloader_insert.setAttributeNode(twitchclipdownloader_insert_style);

		var node1 = document.createElement('DIV');
		var node1attr1 = document.createAttribute('class');
		var node1attr2 = document.createAttribute('style');
		node1attr1.value = 'tw-inline-block';
		node1attr2.value = 'margin-left:10px;position:absolute;left:0px;';
		node1.setAttributeNode(node1attr1);
		node1.setAttributeNode(node1attr2);

		var node2 = document.createElement('P');
		var node2attr1 = document.createAttribute('style');
		var node2attr2 = document.createAttribute('class');
		node2attr1.value = 'cursor:pointer';
		node2attr2.value = 'tw-button';
		node2.setAttributeNode(node2attr1);
		node2.setAttributeNode(node2attr2);

		var node3 = document.createElement('SPAN');
		var node3attr1 = document.createAttribute('class');
		var node3attr2 = document.createAttribute('data-a-target');
		var node3attr3 = document.createAttribute('id');
		node3attr1.value = 'tw-button__text';
		node3attr2.value = 'tw-button-text';
		node3attr3.value = 'downloadclipbutton';
		node3.setAttributeNode(node3attr1);
		node3.setAttributeNode(node3attr2);
		node3.setAttributeNode(node3attr3);
		node3.innerHTML = 'Download Clip';

		node2.appendChild(node3);
		node1.appendChild(node2);
		twitchclipdownloader_insert.appendChild(node1);

		document.getElementById('downloadclipbutton').addEventListener('click',function() {
			chrome.runtime.sendMessage({
				msg: 'downloadclip',
				clipurl: twitchclipdownloader_video
			});
		});
},2000)

setInterval(function() {
	var twitchclipdownloader_video = document.getElementsByTagName('video')[0].src;
},5000)

// made by ravnurin.com
