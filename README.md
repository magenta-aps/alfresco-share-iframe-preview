# alfresco-share-iframe-preview
AMP module for Alfresco Share.
Show stripped-down version of document details page for use in an iframe.

The URL `/share/page/iframe-preview?nodeRef={nodeRef}` will show a document details page with just a few actions in a compact format.

It will also report the height of the iframe to the parent window using 
`window.parent.postMessage`. This is useful if you want to resize the iframe
 based on the height of the actual content and the iframe is loaded from a 
 different domain. The format of the `postMessage` is `{iframeHeight: 230}` 
 where 230 is the height in pixels.

If the HTML previewer is enabled, then an HTML rendition of the document 
will be used as the preview. This is dependent on the [htmlthumbnail](https://github.com/magenta-aps/htmlthumbnail/) module being installed on the repository 
side. The default is disabled. To enable, pass the
`-Dhtml.previewer.enabled=true` option to Maven.

## Building

To build, run the command: `mvn package`

Copy the `target/iframe-preview-share.amp` file to your Alfresco Share
installation's amps_share folder and apply the AMP file.

## Building for different customers

To build the project for a specific customer, you can specify the 
`-Dcustomer.name=customer` option to Maven on the command-line. For example:

`./run.sh -Dcustomer.name=roskilde` to run an integration test with the 
customer set to 'roskilde'.

`mvn package -Dcustomer.name=roskilde` to build an AMP file for the customer 
'roskilde'.

There is a Maven profile setup in the `pom.xml` file that automatically 
enables HTML previewer and uses Alfresco version 5.0.c when the customer is 
'roskilde'. Additional customer-specific profiles can be added in the same way.

It is possible to customize the translations used on a per-customer basis by
 adding a translations file to 
 `src/main/amp/config/alfresco/web-extension/messages/iframe-preview/` 
 called `${customer}.properties` where `${customer}` is the name of the 
 customer.
