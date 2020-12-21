class EventMenu {
    constructor(nameButton, nameMenu,showMenu,hideMenu) {
        this.nameButton = nameButton;
        this.nameMenu = nameMenu;
        this.myBtn = document.getElementById(this.nameButton);
        this.myMenu = document.querySelector(this.nameMenu)
        this.myBtn.addEventListener("click",() => {  
            if( this.myMenu.classList.contains(showMenu)) {        
                this.myMenu.classList.remove(showMenu);
                this.myMenu.classList.add(hideMenu);
                } else {
                    this.myMenu.classList.add(showMenu);
                this.myMenu.classList.remove(hideMenu);
                }     
        });
        document.addEventListener("click", (event) => {
            if(event.target != this.myBtn) {
            if(this.myMenu.classList.contains(showMenu)) {
                this.myMenu.classList.remove(showMenu);
                this.myMenu.classList.add(hideMenu);
                }
            }
        })
    }
}
var menuLeft = new EventMenu("btn", ".menu","ShowMenuLeft", "HideMenuLeft");
var menuRight = new EventMenu("btnRight", ".menu-right", "ShowMenuRight", "HideMenuRight");
