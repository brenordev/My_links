    const btnModal = document.querySelector('#btn_modal')
    const modal = document.querySelector('#modal_setup')
    const btnCloseModal = document.querySelector('#btn_close_modal')

    btnModal.addEventListener('click', () =>{
        modal.classList.toggle("show_modal");
        
    });

    btnCloseModal.addEventListener('click', () =>{
        modal.classList.remove("show_modal");
        console.log('modal fechado')
    })

