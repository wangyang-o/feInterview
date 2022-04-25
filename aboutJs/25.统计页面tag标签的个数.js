const totalTags = () => {
    const html = Array.from(document.querySelectorAll('*'));
    const tags = {};
    html.forEach(element => {
        const tag = element.tagName.toLowerCase();
        tags[tag] = (tags[tag] || 0) + 1;
    });
    const entires = Object.entries(tags);
    res = entires.sort((a, b) => b[1] - a[1]);
    return res;
}
