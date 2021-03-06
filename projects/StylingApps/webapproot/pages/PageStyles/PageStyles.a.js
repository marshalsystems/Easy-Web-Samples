dojo.declare("PageStyles", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PageStyles.widgets = {
customerLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Customer"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"layer1","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
custpurchaseDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
customerDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"custid","title":"Custid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"company","title":"Company","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"address","title":"Address","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"city","title":"City","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"state","title":"State","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"zip","title":"Zip","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"imageurl","title":"Imageurl","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"field":"twitter","title":"Twitter","width":"100%","displayType":"Text","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Custid: \" + ${custid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Address: \" + ${address} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n+ \"<div class='MobileRow'>Imageurl: \" + ${imageurl} + \"</div>\"\n+ \"<div class='MobileRow'>Twitter: \" + ${twitter} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.custpurchasedb.data.Customer","height":"100%","liveEditing":true,"localizationStructure":{},"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
customerGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"customerDojoGrid.addEmptyRow"}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"layer2","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"layer3","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
}]
}]
};

PageStyles.prototype._cssText = '';
PageStyles.prototype._htmlText = '';