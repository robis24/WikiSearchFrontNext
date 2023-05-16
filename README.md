# WikiSearchFront 1.39 development version

**WIP**

> **Warning**
> In development, not ready for use

The **WikiSearchFront** MediaWiki extension is a front-end for [WikiSearch](https://www.mediawiki.org/wiki/Extension:WikiSearch "Extension:WikiSearch") written in Vue.js

## Installation
It is recommended to use this extension in combination with [WikiSearch](https://www.mediawiki.org/wiki/Extension:WikiSearch "Extension:WikiSearch") and optionally [WSSemanticParsedText](https://www.mediawiki.org/w/index.php?title=Extension:WSSemanticParsedText&action=edit&redlink=1 "Extension:WSSemanticParsedText (page does not exist)").

-   Download and place the file(s) in a directory called  `WikiSearchFront`  in your  `extensions/`  folder.
-   Add the following code at the bottom of your  [LocalSettings.php](https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:LocalSettings.php "Special:MyLanguage/Manual:LocalSettings.php"):
    
    wfLoadExtension( 'WikiSearchFront' );
    
-   ![Yes](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/OOjs_UI_icon_check-constructive.svg/15px-OOjs_UI_icon_check-constructive.svg.png) **Done**  – Navigate to  [Special:Version](https://www.mediawiki.org/wiki/Special:Version "Special:Version")  on your wiki to verify that the extension is successfully installed.

## Usage
See the help page for [using the WikiSearchFront extension](https://www.mediawiki.org/wiki/Help:WikiSearchFront "Help:WikiSearchFront") for further information.


## License (GPL-2.0+)

See  [LICENSE](https://gitlab.wikibase.nl/community/wssearchfront/-/blob/master/LICENSE).