define("viewer.blank", [ "jquery", "widget" ], function($, widget) {
    "use strict";
    //下面的代码，如无必要，无需修改，但需要查看每个入参的意义
    widget.viewer.blank = function($widget, option, attr, css, auiCtx) {
        return {};
    };
});

define("awebIndex", [ "viewer.blank" ].concat(window.aweb.transformJsConfig([ "viewer.blank", "layout.tabCtn", "viewer.blank", "layout.tabCtn" ])).concat(window.aweb.transformCssConfig([ "AWEB/css/aweb.css", "AWEB/css/font-awesome.min.css", "AWEB/css/icon-font.css", "AWEB/css/aweb.popover.css", "AWEB/css/aweb.page.css", "AWEB/css/aweb.css", "AWEB/css/font-awesome.min.css", "AWEB/css/icon-font.css", "AWEB/css/aweb.popover.css", "AWEB/css/aweb.page.css" ])), function() {
    return function() {
        return function() {
            return function(auiCtx) {
                "use strict";
                var $el, handler, scope, spaLifecycle;
                spaLifecycle = {
                    load: function(_$el, _scope, _handler) {
                        auiCtx.pageParams = $.extend(true, _scope, app.domain.get("page"));
                        auiCtx.context = this;
                        $el = _$el, handler = _handler, scope = _scope;
                        /*覆盖页面加载时的属性或方法*/
                        /*覆盖auiCtx属性或方法 */
                        auiCtx.auiCtxLoad.call(this, auiCtx, _$el, _scope, _handler);
                        /*事件绑定*/
                        this.delegateEvents.call(this, auiCtx.delegateEvents);
                    },
                    resume: function($el, scope, handler) {
                        /*覆盖页面恢复时的属性或方法*/
                        auiCtx.auiCtxResume.call(this, auiCtx, $el, scope, handler);
                    },
                    pause: function($el, scope, handler) {
                        /*覆盖页面切出时的属性或方法*/
                        auiCtx.auiCtxPause.call(this, auiCtx, $el, scope, handler);
                    },
                    unload: function($el, scope, handler) {
                        /*覆盖页面销毁时的属性或方法*/
                        auiCtx.auiCtxUnload.call(this, auiCtx, $el, scope, handler);
                    }
                };
                if (!spaLifecycle) {
                    spaLifecycle = {
                        load: function(_$el, _scope, _handler) {
                            auiCtx.pageParams = $.extend(true, _scope, app.domain.get("page"));
                            auiCtx.context = this;
                            $el = _$el, handler = _handler, scope = _scope;
                            /*覆盖页面加载时的属性或方法*/
                            /*覆盖auiCtx属性或方法 */
                            auiCtx.auiCtxLoad.call(this, auiCtx, _$el, _scope, _handler);
                            /*事件绑定*/
                            this.delegateEvents.call(this, auiCtx.delegateEvents);
                        },
                        resume: function($el, scope, handler) {
                            /*覆盖页面恢复时的属性或方法*/
                            auiCtx.auiCtxResume.call(this, auiCtx, $el, scope, handler);
                        },
                        pause: function($el, scope, handler) {
                            /*覆盖页面切出时的属性或方法*/
                            auiCtx.auiCtxPause.call(this, auiCtx, $el, scope, handler);
                        },
                        unload: function($el, scope, handler) {
                            /*覆盖页面销毁时的属性或方法*/
                            auiCtx.auiCtxUnload.call(this, auiCtx, $el, scope, handler);
                        }
                    };
                }
                return spaLifecycle;
            }(function() {
                var auiCtx, $el, scope, handler, g_globalParams = aweb.globalVariables, pageParams;
                auiCtx = {
                    external: {},
                    attr: {
                        indexLayoutContainer: {
                            desp: "首页",
                            widgetName: "首页",
                            id: "indexLayoutContainer"
                        }
                    },
                    css: {},
                    configs: {
                        indexLayoutContainer: {}
                    },
                    pageNSL: [],
                    widgetNSL: {},
                    validations: {},
                    lifecycle: {
                        indexLayoutContainer_load_init_000002: {
                            func: function() {
                                aweb.debug && aweb.stepTo("首页布局-index.layout-生命周期配置-初始化");
                                app.ajax({
                                    url: "getCSRFToken.do",
                                    type: "POST",
                                    beforeSend: function(XHR) {},
                                    success: function success(response) {
                                        /**
     * 实例化一个全局的局部加载容器
     * 
     */
                                        var Controller = app.Controller;
                                        app.globalRouter = new Controller({
                                            View: Controller.View,
                                            view: {
                                                isGlobal: true,
                                                ctn: $(),
                                                ctt: $("#indexLayoutContainer", $el),
                                                tabs: $()
                                            }
                                        });
                                        /**
     * 判断是否首次登录
     * 
     */
                                        if (response.status && response.content.result) {
                                            if (response.content.result === "auiAjaxTest") {
                                                /**
              * 在编辑器下
              */
                                                app.open(response);
                                            } else {
                                                /**
             * 如果已经登录了，将ctoken缓存起来
             * 并打开首页
             */
                                                window.ctoken = response.content.result;
                                                app.setData("ctoken", window.ctoken);
                                                app.globalRouter.open({
                                                    id: "indexPage" + app.getUID(),
                                                    page: "RxJS函数与响应式编程#rxjs",
                                                    //page: 'indexPage#indexPage',
                                                    status: true
                                                });
                                            }
                                        } else {
                                            /**
         * 否则打开登录页面
         */
                                            document.location.href = "https://www.awebide.com/AWEB_Social/#/login/login/login?&redirect=" + document.location.href;
                                            if (response.errorMsg) {}
                                        }
                                    },
                                    error: function(XHR, textStatus, errorThrown) {},
                                    complete: function(XHR, textStatus) {}
                                });
                            },
                            times: 0,
                            clock: 1e3,
                            immediate: false,
                            isPause: true
                        }
                    },
                    variables: {},
                    ajaxOption: {},
                    eventCallback: {},
                    delegateEvents: {},
                    widgetLoadedEvents: {},
                    intervals: {},
                    auiCtxLoad: function(auiCtx, _$el, _scope, _handler) {
                        var configs = auiCtx.configs, attr = auiCtx.attr, css = auiCtx.css, variables = auiCtx.variables;
                        $el = _$el;
                        pageParams = scope = _scope;
                        handler = _handler;
                        auiCtx.$el = _$el;
                        auiCtx.scope = _scope;
                        auiCtx.handler = _handler;
                        handler.auiCtx = auiCtx;
                        variables.indexLayoutContainer = $AW.viewer.blank($("#indexLayoutContainer", $el), configs.indexLayoutContainer, attr.indexLayoutContainer, $AW.css("viewer.blank", css.indexLayoutContainer), auiCtx);
                        auiCtx.lifecycle.indexLayoutContainer_load_init_000002.func();
                    },
                    auiCtxResume: function(auiCtx, $el, scope, handler) {},
                    auiCtxPause: function(auiCtx, $el, scope, handler) {},
                    auiCtxUnload: function(auiCtx, $el, scope, handler) {}
                };
                window.aweb && window.aweb.debug && (window.auiCtx = auiCtx);
                return auiCtx;
            }());
        };
    };
});