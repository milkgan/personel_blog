import request from "./request";

/* 获取博客列表数据 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {

    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    });

}