export const actions = {
    async fetchPost({}) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2, 2, 4], _id: 121},
                    {title: 'Post 2', date: new Date(), views: 32, comments: [1, 2], _id: 2221}
                ])
            }, 1000)
        })
    }
}