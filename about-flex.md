## 一劳永逸的搞定 flex 布局

## 寻根溯源话布局

一切都始于这样一个问题，怎样通过 CSS 简单优雅的实现水平、垂直同时居中？记得刚开始学 CSS 时看到 `float` 属性不觉眼前一亮，自然而然的联想到 Word 中文字排版的左对齐、右对齐和居中，然后失望的发现并不存在 `float: center` 的写法。那么 `text-align: center`、`verticle-align: center` 是否可以呢？答案是否定的。这两个属性只能用于行内元素，对于块级元素是无效的。

在网页布局没有进入 CSS 的时代，排版几乎是通过 `table` 元素实现的，在 `table` 的单元格里可以方便的使用 `align`、`valign` 来实现水平和垂直方向的对齐，随着 Web 语义化的流行，这些写法逐渐淡出了视野，CSS 标准为我们提供了 3 种布局方式：`标准文档流`、`浮动布局`和`定位布局`。这几种方式的搭配使用可以满足 PC 客户端定宽页面的需求，比如实现水平居中可以使用 `margin: 0 auto`，实现水平垂直同时居中可以如下设置：

```css
.dad {
    ...
    position: relative;
}

.son {
    ...
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

```css
.dad {
    ...
    position: relative;
}

.son {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}
```

但是这些写法都有一些缺陷：缺少语义并且不够灵活。我们需要的是通过 1 个属性就能优雅的实现子元素居中或均匀分布，甚至可以随着窗口缩放自动适应。在这样的需求下，CSS 的第 4 种布局方式诞生了，这就是我们今天要重点介绍的 flex 布局。

## flex 基本概念

使用 flex 布局首先要设置父容器 `display: flex`，然后设置 `justify-content: center` 实现水平居中，最后设置 `align-items: center` 实现垂直居中。

好了，大功告成。等等好像哪里不对，`justify-content` 和 `align-items` 是啥？哪里可以看出来横向、竖向的含义？没错，flex 并没有这么简单，这就要从两个基本概念说起了。

``` css
#dad {
    display: flex;
    justify-content: center;
    align-items: center
}
```

![一个简单的例子](./flex-box/assets/base.gif)

说到底 flex 都有哪些特性呢？其实很简单，核心的概念只有两个：容器和轴。容器包括外层的父容器和内层的子容器，轴包括主轴和交叉轴，可以说 flex 布局的全部特性都构建在这两个概念上。flex 布局涉及到 12 个 CSS 属性（不含 `display`），其中父容器、子容器各 6 个。不过常用的属性只有 4 个，父容器、子容器各 2 个，我们就先从常用的说起吧。

![](./flex-box/assets/base-concept.png)

1. 容器

容器具有这样的特点：父容器可以统一设置子容器的排列方式，子容器也可以单独设置自身的排列方式，如果两者同时设置，以子容器的设置为准。

![](./flex-box/assets/box.png)

- 父容器

  - 设置子容器沿主轴排列：justify-content

  justify-content 属性用于定义如何沿着主轴方向分配子容器的间距。

  ![](./flex-box/assets/justify-content-base.png)

    - flex-start：起始端对齐

    ![](./flex-box/assets/justify-content/flex-start.png)

    - flex-end：末尾段对齐

    ![](./flex-box/assets/justify-content/flex-end.png)

    - center：居中对齐

    ![](./flex-box/assets/justify-content/center.png)

    - space-around：子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半。

    ![](./flex-box/assets/justify-content/space-around.png)

    - space-between：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切。

    ![](./flex-box/assets/justify-content/space-between.png)

  - 设置子容器沿交叉轴排列：align-items

  align-items 属性用于定义如何沿着交叉轴方向分配子容器的间距。

  ![](./flex-box/assets/align-items-base.png)

    - flex-start：起始端对齐

    ![](././flex-box/assets/align-items/flex-start.png)

    - flex-end：末尾段对齐

    ![](./flex-box/assets/align-items/flex-end.png)

    - center：居中对齐

    ![](./flex-box/assets/align-items/center.png)

    - baseline：基线对齐，这里的 baseline 默认是对首行文字而言的，即 first baseline，基线距侧轴始端最远的子容器与侧轴始端相切，其余子容器与之基线对齐。

    ![](./flex-box/assets/align-items/baseline.png)

    - stretch：子容器沿侧轴方向的尺寸拉伸至与父容器一致。

    ![](./flex-box/assets/align-items/stretch.png)

- 子容器

  - 在主轴上如何伸缩：flex

  子容器是有弹性的（flex === 弹性），它们会自动填充剩余空间，子容器的伸缩比例由 flex 属性确定。

  flex 的值可以是无单位数字（如：1, 2, 3），也可以是有单位数字（如：15px，30px，60px），还可以是 `none` 关键字。子容器会按照 flex 定义的尺寸比例自动伸展，如果取值为 `none` 则不伸缩。

  虽然 flex 是多个属性的缩写，允许 1 - 3 个值连用，不过通常 1 个值就可以搞定了，它的全部写法我们会在后面介绍。

  - 与众不同的交叉轴排列：align-self

  每个子容器也可以单独定义沿交叉轴排列的方式，此属性的可选值与父容器 `align-items` 属性完全一致，如果两者同时设置则以子容器的 `align-self` 属性为准。

    - flex-start：起始端对齐



    - flex-end：末尾段对齐



    - center：居中对齐



    - baseline：基线对齐



    - stretch：子容器沿侧轴方向的尺寸拉伸至与父容器一致。



- 轴

  ![](./flex-box/assets/axis.png)

  - 主轴

  > 向右：`flex-direction: row`

  ![](./flex-box/assets/4axis/row.gif)

  > 向下：`flex-direction: column`

  ![](./flex-box/assets/4axis/column.gif)

  > 向左：`flex-direction: row-reverse`

  ![](./flex-box/assets/4axis/row-reverse.gif)

  > 向上：`flex-direction: column-reverse`

  ![](./flex-box/assets/4axis/column-reverse.gif)
  

  - 交叉轴

  主轴逆时针旋转 90° 就是交叉轴，交叉轴的方向决定了 flex-start 和 flex-end 的位置。

  通过以上这些常用属性实现常用的 flex 应该没有问题，如果要实现复杂的布局还需要深入了解更多的属性。

### flex 进阶概念

- 父容器

  - 设置换行方式：flex-wrap

决定子容器是否换行排列，不但可以顺序换行而且支持逆序换行。

    - nowrap



    - wrap



    - wrap-reverse



  - 轴向与换行一起搞定：flex-flow

  flow 即流向，也就是子容器沿着哪个方向流动，流动到终点是否允许转弯，比如 `flex-flow: row wrap`，这个属性为复合属性，相当于 flex-direction 与 flex-wrap 的组合。

    - `row`、`column` 等，可单独设置主轴方向

    - `wrap`、`nowrap` 等，可单独设置换行方式

    - `row nowrap`、`column wrap` 等，也可两者同时设置

  - 多行沿交叉轴对齐：align-content

  当子容器多行排列时，设置行与行之间的对齐方式，可选值与 align-items 是一致的。

    - flex-start：起始端对齐



    - flex-end：末尾段对齐



    - center：居中对齐



    - baseline：基线对齐



    - stretch：子容器沿侧轴方向的尺寸拉伸至与父容器一致。

    - 

- 子容器

  - 设置基准大小：flex-basis

  在不伸缩的情况下，子容器的原始尺寸。

  

  - 设置扩展比例：flex-grow

  子容器弹性伸展的比例。

  - 设置收缩比例：flex-shink

  子容器弹性收缩的比例。

  - 设置排列顺序：order

  改变子容器的排列顺序，覆盖 HTML 代码中的默认顺序。

  以上就是 flex 布局涉及到的全部属性，是不是已经跃跃欲试了?


