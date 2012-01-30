/* KeyNavi plug-in for jQuery
*
*  @author:   Cyrill Stawski (http://www.stawski.ru)
*  @e-mail:   stawskicyrill@gmail.com
*  @version:  0.1-dev
*
*/

jQuery.fn.keynavi = function (options) {
  $(this).keyup(function (event) {
    var e, e_jq, forward_url;
    if(event.ctrlKey && event.keyCode == 39) {
      event.preventDefault();
      e = $("[data-forward-backward='forward']").get(0); 
      if(e != undefined && e.href != undefined) {
        location.href = e.href;
      } else if (e != undefined) {
        e_jq = $(e);
        forward_url = e_jq.attr("data-forward-backward-url");
        if(forward_url != undefined) {
          location.href = forward_url;
        }
      }
    }
    if(event.ctrlKey && event.keyCode == 37) {
      event.preventDefault();
      e = $("[data-forward-backward='backward']").get(0); 
      if(e != undefined && e.href != undefined) {
        location.href = e.href;
      } else if (e != undefined) {
        e_jq = $(e);
        forward_url = e_jq.attr("data-forward-backward-url");
        if(forward_url != undefined) {
          location.href = forward_url;
        }
      }
    }
  });
};
