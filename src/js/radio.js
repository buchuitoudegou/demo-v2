window.onload = function() {
  const root = new Vue({
    el: '#app',
    data: {
      advice: [
        {
          img: '../img/radio/图片2.jpg',
          title: 'drift-pages turn',
          content: '该曲意境清幽，旋律优美，紧扣心弦，耐人寻味，获得“最为乐迷传送的怀想乐章”这一美称',
          radio: '音频1 drift-pages turn.mp3'
        },
        {
          img: '../img/radio/图片3.jpg',
          title: 'living pause- go goes',
          content: ' 以这首歌给的节奏，让您减缓脚步，看看身边的花草树木，相信对于终日紧张的人生会有所舒缓。',
          radio: '音频2 living pause- go goes.mp3'
        },
        {
          img: '../img/radio/图片4.jpg',
          title: 'low trees- come back home',
          content: '这首曲子出自韩国最擅长描绘爱情的音乐家 low trees之手，写这首歌的时候，是在一个星星满天的夜晚，忽然间一场雨，让 low trees有感而发',
          radio: '音频3 low trees- come back home.mp3'
        }
      ]
    },
    components: {
      'my-nav': Nav
    }
  });
}