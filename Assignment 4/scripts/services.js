'use strict';

angular.module('confusionApp')

        .service('menuFactory', '$resource', 'baseURL', function($resource, baseURL) {
    
                this.getDishes = function(){
                    
                    return dishes;
                    
                };
    
                this.getDish = function (index) {
                    
                    return dishes[index];
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
    
                this.getPromotion = function() {
                    return $resource(baseURL+"promotions/:id", null,  {'update':{ method:'PUT' }});
                };
        })

        .factory('corporateFactory', '$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};
    
			corpfac.getLeader = function() {
				return $resource(baseURL+"leaders/:id", null,  {'update':{ method:'PUT' }});
			}
			
			return corpfac;
        })
		
		.service('feedbackFactory', '$resource', 'baseURL', function($resource, baseURL) {
			this.getFeedback = function(){
				return $resource(baseURL+'feedbacks/:id', null, {'update': { method: 'PUT' }});
			}
		}

;
