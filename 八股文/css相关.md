# 请解释一下 CSS 选择器的优先，以及是如何计算的？

1. !important
2. 行内样式（style 属性）
3. ID 选择器（#id）
4. 类选择器（.class）
5. 属性选择器（[attr]）
6. 伪类选择器（:hover 等）
7. 标签选择器（例如 div, p, ul 等）
8. 伪元素选择器（:before, :after 等）
9. 通配符选择器（\*）
10. 继承（样式会从父元素继承，但是继承不是选择器的一部分）

# 请列举一些 CSS 选择器的常见类型？

- 标签选择器（tag selector）：通过 HTML 标签名来选中元素，例如 p、div、span 等。
- ID 选择器（ID selector）：通过 HTML 元素的 id 属性来选中元素，例如#myDiv。
- 类选择器（class selector）：通过 HTML 元素的 class 属性来选中元素，例如.myClass。
- 属性选择器（attribute selector）：通过 HTML 元素的属性来选中元素，例如[type="submit"]。
- 伪类选择器（pseudo-class selector）：通过元素的状态或者位置来选中元素，例如:hover、:active 等。
- 伪元素选择器（pseudo-element selector）：用于选中元素的某个部分，例如::before、::after 等。
- 相邻兄弟选择器（adjacent sibling selector）：选中某个元素后面紧跟的同级元素，例如 h2 + p。
- 兄弟选择器（sibling selector）：选中与某个元素同级别的所有元素，例如 h2 ~ p。
- 子元素选择器（child selector）：选中某个元素的子元素，例如 ul > li。
- 后代元素选择器（descendant selector）：选中某个元素的所有后代元素，例如 ul li。

# 请解释一下 CSS 中的 box-sizing ？

CSS 中的 box-sizing 属性用于控制元素的盒模型计算方式。它可以设置元素的宽度和高度的计算方式，以及是否包含元素的边框和内边距。

box-sizing 属性有两个值：

1. content-box：元素的宽度和高度仅包括内容区域，不包括边框和内边距。这是默认值。
2. border-box：元素的宽度和高度包括内容区域、边框和内边距，不会再因为边框和内边距的大小而改变。

使用 border-box 可以方便地设置元素的大小，避免了调整元素大小时还要考虑边框和内边距的影响。这在开发响应式网站时特别有用，可以快速地调整元素大小和布局。

# 请解释一下 CSS 中的 display 属性的常见取值和作用？

1. block：将元素显示为块级元素，即每个元素占据一行或者一整个容器的宽度。
2. inline：将元素显示为行内元素，即元素不会换行，而是会随着文本流动。
3. inline-block：将元素显示为行内块级元素，即元素会按照行内元素的方式流动，但是可以设置宽度和高度等块级元素的样式。
4. none：将元素隐藏不显示，元素不占据任何空间。
5. flex：将元素显示为弹性盒子容器。
6. grid：将元素显示为网格容器。
7. table：将元素显示为表格元素，包括 table、tr、td 等。
8. inline-table：将元素显示为行内表格元素。
9. table-cell：将元素显示为表格单元格。
10. table-row：将元素显示为表格行。
11. list-item：将元素显示为列表项。
12. initial：将元素显示为默认值。
13. inherit：继承父元素的 display 属性。

# 请解释一下 CSS 中的 position 属性的常见取值和作用？

position 属性用于定义元素的定位方式，常见的取值包括：

1. static：默认值，元素按照文档流进行排列，不能使用 top、bottom、left、right 等属性进行定位。
2. relative：相对定位，元素按照文档流进行排列，但可以通过设置 top、bottom、left、right 等属性相对于元素原来的位置进行定位，而不会影响其他元素的位置。
3. absolute：绝对定位，元素脱离文档流，可以通过设置 top、bottom、left、right 等属性相对于最近的已定位的祖先元素进行定位。如果没有已定位的祖先元素，则相对于文档的 body 元素进行定位。
4. fixed：固定定位，元素相对于浏览器窗口进行定位，即使页面滚动，元素也会一直保持在同一位置。
5. sticky：粘性定位，元素在满足某些条件时表现为固定定位，否则表现为相对定位。可以通过设置 top、bottom、left、right 等属性来定义相对于最近的满足条件的祖先元素的位置进行定位。

需要注意的是，如果父元素设置了 overflow: hidden;属性，那么 sticky 定位的元素会相对于整个文档或者视口进行定位，而不是相对于父元素进行定位。只有当父元素设置了 overflow: scroll;或 overflow: auto;属性时，才会相对于父元素进行定位。

# 请解释一下 CSS 中的伪类和伪元素的区别？

伪类（pseudo-classes）是用来匹配处于特定状态的元素，比如说`hover`、`active`、`focus`等，也可以用来选择某些特定位置的元素，比如说`first-child`、`nth-child`等。

伪元素（pseudo-elements）则是用来匹配处于文档中某个特定位置的元素，比如说`::before`、`::after`、`::first-line`、`::first-letter`等。伪元素能够为元素添加一些额外的内容，比如在元素的前面或后面添加内容，或者选择元素的第一行或第一个字母进行样式上的修改。

两者的语法有所不同。伪类以单冒号（`:`）开头，伪元素以双冒号（`::`）开头。在 CSS3 之前，伪元素也可以使用单冒号开头，但是现在已经被废弃，建议使用双冒号。

# 请解释一下 CSS 中的层叠顺序是如何决定的？

1. 文档流中的位置：文档流中后面的元素会覆盖在前面的元素之上，即后来居上。
2. z-index 属性：z-index 属性定义了元素的层叠级别，值越大的元素越靠近顶部。
3. position 属性：position 属性的取值不同，元素的层叠顺序也会不同。比如说，`position: relative`的元素会覆盖在`static`元素之上，而`position: absolute`的元素会覆盖在`relative`元素之上。
4. transform 属性：transform 属性也会影响层叠顺序。如果一个元素应用了 transform 属性，那么它会在没有应用 transform 属性的元素之上。

需要注意的是，层叠顺序只在发生重叠时才会起作用。如果元素之间没有重叠，那么层叠顺序就不会产生影响。此外，层叠顺序是在父元素范围内的，如果两个元素不在同一个父元素下，那么层叠顺序就不会相互影响。

# 请解释一下 CSS 中的 BFC 是什么，以及它的作用和实现方式？

BFC（Block Formatting Context）是 CSS 中的一种格式化上下文，它是用来管理块级盒子布局的一种机制。BFC 可以看作是一个独立的布局环境，其中的元素布局不会影响到外部的元素。BFC 具有以下作用：

1. 清除浮动。当一个元素的 overflow 属性值为 auto、scroll 或 hidden 时，该元素就会创建一个 BFC，使得该元素内部的浮动元素不会溢出到该元素的外部。

2. 防止外边距折叠。当两个相邻的块级元素之间有外边距时，它们的外边距可能会合并为一个值，称为外边距折叠。在 BFC 中，外边距折叠不会发生。

3. 创建独立的渲染区域。与外部元素隔离开，不影响外部元素的布局。

BFC 的实现方式主要有以下几种：

1. float 属性不为 none。
2. position 属性为 absolute 或 fixed。
3. display 属性为 inline-block、flex 或 table-cell、table-caption。
4. overflow 属性不为 visible。

# 请解释一下 CSS 中，如何解决边距重叠问题

CSS 中的边距重叠问题指的是在相邻的两个元素之间，当它们的边距（margin）重叠时，可能会出现意外的布局结果。解决这个问题通常有以下几种方法：

1. 使用 padding 替代 margin：在需要设置边距的元素上使用 padding 属性，而不是 margin 属性。由于 padding 不会和其他元素的 padding 或 margin 重叠，因此可以避免边距重叠问题。

2. 使用 border 替代 margin：在需要设置边距的元素上使用 border 属性，而不是 margin 属性。由于 border 不会和其他元素的 border 或 margin 重叠，因此也可以避免边距重叠问题。不过这种方法的缺点是会改变元素的尺寸。

3. 使用 overflow 属性：将需要设置边距的元素包裹在一个容器中，并设置该容器的 overflow 属性为 auto 或 hidden。由于容器会创建一个新的块级格式化上下文（BFC），因此可以避免内部元素的边距重叠问题。

4. 使用 clear 属性：在需要避免边距重叠的元素之间插入一个空元素，并设置该元素的 clear 属性为 both。这样可以清除之前元素的浮动，避免边距重叠问题。

需要注意的是，边距重叠问题并不一定是一个坏事情。在一些情况下，利用边距重叠可以实现一些有趣的效果。因此，应该根据具体的需求来选择是否需要解决边距重叠问题。

# 请解释一下 CSS 中的颜色表示方式有哪些，以及它们的区别和适用场景？

在 CSS 中，常见的颜色表示方式有以下几种：

1. 十六进制表示法（#RRGGBB 或 #RGB）
2. RGB 函数表示法（rgb(r, g, b) 或 rgba(r, g, b, a)）：用红、绿、蓝三个颜色通道的数值来表示颜色。其中，rgb() 函数中的 r、g、b 分别代表红、绿、蓝三个颜色通道的值，取值范围是 0-255；而 rgba() 函数中的 a 则代表透明度，取值范围是 0-1。例如，rgb(255, 0, 0) 表示红色，rgba(0, 255, 0, 0.5) 表示半透明的绿色。

3. HSL 函数表示法（hsl(h, s%, l%) 或 hsla(h, s%, l%, a)）：用色相、饱和度和亮度三个参数来表示颜色。其中，h 代表色相，取值范围是 0-360，表示颜色在色轮上的位置；s 代表饱和度，取值范围是 0%-100%，表示颜色的纯度；l 代表亮度，取值范围是 0%-100%，表示颜色的亮度。而 hsla() 函数中的 a 则代表透明度，取值范围是 0-1。例如，hsl(0, 100%, 50%) 表示红色，hsla(120, 100%, 50%, 0.5) 表示半透明的绿色。

4. 颜色名称：用预定义的颜色名称来表示颜色。例如，red 表示红色，green 表示绿色，blue 表示蓝色。不过，颜色名称的可用性取决于浏览器和操作系统，而且只有比较少的一部分颜色名称是通用的。

这些颜色表示方式的区别和适用场景主要包括以下几点：

1. 十六进制表示法和 RGB 函数表示法更为常用，适用于绝大部分的颜色表示场景，而且在所有浏览器中都支持。

2. HSL 函数表示法相对较新，用于更方便地表示调整色相、饱和度和亮度的场景

# 请解释一下 CSS 中的定位属性 z-index 是什么，以及它的作用和使用注意事项

在 CSS 中，z-index 是一个用来控制元素在垂直方向上覆盖关系的属性。具体来说，z-index 值大的元素会覆盖 z-index 值小的元素，也就是说，z-index 值越高的元素会在视觉上位于其他元素的上面。

以下是 z-index 属性的一些常见使用场景和注意事项：

作用：

1. 控制元素的层叠顺序，使某个元素在其他元素的上面或下面显示。

2. 与定位属性配合使用可以控制元素的位置。

注意事项：

1. 只有定位属性为 relative、absolute 和 fixed 的元素才能使用 z-index 属性。

2. z-index 只对定位元素生效，未定位元素无法使用。

3. z-index 的值可以为负数，负数的元素将位于其他正数的元素下面。

4. 如果两个元素的 z-index 值相同，则它们按照在 HTML 结构中的出现顺序来决定谁在上面。

5. 请谨慎使用 z-index 属性，不宜过多使用。如果 z-index 值过多，会增加代码的复杂性，降低代码的可维护性。

# 请列举一些 CSS 中常用的文本样式属性，并解释它们的作用？

以下是一些 CSS 中常用的文本样式属性及其作用：

1. font-size：设置字体大小。
2. font-family：设置字体类型。
3. font-weight：设置字体粗细。
4. line-height：设置行高。
5. text-align：设置文本对齐方式。
6. text-indent：设置首行缩进。
7. letter-spacing：设置字间距。
8. word-spacing：设置单词间距。
9. text-decoration：设置文本修饰，如下划线、删除线等。
10. color：设置字体颜色。

# 前端响应式布局方案

前端响应式布局是指网页可以在不同设备和屏幕尺寸下自适应地展现。为实现响应式布局，可以采用以下几种方案：

1. 媒体查询：通过设置不同的 CSS 样式，让网页在不同屏幕尺寸下呈现不同的布局效果。

2. 百分比布局：设置元素的宽度和高度为百分比，可以让元素随着屏幕尺寸的变化而自适应。

3. 弹性盒子布局（Flexbox）：通过设置容器的 display 属性为 flex，可以实现灵活的布局，让子元素随着容器的大小自动调整位置和大小。

4. 栅格布局（Grid）：将网页划分为多个网格，可以更加方便地进行布局设计和调整。

5. 视口单位（Viewport Units）：使用 vw 和 vh 作为长度单位，可以让元素的大小和位置随着屏幕尺寸的变化而自适应。

6. rem 布局是一种根据根元素的字体大小进行相对长度计算的布局方案。rem 是 "root em" 的缩写，意思是根元素的 em 大小。与 em 不同的是，rem 始终相对于根元素的字体大小，而不是相对于父元素的字体大小。

# transition 属性

> 关于过渡：有中间值的属性才有过渡效果

- transition-property:生效的过渡属性
- transition-duration:过渡持续时间(与 property 匹配，不够则循环匹配)
- transition-timing-function:过渡变化效果（linear，easy-in 等。。）
  - transition-timing-function:steps(4,start)或者 steps(4,end)
- transition-delay:延迟时间 (也可以与 property 匹配，不够则循环匹配)
- 有一个监听过渡结束的 API 接口事件**transitionend**
- transition:all 过渡变化效果 过渡时间(必须) 延迟时间

# 水平垂直居中有哪些方案

1. 使用 flex 布局：

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

2. 使用绝对定位和负边距：

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

3. 使用 grid 布局：

在父元素上应用 display: grid 和 place-items: center，可以将子元素水平垂直居中。

place-items 是一个 CSS 属性，用于设置 Flexbox 或 Grid 容器内所有项目的对齐方式。它可以同时设置 align-items 和 justify-items 两个属性的值。

```css
.parent {
  display: grid;
  place-items: center;
}
```

4. 使用 line-height 属性来实现单行文本的垂直居中：

```css
.parent {
  display: grid;
  place-items: center;
}
```

# line-height 设置数字，百分比他们分别的计算规则

当使用数字时，`line-height` 是相对于当前文本字体大小的倍数来计算的。例如，如果字体大小为 16px，`line-height` 设置为 1.5，则行高为 24px（16 x 1.5）。如果将 `line-height` 设置为 1，则行高将与字体大小相同。

当使用百分比时，`line-height` 是相对于父元素的字体大小来计算的。例如，如果父元素的字体大小为 16px，`line-height` 设置为 150％，则行高将为 24px（16 x 1.5）。如果将 `line-height` 设置为 100％，则行高将与父元素的字体大小相同，即 16px。

需要注意的是，`line-height` 只影响行框的高度，而不是行框本身的高度。

# defer 与 async 的区别

- `defer`：脚本的加载是异步进行的，但是脚本的执行是在 HTML 解析完毕后、`DOMContentLoaded` 事件之前进行的。多个带有 `defer` 属性的脚本按照它们在 HTML 中出现的顺序依次执行。

- `async`：脚本的加载和执行都是异步进行的。脚本加载完毕后，会立即执行，不会等待 HTML 解析和其他资源的加载完成。因此，如果脚本之间互相独立，且执行顺序不重要时，可以使用 `async` 属性来优化页面的性能。

async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer 是“渲染完再执行”，async 是“下载完就执行”。另外，如果有多个 defer 脚本，会按照它们在页面出现的顺序加载，而多个 async 脚本是不能保证加载顺序的。

# prefetch，prepload 的区别

`prefetch` 和 `preload` 是两种浏览器预加载资源的方式，其主要区别如下：

1. 预加载的时机不同：`prefetch` 是在浏览器空闲时，预加载用户未来可能需要的资源；而 `preload` 是在当前页面加载时，预加载当前页面所需的资源。
2. 预加载的优先级不同： `preload` > `prefetch` ，`prefetch`的优先级较低，不会影响当前页面的加载速度，但可以在未来的某个时间点加速用户的体验；而 `preload` 的优先级较高，会优先加载当前页面所需的资源，以提升页面的加载速度。

在使用时，可以根据具体场景选择不同的预加载方式，以优化用户体验和页面加载速度。
