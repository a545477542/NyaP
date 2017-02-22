const i18n={
	lang:null,
	langs:{},
	_:(str)=>{
		return (i18n.lang&&i18n.langs[i18n.lang][str])||str;
	}
};

//Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith)
String.prototype.startsWith = function(searchString, position){
	position = position || 0;
	return this.substr(position, searchString.length) === searchString;
};


i18n.langs['zh-CN']={
	'play':'播放',
	'Send':'发送',
	'pause':'暂停',
	'Input danmaku here':'在这里输入弹幕',
	'Failed to change to fullscreen mode':'无法切换到全屏模式',
}






for(let lang of navigator.languages){
	if(i18n.langs[lang]){
		i18n.lang=lang;
		break;
	}
	let code=lang.match(/^\w+/)[0];
	for(let cod in i18n.langs){
		if(cod.startsWith(code)){
			i18n.lang=cod;
			break;
		}
	}
	if(i18n.lang)break;
}
console.debug('Language:'+i18n.lang)

export {i18n};