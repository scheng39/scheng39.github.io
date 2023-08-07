/*
 * WEB222 – Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       SIU MAN CHENG
 *      Student ID: 121104228
 *      Date:       10 AUG 2023
 **/

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { review } = window;


//first step: when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

//Step2: display review cards dynamically
displayReview();


//DOM: when form is submitted
  const reviewform = document.querySelector(".myForm");

  if(reviewform){
    reviewform.addEventListener("submit", updateReview);
  }
 

}); //END of DOM


function displayReview(){

  let reviewWrapBox = document.querySelector(".review-wrapper");

  if(reviewWrapBox){

  review.forEach(function (reviews, index){

    const indiReview = document.createElement("div");
    // Create a <div> to hold the card
    // Add the .indireview class to the <div>
    indiReview.classList.add("indireview");
  
    // Create a <p> to hold stars
    const stars = document.createElement("p");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("span");
      let rating = reviews.rating;
      star.classList.add("material-icons");
      if (i < rating) {
        star.classList.add("checked");
      }
      star.innerText = "star";
      stars.appendChild(star);
    }
  
    // Create a <p> to hold user review
    const commentbox = document.createElement("p");
    commentbox.classList.add("textreview");
    commentbox.innerText = reviews.comment;
  
  
    // Create a <p> to hold user name
    const usernamebox = document.createElement("p");
    usernamebox.classList.add("userreview");
    usernamebox.innerText = reviews.name;
    
    // Create a <p> to hold date
    const datebox = document.createElement("p");
    datebox.classList.add("reviewdate");
    datebox.innerText = reviews.date;
  
    //add to indireview
    indiReview.appendChild(stars);
    indiReview.appendChild(commentbox);
    indiReview.appendChild(usernamebox);
    indiReview.appendChild(datebox);
  
    //add to review wrapper
    reviewWrapBox.appendChild(indiReview);
  
    });
  }
}

function updateReview(e) {
      
  e.preventDefault();

  const username = document.querySelector("#review-username").value;
  const date = document.querySelector("#review-date").value;
  const comment = document.querySelector("#review-comment").value;
  const rating = document.querySelector('input[name="rating"]:checked').value;

  const newReview = {name: username, date:date, rating: parseInt(rating), comment: comment};
  review.push(newReview);

  let reviewWrapBox = document.querySelector(".review-wrapper");
  reviewWrapBox.innerHTML = "";
  displayReview();
}
