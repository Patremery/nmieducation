<?php
/**
 * Script to completely delete specific folders on the server root.
 * Upload this to /web/public/ and access it via https://nmieducation.com/delete-folders.php
 */

echo "<h3>🗑️ Beginning Folder Deletion</h3>";

// The base directory is one level up from public/ (i.e., /web/)
$baseDir = realpath(__DIR__ . '/..');

$foldersToDelete = [
    'node_modules'
];

foreach ($foldersToDelete as $folderName) {
    $folderPath = $baseDir . DIRECTORY_SEPARATOR . $folderName;
    
    echo "Checking for <strong>$folderName</strong> at <code>$folderPath</code>...<br>";

    if (is_dir($folderPath)) {
        // Native PHP Recursive Delete (Bypasses system() restrictions)
        $it = new RecursiveDirectoryIterator($folderPath, RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        
        $success = true;
        foreach($files as $file) {
            if ($file->isDir()) {
                if (!@rmdir($file->getRealPath())) $success = false;
            } else {
                if (!@unlink($file->getRealPath())) $success = false;
            }
        }
        
        if (!@rmdir($folderPath)) {
            $success = false;
        }
        
        if ($success && !is_dir($folderPath)) {
            echo "<span style='color:green;'>✅ Successfully deleted: $folderName</span><br><br>";
        } else {
            echo "<span style='color:red;'>❌ Failed to delete: $folderName</span><br>";
            echo "<small style='color:orange;'>Permission issue: PHP might be running as an unprivileged user or the files have strict permissions. You may need to use your hosting panel's File Manager instead.</small><br><br>";
        }
    } else {
        echo "<span style='color:gray;'>⏭️ Directory not found or already deleted: $folderName</span><br><br>";
    }
}

echo "<hr><p style='color:red;'><strong>Security Warning:</strong> Deletion attempt complete. Please delete this <code>delete-folders.php</code> file from your server now!</p>";
?>
