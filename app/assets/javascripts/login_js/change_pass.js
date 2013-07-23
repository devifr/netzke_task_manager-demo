Ext.QuickTips.init();     
Ext.onReady(function(){    
	var forgot_form = Ext.create('Ext.form.Panel',{     
		url: 'change.aspx',     
		renderTo: Ext.get('changediv'),     
		frame: true,     
		title: 'Change Password',     
		width: 250,
		items: [{ 
					xtype: 'textfield',
					fieldLabel: 'Old Password',
					name: 'old_pass',
					allowBlank: false,
				},{
					xtype: 'textfield',
					fieldLabel: 'New Password',
					name: 'new_pass',
					allowBlank: false,
				},{
					xtype: 'textfield',
					fieldLabel: 'Confirm Password',
					name: 'confirm_pass',
					allowBlank: false,
				}],
				buttons:[{
					text: 'Save',
					handler: function(){
						forgot_form.getForm().submit({
						success: function(form, action){
							Ext.Msg.alert('Success', 'Your Password Have been Change');
						},
						failure: function(form, action){
							Ext.Msg.alert('Warning', 'Unable Change. Please try again.');
						}
					});
				}
			}]
		});
	});
