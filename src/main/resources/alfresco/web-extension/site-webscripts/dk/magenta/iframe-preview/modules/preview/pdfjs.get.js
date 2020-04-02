var idxDownload;
for (var i = 0; i < model.toolbarItems.length; i++) {
    if (model.toolbarItems[i].id == "download") {
        // model.toolbarItems[i].disabled = true;
        idxDownload = i;
    }
}

model.toolbarItems.splice(idxDownload, 1);
model.toolbarItems.splice(idxDownload + 1, 1);