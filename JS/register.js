$(document).ready(function () {
	$('#RegisterBtn').click(function(){
		var FName = $('#FName').val();
		var LName = $('#LName').val();
		var Email = $('#Email').val();
		var Country = $('#country').children('option:selected').val();

		alert(Country);

		var Data = 'FName=' + FName + '&LName=' + LName + '&Email=' + Email + '&Country=' + Country;
		$.ajax({
			type: 'POST',
			url: '../PHP/register.php?',
			data: Data,
			success: function (Data) {
				$('#dbMsg').html(Data);
				$('#alert').show();
			}
		});
	});
});