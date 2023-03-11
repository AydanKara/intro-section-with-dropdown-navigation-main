function sidebarFunc() {

    //! header sidebar start
    const btnOpenSidebar = document.getElementById("open-btn");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-btn");

    btnOpenSidebar.addEventListener("click", function () {
        sidebar.style.right = "0";
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.style.right = "-100%";
    });

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(sidebar) &&
            !event.composedPath().includes(btnOpenSidebar)
        ) {
            sidebar.style.right = "-100%";
        }
    });
    /* click outside end */


    //! header sidebar end
}

sidebarFunc();