<?php

if(isset($_POST['phrase']))
{
	$phrase = $_POST['phrase'];
	$byName = $_POST['byName'];
	$byISO = $_POST['byISO'];
	$byLang = $_POST['byLang'];
	
	$res = array();
	
	$client = new SoapClient('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL');

	$response = $client->FullCountryInfoAllCountries();
	$countries = $response->FullCountryInfoAllCountriesResult->tCountryInfo;

	$response = $client->ListOfContinentsByCode();
	$continents = $response->ListOfContinentsByCodeResult->tContinent;
	
	$response = $client->ListOfCurrenciesByCode();
	$currencies = $response->ListOfCurrenciesByCodeResult->tCurrency;
	
	if( $byName=='true' || $byCode=='true' || $byLang=='true')
		foreach($countries as $var)
		{
			if( $byName=='true' )
				if( stripos( $var->sName, $phrase ) !== false )
				{
					$contain = false;
					foreach($res as $r)
					{
						if($r->sName == $var->sName)
							$contain = true;
					}
					if( $contain == false )
					{
						$object = new stdClass();
						$object->sName = $var->sName;
						$object->sCapitalCity = $var->sCapitalCity;
						$object->sContinentName = $var->sContinentCode;
						$object->sCurrencyName = $var->sCurrencyISOCode;
						
						$langArray = array();
						foreach( $var->Languages as $lang )
							$langArray[] = $lang->sName;
							
						$object->sLanguageName = $langArray;
						$object->sCountryFlag = $var->sCountryFlag;
						
						$res[] = $object;
					}
				}
			if( $byISO=='true' )
				if( stripos( $var->sISOCode, $phrase ) !== false )
				{
					$contain = false;
					foreach($res as $r)
					{
						if($r->sName == $var->sName)
							$contain = true;
					}
					if( $contain == false )
					{
						$object = new stdClass();
						$object->sName = $var->sName;
						$object->sCapitalCity = $var->sCapitalCity;
						$object->sContinentName = $var->sContinentCode;
						$object->sCurrencyName = $var->sCurrencyISOCode;
						
						$langArray = array();
						foreach( $var->Languages as $lang )
							$langArray[] = $lang->sName;
							
						$object->sLanguageName = $langArray;
						$object->sCountryFlag = $var->sCountryFlag;
						
						$res[] = $object;
					}
				}
			if( $byLang=='true' )
				foreach( $var->Languages as $lang )
					if( stripos( $lang->sName, $phrase ) !== false )
					{
						$contain = false;
						foreach($res as $r)
						{
							if($r->sName == $var->sName)
								$contain = true;
						}
						if( $contain == false )
						{
							$object = new stdClass();
							$object->sName = $var->sName;
							$object->sCapitalCity = $var->sCapitalCity;
							$object->sContinentName = $var->sContinentCode;
							$object->sCurrencyName = $var->sCurrencyISOCode;
							
							$langArray = array();
							foreach( $var->Languages as $lang )
								$langArray[] = $lang->sName;
								
							$object->sLanguageName = $langArray;
							$object->sCountryFlag = $var->sCountryFlag;
							
							$res[] = $object;
						}
					}
		}
	
	//w tym miejscu podmieniami kody kontynentu i waluty na pelne nazwy
	if( count($res)>0 )
	{
		foreach($res as $r)
		{
			foreach($continents as $con)
			{
				if( $r->sContinentName == $con->sCode )
					$r->sContinentName = $con->sName;
			}
			foreach($currencies as $cur)
			{
				if( $r->sCurrencyName == $cur->sISOCode )
					$r->sCurrencyName = $cur->sName;
			}
		}
	}
	
	header('Content-Type: application/json');
	echo json_encode($res);
	exit;
	
}
?>