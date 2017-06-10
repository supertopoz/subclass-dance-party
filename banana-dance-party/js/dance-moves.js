$(document).ready(function() {



  $(document).on('mouseenter','.allenBanana', function() {
  	var rightDance = 'https://lh5.googleusercontent.com/Yo0__X4LSN1iLCZIDQ52VjhEoAE2g6L9GtV_9iaLR_uMaDOOwt4jWJ-XDGxJJHRF_bsANw4qsYt8AJlzi_HTrvRJy0ad07jRfD7CVrYkBIMpC1RU8K0KDOC6d4FCL_djIutiYr7v';
  	var leftDance =  'https://lh5.googleusercontent.com/VfwxsCYDKLBN5SftPU4aSkp__mrhOvbpW_8_xsymb1bE3OM0OHQjrlBM3_xonPJr45ki4L_V8_cV5UwuD5mlcklf8JRRHmWjaD1lUnhcJsFklH2DFTtFUooIXihCud60cFL8Ecq1';
  	if ($(this).attr('src') === rightDance){
  		$(this).attr('src',leftDance);
  	} else {
  		$(this).attr('src',rightDance);
  	}
  });
});

  $(document).on('mouseenter','.allenBanana', function() {
     console.log($(this));
  }

