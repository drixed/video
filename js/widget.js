var currScript,jQEngager,peer_avatar,peer_name,comm_controller,roomIdw,agentId,iframeId,offlineEmail,offlinePage,offlineNotify,configType,currVersion=15,isOnline=!1,popupInstance=null,openTab=!1,autoReconnectInterval=5000;if(currScript=document.currentScript||function(){var a=document.getElementById("newdev-embed-script");return a}(),null==currScript||currScript==null){var scripts=document.getElementsByTagName("script"),index=scripts.length-1;currScript=scripts[index]}var lsRepUrl=currScript.getAttribute("data-source_path"),initVideoNewDev=function(){var a,b=currScript.getAttribute("data-button-css")?currScript.getAttribute("data-button-css"):"button.css",c=currScript.getAttribute("data-message")?currScript.getAttribute("data-message"):"Start Video Chat";peer_avatar=currScript.getAttribute("data-avatar")?currScript.getAttribute("data-avatar"):"",peer_name=currScript.getAttribute("data-names")?currScript.getAttribute("data-names"):"",roomIdw=currScript.getAttribute("data-room_id")?currScript.getAttribute("data-room_id"):Math.random().toString(36).slice(2).substring(0,15),agentId=currScript.getAttribute("data-agent_id")?currScript.getAttribute("data-agent_id"):"",iframeId=currScript.getAttribute("data-iframe_id")?currScript.getAttribute("data-iframe_id"):"",offlineEmail=currScript.getAttribute("data-offline_email")?currScript.getAttribute("data-offline_email"):"",offlinePage=currScript.getAttribute("data-offline_page")?currScript.getAttribute("data-offline_page"):"",offlineNotify=currScript.getAttribute("data-offline_message")?currScript.getAttribute("data-offline_message"):"",openTab=!!currScript.getAttribute("data-intab")&&currScript.getAttribute("data-intab"),configType=!!currScript.getAttribute("data-config")&&currScript.getAttribute("data-config");var d=function(){if(popupInstance&&!popupInstance.closed)popupInstance.focus();else{-1===roomId.indexOf("dashboard")&&comm_controller.leave();var b=445,c=screen.width/2-175,d=screen.height/2-b/2,f={};peer_avatar&&(f.avatar=peer_avatar),peer_name&&(f.names=peer_name),lsRepUrl&&(f.lsRepUrl=lsRepUrl),agentId&&(f.agentId=agentId),configType&&(f.config=configType);var g=window.btoa(unescape(encodeURIComponent(JSON.stringify(f))));if(openTab)var h="";else h="width=350, height="+b+", left="+c+", top="+d+", location=no, menubar=no, resizable=yes, scrollbars=no, status=no, titlebar=no, toolbar = no";if(a=lsRepUrl+"pages/"+roomLinkPage+"?room="+roomIdw+"&p="+g,sessionId&&(a+="&s="+sessionId),iframeId)jQEngager("#"+iframeId).attr("src",a);else{popupInstance=window.open("","popup_instance",h);try{"about:blank"===popupInstance.location.href&&(popupInstance.location.href=a)}catch(a){}popupInstance.focus()}window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e)}},e=function(a){a.data&&"popupClosed"===a.data.type&&comm_controller.popupClosed(roomIdw)},f=function(){jQEngager.ajax({url:lsRepUrl+"config/config.json?v="+currVersion,type:"GET",dataType:"json",beforeSend:function(a){a&&a.overrideMimeType&&a.overrideMimeType("application/j-son;charset=UTF-8")},success:function(a){svConfigs=a,h()}})},g=function(){loadScript(lsRepUrl+"js/bundle.js",i)},h=function(){loadScript(svConfigs.appWss+"socket.io/socket.io.js",g)},i=function(){comm_controller=new comController,comm_controller.init("visitor","dashboard"),agentId&&setTimeout(function(){comm_controller.init("visitor","dashboard"+agentId)},500),currScript.getAttribute("data-room_id")&&setTimeout(function(){comm_controller.init("visitor",currScript.getAttribute("data-room_id"))},1e3);var a=jQEngager("<link>",{rel:"stylesheet",type:"text/css",href:lsRepUrl+"css/"+b+"?v="+currVersion});a.appendTo("head");var c=jQEngager("<link>",{rel:"stylesheet",type:"text/css",href:lsRepUrl+"css/"+"simplechat.css"+"?v="+currVersion});c.appendTo("head"),$container=jQEngager("#nd-widget-container"),k($container)},j=function(){isOnline?jQEngager("#widget_but_span").attr("class","online-bnt"):jQEngager("#widget_but_span").attr("class","offline-bnt")},k=function(b){jQEngager.get(lsRepUrl+"pages/button.html",function(e){b.append(e),console.log("loadButton"),jQEngager(document).on("AdminOnline",function(){isOnline=!0,j()}),jQEngager(document).on("AdminOffline",function(){isOnline=!1,j()}),jQEngager("#newdev_widget_msg").html(c),jQEngager("#widget-but").on("click",function(){isOnline?d():offlineEmail?(jQEngager("#widget_tooltip_container").show(),jQEngager("#widget_tooltip_container").on("click",function(a){jQEngager("#widget_tooltip_container").hide(),a.stopPropagation()}),jQEngager("#offline_message").on("click",function(a){a.stopPropagation()}),jQEngager("#sendEmail").on("click",function(){jQEngager("#widget_tooltip_container").hide();var a=jQEngager("#offline_message").val();document.location.href="mailto:"+offlineEmail+"?subject=Offline request&body="+a})):offlinePage&&(-1===offlinePage.indexOf("http")&&(offlinePage="http://"+offlinePage),window.open(offlinePage))}),jQEngager(document).off("ChatMessage"),jQEngager(document).on("ChatMessage",function(a){if(a.privateId==sessionId){jQEngager(".msger-lsv-widget").css("height","420px"),jQEngager(".msger-lsv-chat").show(),jQEngager("#minimizeSimpleChat").show(),jQEngager(".msger-lsv-inputarea").show(),jQEngager("#maximizeSimpleChat").hide(),jQEngager("#simpleButton").show();var b=svConfigs.agentName?svConfigs.agentName:"Agent";f(b,"left",a.msg)}});var f=function(a,b,c){if(c){var d=jQEngager(".msger-lsv-chat")[0];const e=`
    <div class="msg-lsv ${b}-msg-lsv">
      <div class="msg-lsv-bubble">
        <div class="msg-lsv-info">
          <div class="msg-lsv-info-name">${a}</div>
          <div class="msg-lsv-info-time">${getPrettyDate(new Date().getTime()/1e3)}</div>
        </div>

        <div class="msg-lsv-text">${c}</div>
      </div>
    </div>
  `;d.insertAdjacentHTML("beforeend",e),d.scrollTop+=500}};jQEngager(".msger-lsv-inputarea").submit(function(a){a.preventDefault();var b=jQEngager(".msger-lsv-input"),c=b.val();f("Me","right",c),b.val(""),comm_controller.addLocalChat(c,null,sessionId)}),jQEngager("#closeSimpleChat").click(function(){comm_controller.addLocalChat("User closed the chat!",null,sessionId),jQEngager("#simpleButton").hide()}),jQEngager("#videoCallLsvLink").click(function(){d();var b="User has requested <a target=\"_blank\" href=\""+a+"&isAdmin=1\">chat</a>!";comm_controller.addLocalChat(b,null,sessionId),jQEngager("#simpleButton").hide()}),jQEngager("#minimizeSimpleChat").click(function(a){a.stopPropagation(),jQEngager(".msger-lsv-widget").css("height","40px"),jQEngager(".msger-lsv-chat").hide(),jQEngager(".msger-lsv-inputarea").hide(),jQEngager("#minimizeSimpleChat").hide(),jQEngager("#maximizeSimpleChat").show()}),jQEngager(".msger-lsv-header").click(function(a){a.stopPropagation(),jQEngager(".msger-lsv-widget").css("height","420px"),jQEngager(".msger-lsv-chat").show(),jQEngager(".msger-lsv-inputarea").show(),jQEngager("#minimizeSimpleChat").show(),jQEngager("#maximizeSimpleChat").hide()}),jQEngager("#videoCallLsvIcon").attr("src",lsRepUrl+"/img/video_call_hover.png"),jQEngager("#minimizeLsvImage").attr("src",lsRepUrl+"/img/minimize.png"),jQEngager("#maximizeLsvImage").attr("src",lsRepUrl+"/img/maximize.png"),jQEngager("#closeLsvImage").attr("src",lsRepUrl+"/img/close.png")})};f()};function loadScript(a,b){var c=document.createElement("script");c.type="text/javascript",c.readyState?c.onreadystatechange=function(){("loaded"==c.readyState||"complete"==c.readyState)&&(c.onreadystatechange=null,b&&b())}:(c.onload=function(){b&&b()},c.onerror=function(){setTimeout(function(){loadScript(a,b)},autoReconnectInterval)}),c.src=a+"?v="+currVersion,document.getElementsByTagName("head")[0].appendChild(c)}var ms=Date.now();"undefined"==typeof jQuery||11>parseInt(jQuery.fn.jquery.split(".")[1])?loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js",function(){jQEngager=jQuery.noConflict(!0),jQEngager.get(lsRepUrl+"pages/version.txt?v="+ms,function(a){currVersion=a,jQEngager(document).ready(new initVideoNewDev)})}):(jQEngager=jQuery,jQEngager.get(lsRepUrl+"pages/version.txt?v="+ms,function(a){currVersion=a,jQEngager(document).ready(new initVideoNewDev)}));