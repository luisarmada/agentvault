var character = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      this.state = {
        abilities: props.abilities
      };
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr0="expr0" class="agentscreen" onmousemove="MouseMoveEvent(event)"><img src="images/valorant-logo-valorant-icon-transparent-free-png.png" class="gamelogo"/><div class="role_navbar"><img src="images/DuelistClassSymbol.webp" class="curr_role"/><img src="images/InitiatorsClassSymbol.webp" class="other_role"/><img src="images/SentinelClassSymbol.webp" class="other_role"/><img src="images/ControllerClassSymbol.webp" class="other_role"/></div><h1 expr1="expr1" class="agentname"> </h1><img expr2="expr2" class="agentimg"/><h1 expr3="expr3" class="agent_fullname" id="test"> </h1><h1 expr4="expr4" class="agentdescription"> </h1><div class="agentselect"><img expr5="expr5" draggable="false"/></div></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'id',
      evaluate: _scope => _scope.props.name
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--fromcol: ', _scope.props.bgfromcol, '; --tocol: ', _scope.props.bgtocol].join('')
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.name
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--desiredfontsize: ', _scope.props.namesize, 'vh'].join('')
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'src',
      evaluate: _scope => _scope.props.charimg_url
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--size: ', _scope.props.charsize, '%; --leftoffset: ', _scope.props.charloffset, '%; --bottomoffset: ', _scope.props.charboffset, 'px;'].join('')
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.fullname
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.chardesc
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
        evaluate: _scope => _scope.ability.imgurl
      }]
    }]),
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    itemName: 'ability',
    indexName: null,
    evaluate: _scope => _scope.state.abilities
  }]),
  name: 'character'
};

export { character as default };
