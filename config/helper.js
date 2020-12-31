export function successToast (text="",){
    window.F7App.$f7.toast.create({
        text: text,
        destroyOnClose:true,
        closeButton : true,
        closeTimeout : 2000,
        icon: window.F7App.$f7.theme === 'ios' ? '<i class="f7-icons">check</i>' : '<i class="material-icons">check</i>',
        position: 'center',
        on: {
            opened: function () {
                console.log('Toast opened')
            }
        }
    }).open();
}

export function errorToast (text="",){
    window.F7App.$f7.toast.create({
        text: text,
        destroyOnClose:true,
        closeButton : true,
        closeTimeout : 2000,
        icon: window.F7App.$f7.theme === 'ios' ? '<i class="f7-icons">report_problem</i>' : '<i class="material-icons">report_problem</i>',
        position: 'center',
        cssClass : "md-error",
        on: {
            opened: function () {
                console.log('Toast opened')
            }
        }
    }).open();
}
