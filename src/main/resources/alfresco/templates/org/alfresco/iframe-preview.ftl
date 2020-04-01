<#include "include/alfresco-template.ftl" />
<@templateHeader>
  <@script type="text/javascript" src="${url.context}/res/modules/documentlibrary/doclib-actions.js" group="document-details"/>
  <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/document-details/document-details-panel.css" group="document-details"/>
  <@link rel="stylesheet" type="text/css" href="${url.context}/res/iframe-preview-share/components/iframe-preview/iframe-preview.css" group="document-details"/>

  <@script type="text/javascript" src="${url.context}/res/iframe-preview-share/components/preview/report-iframe-height.js" group="web-preview"/>

  <!-- HTMLPreviewer dependencies -->
  <@script type="text/javascript" src="${url.context}/res/iframe-preview-share/components/preview/HTMLPreviewer.js" group="web-preview"/>
  <@link rel="stylesheet" type="text/css" href="${url.context}/res/iframe-preview-share/components/preview/HTMLPreviewer.css" group="web-preview"/>

  <@templateHtmlEditorAssets />
</@>

<@templateBody>
  <@markup id="alf-hd">
  <#--<div id="alf-hd">-->
    <#--<@region id="mobile-app" scope="template"/>-->
      <#--<@region scope="global" id="share-header" chromeless="true"/>-->
  <#--</div>-->
  </@>
  <@markup id="bd">
  <div id="bd" class="iframe-preview">

    <#-- Disable download buttons etc... -->

    <#--
    <@region id="actions-common" scope="template"/>
    <@region id="actions" scope="template"/>
    <@region id="node-header" scope="template"/>
    <@region id="document-actions" scope="template"/>
    -->


    <#-- Show the previewer -->

    <#if (config.scoped['DocumentDetails']['document-details'].getChildValue('display-web-preview') == "true")>
      <@region id="web-preview" scope="template"/>
    </#if>



    <#--<div class="yui-gc">-->
      <#--<div class="yui-u first">-->
        <#---->
            <#--&lt;#&ndash;<@region id="comments" scope="template"/>&ndash;&gt;-->
      <#--</div>-->
      <#--<div class="yui-u">-->
            <#--&lt;#&ndash;<@region id="document-tags" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-links" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-metadata" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-sync" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-permissions" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-workflows" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<@region id="document-versions" scope="template"/>&ndash;&gt;-->
            <#--&lt;#&ndash;<#if imapServerEnabled>&ndash;&gt;-->
        <#--&lt;#&ndash;<@region id="document-attachments" scope="template"/>&ndash;&gt;-->
      <#--&lt;#&ndash;</#if>&ndash;&gt;-->
      <#--</div>-->
    <#--</div>-->

    <#--<@region id="html-upload" scope="template"/>-->
    <#--<@region id="flash-upload" scope="template"/>-->
    <#--<@region id="file-upload" scope="template"/>-->
    <#--<@region id="dnd-upload" scope="template"/>-->
  </div>
    <#--<@region id="doclib-custom" scope="template"/>-->
  </@>
</@>

<@templateFooter>
  <#--<@markup id="alf-ft">-->
  <#--&lt;#&ndash;<div id="alf-ft">&ndash;&gt;-->
    <#--&lt;#&ndash;<@region id="footer" scope="global"/>&ndash;&gt;-->
  <#--&lt;#&ndash;</div>&ndash;&gt;-->
  <#--</@>-->
</@>
