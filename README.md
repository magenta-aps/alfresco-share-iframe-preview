# alfresco-share-iframe-preview
AMP module for Alfresco Share.
Show stripped-down version of document details page for use in an iframe.

The URL `/share/page/iframe-preview?nodeRef={nodeRef}` will show a document details page with just a few actions in a compact format.

Note that it will use an HTML rendition of the document as the preview. This is dependent on the [htmlthumbnail](https://github.com/magenta-aps/htmlthumbnail/) module being
 installed on the repository side.
