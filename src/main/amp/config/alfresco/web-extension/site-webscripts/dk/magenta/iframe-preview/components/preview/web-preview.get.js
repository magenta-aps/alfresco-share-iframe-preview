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

            // Use PdfJs to preview presentations/spreadsheets
            var pdfJsMimeTypes = "application/vnd.ms-powerpoint" +
                " application/vnd.ms-powerpoint.addin.macroenabled.12 application/vnd.ms-powerpoint.presentation.macroenabled.12 application/vnd.ms-powerpoint.slide.macroenabled.12 application/vnd.ms-powerpoint.slideshow.macroenabled.12 application/vnd.ms-powerpoint.template.macroenabled.12 application/vnd.oasis.opendocument.presentation application/vnd.oasis.opendocument.presentation-template application/vnd.openxmlformats-officedocument.presentationml.presentation application/vnd.openxmlformats-officedocument.presentationml.slide application/vnd.openxmlformats-officedocument.presentationml.slideshow application/vnd.openxmlformats-officedocument.presentationml.template application/vnd.oasis.opendocument.spreadsheet application/vnd.oasis.opendocument.spreadsheet-template application/vnd.sun.xml.calc application/vnd.sun.xml.calc.template application/vnd.ms-excel application/vnd.openxmlformats-officedocument.spreadsheetml.sheet application/vnd.openxmlformats-officedocument.spreadsheetml.template application/vnd.ms-excel.sheet.macroEnabled.12 application/vnd.ms-excel.template.macroEnabled.12 application/vnd.ms-excel.sheet.binary.macroEnabled.12".split(" ");

            for (var m = 0; m < pdfJsMimeTypes.length; m++) {
                conditions.push({
                    attributes: {
                        mimeType: pdfJsMimeTypes[m]
                    },
                    plugins: [{
                        name: "PdfJs",
                        attributes: { src: "pdf", progressiveLoading: false }
                    }]
                });
            }

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
