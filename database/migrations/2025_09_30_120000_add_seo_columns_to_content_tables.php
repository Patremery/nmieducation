<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Per-record SEO overrides.
 *
 * Every column is optional: when left empty the SEO service falls back to the
 * record's own content (title, summary, featured image, ...).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('sub_title')->nullable()->after('title');
            $table->string('meta_title')->nullable()->after('sub_title');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->string('meta_og_image')->nullable()->after('meta_description');
            $table->string('focus_keyword')->nullable()->after('meta_og_image');
        });

        Schema::table('books', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->after('title');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->string('meta_og_image')->nullable()->after('meta_description');
            $table->string('focus_keyword')->nullable()->after('meta_og_image');
        });

        Schema::table('authors', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->after('name');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->string('meta_og_image')->nullable()->after('meta_description');
            $table->string('focus_keyword')->nullable()->after('meta_og_image');
        });
    }

    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn(['sub_title', 'meta_title', 'meta_description', 'meta_og_image', 'focus_keyword']);
        });

        Schema::table('books', function (Blueprint $table) {
            $table->dropColumn(['meta_title', 'meta_description', 'meta_og_image', 'focus_keyword']);
        });

        Schema::table('authors', function (Blueprint $table) {
            $table->dropColumn(['meta_title', 'meta_description', 'meta_og_image', 'focus_keyword']);
        });
    }
};
