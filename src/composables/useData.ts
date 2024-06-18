/*
 * @Author: Steam Game
 * @Date: 2024-03-11 14:40:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:04:34
 * @description: 一些配置数据
 */

type Website = {
  name: string,
  href: string,
  icon: string,
  iconType?: 'icon' | 'img'
}

export const useData = () => {
  /**
   * 网站列表
   */
  const websites = ref<Website[]>([
    { name: '辅助下载', href: 'https://www.notion.so/Steam-Cheat-b81ebe5c8e684c3bba70c911f2c6fbc3', icon: 'mdi:web-check' },
    { name: '查询Ｑ绑', href: 'https://zy.xywlapi.cc/home.html', icon: 'mdi:web-check' },
    // { name: 'create-kd', href: 'https://create-keep-design.dshuais.com/', icon: 'k' },
    { name: '其他软件', href: 'https://www.notion.so/e4532fd40e544508b3c9061eb0991ff3?pvs=4', icon: 'mdi:web-check' },
    { name: '联系方式', href: 'https://www.notion.so/3ff1c5c5efb04b40b696a199271ed415?pvs=4', icon: 'https://files.dshuais.com/images/logo/dm.png', iconType: 'img' },
  ])

  return {
    websites
  }
}
