const rander = (template, obj) => {
    const reg = /\{\{(.+?)\}\}/g;
    return template.replace(reg, (match, key) => obj[key]);
}
const rander1 = (template, obj) => {
    Object.keys(obj).forEach(key => {
        template = template.replace(new RegExp(`{{${key}}}`, 'g'), obj[key]);
    });
    return template;
}

const template = '我叫{{name}}，今年{{age}}岁，住在{{address.city}}';
console.log(rander1(template, { name: 'william', age: 18, address: 'beijing'}));