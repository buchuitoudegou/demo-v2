const Nav = {
  props: ['activeIndex'],
  data: () => {
    return {
      allPages: [
        { name: '音之首页', path: './index.html'},
        { name: '乐之相册', path: './photo.html'},
        { name: '音之视频', path: './video.html'},
        { name: '乐之颂典', path: './radio.html'}
      ]
    }
  },
  computed: {
    active: {
      get() {
        return this.activeIndex;
      }
    }
  },
  template: '\
  <el-menu :default-active="active" class="el-menu-demo" mode="horizontal">\
    <el-menu-item v-for="(page, idx) in allPages" :key="idx" :index="String(idx)">\
      <a :href="page.path">{{ page.name }}</a>\
    </el-menu-item>\
  </el-menu>'
};