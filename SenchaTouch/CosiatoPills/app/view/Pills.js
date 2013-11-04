/**
 * Este archivo contiene la definicion elementos
 * para la vista del archivo view/Pills.js
 * 
 * Usando esta vista el usuario puede administrar
 * los diferentes tipos de pildoras que desea
 * medicarse.
 *  
 * @author Sebastian Rios - sebaxtianrios@gmail.com
 * @date Thu Oct 24 14:33:38 COT 2013
 * @version 0.1
 */

Ext.define('CosiatoPills.view.Pills', {
    extend: 'Ext.Panel',
    xtype: 'pillspanel',
    requires: [
    	'Ext.TitleBar'
    ],
    config: {
    	
    	title: 'Pills',
    	iconCls: 'Pill',
    	layout: 'vbox',
        
        items: [
        	{
        		docked: 'top',
                xtype: 'titlebar',
                title: 'Pills'
        	},
        	{
        		xtype: 'panel',
        		flex: 1,
        		layout: 'vbox',
        		items: [
        			{
        				style: "background-color: #3B7E00; color: white;",
						title: "Green",
						html: "Green",
						flex: 1
        			}
        		]
        	},
        	{
        		xtype: 'button',
        		text: 'Agregar',
        		ui: 'confirm',
        		margin: 4
        	}
        ]/*,
        
        html: [
        	"<div class='homediv'>" +
        		"<img src='resources/images/CosiatoPills.png' />" +
        		"<h2>Welcome to CosiatoPills</h2>" +
        		"<h3>Organize your pills anywhere</h3>" +
        		"<h6>CosiatoPills</h6>" +
        	"</div>"
        ].join("")*/
    }
});
