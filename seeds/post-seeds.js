const { Post } = require('./models');

const postdata = [
  {
    title: 'Pove ipsum.',
    post_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 5
  },
  {
    title: 'Il luctus lefil rutrum.',
    post_content: 'https://nasa.gov/donec.json',
    user_id: 1
  },
  {
    title: 'bomec dique, vestibue.',
    post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  },
  {
    title: 'Pnc ekrus.',
    post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 0
  },
  {
    title: 'Etesque Set Iunc.',
    post_content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 2
  },
  {
    title: 'Lorem ipsum dolor lipmer et, wintaer adlrea elit.',
    post_content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Hac om habtumst ni .',
    post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 6
  },
  {
    title: 'lorem hac platea.',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 2
  },
  {
    title: 'Lor acho qibh.',
    post_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 1
  },
]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;