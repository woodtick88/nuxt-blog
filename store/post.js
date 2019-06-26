import { create } from "domain";

const posts = [
    {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2, 2, 4], _id: '121'},
    {title: 'Post 2', date: new Date(), views: 32, comments: [1, 2], _id: '2221'}
]

export const actions = {
    async fetchPost({}) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 1000)
        })
    },
    async remove({}, id) {

    },
    async fetchAdminById({}, id) {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(posts.find(p => p._id === id))
        }, 1000)
      })
    },
    update({}, {id, text}) {

    },
    async create({}, {title, text, image}) {

      try {
        const fd = new FormData()

        fd.append('title', title)
        fd.append('text', text)
        fd.append('image', image, image.name)

        return await this.$axios.$post('/api/post/admin', fd)

      } catch (e) {

      }
      
    }
}