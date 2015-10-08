/**
 * The "HTMLPreviewer" plugin used to display previews of HTML content.
 *
 * @param wp {Alfresco.WebPreview} The Alfresco.WebPreview instance that decides which plugin to use
 * @param attributes {Object} Arbitrary attributes brought in from the <plugin> element
 */
Alfresco.WebPreview.prototype.Plugins.HTMLPreviewer = function(wp, attributes)
{
  this.wp = wp;
  this.attributes = YAHOO.lang.merge(Alfresco.util.deepCopy(this.attributes), attributes);
  return this;
};

Alfresco.WebPreview.prototype.Plugins.HTMLPreviewer.prototype =
{
  /**
   * Attributes
   */
  attributes:
  {
    /**
     * Decides if the node's content or one of its thumbnails shall be displayed.
     * Leave it as it is if the node's content shall be used.
     * Set to a custom thumbnail definition name if a node thumbnail shall be displayed instead of the content.
     *
     * @property src
     * @type String
     * @default null
     */
    src: null
  },

  /**
   * Tests if the plugin can be used in the users browser.
   *
   * @method report
   * @return {String} Returns nothing if the plugin may be used, otherwise returns a message containing the reason
   *         it cant be used as a string.
   * @public
   */
  report: function HTMLPreviewer_report()
  {
  },

  /**
   * Display the node.
   *
   * @method display
   * @public
   */
  display: function HTMLPreviewer_display()
  {
    var ctx = this.resolveUrls();
    var previewElement = this.wp.getPreviewerElement();

    // Remove the annoying 'Setting up Previewer' message
    this.wp.getPreviewerElement().innerHTML = "";

    var $this = this;

    require(["jquery"], function($) {
      var iframe = $('<iframe>', {
        src: ctx.src,
        frameborder: 0,
        style: 'width: 100%; height: 100%; overflow: visible;'
      });
      iframe.load(function () {
        $(this).height($(this).contents().outerHeight());
        $this.postWindowHeight();
      });
      iframe.appendTo(previewElement);
    });

    //Alfresco.util.Ajax.request(
    //    {
    //      url: ctx.src,
    //      successCallback:
    //      {
    //        fn: function (response, config)
    //        {
    //          require(["jquery"], function($) {
    //            var result = Alfresco.util.Ajax.sanitizeMarkup(response.serverResponse.responseText)[0];
    //            var $dom = $(document.createElement("html"));
    //            $dom[0].innerHTML = result;
    //            var $body = $dom.find("body");
    //            $body.prepend($dom.find("head style"));
    //            $body.children().appendTo(previewElement);
    //
    //            this.postWindowHeight();
    //          });
    //        },
    //        scope: this
    //      },
    //      failureMessage: Alfresco.util.message("message.failure"),
    //      scope: this
    //    });
    return null;
  },

  postWindowHeight: function () {
    function getHeight() {
      var body = document.body, html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight);
    }
    window.parent.postMessage({iframeHeight:getHeight()}, '*');
  },

  /**
   * Helper method to get the urls to use depending on the given attributes.
   *
   * @method resolveUrls
   * @return {Object} An object containing urls.
   */
  resolveUrls: function HTMLPreviewer_resolveUrls()
  {
    var ctx = {
      src: this.attributes.src ? this.wp.getThumbnailUrl(this.attributes.src) : this.wp.getContentUrl()
    };
    return ctx;
  }

};