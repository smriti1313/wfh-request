<?php
/**
 * Configuration File
 * Contains site-wide settings and constants
 * Optimized for Laravel Herd
 */

// Site settings
define('SITE_NAME', 'Tough life');
define('SITE_URL', 'http://wfh-request.test'); // Herd auto-generates .test domains

// Asset paths
define('CSS_PATH', 'assets/css/');
define('JS_PATH', 'assets/js/');
define('IMG_PATH', 'assets/images/');

// Timezone
date_default_timezone_set('Australia/Adelaide');

// Error reporting (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if running on Herd
if (isset($_SERVER['SERVER_SOFTWARE']) && strpos($_SERVER['SERVER_SOFTWARE'], 'Herd') !== false) {
    // Running on Laravel Herd
    define('ENVIRONMENT', 'development');
} else {
    define('ENVIRONMENT', 'production');
}
?>