window.addEventListener('load', function () {
     // 使用jQuery的快捷方式，等待文档完全加载后执行
    $(function(){
        // 点击新闻分类列表项
        $(".category li").click(function(){
             // 切换选中状态，给点击的列表项添加特定样式，同时移除其他兄弟元素的特定样式
            $(this).addClass('category__item--active').siblings().removeClass('category__item--active')
             // 获取被点击的列表项的索引
            let index = $(this).index();
             // 显示对应索引的新闻内容，同时隐藏其他兄弟元素的新闻内容
            $('.news ul').eq(index).show().siblings().hide();
        })
       // 创建新闻数据的HTML结构，这部分数据是用于加载更多新闻时使用的，加载出的新闻的内容
        let Dataul = $(`<ul class="news" style="transform: translateY(-20px);">
        <li class="news__item news__tag-2" >
            <a class="news__title news__content ellipsis">
                <img class="coverFit" src="images/news/6.jpg">
                <div class="news__info">
                    <h3 class="ellipsis" title="詹杜库领衔！美国男篮公布巴黎奥运会大名单">詹杜库领衔！美国男篮公布巴黎奥运会大名单</h3>
                    <p class="news__summary"></p>
                </div>
            </a>
            <div class="news__meta">
                <div class="news__date">2024-04-17</div>
                <a class="news__category news__cate-2">新闻</a>
            </div>
        </li>
        <li class="news__item news__tag-2">
            <a class="news__title news__content ellipsis">
                <img class="coverFit" src="images/news/7.jpg">
                <div class="news__info">
                    <h3 class="ellipsis" title="科尔：我对未来充满信心 我们仍有机会做些特别的事情">科尔：我对未来充满信心 我们仍有机会做些特别的事情</h3>
                    <p class="news__summary"></p>
                </div>
            </a>
            <div class="news__meta">
                <div class="news__date">2024-04-13</div>
                <a class="news__category news__cate-2">新闻</a>
            </div>
        </li>
        <li class="news__item news__tag-2">
            <a class="news__title news__content ellipsis">
                <img class="coverFit" src="images/news/8.jpg">
                <div class="news__info">
                    <h3 class="ellipsis" title="另类两双！追梦成历史首位0出手0罚球砍10板10助的球员">另类两双！追梦成历史首位0出手0罚球砍10板10助的球员</h3>
                    <p class="news__summary"></p>
                </div>
            </a>
            <div class="news__meta">
                <div class="news__date">2024-04-13</div>
                <a class="news__category news__cate-2">新闻</a>
            </div>
        </li>
        </ul>`);
        $(".news__more").click(function(){
          
            setTimeout(function(){
                $(".news__more").html("加载中...");
                // 修改按钮文字为“加载中...”  
                $(".news ul").append(Dataul);
              },1000,);// 模拟加载时间1秒
              //恢复按钮文字为“加载更多”
              setTimeout(function(){
                $(".news__more").html("加载更多");
              },2000,);// 模拟加载完成后恢复按钮文字，2秒后
            
            
        })
    })
})