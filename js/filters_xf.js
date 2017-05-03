// элемент для ajax замены
var fadename = ".products-grid";
$(fadename).addClass('filters_animated');
filters_ajax = "on";

function filters_reinit() {
    // пишем сюда скрипты для переинициализации, например lightbox
    $(".product-thumb>a").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".product-image-container").children("a").children("img").attr("src", $(this).attr("href"));
    });
	var clall = (!$("#type > div.showhide_xf.type .picked").length) ? " picked" : "";
	$("#type > div.showhide_xf.type").prepend('<span class="filters_clear_btn clearall'+clall+'">Все</span>');
}

function ajax_filters(action, cookie, class_xf, cache, data, widget, that) {
    if (cookie == "on") {
        var tval = $("." + class_xf).val();
        if (tval != "default") {
            $.cookie(class_xf, tval, {
                path: '/'
            });
        } else {
            $.removeCookie(class_xf, {
                path: '/'
            });
        }
    }
    var clear_cat_var = $(".filters_cat").attr("id");
    $.post("/engine/ajax/filters_xf.php", {
        no_url: action,
        clear_cache: cache,
        category: clear_cat_var,
        filters_data: data
    }, function(url) {
        if (filters_ajax == "off")
            window.location = url;
        if (filters_ajax == "on") {
            if (!widget) {
                $("#filters_all").addClass("filtersloader");
            } else {
                $("#filers_widget").addClass("filtersloader");
            }
            if (url !== undefined) {
				if (!widget) {
					$(fadename).removeClass('filters_fadein').addClass('filters_fadeout');
				}
                $.ajax({
                    url: url,
                    success: function(data) {
                        if (data) {
                            if (!widget) {
								$(fadename).html($(fadename, data).html());
                                $(fadename).removeClass('filters_fadeout').addClass('filters_fadein');
                                window.history.replaceState(document.location.href, document.title, url);
                                $('#filters_all').html($('#filters_all', data).html()).removeClass("filtersloader");
                            } else {
                                $('#filers_widget').html(data).removeClass("filtersloader");
                                filters_widget_onoff(that);
                            }
                            filters_reinit();
                            if ('function' == typeof window.filters_slider_reinit) {
                                filters_slider_reinit();
                            }
                        }
                    }
                })
            }
        }
    });
    return false;
}

function start_filters(sort) {
    var all_arr = {};
    all_arr['order'] = $(".filters_order option:selected").val();
    all_arr['sort'] = $(".filters_sort option:selected").val();
    all_arr['sort_count'] = $(".filters_sort_count option:selected").val();
    $(".filters_cb:checked").each(function() {
        var key = $(this).attr("name");
        var val = $(this).val();
        if (all_arr[key]) {
            var cboxes = all_arr[key] + "," + val;
            if ($("." + key + "_default").attr("default") != cboxes.split(',').length) {
                all_arr[key] = cboxes;
            } else {
                delete all_arr[key];
            }
        } else {
            all_arr[key] = val;
        }
    });
    $(".filters_s option:selected").each(function() {
        var key = $(this).parent().attr("name");
        var val = $(this).val();
        if (val)
            all_arr[key] = val;
    });
    $(".filters_p.picked").each(function() {
        var key = $(this).attr("name");
        var val = $(this).attr("id");
        if (all_arr[key]) {
            var koma = all_arr[key] + "," + val;
            if ($("." + key + "_default").attr("default") != koma.split(',').length) {
                all_arr[key] = koma;
            } else {
                delete all_arr[key];
            }
        } else {
            all_arr[key] = val;
        }
    });
    $(".filters_d").each(function() {
        var key = $(this).attr("name");
        var val = $(this).val();
        if (all_arr[key]) {
            var defis = all_arr[key] + "-" + val;
            if ($("." + key + "_default").attr("default") != defis) {
                all_arr[key] = defis;
            } else {
                delete all_arr[key];
            }
        } else {
            all_arr[key] = val;
        }
    });
    if (sort) {
        ajax_filters(null, "on", sort, "clear", all_arr);
    } else {
        ajax_filters(null, "off", null, null, all_arr);
    }
    return false;
}

function filters_unique(inArr) {
    var uniHash = {},
        outArr = [],
        i = inArr.length;
    while (i--)
        uniHash[inArr[i]] = i;
    for (i in uniHash)
        outArr.push(i);
    return outArr;
}

function filters_precookie(string, newone) {
    if (string.indexOf(",") + 1) {
        var string = string.split(",");
        $(".filters_xf.on").each(function() {
            string.push($(this).attr("id"));
        });
    } else {
        var arr = [];
        $(".filters_xf.on").each(function() {
            arr.push($(this).attr("id"));
        });
        string = arr;
    }
    return filters_unique(string).join(",");
}

function filters_widget_onoff(num) {
    $("#filers_widget .filters_widget_field").each(function(i, e) {
        if (i <= num || i === 0) {
            if ($(this).val()) {
                $(this).prop("disabled", false);
                $(this).parent().append('<i class="fa fa-refresh widget_refresh" aria-hidden="true"></i>');
            }
        } else {
            $(this).prop("disabled", true);
            $(this).parent().find(".widget_refresh").remove();
        }
    });
}

function get_widget_path(ind, def) {
    $(".filters_widget_field option:selected").each(function(i, e) {
        if (i >= ind) {
            $(this).prop("selected", false).parent().prepend('<option value="" selected>Не выбрано</option>');
        }
    });

    var path = {};
    $(".filters_widget_field option:selected").each(function(i, e) {
        var name = $(this).parent().attr("name");
        path[name] = $(this).val();
    });
    path['filters_xf'] = !def ? "widget" : "default";
    filters_ajax = "on";
    return path;
}

$(document).ready(function() {
    filters_reinit();
    if ('function' == typeof window.filters_slider_reinit) {
        filters_slider_reinit();
    }
    $(document).on("click", ".filter_del", function(e) {
        e.preventDefault();
        var x = $(this).attr("id");

        // обнуляем по ID
        if ($('.filters_null[func="diap"][id="' + x + '"]').length) {
            $('.filters_null[func="diap"][id="' + x + '"]').click();
            return;
        }

        // decodeURI ?
        // var n = decodeURI($(this).attr("value")).replace(/\s/gi, "+");
        var n = $(this).attr("value");
        if ($(this).closest("div").find(".filter_del").length > 1) {
            $(this).remove();
        } else {
            $(this).closest("div").remove();
        }
        if (!$("#filters_head").text().length) {
            $("#filters_head").remove();
        }
        $('input[name="' + x + '"], span[name="' + x + '"]').each(function() {
            // decodeURI ?
            // if (decodeURI($(this).val()) == n || decodeURI($(this).attr("id")) == n) {
            if ($(this).val() == n || $(this).attr("id") == n) {
                $(this).prop('checked', false);
                $(this).removeClass('picked');
            }
        });
        $('select[name="' + x + '"]>option').each(function() {
            // decodeURI ?
            // if (decodeURI($(this).val()) == n) {
            if ($(this).val() == n) {
                $(this).prop('selected', false);
            }
        });
        start_filters();
    });
    $(document).on("click", ".filters_p:not(.disable_xfb)", function() {
        $(this).toggleClass("picked");
        if (filters_what == "any")
            start_filters();
    });
    $(document).on("change", ".filters_s", function() {
        if (filters_what == "any")
            start_filters();
    });
    $(document).on("click", ".filters_sort_null", function() {
        $.removeCookie('filters_sort', {
            path: '/'
        });
        $.removeCookie('filters_order', {
            path: '/'
        });
        $.removeCookie('filters_sort_count', {
            path: '/'
        });
        start_filters("sort");
        $(".filters_sort").val("default");
        $(".filters_order").val("default");
        $(".filters_sort_count>option:first-child").prop("selected", true);
    });
    $(document).on("change", ".filters_sort_count", function() {
        start_filters("filters_sort_count");
    });
    $(document).on("change", ".filters_order", function() {
        start_filters("filters_order");
    });
    $(document).on("change", ".filters_sort", function() {
        start_filters("filters_sort");
    });
    $(document).on("click", ".filters_clear_btn", function() {
        $(".filters_xf").each(function() {
            // diap
            var key = $(this).attr("id");
            var def_min = $("#" + key + "_min").attr("default");
            var def_max = $("#" + key + "_max").attr("default");
            if (def_min && def_max) {
                $("#" + key + "_slider").slider("values", [def_min, def_max]);
                $("#" + key + "_min").val(def_min);
                $("#" + key + "_max").val(def_max);
            }
            //check
            $(".filters_cb").each(function() {
                $(this).prop('checked', false);
            });
            //select
            $(".filters_s option:selected").each(function() {
                $(this).prop("selected", false)
            });
            //pick
            $(".filters_p").each(function() {
                $(this).removeClass('picked');
            });
        });
        start_filters();

        if ($.cookie('filters-xf-show')) {
            /*
            $.removeCookie('filters-xf-show', {
                path : '/'
            });
            */
        }
    });
    $(document).on("click", ".filters_null", function() {
        var what = $(this).attr("id");
        var func = $(this).attr("func");
        if (func == "pick") {
            $("." + what).each(function() {
                if (!$(this).hasClass("picked"))
                    $(this).toggleClass("picked");
            });
            if (filters_what == "any")
                start_filters();
        }
        if (func == "checkbox") {
            $("." + what).each(function() {
                $(this).prop('checked', true);
            });
            if (filters_what == "any")
                start_filters();
        }
        if (func == "diap") {
            var func_min = $("#" + what + "_slider").slider("option", "min");
            var func_max = $("#" + what + "_slider").slider("option", "max");
            var func_min_save = $("#" + what + "_min").val();
            var func_max_save = $("#" + what + "_max").val();
            $("#" + what + "_min").val(func_min);
            $("#" + what + "_max").val(func_max);
            $("#" + what + "_slider").slider("values", [func_min, func_max]);
            if (filters_what == "any") {
                if (func_min_save != $("#" + what + "_min").val() || func_max_save != $("#" + what + "_max").val())
                    start_filters();
            }
        }
    });
    $(document).on("click", ".filters_btn", function() {
        start_filters();
    });
    $(document).on("change", ".filters_cb", function() {
        if (filters_what == "any")
            start_filters();
    });
    $(document).on("click", ".filters_showhide.off", function() {
        var that = $(this),
            xf = that.attr("id");
        // to delete
        that.attr("title", "Закрыть").removeClass("off").addClass("on");
        $(".showhide_xf." + xf).slideDown(250, function() {
            that.closest(".filters_xf").removeClass("off").addClass("on");
            var xfsa = $.cookie('filters-xf-show');
            if (xfsa) {
                $.cookie("filters-xf-show", filters_precookie(xfsa), {
                    path: '/'
                });
            } else {
                $.cookie("filters-xf-show", filters_precookie(xf), {
                    path: '/'
                });
            }
        });
    });
    $(document).on("click", ".filters_showhide.on", function() {
        var that = $(this),
            xf = that.attr("id");
        // to delete
        that.attr("title", "Открыть").removeClass("on").addClass("off");
        $(".showhide_xf." + xf).slideUp(250, function() {
            that.closest(".filters_xf").removeClass("on").addClass("off");
            var xfsa = $.cookie('filters-xf-show');
            if (xfsa) {
                if (xfsa.indexOf(",") + 1) {
                    xfsa = xfsa.split(",");
                    xfsa.splice(xfsa.indexOf(xf), 1);
                    $.cookie("filters-xf-show", filters_unique(xfsa).join(","), {
                        path: '/'
                    });
                } else {
                    $.removeCookie('filters-xf-show', {
                        path: '/'
                    });
                }
            }
        });
    });
    $(document).on("click", "#filters_widget", function() {
        var path = {};
        $(".filters_widget_field option:selected").each(function() {
            var name = $(this).parent().attr("name");
            path[name] = $(this).val();
        });
        filters_ajax = "off";
        ajax_filters(null, "off", null, null, path);
    });
    $(document).on("change", ".filters_widget_field", function() {
        var ind = $(".filters_widget_field").index(this) + 1;
        var path = get_widget_path();
        ajax_filters(null, "off", null, null, path, true, ind);
    });
    $(document).on("click", ".widget_refresh", function() {
        $(this).parent().find(".filters_widget_field>option:selected").prop("selected", false);
        var ind = $(".filters_widget_field").index($(this).parent().find(".filters_widget_field"));
        var path = get_widget_path(ind, true);
        if (path) ajax_filters(null, "off", null, null, path, true, ind);
    });
    filters_widget_onoff();
});
