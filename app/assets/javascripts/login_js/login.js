Ext.QuickTips.init();     
Ext.onReady(function(){    
	var login_form = Ext.create('Ext.form.Panel',{     
		url: 'http://192.168.120.244:9292/v1/login',     
		method: "POST",     
		renderTo: Ext.get('logindiv'),
		frame: true,
		title: 'Login',     
		width: 250,     
		items: [{ 
				xtype: 'textfield',
				fieldLabel: 'user',
				name: 'user',
				allowBlank: false,
			},           
			{             
				xtype: 'textfield',
				fieldLabel: 'password',	
				name: 'password',
				allowBlank: false,
				inputType: 'password',
				}],
				buttons:[{
					text: 'Login',
					handler: function(){
						login_form.getForm().submit({
						success: function(form, action){
							Ext.Msg.alert('Success', 'Logged In');
						},
						failure: function(form, action){
							Ext.Msg.alert('Warning', 'Unable to login. Please try again.');
						}
					});
				}
			}]
		});
	});