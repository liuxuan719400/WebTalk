/**
 +------------------------------------------------------------------------------
 * Author zhpengle
 +------------------------------------------------------------------------------
 * index.js
 * 2012-10-31
 +------------------------------------------------------------------------------
 */
 

/**
 +------------------------------------------------------------------------------
 * 登录成功后显示talk页面
 +------------------------------------------------------------------------------
 */
exports.index = function(req, res){
	if(req.session.username && req.session.username != ''){
		res.render('index', { 
			title:'Welcome WebTalk!',
			js_path:'talk.js',
			css_path:'index_style.css'
		});	
	}else{
		res.redirect('/login');
	}
}