'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tremendous ' + chalk.red('Commandquery:query') + ' generator!'
    ));

    var prompts = [{
        name: 'namespace',
        message: 'What is the namespace for this Query?'
      },
      {
        name: 'className',
        message: 'What is the class name for this Query (\'Query\' and \'QueryHandler\' will be appended automatically)?'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    // This was 'app' instead of 'command'.
    query: function () { },

    projectfiles: function () {
      this.fs.copyTpl(
        this.templatePath('_query.cs'),
        this.destinationPath(this.props.className + 'Query.cs'),
        {
          namespace: this.props.namespace,
          className: this.props.className
        }
      );
      this.fs.copyTpl(
        this.templatePath('_queryHandler.cs'),
        this.destinationPath(this.props.className + 'QueryHandler.cs'),
        {
          namespace: this.props.namespace,
          className: this.props.className
        }
      );
      this.fs.copyTpl(
        this.templatePath('_queryResult.cs'),
        this.destinationPath(this.props.className + 'QueryResult.cs'),
        {
          namespace: this.props.namespace,
          className: this.props.className
        }
      );
    }
  },

  install: function () { }
});
