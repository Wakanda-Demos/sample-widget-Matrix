WAF.define('BarCode', function() {
    var widget = WAF.require('waf-core/widget');
    var BarCode = widget.create('BarCode');
 	
 	
 	BarCode.addProperty ('format', {
            type: 'enum',
            values: {
            	'EAN' :'EAN (13)', 
            	'CODE128':'CODE128 (B)', 
            	'UPC-A': 'UPC-A', 
            	'CODE39':'CODE39',   
            	'ITF14':'ITF14'           	
        	},
            defaultValue: 'CODE128', 
            bindable: false 
    });
 	
 	
   BarCode.prototype.init = function () {
    	 			
		this.config = {
			format: this.format()
		}
		
		//rendering the widget
		this.render();
		
		//Defining the onChange method for the relevant attributes
		this.value.onChange( function(value) { 
    		this.render(); 
    	});	
    	
    	this.format.onChange( function(value) {
    		this.config.format = value; 
    		this.render(); 
    	});	

    };  
       
    BarCode.prototype.render = function () {
   		//emptying the node
    	this.node.innerHTML = '<img></img>';
		//creating the gauge attribute
		try {
			$('img', this.node).JsBarcode(String(this.value()), this.config);
		}catch(error) {
			this.fire('wrongFormat');
			console.log("Value not in the right format, please verify your value ");

		}
		
    };

    //Adding a bindable property
   	BarCode.addProperty('value');
   	
   
    return BarCode;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
