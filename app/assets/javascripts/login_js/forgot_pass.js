Ext.QuickTips.init();     
Ext.onReady(function(){    
	var forgot_form = Ext.create('Ext.form.Panel',{     
		url: 'forgot.aspx',     
		renderTo: Ext.get('forgotdiv'),     
		frame: true,     
		title: 'Forgot Password',     
		width: 250,     
		items: [{ 
					xtype: 'textfield',
					fieldLabel: 'Email',
					name: 'email',
					allowBlank: false,
				}],
				buttons:[{
					text: 'Send Email',
					handler: function(){
						forgot_form.getForm().submit({
						success: function(form, action){
							Ext.Msg.alert('Success', 'Your Password Have been Send');
						},
						failure: function(form, action){
							Ext.Msg.alert('Warning', 'Unable Send. Please try again.');
						}
					});
				}
			}]
		});
	});