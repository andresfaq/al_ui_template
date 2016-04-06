define(['angular','config/config','ocNgRepeat','mwheel'],
    function ( angular, config, ocNgRepeat){
    "use strict";
    
    var popularMoviesController = function($scope, TMDBAPIService, $routeParams ) 
    {
        
        
        var config  = angular.module("config");
        $scope.view = {images: config.apiImg};
        
        
        
        $scope.carouselInitializer =  function() {
            
            var car = $(".about-carousel");
            
            car.owlCarousel({                            
                            
              //nav: true,                              
              //navText: ["<a class='btn btn-primary'> < </a>", "<a class='btn btn-primary'> > </a>"],
              responsive:{
                0:{                    
                    items:1,
                    margin: 20,
                },
                600:{
                    items:3,
                    margin: 10,
                },            
                960:{
                    items:5,
                    margin: 10,
                },
                1200:{
                    items:6,
                    margin: 10,
                }
            }    
            });
            
            car.on('mousewheel', '.owl-stage', function(e){
                if (e.deltaY<0){                     
                    car.trigger('next.owl.carousel');
                }else{
                    car.trigger('prev.owl.carousel');
                }
                e.preventDefault();
            });
            
        };

        
        
        
    };

    popularMoviesController.$inject = [ '$scope','$routeParams' ];
    
    return popularMoviesController;
          
                  
});
    
    