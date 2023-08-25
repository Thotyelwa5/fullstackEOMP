<template>
  <form
  action="https://formspree.io/f/maygoljv"
  method="POST"
>
<h3>Let's Get in touch!</h3>
<fieldset id="fs-frm-inputs">
<label for="full-name">Full Name</label><br>
<input type="text" name="name" id="full-name" placeholder="Please enter your full name"  required 
oninvalid ="this.setCustomValidity('Please Enter Your Name')"
oninput="this.setCustomValidity('')">
<br>
<label for="email-address">Email Address</label><br>
<input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld"  required
oninvalid="this.setCustomValidity('Please Enter Valid Email')"
oninput="this.setCustomValidity('')">
<br>
<label for="message">Message</label><br>
<textarea rows="5" name="message" id="message" placeholder="Please enter your message."  required
oninvalid="this.setCustomValidity('Please Enter Your Message')"
oninput="this.setCustomValidity('')"></textarea>
<br>
<input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
</fieldset>
<button class="btn m-3">Submit</button>
</form>
  </template>
  <script>
  export default {
  }
  </script>
  <style scoped>
  body {
    font-weight: bolder;
 }
 
 #fs-frm {
   background-color:transparent;
   padding: 20px;
   border-radius: 5px;
   text-align: center;
   justify-content: center;
 }
 /* Style for form labels */
 label {
   font-weight: bold;
 }
 /* Style for form inputs */
 input[type="text"],
 input[type="email"],
 textarea {
   width: 50%;
   padding: 10px;
   margin-bottom: 15px;
   border: 1px solid #ccc;
   border-radius: 5px;
   resize: none;
 }
 /* Style for form submit button */
 .btn{
   background-color: purple;
   color: white;
   border: none;
   padding: 10px 20px;
   border-radius: 3px;
   cursor: pointer;
 }
 .btn:hover {
   background-color: #d9d9d9d9;
 }
 
 main {
   text-align: center;
   
 }
  </style>