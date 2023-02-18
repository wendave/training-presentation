AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  
  var intro = function() {
    $('.section-intro').click(function() {
      $('.section-intro').find('.opacity-zero').removeClass('opacity-zero');
      if ($('.audio-rain').length) {
        $('.audio-rain')[0].play();
      }
  
      $('.section-intro .btn-enter').click(function() {
        $('.fullstackhq').removeClass('opacity-zero');
        $('.section-intro').fadeOut(3000);
        $('.audio-rain')[0].remove();

        if ($('.audio-thunder').length) {
          $('.audio-thunder')[0].play();

          setTimeout(() => {
            $('.audio-thunder')[0].remove();
          }, 16000);

          setTimeout(() => {
            if ($('.audio-musicbox-intro').length) {
              $('.audio-musicbox-intro')[0].play();
            }
          }, 8000);
        }
      })
    })
  }

  var outsideHouse = function() {
    $('.section-banner .house').click(function() {    
      if ($('.audio-musicbox-intro').length) {
        setTimeout(() => {
          $('.audio-musicbox-intro')[0].remove();
        }, 5000);
      }

      if ($('.audio-door').length) {
        $('.audio-door')[0].play();

        setTimeout(() => {
          $('.audio-door')[0].remove();
        }, 6000);
      }

      setTimeout(() => {
        $('.section-banner .banner-text').addClass('opacity-zero');
      }, 700);

      $('.section-banner .background').addClass('zoom-house');
      setTimeout(() => {
        $('.section-banner').addClass('opacity-zero').delay(3000);
        $('.section-list ').removeClass('opacity-zero');
        enterHouse();
        $('.audio-static')[0].play();
        if ($('.audio-static').length) {
          setTimeout(() => {
            $('.audio-static')[0].remove();
          }, 9000);
        }
      }, 4000);
    })
  }

  var enterHouse = function() {
    setTimeout(() => {
      $('.section-list .enter').addClass('fade-out');
      $('.section-list .stairs').addClass('z-index-10').removeClass('fade-out');
      $('.section-list .scroll').removeClass('opacity-zero');
    }, 10000);
  }

  var livingRoom = function() {
    $('.section-list .scroll').click(function() {
      $(this).addClass('scroll-open');
      setTimeout(() => {
        $(this).addClass('opacity-zero');
        $('.section-list .content').addClass('content-show');
      }, 1000);
    });

    $('.section-list .content-bg').click(function() {
      $('.section-list .content-show').removeClass('content-show').addClass('opacity-zero');
      $('.section-list .stairs-trigger').removeClass('opacity-zero');
    });

    $('.section-list .stairs-trigger').click(function() {
      $(this).addClass('opacity-zero');
      
      if ($('.audio-footsteps1').length) {
        setTimeout(() => {
          $('.audio-footsteps1')[0].play();
        }, 1000);

        setTimeout(() => {
          $('.audio-footsteps1')[0].remove();
        }, 5500);
      }

      setTimeout(() => {
        $('.section-list .stairs').addClass('stairs-zoom');

        setTimeout(() => {
          $('.section-list .stairs').addClass('fade-out');
          upperFloor();
        }, 3000);
      }, 500);
    });
  }

  var upperFloor = function() {
    setTimeout(() => {
      $('.section-list').addClass('fade-out');
      $('.section-upstairs').removeClass('opacity-zero');
      $('.section-upstairs .screamer').removeClass('fade-out');
    }, 2000);

    setTimeout(() => {
      if ($('.audio-suspense1').length) {
        $('.audio-suspense1')[0].play();

        setTimeout(() => {
          $('.audio-suspense1')[0].remove();
        }, 9000);
      }
    }, 1000);
    
    setTimeout(() => {
      $('.section-upstairs .screamer').addClass('fade-out');
      $('.section-upstairs .upstairs').removeClass('fade-out');

      setTimeout(() => {
        $('.section-upstairs .upstairs').addClass('z-index-10');
        $('.section-upstairs .paper').removeClass('opacity-zero');
      }, 1000);
    }, 3800);

    $('.section-upstairs .paper').click(function() {
      $(this).addClass('opacity-zero');
      $('.section-upstairs .content').addClass('content-show');
      $('.section-upstairs .paper-holder').removeClass('opacity-zero');
    });

    $('.section-upstairs .upstairs .content-bg').click(function() {
      $(this).parent().removeClass('content-show');
      $('.section-upstairs .door-trigger').removeClass('opacity-zero');
    });

    $('.section-upstairs .door-trigger').click(function() {
      $(this).addClass('opacity-zero');
      $('.section-list').addClass('opacity-zero');
      $('.section-upstairs .upstairs').addClass('zoom-door');

      if ($('.audio-door2').length) {
        setTimeout(() => {
          $('.audio-door2')[0].play();
        }, 1000);

        setTimeout(() => {
          $('.audio-door2')[0].remove();
        }, 6500);
      }

      setTimeout(() => {
        $('.section-upstairs .upstairs').addClass('fade-out');
      }, 2000);

      setTimeout(() => {
        $('.section-upstairs .upstairs').addClass('opacity-zero');
        $('.section-upstairs .bedroom').removeClass('opacity-zero');
      }, 4000);

      setTimeout(() => {
        $('.section-upstairs .upstairs').removeClass('z-index-10');
        $('.section-bedroom').removeClass('fade-out opacity-zero');
      }, 4500);

      setTimeout(() => {
        $('.section-upstairs').removeClass('z-index-10 opacity-zero');
      }, 5000);

      setTimeout(() => {
        $('.section-bedroom').removeClass('fade-out');

        if ($('.audio-wind').length) {
          $('.audio-wind')[0].play();
  
          setTimeout(() => {
            $('.audio-wind')[0].remove();
          }, 8500);
        }
      }, 5500);

      setTimeout(() => {
        $('.section-bedroom .girl').removeClass('fade-out');

        if ($('.audio-girl-scream').length) {
          setTimeout(() => {
            $('.audio-girl-scream')[0].play();
          }, 3200);
  
          setTimeout(() => {
            $('.audio-girl-scream')[0].remove();
          }, 8000);
        }
      }, 6000);

      setTimeout(() => {
        $('.section-bedroom .girl').addClass('fade-out');
      }, 14000);

      setTimeout(() => {
        $('.section-bedroom .bedroom').removeClass('fade-out');
        $('.section-bedroom .girl').removeClass('z-index-10').addClass('opacity-zero');

        if ($('.audio-girl-singing').length) {
          setTimeout(() => {
            $('.audio-girl-singing')[0].play();
          }, 1000);
  
          setTimeout(() => {
            $('.audio-girl-singing')[0].remove();
          }, 16000);
        }
      }, 15000);

      setTimeout(() => {
        $('.section-bedroom .bedroom .content').addClass('content-show opacity-zero');
      }, 17000);

      setTimeout(() => {
        $('.section-bedroom .bedroom .piano-trigger').removeClass('opacity-zero');
        bedroom();
      }, 19000);
    });
  }

  var bedroom = function() {
    $('.section-bedroom .piano-trigger').click(function() {
      $('.section-bedroom .bedroom').addClass('fade-out opacity-zero');

      if ($('.audio-piano').length) {
        $('.audio-piano')[0].play();

        setTimeout(() => {
          $('.audio-piano')[0].remove();
        }, 4000);
      }
      
      setTimeout(() => {
        $('.section-bedroom .bedroom .content').addClass('fade-in fade-out opacity-zero');
      }, 1000);

      setTimeout(() => {
        $('.section-upstairs').addClass('opacity-zero');
        $('.section-bedroom').addClass('opacity-zero');
        $('.section-hallway').removeClass('opacity-zero');
      }, 1500);

      setTimeout(() => {
        hallway();
      }, 2500);
    });
  }

  var hallway = function() {
    $('.section-hallway').removeClass('fade-out'); 

    setTimeout(() => {
      $('.section-hallway .hallway').removeClass('fade-out');
    }, 1000);

    setTimeout(() => {
      $('.section-hallway .hallway .content').addClass('content-show');
    }, 3000);

    $('.section-hallway .hallway').click(function() {
      $(this).addClass('zoom1');

      setTimeout(() => {
        $(this).click(function() {
          $(this).addClass('zoom2');

          setTimeout(() => {
            $(this).click(function() {
              $(this).addClass('zoom3');

              setTimeout(() => {
                $(this).click(function() {
                  $(this).addClass('zoom4');

                  if ($('.audio-guy-smiling').length) {
                    setTimeout(() => {
                      $('.audio-guy-smiling')[0].play();
                    }, 3000);
            
                    setTimeout(() => {
                      $('.audio-guy-smiling')[0].remove();
                    }, 12000);
                  }

                  if ($('.audio-guy-jumpscare').length) {
                    setTimeout(() => {
                      $('.audio-guy-jumpscare')[0].play();
                    }, 9500);
            
                    setTimeout(() => {
                      $('.audio-guy-jumpscare')[0].remove();
                    }, 16000);
                  }

                  setTimeout(() => {
                    $('.section-hallway .hallway').addClass('fade-out');
                  }, 2000);

                  setTimeout(() => {
                    $('.section-hallway .guy').removeClass('opacity-zero');
                  }, 4000);

                  setTimeout(() => {
                    $('.section-hallway .guy').removeClass('fade-out');
                  }, 5000);

                  setTimeout(() => {
                    $('.section-hallway .guy').addClass('fade-out');
                  }, 9000);

                  setTimeout(() => {
                    $('.section-hallway').addClass('fade-out');
                  }, 10000);
                  
                  setTimeout(() => {
                    $('.section-hallway').addClass('opacity-zero');
                    $('.section-attic').removeClass('opacity-zero');
                  }, 11000);

                  setTimeout(() => {
                    attic();
                  }, 12000);
                })
              }, 1000);
            })
          }, 1000);
        })
      }, 1000);
    });
  }

  var attic = function() {
    $('.section-attic').removeClass('fade-out');

    setTimeout(() => {
      $('.section-attic .attic').removeClass('fade-out');

      if ($('.audio-whisper').length) {
        $('.audio-whisper')[0].play();

        setTimeout(() => {
          $('.audio-whisper')[0].remove();
        }, 19000);
      }
    }, 1000);

    setTimeout(() => {
      $('.section-attic .form-trigger').removeClass('opacity-zero');
    }, 2000);

    $('.section-attic .form-trigger').click(function() {
      $('.section-attic .content').addClass('content-show');

      setTimeout(() => {
        $(this).addClass('opacity-zero');
      }, 1000);
    });

    $('.section-attic .wrapper-form .first').click(function() {
      $('.section-attic .wrapper-form .second').removeClass('opacity-zero');
      $(this).addClass('opacity-zero');
    });

    $('.section-attic .wrapper-form .second').click(function() {
      $('.section-attic .wrapper-form .third').removeClass('opacity-zero');
      $(this).addClass('opacity-zero');
    });

    $('.section-attic .wrapper-form .third').click(function() {
      $(this).addClass('opacity-zero');
      $('.section-attic .attic').addClass('fade-out');

      setTimeout(() => {
        $('section-attic .content').removeClass('content-show');
      }, 1000);

      setTimeout(() => {
        $('.section-attic').addClass('fade-out');
      }, 4000);

      setTimeout(() => {
        $('.section-end').removeClass('fade-out');
      }, 5000);

      setTimeout(() => {
        ending();
      }, 6000);

      setTimeout(() => {
        $('.section-end').removeClass('opacity-zero');
      }, 7000);

      setTimeout(() => {
        $('.section-attic').addClass('opacity-zero');
      }, 10000);
    });
  }

  var ending = function() {
    if ($('.audio-ending').length) {
      $('.audio-ending')[0].play();
      setTimeout(() => {
        $('.audio-ending')[0].remove();
      }, 37000);
    }

    $('.section-end').click(function() {
      $('.section-end .content').addClass('content-animate');

      setTimeout(() => {
        $('.section-end .house').addClass('fade-out');
        $('.section-end .content').addClass('opacity-zero');
      }, 27000);

      setTimeout(() => {
        $('.fullstackhq').addClass('fullstackhq-center');
      }, 32000);

      setTimeout(() => {
        $('.fullstackhq').addClass('opacity-zero');
      }, 34000);
    });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    intro();
    outsideHouse();
    livingRoom();
  };

  return {
    init: init
  };
})();
