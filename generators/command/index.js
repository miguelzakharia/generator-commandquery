'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tremendous ' + chalk.red('Commandquery:command') + ' generator!'
    ));

    var prompts = [{
        name: 'namespace',
        message: 'What is the namespace for this Command?'
      },
      {
        name: 'className',
        message: 'What is the class name for this Command (\'Command\' and \'CommandHandler\' will be appended automatically)?'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    // This was 'app' instead of 'command'.
    command: function () {
      // this.fs.copy(
      //   this.templatePath('_package.json'),
      //   this.destinationPath('package.json')
      // );
      // this.fs.copy(
      //   this.templatePath('_bower.json'),
      //   this.destinationPath('bower.json')
      // );
    },

    projectfiles: function () {
      // this.fs.copy(
      //   this.templatePath('editorconfig'),
      //   this.destinationPath('.editorconfig')
      // );
      // this.fs.copy(
      //   this.templatePath('jshintrc'),
      //   this.destinationPath('.jshintrc')
      // );
      this.fs.copyTpl(
        this.templatePath('_command.cs'),
        this.destinationPath(this.props.className + 'Command.cs'),
        {
          namespace: this.props.namespace,
          className: this.props.className
        }
      );
      this.fs.copyTpl(
        this.templatePath('_commandHandler.cs'),
        this.destinationPath(this.props.className + 'CommandHandler.cs'),
        {
          namespace: this.props.namespace,
          className: this.props.className
        }
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
