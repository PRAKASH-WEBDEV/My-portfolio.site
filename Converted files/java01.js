var tablinks=document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablink){
        tablink.classlist.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementsById(tabname).classlist.add("active-tab");
}