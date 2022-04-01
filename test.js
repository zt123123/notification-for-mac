const notifier = require('.')

notifier("666")

notifier("666", {
  title: 'title',
  subtitle: 'subTitle',
  open: 'https://www.baidu.com'
})