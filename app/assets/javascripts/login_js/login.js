Ext.QuickTips.init();     
Ext.onReady(function(){    
	var login_form = Ext.create('Ext.form.Panel',{     
		type: 'rest',
		url: 'http://192.168.120.244:9292/v1/login',     
 		renderTo: Ext.get('logindiv'),
		frame: true,
		title: 'Login',     
		width: 250,     
		items: [
		  { 
				xtype: 'textfield',
				fieldLabel: 'user',
				name: 'username',
				allowBlank: false,
			},           
			{             
				xtype: 'textfield',
				fieldLabel: 'password',	
				name: 'password',
				allowBlank: false,
				inputType: 'password',
			}
		],
				buttons:[{
					text: 'Login',
					handler: function(){
						login_form.getForm().submit({
							method:'POST',
							success: function(form, action){
								Ext.Msg.alert('Success', 'Logged In');
							},
							failure: function(form, action){
								console.log(action.response)
								if(action.response.status){
                  Ext.Msg.alert("Success", 'Masuk')
								}else{
								  Ext.Msg.alert('Warning', 'Unable to login. Please try again.');	
								}
								
							}
					});
				}
			}]
		});
	});