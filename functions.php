<?php
define('TEMPLATE_PATH', get_template_directory_uri());


function include_all_php_files($dir) {
    $scan = glob(rtrim($dir, '/') . '/*');
    foreach ($scan as $path) {
        if (is_dir($path)) {
            include_all_php_files($path);
        } elseif (pathinfo($path, PATHINFO_EXTENSION) == 'php') {
            include_once $path;
        }
    }
}

add_action('after_setup_theme', function() {
    $theme_dir = get_template_directory() . '/includes'; 
    include_all_php_files($theme_dir);
});