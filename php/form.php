<?php
//jeżeli zmienna "email" została wypełniona, wysyłamy wiadomość
  if (isset($_REQUEST['email'])||isset($_REQUEST['first_name'])||&&isset($_REQUEST['first_name'])||&&isset($_REQUEST['last_name']))  {
  
  //Informację o emailu, na który będzie wysyłana wiadomość
  $admin_email = "m.goorna@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['first_name'];
  $comment = $_REQUEST['last_name'];
  
  //wysyłamy email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  //komunikat potwierdzający
  echo "Dziękujemy za kontakt z nami!";
  }
  
  //jeżeli zmienna z wartością "email" nie została wypełniona pokazujemy ponownie formularz
  else  {
?>

 <form method="post">
  Email: <input name="email" type="text" /><br />
  Temat: <input name="subject" type="text" /><br />
  Wiadomość:<br />
  <textarea name="comment" rows="15" cols="40"></textarea><br />
  <input type="submit" value="Wyślij" />
  </form>
  
<?php
  }
?>