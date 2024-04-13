<?php

function register_theme_menus() {
    register_nav_menus(
        array(
            'primary-menu' => 'Menu Primário', 
        )
    );
}

add_action('init', 'register_theme_menus');

