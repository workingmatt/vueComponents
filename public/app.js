//vueComponent app.js


var app = new Vue({
	el: "#vueComponent",

	data: {
		message: "Hi Matt",
		stringPath: "/xmlfiles/",
		xmlFile: {"keyName1":"valueName1","keyName2":"valueName2"},
		showFilesFlag: true,
		showFormFlag: false
	},

	methods: {
		showFiles: function(){
			console.log("eventShowFiles");
			this.message = "showFiles reached";
		},

		showForm: function(file){
			console.log("in app.js showForm"+file);
			message = "showForm reached";
			this.showFormFlag = !this.showFormFlag;
		}
	}
});