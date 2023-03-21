export default {
  title: 'Digital Console',
  api: {
    login_hint:
      '数据环境为 <strong>{{url}}</strong>，您可以使用 <anchor>{{credentials}}</anchor> 登录'
  },
  languages: {
    zh: '中文'
  },
  actions: {
    activate: '启用',
    cancel: '取消',
    deactivate: '停用',
    delete: '删除',
    edit: '编辑',
    expand: '查看详情',
    close: '关闭',
    go_back: '返回'
  },
  errors: {
    boundary: {
      label: '发生意外错误'
    },
    403: {
      label: '访问受限',
      description:
        '您没有访问该页面的权限。可能是因为您未经授权、登录状态失效或者被限制访问等原因。如果您认为这是一个错误，请联系我们的技术支持团队以获得更多帮助。'
    },
    404: {
      label: '页面不存在',
      description:
        '您访问的页面不存在。可能是因为您输入了错误的地址，或者该页面已经被移动到另一个 URL。请确认您的输入是否正确并重试。'
    },
    500: {
      label: '服务器错误',
      description:
        '服务器发生了错误，导致页面无法正常显示。我们已经记录了这个问题，将尽快解决。请您稍后再试，或者联系我们的技术支持团队以获得帮助。'
    }
  }
};
