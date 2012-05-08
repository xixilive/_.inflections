_.Inflections
=============

A underscore extension. Especially useful on Backbone's router. 
---------------------------------------------------------------

There are 8 functions, all of these functions have as much of an effect as the ActiveSupport::Inflections on Rails.

#### _.singularize
				_.singularize('men') == 'man'
#### _.pluralize
				_.pluralize('person') == 'people'
#### _.camelize
				_.camelize('under_score') == 'UnderScore'
#### _.underscore
				_.underscore('UnderScore') == 'under_score'
#### _.capitalize
				_.capitalize('underscore') == 'Underscore'
#### _.dasherize
				_.dasherize('under_score') == 'under-score'
#### _.classify
				_.classify('under_scores') == 'UnderScore'
#### _.ordinalize
				_.ordinalize(1) == '1st'
