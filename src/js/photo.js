window.onload = function() {
  const root = new Vue({
    el: '#app',
    data: {
      leftNav: [
        { img: '../img/photo/111.JPG', path: 'http://www.migu.cn' },
        { img: '../img/photo/333.JPG', path: 'http://www.yinyuetai.com' },
        { img: '../img/photo/555.JPG', path: 'https://music.163.com' },
        { img: '../img/photo/2222.JPG', path: 'https://www.kugou.com' }
      ]
    },
    components: {
      'my-nav': Nav
    }
  });
}