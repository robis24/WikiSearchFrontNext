<?php
class WikiSearchSsrHooks {
	public static function onParserFirstCallInit( Parser $parser ) {

		$parser->setHook( 'wikisearchssr', [ self::class, 'wikiSearchSsr' ] );
	 }
  
	 public static function wikiSearchSsr( $input, $args, Parser $parser, $frame ) {
  
		// $parser->getOutput()->addJsConfigVars( "WikiSearchSsr",
		// 									   array(
		// 										   "config" => json_decode($input, true)
		// 									   ) );
		// add vue modules
		// $parser->getOutput()->addModules( 'ext.WikiSearchSsr.module' );

		$raw_data = file_get_contents('http://localhost:3000');

		
		$output = $raw_data;
  
		return  $output;
	 }
}