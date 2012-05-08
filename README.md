_.Inflections
=============

A underscore extension. Especially useful on Backbone's router. 
---------------------------------------------------------------

There are 8 functions, all of these functions have as much of an effect as the ActiveSupport::Inflections on Rails.

#### _.singularize(term)
        _.singularize('men') == 'man'
#### _.pluralize(term)
        _.pluralize('person') == 'people'
#### _.camelize(term[,uppercase_first=true])
        _.camelize('under_score') == 'UnderScore'
#### _.underscore(term)
        _.underscore('UnderScore') == 'under_score'
#### _.capitalize(term)
        _.capitalize('underscore') == 'Underscore'
#### _.dasherize(term)
        _.dasherize('under_score') == 'under-score'
#### _.classify(term)
        _.classify('under_scores') == 'UnderScore'
#### _.ordinalize(term)
        _.ordinalize(1) == '1st'


# Links
[documentcloud/underscore](https://github.com/documentcloud/underscore)
[documentcloud/backbone](https://github.com/documentcloud/backbone)
[Rails](https://github.com/rails/rails)