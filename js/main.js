$(function () {
	$('form').on('submit', function (e) {
	e.preventDefault();
	
	var phrase = $('input[name = "phrase"]').val();
	var byName = $('input[name = "byName"]').is(":checked");
	var byISO = $('input[name = "byISO"]').is(":checked");
	var byLang = $('input[name = "byLang"]').is(":checked");

	$.ajax( {
		url: 'php/connector.php',
		type: 'POST',
		data: {
			'phrase': phrase,
			'byName': byName,
			'byISO': byISO,
			'byLang': byLang
		},
		success: function(data) 
		{	
			createTable(data);
		}
	});
	});
});

function createTable(data) 
{
	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = '';
	var table = document.createElement('table');
	table.setAttribute('id', 'dtBasicExample');
	table.setAttribute('class', 'table table-striped table-bordered table-sm');
	table.setAttribute('cellspacing', '0');
	table.setAttribute('width', '100%');
	
	var thead = document.createElement('thead');
	
	var tr = document.createElement('tr');
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Nazwa kraju' );
				th.appendChild(cell);
			tr.appendChild(th);
		
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Nazwa stolicy' );
				th.appendChild(cell);
			tr.appendChild(th);
		
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Nazwa kontynentu' );
				th.appendChild(cell);
			tr.appendChild(th);
		
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Nazwa waluty' );
				th.appendChild(cell);
			tr.appendChild(th);
		
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Nazwa języków' );
				th.appendChild(cell);
			tr.appendChild(th);
			
		var th = document.createElement('th');
				th.setAttribute('class', 'th-sm');
				var cell = document.createTextNode( 'Wygląd flagi' );
				th.appendChild(cell);
			tr.appendChild(th);
			
	thead.appendChild(tr);
	
	table.appendChild(thead);
	
	var tbody = document.createElement('tbody');
	
	for(var key in data) 
	{
		var tr = document.createElement('tr');
			//sName
			var td = document.createElement('td');
				var cell = document.createTextNode( data[key]['sName'] );
				td.appendChild(cell);
			tr.appendChild(td);
			
			//sCapitalCity
			var td = document.createElement('td');
				var cell = document.createTextNode( data[key]['sCapitalCity'] );
				td.appendChild(cell);
			tr.appendChild(td);
				
			//sContinentName
			var td = document.createElement('td');
				var cell = document.createTextNode( data[key]['sContinentName'] );
				td.appendChild(cell);
			tr.appendChild(td);
				
			//sCurrencyName
			var td = document.createElement('td');
				var cell = document.createTextNode( data[key]['sCurrencyName'] );
				td.appendChild(cell);
			tr.appendChild(td);
				
			//sLanguageName
			var td = document.createElement('td');
				var cell = document.createTextNode( data[key]['sLanguageName'] );
				td.appendChild(cell);
			tr.appendChild(td);
				
			//sCountryFlag
			var td = document.createElement('td');
				td.innerHTML = '<img src="' + data[key]['sCountryFlag'] + '" width="100px;"/>';
			tr.appendChild(td);
		
		tbody.appendChild(tr);
	}
	
	table.appendChild(tbody);
	resultsDiv.appendChild(table);
	
	//podpięcie funkcji sortowania bootstrap
	$('#dtBasicExample').DataTable();
	$('.dataTables_length').addClass('bs-select');
}

