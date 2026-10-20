<?php
// router.php - لتشغيل الملفات محلياً بشكل صحيح
$path = __DIR__ . $_SERVER['REQUEST_URI'];
if (php_sapi_name() == 'cli-server' && file_exists($path) && !is_dir($path)) {
    return false; // يسمح للخادم المحلي بفتح الملفات الثابتة مباشرة
}
// إذا لم يكن ملفاً ثابتاً، قم بتوجيهه إلى صفحة api/index.php
include __DIR__ . '/api/index.php';
