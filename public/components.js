//components.js

Vue.component('compFileList', {
	props: ['path', 'showFilesFlag'],
	template: `
		<div v-show=showFilesFlag>
			<h3>Files</h3>
			This will display the file list in xmlfiles or whatever the path is: {{path}}
			<button class="btn btn-primary" v-on:click="evToggleFormBtnPressed">Toggle Form</button>
		</div>`,
	methods: {
		evToggleFormBtnPressed: function(){
			console.log("in comp eventShowForm");
			this.$emit("event_toggle_form", "compFileListEventData"+this.path);
		}
	}
})

Vue.component('compFileForm',{
	props: ['file','showFormFlag'],
	template: `
	<div v-show="showFormFlag">
	<h3>Form</h3>
	This will show the form for the file: {{file}}
	<input placeholder="placehldr">
	</div>`
})
