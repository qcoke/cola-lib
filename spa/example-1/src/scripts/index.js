/**
 * User: 可乐加糖
 * Date: 14-12-30
 * Time: 上午9:26
 * 创建的首个单页应用主界面
 */

var spa = (function ($) {
    //基础配置文件，建议把它全部都卸载页面的最顶端。
    var configMap = {
            extended_height: 300,
            extended_title: 'click to retract',
            retracted_height: 16,
            retracted_title: 'click to extend',
            template_html: '<div class="spa-slider"></div>'
        },
        $chatSlider, toggleSlider, onClickSlider, initModule;
    //点击谈的事件
    toggleSlider = function () {
        var slider_height = $chatSlider.height();
        if (slider_height === configMap.retracted_height) {
            $chatSlider.animate({height: configMap.extended_height})
                .attr("title", configMap.extended_title);
            return true;
        } else if (slider_height === configMap.extended_height) {
            $chatSlider.animate({
                height: configMap.retracted_height
            }).attr("title", configMap.retracted_title);
            return false;
        }
        return false;
    }
    //点击的事件句柄
    onClickSlider = function (event) {
        toggleSlider();
        return false;
    }
    //页面功能初始化
    initModule = function ($container) {
        $container.html(configMap.template_html);
        $chatSlider = $container.find('.spa-slider');
        $chatSlider.attr('title', configMap.retracted_title).click(onClickSlider);
        return true;
    };
    return {initModule: initModule};
}(jQuery));