const { Comment } = require('./models');

const commentdata = [
  {
    comment_text: 'sed temporibus placeat cupiditate labor.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor, sit amet consectetur.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Tapibus at, diam.',
    user_id: 3,
    post_id: 0
  },
  {
    comment_text: 'Donec ut Architecto sit veniam a modi, praesentium nam facere nostrum ab et.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      ' Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text:
      'Sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 0,
    post_id: 2
  },
  {
    comment_text: 'Qlutpat erat.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Aenean auctor gravida sem.',
    user_id: 0,
    post_id: 2
  },
  {
    comment_text:
      'Vestibulum as et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Mauris e cursus id, turpis.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      'Mignissim vestibulum. Vestibulum aucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 1,
    post_id: 0
  },
  {
    comment_text:
      'Donec ullis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'Cvallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Tdiculus mus.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Ms rutrum.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text:
      'Jeugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 0,
    post_id: 1
  },
  {
    comment_text:
      'Peulputate vitae, nisl.',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'C nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem uer adipiscing elit.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Nam trisede.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Suspendisse auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Proi mi. Nulla ac enim.',
    user_id: 4,
    post_id: 0
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 0,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 0,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;