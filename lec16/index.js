// const signupBtn = document.querySelector('.signup');
// const form = document.querySelector('.addform');

// signupBtn.addEventListener('click', () => {
//     // Toggle form display
//     form.style.display = (form.style.display === 'none' || form.style.display === '') 
//         ? 'block' 
//         : 'none';
// });

const signupBtn = document.querySelector('.signup');
const form = document.querySelector('.addform');

signup.addEventListener("click", function(){
    signup.classList.toggle("hide");
})