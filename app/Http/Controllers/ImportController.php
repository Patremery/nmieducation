<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use App\Services\WordpressImporterService;

class ImportController extends Controller
{
    protected $wordpressImporter;

    public function __construct(WordpressImporterService $wordpressImporter)
    {
        $this->wordpressImporter = $wordpressImporter;
    }

    public function import()
    {
        $this->wordpressImporter->importPosts();
        return response()->json(['message' => 'Posts imported successfully!']);
    }
}
