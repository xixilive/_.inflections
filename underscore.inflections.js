(function(_){
	var _inflections= {
		
    uncountable: "equipment information rice money species series fish sheep jeans police".split(/\s+/),

		singular_rules: [
			[/(database)s$/i, '$1'],
			[/(quiz)zes$/i, '$1'],
			[/(matr)ices$/i, '$1ix'],
			[/(vert|ind)ices$/i, '$1ex'],
			[/^(ox)en/i, '$1'],
			[/(alias|status)(es)?$/i, '$1'],
			[/(octop|vir)(us|i)$/i, '$1us'],
			[/^(a)x[ie]s$/i, '$1xis'],
			[/(cris|test)(is|es)$/i, '$1is'],
			[/(shoe)s$/i, '$1'],
			[/(o)es$/i, '$1'],
			[/(bus)(es)?$/i, '$1'],
			[/^(m|l)ice$/i, '$1ouse'],
			[/(x|ch|ss|sh)es$/i, '$1'],
			[/(m)ovies$/i, '$1ovie'],
			[/(s)eries$/i, '$1eries'],
			[/([^aeiouy]|qu)ies$/i, '$1y'],
			[/([lr])ves$/i, '$1f'],
			[/(tive)s$/i, '$1'],
			[/(hive)s$/i, '$1'],
			[/([^f])ves$/i, '$1fe'],
			[/(^analy)(sis|ses)$/i, '$1sis'],
			[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, '$1$2sis'],
			[/([ti])a$/i, '$1um'],
			[/(n)ews$/i, '$1ews'],
			[/(ss)$/i, '$1'],
			[/s$/i, '']
		],

		plural_rules:[
			[/(quiz)$/i, '$1zes'],
			[/^(oxen)$/i, '$1'],
			[/^(ox)$/i, '$1en'],
			[/^(m|l)ice$/i, '$1ice'],
			[/^(m|l)ouse$/i, '$1ice'],
			[/(matr|vert|ind)(?:ix|ex)$/i, '$1ices'],
			[/(x|ch|ss|sh)$/i, '$1es'],
			[/([^aeiouy]|qu)y$/i, '$1ies'],
			[/(hive)$/i, '$1s'],
			[/(?:([^f])fe|([lr])f)$/i, '$1$2ves'],
			[/sis$/i, 'ses'],
			[/([ti])a$/i, '$1a'],
			[/([ti])um$/i, '$1a'],
			[/(buffal|tomat)o$/i, '$1oes'],
			[/(bu)s$/i, '$1ses'],
			[/(alias|status)$/i, '$1es'],
			[/(octop|vir)i$/i, '$1i'],
			[/(octop|vir)us$/i, '$1i'],
			[/^(ax|test)is$/i, '$1es'],
			[/s$/i, 's'],
			[/$/, 's']
		],

		irregular_rules: [
			['person', 'people'],
			['man', 'men'],
      ['woman', 'women'],
			['child', 'children'],
			['sex', 'sexes'],
			['move', 'moves'],
			['cow', 'kine'],
			['zombie', 'zombies']
		],

		test: function(rules,word){
			if(!_.isString(word) || _.isEmpty(word)){
				return '';
			}

			var _w = word.toLowerCase(), _rule;

			if(_(this.uncountable).indexOf(_w) > -1){ 
				return word;
			}

			if(_rule = _.find(this.irregular_rules,function(r){
				return _(r).indexOf(_w) > -1;
			})){
				return rules == 'plural' ? _rule[1] : _rule[0];
			}

			if(_rule = _.find(this[rules+'_rules'],function(r){
				return r[0].test(_w);
			})){
				return word.replace(_rule[0],_rule[1])
			}

			return word;
		}
	};

	var _inflectors = {
		singularize : function(word){
			return _inflections.test('singular',word);
		},

		pluralize : function(word){
			return _inflections.test('plural',word);
		},

		ordinalize: function(number) {
			var int = parseInt(number);
      if (11 <= int % 100 && int % 100 <= 13) {
          return number + "th";
      }
      switch (int % 10) {
          case  1: return number + "st";
          case  2: return number + "nd";
          case  3: return number + "rd";
          default: return number + "th";
      }
    },

    camelize: function(word, uppercase_first){
    	uppercase_first = typeof uppercase_first == 'undefined' || uppercase_first == true;
    	var _str=word.replace(/[-_]+(.)?/g, function(m, c) {
	      return c ? c.toUpperCase() : '';
	    });
	    return uppercase_first ? _str.charAt(0).toUpperCase() + _str.substring(1) : _str
    },

    underscore: function(word){
    	return word.replace(/::/g, '/')
             .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
             .replace(/([a-z\d])([A-Z])/g, '$1_$2')
             .replace(/-/g, '_')
             .toLowerCase();
    },

    capitalize: function(word){
    	return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    },

    dasherize: function(word){
    	return word.replace(/_/g, '-');
    },

    classify: function(word){
    	return _.camelize(_.singularize(word.replace(/.*\./, '')));
    }

	};

	_.mixin(_inflectors);
})(_);
