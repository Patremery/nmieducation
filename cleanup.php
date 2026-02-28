<?php
echo "<h3>Starting .htaccess Cleanup...</h3>";

$baseDir = __DIR__;
// These are the only two .htaccess files that SHOULD exist
$allowed_htaccess = [
    $baseDir . '/.htaccess',
    $baseDir . '/public/.htaccess'
];

$deleted_count = 0;

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($baseDir, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
);

foreach ($iterator as $file) {
    if ($file->isFile() && $file->getFilename() === '.htaccess') {
        $path = $file->getRealPath();
        
        // If it's not the root .htaccess and not the public/.htaccess, DELETE IT
        if (!in_array($path, $allowed_htaccess)) {
            if (unlink($path)) {
                echo "<span style='color:green;'>Deleted: " . $path . "</span><br>";
                $deleted_count++;
            } else {
                echo "<span style='color:red;'>Failed to delete: " . $path . "</span><br>";
            }
        }
    }
}

echo "<br><strong>Cleanup complete! Removed $deleted_count rogue .htaccess files.</strong>";
echo "<br><br><span style='color:red;'>Make sure to delete this cleanup.php file from the server now!</span>";
?>
