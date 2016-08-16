var $messages = $('.messages-content'),
    d, h, m,
    i = 0;



$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  var bot = new chatBot();
  var eliza = new ElizaBot();
  msg = $('.message-input').val();
  console.log(msg);
  var rpl = eliza.transform(msg);
  var reply = bot.respondTo(msg);
  console.log(reply);
  console.log(rpl);
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
     if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure>' + rpl + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m Shrutzzz and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage() {
  // chat aliases
  //var you = 'You';
  //var robot = 'Buddy';
  
  // slow reply by 400 to 800 ms
  //var delayStart = 400;
  //var delayEnd = 800;
 

  //if(input == '') return;
  
  // initialize
  var bot = new chatBot();

  //var chat = $('.chat');
  //var waiting = 0;
  //$('.busy').text(robot + ' is typing...');

  
  //if(reply == null) return;

  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="http://people-sourceinc.com/blog/wp-content/uploads/2012/05/Funderal-Home-Answering-Services-300x292.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}
