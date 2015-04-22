
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var matrix1 = {};	// @Matrix
// @endregion// @endlock

// eventHandlers// @lock

	matrix1.click = function matrix1_click (event)// @startlock
	{// @endlock

	};// @lock

	matrix1.rowdraw = function matrix1_rowdraw (event)// @startlock
	{// @endlock

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("matrix1", "click", matrix1.click, "WAF");
	WAF.addListener("matrix1", "rowdraw", matrix1.rowdraw, "WAF");
// @endregion
};// @endlock
