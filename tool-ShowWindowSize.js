/**
 * 右下角显示屏幕的宽高
 * 用于IE的调试
 * 加载这个文件 即生成了一个标签,不用实例化
 * @Arcadia 2017-01-31
 */
(function(module){
    if(module instanceof Window){

        var elmContain = DC('div');
        var elmWidth = DC('p');
        var elmHeight = DC('p');
        var objStylesForContain = {//position:fixed;bottom:0px;right:0px;background:rgba(0,0,0,.2);
            position:'fixed',
            bottom:0,
            right:0,
            background:'rgba(0,0,0,.2)'
        }
        for(var i in objStylesForContain){
            elmContain.style[i] = objStylesForContain[i];
        }
        if(!document.body){
            console.error("没有<body>标签————显示屏幕尺寸的插件");
            return;
        }
        document.body.appendChild(elmContain);
        elmContain.appendChild(elmWidth);
        elmContain.appendChild(elmHeight);

        document.body.onresize=function(){
            elmWidth.innerHTML = window.innerWidth;
            elmHeight.innerHTML = window.innerHeight;
        }
        document.body.onresize();

        function DC(tag){
            return document.createElement(tag);
        }
    }
}(this));