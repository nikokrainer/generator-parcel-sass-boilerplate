const Generator = require("yeoman-generator")
module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to the Parcel and Sass Generator!")
  }

  writing() {
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    )
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    )
    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    )
	this.fs.copy(this.templatePath(".htmlnanorc"), 
	this.destinationPath(".htmlnanorc"))
	this.fs.copy(this.templatePath(".sassrc"), 
	this.destinationPath(".sassrc"))

    this.fs.copy(this.templatePath("src"), this.destinationPath("src"))
  }

  end() {
    this.log(" ")
    this.log(
      "Finished generating! Before running, make sure you have the Parcel installed globally."
    )
  }
}
