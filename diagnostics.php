<?php
/**
 * Laravel Production Diagnostic Script
 * Upload this to your root directory and access it via https://yourdomain.com/diagnostics.php
 */

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "<h2>🔍 Laravel 500 Error Diagnostic Tool</h2>";
echo "<hr>";

$baseDir = realpath(__DIR__ . '/..');

// 1. Check PHP Version
echo "<h3>1. Environment</h3>";
echo "PHP Version: " . phpversion() . "<br>";

// 2. Check vendor/autoload.php
echo "<h3>2. Composer Dependencies (vendor/)</h3>";
$autoloadPath = $baseDir . '/vendor/autoload.php';
if (file_exists($autoloadPath)) {
    echo "<span style='color:green;'>✅ vendor/autoload.php exists! (Composer installed)</span><br>";
} else {
    echo "<span style='color:red;'>❌ vendor/autoload.php is MISSING! The CI/CD did not upload your vendor folder.</span><br>";
}

// 3. Check .env
echo "<h3>3. Environment File (.env)</h3>";
$envPath = $baseDir . '/.env';
if (file_exists($envPath)) {
    echo "<span style='color:green;'>✅ .env file exists.</span><br>";
} else {
    echo "<span style='color:red;'>❌ .env file is MISSING!</span><br>";
}

// 4. Permissions Check
echo "<h3>4. Directory Permissions</h3>";
$directories = ['storage', 'storage/logs', 'storage/framework/views', 'bootstrap/cache'];
foreach ($directories as $dir) {
    echo $dir . ": ";
    if (!is_dir($baseDir . '/' . $dir)) {
        echo "<span style='color:red;'>❌ Directory does not exist!</span><br>";
    } elseif (!is_writable($baseDir . '/' . $dir)) {
        echo "<span style='color:red;'>❌ Permission Denied (Not Writable)! Run: chmod -R 775 $dir</span><br>";
    } else {
        echo "<span style='color:green;'>✅ Writable</span><br>";
    }
}

// 5. Read Laravel Log files
echo "<h3>5. Last 20 lines of Laravel Error Log</h3>";
$logPath = $baseDir . '/storage/logs/laravel.log';
if (file_exists($logPath)) {
    $lines = file($logPath);
    $lastLines = array_slice($lines, -100);
    echo "<pre style='background:#f4f4f4; padding:10px; border:1px solid #ccc; overflow-x:auto;'>";
    foreach ($lastLines as $line) {
        echo htmlspecialchars($line);
    }
    echo "</pre>";
} else {
    echo "No log file found at expected path: " . $logPath . "<br>";
}

// 6. Try to manually load Laravel to catch the exact fatal error on screen
echo "<h3>6. Live Laravel Boot Test</h3>";
try {
    if (file_exists($autoloadPath)) {
        require $autoloadPath;
        $app = require_once $baseDir.'/bootstrap/app.php';
        echo "<span style='color:green;'>✅ Laravel Bootstrapped successfully in memory. If you still see 500, it's a database or route issue. Review the logs above.</span><br>";
    } else {
        echo "<span style='color:red;'>Skipping boot test because vendor/autoload.php is missing.</span><br>";
    }
} catch (\Throwable $e) {
    echo "<strong>🔴 FATAL CRASH DURING BOOT:</strong><br>";
    echo "<pre style='color:red; background:#fee; padding:10px;'>";
    echo $e->getMessage() . "\n\n";
    echo $e->getTraceAsString();
    echo "</pre>";
}

echo "<hr><p style='color:red;'><strong>Security Warning:</strong> Delete this file from your server as soon as you are done reading it!</p>";
?>
