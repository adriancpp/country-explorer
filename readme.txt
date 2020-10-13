
Wpisując fragment/całość nazwy kraju/kodu iso kraju/języka kraju, bez względu na wielkość znaków, tworzona zostaje tabelka z pasującymi wynikami

=================

Roboczo nazwałem stronkę "Country Explorer"
Strona do przetestowania online znajduje się pod tym linkiem:

https://eaqpae.cba.pl/praca/index.html

Wszystkie pliki i biblioteki które są przez nią wykorzystywane znajdują się w pliku .rar
=================

Strona została napisana zgodnie z wytycznymi podanymi w email, nie do końca był
sprecyzowany system wyszukiwania dlatego stworzyłem możliwość wyszukiwania w trzech 
wymaganych kategoriach za pomocą checboxów za pomocą których można aktywować różne kombinacje.

==================
Opis plików:

index.html 
	Zwykły plik HTML, scala projekt i jest bazą dla strony tutaj wypełniamy 
	formularz wyszukiwania

js/datatables.min.js
	Plugin jQuery-DataTables wymagany do funkcji obsługującej sortowanie wyników z bootstrap

js/jquery-3.5.1.min.js
	Biblioteka jQuery

js/main.js
	Główny i jedyny plik .js napisany przeze mnie, znajduje się tutaj zaimplementowany 	
	system wysyłania formularza bez przeładowania strony, za pomocą AJAX, oraz
	odbiór json z wynikami wyszukiwania z serwera.
	Znajduje się też tutaj funkcja tworząca tabelę.

css/bootstrap.min.css
	Bootstrap

css/datatables.min.css
	CSS z którego korzysta plugin jQuery-DataTables

css/main.css
	CSS dla tabelki z opcją sortowania

php/connector.php
	Obsługa części serwerowej, tutaj następuje połączenie z WSDL oraz stworzenie
	json wypełnionego odpowiednimi danymi dla filtrów według których szukaliśmy 
	informacji o krajach

===================
Wersja PHP 7.2
