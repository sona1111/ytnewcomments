#ytnewcomments
=============

A __small__ google chrome extension which changes youtube comments to be shown chronologically by default.

This is a really simple extension which uses semi-brute force methods to accomplish the task of clicking a button on youtube. The comment sorting selection menu on youtube does not work using any standard menu that I know of, so the only way I could figure out to select the other option was to simulate clicking a standard mouse on the button. This is what the 'dispatchmouseevent' function accomplishes. This is done twice: once to poen the menu and again to select the correct option. Matters are slightly complicated by the fact that the comments section opens in an iframe which has a loading delay depending on if the user scrolls down the page or not and another loading delay once the iframe itself is loaded. (this is difficult to describe) The problem in my extension was addressed by checking if the origin of the page is an iframe matching the corect url and then trying to click the button every 2ms until the process is successful. (after which the extension does nothing more)

Problems to fix:

* clean up code, better function names, etc. 
* Be able to turn off the extension by clicking on the icon.
* automatically search for the correct element to click instead of using a predefined xpath. 

 
