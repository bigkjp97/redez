const gridManagerName = "test",
    TYPE_MAP = {1: "HTML/CSS", 2: "nodeJS", 3: "javaScript", 4: "前端鸡汤", 5: "PM Coffee", 6: "前端框架", 7: "前端相关"},
    GM_PUBLISH_METHOD_MAP = {
        init: {key: "init", relyInit: !1, title: "初始化", code: 'demo1.initGM(document.querySelector("table"));'},
        get: {key: "get", relyInit: !0, title: "获取表格的实时配置信息", code: `GridManager.get('${gridManagerName}');`},
        version: {key: "version", relyInit: !1, title: "获取当前GridManager的版本号", code: "GridManager.version;"},
        getLocalStorage: {
            key: "getLocalStorage",
            relyInit: !0,
            title: "获取表格用户记忆",
            code: `GridManager.getLocalStorage('${gridManagerName}');`
        },
        resetLayout: {
            key: "resetLayout",
            relyInit: !0,
            title: "重置表格布局",
            code: `GridManager.resetLayout('${gridManagerName}', '800px', '500px');`
        },
        clear: {key: "clear", relyInit: !0, title: "清除表格记忆数据", code: `GridManager.clear('${gridManagerName}');`},
        getTableData: {
            key: "getTableData",
            relyInit: !0,
            title: "获取指定tr所使用的数据",
            code: `GridManager.getTableData('${gridManagerName}');`
        },
        getRowData: {
            key: "getRowData",
            relyInit: !0,
            title: "获取指定tr所使用的数据",
            code: `GridManager.getRowData('${gridManagerName}', document.querySelector("table[grid-manager=${gridManagerName}] tbody tr"));`
        },
        updateRowData: {
            key: "updateRowData",
            relyInit: !0,
            title: "更新指定行所使用的数据",
            code: `GridManager.updateRowData('${gridManagerName}', 'id', {id: 92, title: 'ccc'});`
        },
        updateTreeState: {
            key: "updateTreeState",
            relyInit: !0,
            title: "更新树的展开状态",
            code: `GridManager.updateTreeState('${gridManagerName}', true);`
        },
        setSort: {
            key: "setSort",
            relyInit: !0,
            title: "手动设置排序",
            code: `GridManager.setSort('${gridManagerName}', {createDate: 'ASC'});`
        },
        setConfigVisible: {
            key: "setConfigVisible",
            relyInit: !0,
            title: "设置表头配置区域可视状态",
            code: `GridManager.setConfigVisible('${gridManagerName}', true);`
        },
        showTh: {
            key: "showTh",
            relyInit: !0,
            title: "设置列为可视状态",
            code: `GridManager.showTh('${gridManagerName}', 'pic');`
        },
        hideTh: {
            key: "hideTh",
            relyInit: !0,
            title: "设置列为隐藏状态",
            code: `GridManager.hideTh('${gridManagerName}', 'pic');`
        },
        exportGrid: {
            key: "exportGrid",
            relyInit: !0,
            title: "导出指定表格",
            code: `GridManager.exportGrid('${gridManagerName}', 'demo中使用的导出').then(res=>{console.log('success')}).catch(err=>{console.error('error', err)});`
        },
        setQuery: {
            key: "setQuery",
            relyInit: !0,
            title: "更改在生成组件时所配置的参数query",
            code: `GridManager.setQuery('${gridManagerName}', {'userName':'baukh','sex':'男'});`
        },
        setAjaxData: {
            key: "setAjaxData",
            relyInit: !0,
            title: "用于再次配置ajaxData数据",
            code: `GridManager.setAjaxData('${gridManagerName}', {data: [{title: '通过setAjaxData动态添加的数据，其它项为空'}], totals: 1});`
        },
        refreshGrid: {
            key: "refreshGrid",
            relyInit: !0,
            title: "刷新表格",
            code: `GridManager.refreshGrid('${gridManagerName}');`
        },
        renderGrid: {
            key: "renderGrid",
            relyInit: !0,
            title: "渲染表格",
            code: `GridManager.renderGrid('${gridManagerName}');`
        },
        getCheckedTr: {
            key: "getCheckedTr",
            relyInit: !0,
            title: "获取当前选中的行",
            code: `GridManager.getCheckedTr('${gridManagerName}');`
        },
        getCheckedData: {
            key: "getCheckedData",
            relyInit: !0,
            title: "获取选中行的渲染数据",
            code: `GridManager.getCheckedData('${gridManagerName}');`
        },
        setCheckedData: {
            key: "setCheckedData",
            relyInit: !0,
            title: "设置选中的数据",
            code: `GridManager.setCheckedData('${gridManagerName}', [GridManager.getTableData('${gridManagerName}')[1]]);`
        },
        cleanData: {
            key: "cleanData",
            relyInit: !0,
            title: "清除指定表格数据",
            code: `GridManager.cleanData('${gridManagerName}');`
        },
        print: {key: "print", relyInit: !0, title: "打印当前页", code: `GridManager.print('${gridManagerName}');`},
        showLoading: {
            key: "showLoading",
            relyInit: !0,
            title: "显示加载中",
            code: `GridManager.showLoading('${gridManagerName}');`
        },
        hideLoading: {
            key: "hideLoading",
            relyInit: !0,
            title: "隐藏加载中",
            code: `GridManager.hideLoading('${gridManagerName}', 300);`
        },
        destroy: {
            key: "destroy",
            relyInit: !0,
            title: "消毁指定的GridManager实例",
            code: `GridManager.destroy('${gridManagerName}');`
        }
    }, demo1 = {
        initSearch: function () {
            var e = document.querySelector('.search-area select[name="type"]');
            for (let t in TYPE_MAP) {
                const a = document.createElement("option");
                a.value = t, a.innerText = TYPE_MAP[t], e.appendChild(a)
            }
            document.querySelector(".search-action").addEventListener("click", (function () {
                var e = {
                    title: document.querySelector('[name="title"]').value,
                    type: document.querySelector('[name="type"]').value,
                    content: document.querySelector('[name="content"]').value
                };
                table.GM("setQuery", e, (function () {
                    console.log("setQuery执行成功")
                }))
            })), document.querySelector(".reset-action").addEventListener("click", (function () {
                document.querySelector('[name="title"]').value = "", document.querySelector('[name="type"]').value = "-1", document.querySelector('[name="content"]').value = ""
            }))
        }, initFN: () => {
            const fnSelect = document.querySelector(".fn-select"), fnRun = document.querySelector(".fn-run"),
                fnCode = document.querySelector(".fn-code"), fnRunInfo = document.querySelector(".fn-run-info"),
                renderSelect = e => {
                    let t = '<option value="-1">请选择方法</option>';
                    for (let a in GM_PUBLISH_METHOD_MAP) {
                        let n = GM_PUBLISH_METHOD_MAP[a];
                        t = `${t}<option value="${a}" ${!e && n.relyInit ? "disabled" : ""} title="${n.title}">${a}</option>`
                    }
                    fnSelect.innerHTML = t
                };
            renderSelect(!0), fnSelect.addEventListener("change", (function () {
                fnCode.value = GM_PUBLISH_METHOD_MAP[this.value].code, fnRun.setAttribute("now-fun", this.value)
            })), fnRun.addEventListener("click", (function () {
                if (!fnCode.value) return void (fnRunInfo.innerHTML = "请通过选择方法生成所需要执行的代码");
                fnRunInfo.innerHTML = "";
                const log = eval(fnCode.value), nowFn = fnRun.getAttribute("now-fun");
                console.group(nowFn), console.log(fnCode.value), console.log(log), console.groupEnd();
                try {
                    "init" === nowFn && renderSelect(!0), "destroy" === nowFn && renderSelect(!1), fnRunInfo.innerHTML = `<span class="success-info">\n                    <a href="http://gridmanager.lovejavascript.com/api/index.html#${nowFn}" target="_blank">${nowFn}</a>\n                    执行成功, 请打开控制台查看具体信息\n                </span>`
                } catch (e) {
                    fnRunInfo.innerHTML = `<span class="error-info">\n                    <a href="http://gridmanager.lovejavascript.com/api/index.html#${nowFn}" target="_blank">${nowFn}</a>\n                    执行失败, 请打开控制台查看具体信息\n                </span>`, console.error("执行错误: ", e)
                }
            }))
        }, initGM: function () {
            new window.GridManager(table, {
                gridManagerName: "test",
                width: "100%",
                height: "100%",
                autoOrderConfig: {fixed: "left"},
                checkboxConfig: {key: "id", fixed: "left"},
                supportAjaxPage: !0,
                sortMode: "single",
                supportMenu: !0,
                menuHandler: e => (e.unshift({
                    content: "自定义菜单", line: !0, onClick: e => {
                        alert(e)
                    }
                }), e),
                useCellFocus: !0,
                supportMoveRow: !0,
                moveRowConfig: {
                    key: "priority", useSingleMode: !0, fixed: "left", handler: (e, t) => {
                        console.log(e, t)
                    }
                },
                summaryHandler: function (e) {
                    let t = 0;
                    return e.forEach((e => {
                        t += e.readNumber
                    })), {pic: "共计", readNumber: t}
                },
                disableCache: !1,
                ajaxData: function (e, t) {
                    return document.querySelector('[name="type"]').value = t.type || -1, "http://127.0.0.1:5000/api"
                },
                exportConfig: {
                    fileName: e => {
                        const t = new Date;
                        let a = `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
                        for (let t in e) a = `${a}-${t}=${e[t]}`;
                        return a
                    }, suffix: "xls"
                },
                ajaxType: "POST",
                checkedBefore: function (e, t, a) {
                    return console.log("checkedBefore==", e, t, a), a && 90 === a.id && alert("该节点在checkedBefore中配置为不可选"), a && 90 !== a.id
                },
                checkedAfter: function (e, t, a) {
                    console.log("checkedAfter==", e, t, a)
                },
                checkedAllBefore: function (e, t) {
                    console.log("checkedAllBefore==", e, t)
                },
                checkedAllAfter: function (e, t) {
                    console.log("checkedAllAfter==", e, t)
                },
                sortingBefore: function (e) {
                    console.log("sortingBefore", e)
                },
                sortingAfter: function (e) {
                    console.log("sortingAfter", e)
                },
                ajaxBeforeSend: function (e) {
                    console.log("ajaxBeforeSend")
                },
                ajaxSuccess: function (e) {
                    console.log("ajaxSuccess")
                },
                ajaxError: function (e) {
                    console.log("ajaxError")
                },
                ajaxComplete: function (e) {
                    console.log("ajaxComplete")
                },
                adjustBefore: e => {
                    console.log("adjustBefore=>", e)
                },
                adjustAfter: e => {
                    console.log("adjustAfter=>", e)
                },
                responseHandler: e => (e.data.forEach((e => {
                    e.priority = e.id
                })), e),
                rowRenderHandler: (e, t) => (92 === e.id && (e.gm_checkbox_disabled = !0, e.gm_row_class_name = "test-row-class"), e),
                emptyTemplate: e => `<div style="text-align: center;">${e.query.title ? "搜索为空" : "暂无数据"}</div>`,
                columnData: [{
                    key: "host",
                    text: "主机名",
                    width: "150px"
                }, {
                    key: "IP",
                    remind: "ip地址",
                    text: "IP",
                    merge: "text",
                    // sorting: "",
                    disableMoveRow: !0,
                    template: function (e, t) {
                        var a = document.createElement("a");
                        return a.setAttribute("href", `https://www.lovejavascript.com/#!zone/blog/content.html?id=${t.id}`), a.setAttribute("title", e), a.setAttribute("target", "_blank"), a.innerText = e, a.title = `点击阅读[${t.title}]`, a.classList.add("plugin-action"), a
                    }
                }, {
                    key: "port",
                    text: "端口",
                    align: "left",
                    width: "100px"
                }, {
                    key: "description",
                    remind: "备注",
                    text: "描述",
                    disableMoveRow: !0
                }, {
                    key: "operator",
                    remind: "redis管理员",
                    align: "center",
                    width: "125px",
                    text: "管理员",
                    disableMoveRow: !0,
                    template: (e, t) => `<a class="plugin-action" href="https://github.com/baukh789" target="_blank" ${t.id} title="去看看${e}的github">${e}</a>`
                }, {
                    key: "work",
                    text: "启动",
                    align: "center",
                    width: "100px"
                }, {
                    key: "action",
                    remind: "the action",
                    width: "100px",
                    align: "center",
                    fixed: "right",
                    disableMoveRow: !0,
                    disableRowCheck: !0,
                    text: '<span style="color: red">操作</span>',
                    template: (e, t) => `<span class="plugin-action" data-id="${t.id}" onclick="demo1.editRowData(this)">修改</span>`
                }]
            }, (e => {
                console.log("渲染完成后的回调函数:", e)
            }))
        }, editRowData: function (e) {
            window.GridManager.updateRowData("test", "id", {
                id: window.parseInt(e.getAttribute("data-id")),
                lastDate: (new Date).getTime()
            })
        }
    }, table = document.querySelector("table");
demo1.initSearch(table), demo1.initGM(table), demo1.initFN();