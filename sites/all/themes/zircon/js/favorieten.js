function addBookmark(url,name){
    if(window.sidebar && window.sidebar.addPanel) {
        window.sidebar.addPanel(name,url,''); //obsolete from FF 23.
} else if(window.opera && window.print) {
        var e=document.createElement('a');
        e.setAttribute('href',url);
        e.setAttribute('title',name);
        e.setAttribute('rel','sidebar');
        e.click();
} else if(window.external) {
        try {
            window.external.AddFavorite(url,name);
        }
        catch(e){}
}
else
        alert("To add our website to your bookmarks use CTRL+D on Windows and Linux and Command+D on the Mac.");
}
