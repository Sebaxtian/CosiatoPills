/**
 * Este archivo contiene la definicion elementos
 * para la vista del archivo view/Contact.js
 * 
 * Usando esta vista el usuario se pone en contacto
 * con el desarrollador mediante un formulario.
 *  
 * @author Sebastian Rios - sebaxtianrios@gmail.com
 * @date Thu Oct 24 14:33:38 COT 2013
 * @version 0.1
 */

Ext.define('CosiatoPills.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contactpanel',
    requires: [
    	'Ext.form.FieldSet',
    	'Ext.field.Email'
    ],
    config: {
    	
    	title: 'Contact',
        iconCls: 'user',
        url: 'contact.php',
        layout: 'vbox',
        
        items: [
        	{
        		xtype: 'fieldset',
                title: 'Contact Us',
                instructions: '(email address is optional)',
                height: 285,
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',
                handler: function() {
                    this.up('contactpanel').submit();
                }
            }
        ]
    }
});
