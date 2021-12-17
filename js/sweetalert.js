function successMessage() {
    successAlert = Swal.fire({
        icon: 'success',
        // title: 'Oops...',
        text: 'Thankyou!',
        // footer: '<a href="">Why do I have this issue?</a>'
    });
    return successAlert;
}