// 千分位分割
const formatNumber = (num) => { 
    return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
console.log(formatNumber(-1234567890));