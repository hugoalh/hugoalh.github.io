/*==================================================================================================
Google Search - Custom Search Engine
Author:					Google
Programming Language:	JavaScript/ECMAScript 6/7/8
==================================================================================================*/
(function()
	{
		var cx = '008207840337707381853:janfdzcaxbq';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}
)();
