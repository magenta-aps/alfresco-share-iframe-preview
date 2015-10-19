"use strict";

if (Alfresco !== undefined && Alfresco.DocumentActions !== undefined) {
  // Disable the refreshing of metadata, as it screws up our overridden
  // iframe-preview-extension.xml share module which overrides the
  // DocLibActions.
  // This causes all of the action buttons to be shown instead of just the
  // few that we have configured.
  Alfresco.DocumentActions.prototype.refresh = function () {};
}
