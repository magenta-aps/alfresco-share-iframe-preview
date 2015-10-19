if (model.widgets && context.pageId == 'iframe-preview')
{
    for (var i = 0; i < model.widgets.length; i++)
    {
        var widget = model.widgets[i];
        if (widget.id == "WebPreview")
        {
            var conditions = [];
            // Insert new pluginCondition(s) at start of the chain
            conditions.push({
                attributes: {
                    mimeType: "text/html"
                },
                plugins: [{
                    name: "HTMLPreviewer",
                    attributes: {}
                }]
            });
            //conditions.push({
            //    attributes: {
            //        mimeType: "application/pdf"
            //    },
            //    plugins: [{
            //        name: "HTMLPreviewer",
            //        attributes: {}
            //    }]
            //});
            // Show PDFs still using PdfJs
            conditions.push({
                attributes: {
                    mimeType: "application/pdf"
                },
                plugins: [{
                    name: "PdfJs",
                    attributes: { progressiveLoading: false }
                }]
            });
            conditions.push({
                attributes: {
                    thumbnail: "html"
                },
                plugins: [{
                    name: "HTMLPreviewer",
                    attributes: { src: "html" }
                }]
            });
            var oldConditions = jsonUtils.toObject(jsonUtils.toJSONString({tmp: jsonUtils.toObject(widget.options.pluginConditions)})).tmp;
            // Add the other conditions back in
            for (var j = 0; j < oldConditions.length; j++)
            {
                if (typeof oldConditions[j].attributes === 'undefined') {
                    oldConditions[j].attributes = {mimeType: null, thumbnail: null};
                }
                conditions.push(oldConditions[j]);
            }
            // Override the original conditions
            model.pluginConditions = jsonUtils.toJSONString(conditions);
            widget.options.pluginConditions = model.pluginConditions;
        }
    }
}
