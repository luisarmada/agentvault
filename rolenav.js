var rolenav = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      this.state = {
        roles: props.roles
      };
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<img expr0="expr0" class="gamelogo"/><div class="role_navbar"><img expr1="expr1"/></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'src',
      evaluate: _scope => _scope.props.logopath
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template(null, [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        isBoolean: false,
        name: 'src',
        evaluate: _scope => _scope.role.roleimg
      }, {
        type: expressionTypes.ATTRIBUTE,
        isBoolean: false,
        name: 'class',
        evaluate: _scope => _scope.role.curr ? 'curr_role' : 'other_role'
      }]
    }]),
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    itemName: 'role',
    indexName: null,
    evaluate: _scope => _scope.state.roles
  }]),
  name: 'rolenav'
};

export { rolenav as default };
