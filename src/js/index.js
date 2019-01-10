window.onload = function() {
  const root = new Vue({
    el: '#app',
    data: {
      bubbles: [
        { name: '爵士', pos: { x: 40, y: 40 } , path: 'https://baike.baidu.com/item/%E7%88%B5%E5%A3%AB%E4%B9%90/109495?fr=aladdin' },
        { name: '蓝调', pos: { x: 200, y: 20 } , path: 'https://baike.baidu.com/item/%E8%93%9D%E8%B0%83/109533' },
        { name: '流行', pos: { x: 50, y: 140 } , path: 'https://baike.baidu.com/item/%E6%B5%81%E8%A1%8C%E9%9F%B3%E4%B9%90/21036?fromtitle=%E6%B5%81%E8%A1%8C%E4%B9%90&fromid=10791456' },
        { name: '民谣', pos: { x: 250, y: 160 } , path: 'https://baike.baidu.com/item/%E6%B0%91%E8%B0%A3/2974425' },
        { name: '乡村', pos: { x: 30, y: 270 } , path: 'https://baike.baidu.com/item/%E4%B9%A1%E6%9D%91%E9%9F%B3%E4%B9%90' },
        { name: '摇滚', pos: { x: 220, y: 300 } , path: 'https://baike.baidu.com/item/%E6%91%87%E6%BB%9A/164208' }
      ],
      columns: [
        { title: '人物专栏', v_title: 'Taylor Swift的音乐之路', link: 'https://baike.baidu.com/item/%E6%B3%B0%E5%8B%92%C2%B7%E6%96%AF%E5%A8%81%E5%A4%AB%E7%89%B9/8472307?fromtitle=Taylor%20Swift&fromid=10164559&fr=aladdin' },
        { title: '视频专栏', v_title: '传设学子古睿亲手制作音乐节目', link: './video.html'},
        { title: '人物专栏', v_title: 'Justin Bieber的音乐之路', link: 'https://baike.baidu.com/item/%E8%B4%BE%E6%96%AF%E6%B1%80%C2%B7%E6%AF%94%E4%BC%AF?fromtitle=Justin+Bieber&fromid=6780079'}
      ]
    },
    components: {
      'my-nav': Nav
    }
  });
}