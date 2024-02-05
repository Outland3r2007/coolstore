var app = new Framework7({
    el: "#app", theme: "ios", name: "tweakra1n", id: "com.nanotek.tweakra1n", popup: {
        push: !0, swipeToClose: !0
    }, sheet: {
        push: !0, swipeToClose: !0
    }, serviceWorker: {
        path: "./service-worker.js"
    }, routes: [{
            path: "/certificates/", content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">Certificates</div></div></div><div class="page-content"><div class="list accordion-list separated inset"><ul><li class="accordion-item"><a class="item-link item-content"><div class="item-inner"><div class="item-title">About</div></div></a><div class="accordion-item-content"><div class="block block-strong inset"><p>•Certificates play a crucial role in app authentication, essential for installing homebrew apps.<p>• Utilize the Custom certificate feature by selecting "Sign app" in "Settings" to sign iPAs with a certificate that you own or the available certificates from this our source.<p>•Encountering issues with installing apps from tweakra1n? Try the Custom certificate feature and download a certificate from the provided selection.<p>•Note that certificates may not undergo constant updates.<p>•If you possess a certificate and wish to share it, navigate to Settings, scroll down, tap "Contact," and select "Send us a Certificate."</div></div></li></ul></div><div class="block-title">Certficates</div><div class="list separated media-list inset"><ul><li><a onclick="nocert()" class="item-link item-content"><div class="item-media"><i class="f7-icons">doc_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">No certificates available</div></div></div></a></li></ul></div><div class="block-title">Other</div><div class="list separated media-list inset"><ul><li><a href="https://applep12.com" class="item-link item-content external"><div class="item-media"><i class="f7-icons">money_dollar</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Buy a certificate</div></div></div></a></li><li><a href="https://check-p12.applep12.com" class="item-link item-content external"><div class="item-media"><i class="f7-icons">status</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Check status of a certificate</div></div></div></a></li></div>', options: {
                transition: "f7-circle"
            }}, {
            path: "/miscellaneous/", content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">Miscellaneous</div></div></div><div class="page-content"><div class="list media-list separated inset"><ul><li><a class="item-link item-content sheet-open" data-sheet="#repos"><div class="item-media"><ion-icon name="earth"></ion-icon></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Repos</div></div></div></a></li><li><a href="itms-services://?action=download-manifest&url=https://gitlab.com/Forelps/respring/-/raw/main/app.plist" class="item-link item-content external"><div class="item-media"><i class="f7-icons">rays</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Respring</div></div></div></a></li><li><li><a href="https://udid.tech/config/udid_tech.signed.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear_alt</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Get UDID</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/4khxifa6dmyxtna7e8p9t/blockrevokes.mobileconfig?rlkey=kzc1wlts0u5vfkco1q5pyihb3&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">shield_lefthalf_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block revokes</div></div></div></a></li><li><a href="https://cdn.adtidy.org/public/Dns/adguard-dns.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">rectangle_3_offgrid_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block ADS</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/9mpbzim7x6sogk65e5jai/Block_OTA.mobileconfig?rlkey=86frs6v7zrhwzvrbwrqgo04m6&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">lock_shield_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block OTA</div></div></div></a></li></ul></div><div class="block block-title">Supervision required</div><div class="list media-list separated inset"><ul><li><a href="https://www.dropbox.com/scl/fi/sbjxg9q6w6za17s94ommj/Skip_Setup.mobileconfig?rlkey=l4eojv7qyh6gb0jul53h8o08h&dl=1" class="item-link item-content external"><div class="item-media"><ion-icon name="phone-portrait"></ion-icon></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Skip Setup</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/xmcduai5mhnyp7pznd0mb/Disable_Screen_Time.mobileconfig?rlkey=7s2vqp4kfccna8etuj57lbr2w&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">hourglass</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Disable Screen Time</div></div></div></a></li></ul></div><br></div>', options: {
                transition: "f7-circle"
            }}, {
            path: "/trustcert/", content: '<div class="page" data-name="miscellaneous"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Untrusted Enterprise Developer"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/YQxY1aO.png" style="width:97%;border-radius:20px;"></center><strong>How to trust a certificate?</strong><br>To establish trust in a certificate, navigate to your device\'s Settings, locate the General tab, and select VPN & Device Management. Once there, identify the specific certificate and proceed by clicking on it. Finally, complete the trust verification process by selecting the "Verify" option. This ensures the authentication and reliability of the certificate on your device.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div><br><br><br></div></div></div></div><div class="popup" id="devmode"><div class="page"><div class="swipe-nav"><div><i class="f7-icons">minus</i></div></div><div class="page-content"><div class="block-title block-title">"Developer Mode required"</div><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="width:97%;border-radius:20px;"></center><strong>How to enable Developer Mode?</strong><br>To activate Developer mode, navigate to your device\'s settings, specifically within the "Privacy & Security" section. Once there, locate the option labeled "Developer Mode" and toggle the switch to enable it.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>', options: {
                transition: "f7-circle"
            }}, {
            path: "/verifyintegrity/", content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Unable to install {app}"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/tETxFue.png" style="width:97%;border-radius:20px;"></center><strong>How. an i fix this error?</strong><br>If you encounter this error, it suggests a potential blacklisting from the certificate. To resolve, either reset your iDevice to factory settings or employ the <a class="popup-open" data-popup="#blacklist">Blacklist app</a>.</div>', options: {
                transition: "f7-circle"
            }}, {
            path: "/devmode/", content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Developer Mode required"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="width:97%;border-radius:20px;"></center><strong>How to enable Developer Mode?</strong><br>To activate Developer mode, navigate to your device\'s settings, specifically within the "Privacy & Security" section. Once there, locate the option labeled "Developer Mode" and toggle the switch to enable it.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>', options: {
                transition: "f7-circle"
							}}]}), mainView = app.views.create(".view-main");function toggleDarkMode(){document.querySelector("html").classList.toggle("dark")}function applyDarkModeSetting(){const e=document.querySelector("html"),t=window.matchMedia("(prefers-color-scheme: dark)"),i=t=>{t.matches?e.classList.add("dark"):e.classList.remove("dark")};t.addListener(i),i(t)}
							applyDarkModeSetting();
							
							function loadIconFromLocalStorage() {
    var e = localStorage.getItem("customicon"); e && updateIcon(e)}if (document.addEventListener("DOMContentLoaded", (function() {
        document.querySelectorAll(".ptr-content").forEach((function(e) {
            e.addEventListener("ptr:refresh", (function(e) {
                window.location.reload()}))}))})), "serviceWorker"in navigator && navigator.serviceWorker.getRegistration().then((e=> {
        e || navigator.serviceWorker.register("service-worker.js").then((e=> {})).catch((e=> {}))})), window.addEventListener("load", (function() {
        loadIconFromLocalStorage()})), window.navigator.standalone) {
    var preloaderDialog = app.dialog.preloader("Installing idid"); preloaderDialog.open(),
    setTimeout((function() {
			preloaderDialog.close()}), 2e3)} else app.popup.open("#hs"); 
function createItemHtml(e) {
    return `\n    <li>\n\t\t<a class="item-link external" href="apple-magnifier://install?url=${e.get_link}">                
        <div class="item-content">                  
            <div class="item-media"><img loading="lazy" src="${e.icon}"></div>                  
            <div class="item-inner">                      
                <div class="item-title-row">                           
                    <div class="item-title">${e.title}</div>                       
                </div>                        
                <div class="item-subtitle">${e.version} • ${e.id}</div>                      
                <div class="item-footer"></div>             
            </div>
        </div>
    </a>\n    </li>\n  `;
}

function initVirtualList(e) {
    app.virtualList.create({
        el: ".virtual-list",
        items: e,
        renderItem: function (e, t) {
            return createItemHtml(e);
        },
        searchAll: function (e, t) {
            let i = [];
            for (let n = 0; n < t.length; n++)
                (t[n].title.toLowerCase().indexOf(e.toLowerCase()) >= 0 || "" === e.trim()) && i.push(n);
            return i;
        },
        height: 90
    });
    
		
}

async function loadApps() {
    try {
        const e = await fetch("apps.json"),
            t = (await e.json()).sort(((e, t) => e.title.localeCompare(t.title))),
            i = document.getElementById("tweaksnumber");
        i && (i.textContent = t.length), initVirtualList(t);
    } catch (e) {
        console.error("Could not load apps:", e);
    }
}
document.addEventListener("DOMContentLoaded",loadApps);"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then((e=>{e||navigator.serviceWorker.register("service-worker.js").then((e=>{})).catch((e=>{}))}));
function updateTabTitle() {
    document.querySelectorAll(".tab-link").forEach((function (e) {
        e.addEventListener("click", (function () {
            var e = this.getAttribute("data-tab-title"),
                t = document.querySelector(".navbar .title"),
                i = document.querySelector(".navbar .title-large-text");
            if (t) {
                t.textContent = e;
            }
            if (i) {
                i.textContent = e;
            }
        }))
    }));
}

updateTabTitle();


function troll() {
	app.dialog.alert('This is not real TrollStore,it just looks like the real TrollStore but it is just Store for apps that need to be installed with TrollStore.','Trolled ya!');
	
	
}
function uninstall() {
	app.dialog.alert('Go to HomeScreen,touch and hold the CoolStore icon,choose the option "Delete Bookmark" and then when the prompt appears click Delete.','How to Uninstall CoolStore?');
	
	
}

