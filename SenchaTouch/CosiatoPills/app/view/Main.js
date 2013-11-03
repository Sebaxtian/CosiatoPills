/**
 * Este archivo contiene la definicion elementos
 * para la vista del archivo view/Main.js
 * 
 * Esta vista sirve de entrada a la aplicacion y
 * sus demas elementos.
 *  
 * @author Sebastian Rios - sebaxtianrios@gmail.com
 * @version 0.1
 */

Ext.define('CosiatoPills.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'CosiatoPills.view.Contact',
        'CosiatoPills.view.Pills'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                html: [
                	"<div class='homediv'>" +
                		"<img src='resources/images/CosiatoPills.png' />" +
                		"<h2>Welcome to CosiatoPills</h2>" +
                		"<h3>Organize your pills anywhere</h3>" +
                		"<h6>CosiatoPills</h6>" +
                	"</div>"
                ].join("")
            },
            {
            	xtype: 'pillspanel'
            },
            {
            	xtype: 'contactpanel'
            }
        ]
        
    }
});
