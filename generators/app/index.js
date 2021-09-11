const Generator = require('yeoman-generator');
module.exports = class extends Generator {
	welcome() {
		this.log('Welcome to the Parcel and Sass Generator!');
	}

	writing() {
		this.fs.copy(
			this.templatePath('index.html'),
			this.destinationPath('index.html')
		);
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		);
		this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('package.json')
		);
		this.fs.copy(
			this.templatePath('package-lock.json'),
			this.destinationPath('package-lock.json')
		);
		this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
	}

	end() {
		this.log(' ');
		this.log(
			'Finished generating! Before running, make sure you have the Parcel installed globally.'
		);
	}
};