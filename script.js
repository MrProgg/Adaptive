$(function () {
	
		$.get('http://data.fixer.io/api/latest?access_key=93a8ce48dfb7b0a6a04e492a82f802ea&symbols=RUB', function (responce) {
			var rub = Object.values(responce.rates);
			$('#currency').append('<p id="rubbles">RUB: ' + rub +'</p>');
		});
		$.get('http://data.fixer.io/api/latest?access_key=93a8ce48dfb7b0a6a04e492a82f802ea&symbols=USD', function (responce) {
			var usd = Object.values(responce.rates);
			$('#currency').append('<p id="dollars">USD: ' + usd +'</p>');
		});
	});