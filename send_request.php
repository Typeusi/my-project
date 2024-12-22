<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام بيانات النموذج
    $property_id = $_POST['property_id']; // رقم العقار
    $client_name = $_POST['client_name']; // اسم العميل
    $client_email = $_POST['client_email']; // البريد الإلكتروني
    $client_phone = $_POST['client_phone']; // رقم الهاتف
    
    // إرسال البيانات إلى الإدمن عبر البريد الإلكتروني
    $to = "admin@example.com"; // البريد الإلكتروني للإدمن
    $subject = "طلب من عميل للعقار رقم $property_id";
    $message = "اسم العميل: $client_name\nالبريد الإلكتروني: $client_email\nرقم الهاتف: $client_phone\nالعقار المطلوب: $property_id";
    $headers = "From: no-reply@example.com";

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $message, $headers)) {
        echo "تم إرسال طلبك بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال طلبك.";
    }
}
?>
