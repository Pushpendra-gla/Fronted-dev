// Q8 - Dynamic Blog Posts
$(function(){
  const $app = $('#app');
  const $posts = $('<div id="posts"></div>');
  for(let i=1;i<=5;i++){
    $posts.append(`<div class="item post">Post ${i} - <span class="content">Content about topic ${i}</span></div>`);
  }
  $app.append($posts, '<button class="btn" id="add">Add New Post</button>',
              '<button class="btn" id="prepend">Prepend Featured Post</button>',
              '<button class="btn" id="remove">Remove Last Post</button>',
              '<button class="btn" id="addTags">Add Tags</button>');
  $app.on('click','#add', function(){ $('#posts').append('<div class="item post">New Post - <span class="content">Fresh content</span></div>'); });
  $app.on('click','#prepend', function(){ $('#posts').prepend('<div class="item post">Featured - <span class="content">Top story</span></div>'); });
  $app.on('click','#remove', function(){ $('#posts .post').last().remove(); });
  $app.on('click','#addTags', function(){
    $('#posts .post').each(function(){ $(this).after('<div class="tag">#tag</div>'); });
  });
  // highlight posts with keyword "Top"
  $('#posts').on('click', '.post', function(){
    if($(this).text().includes('Top')||$(this).text().includes('Featured')) $(this).css('background','#fffbcc');
  });
});
