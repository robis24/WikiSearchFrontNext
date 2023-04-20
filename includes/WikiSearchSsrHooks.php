<?php
class WikiSearchSsrHooks
{
	public static function onParserFirstCallInit(Parser $parser) {
		$parser->setHook('wikisearchssr', [self::class, 'wikiSearchSsr']);
	}

	public static function wikiSearchSsr($input, $args, Parser $parser, $frame)	{

		if (false) {
			$raw_data = file_get_contents('http://localhost:3000');
			$output = "<div>" . $raw_data . "</div>";
			return  $output;
		} 

		$parser->getOutput()->addModules( ['ext.WikiSearchSsr.module'] );


		$output = "<div id='app'></div>";

		return  $output;
	}
}
