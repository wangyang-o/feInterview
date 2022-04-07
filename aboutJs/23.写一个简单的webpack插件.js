// webpack插件
// 1. 一个函数或者类，提供一个接口，可以在webpack运行期间被调用。


class myPlugin {
    constructor(options) {
        this.options = options;
        console.log(options);
    }
    apply(compiler) {
        compiler.plugin('done', compilation => {
            console.log(compilation);
            console.log('done');
        })
    }
    
}