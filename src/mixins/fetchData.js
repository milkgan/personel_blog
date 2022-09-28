// 获取远程数据的公共代码
export default function(defaultDataVal = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataVal
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}
