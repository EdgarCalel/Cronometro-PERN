import Swal from 'sweetalert2'

export const Formas=()=>Swal.fire({
    icon: 'Se ha registrado un error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })

  
  