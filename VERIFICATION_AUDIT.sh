#!/bin/bash
# 🧪 Script de Vérification Post-Audit
# Utilisation: bash VERIFICATION_AUDIT.sh

echo "🔍 Vérification Post-Audit - Publication d'Articles"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour vérifier un fichier
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} Fichier trouvé: $1"
        return 0
    else
        echo -e "${RED}✗${NC} Fichier manquant: $1"
        return 1
    fi
}

# Fonction pour vérifier du texte dans un fichier
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} Contenu trouvé dans: $1"
        return 0
    else
        echo -e "${RED}✗${NC} Contenu manquant dans: $1"
        return 1
    fi
}

echo "📋 1. Vérification des Migrations"
echo "---"
check_file "database/migrations/2026_07_02_000001_fix_posts_table_structure.php"
check_file "database/migrations/2026_07_02_000002_fix_pivot_table.php"
check_file "database/migrations/2026_07_02_000003_fix_tags_polymorphic_relationship.php"
echo ""

echo "🔧 2. Vérification des Observateurs"
echo "---"
check_file "app/Observers/PostObserver.php"
check_content "app/Providers/AppServiceProvider.php" "PostObserver"
echo ""

echo "🏗️  3. Vérification des Modèles"
echo "---"
check_content "app/Models/Post.php" "author().*BelongsTo"
check_content "app/Models/Post.php" "getContentAttribute"
check_content "app/Models/Post.php" "protected \$casts"
echo ""

echo "🎨 4. Vérification du Formulaire Filament"
echo "---"
check_content "app/Filament/Resources/PostsResource.php" "featured_image"
check_content "app/Filament/Resources/PostsResource.php" "description"
check_content "app/Filament/Resources/PostsResource.php" "ordering"
echo ""

echo "🧪 5. Vérification des Tests"
echo "---"
check_file "tests/Feature/PostPublishingTest.php"
check_content "tests/Feature/PostPublishingTest.php" "can_create_published_post"
echo ""

echo "🏭 6. Vérification des Factories"
echo "---"
check_content "database/factories/postsFactory.php" "featured_image"
check_content "database/factories/blog_categoriesFactory.php" "name"
check_content "database/factories/tagsFactory.php" "name"
echo ""

echo "📚 7. Vérification de la Documentation"
echo "---"
check_file "ARTICLE_PUBLISHING_FIX.md"
check_file "AUDIT_ARTICLES_COMPLET.md"
echo ""

echo "=================================================="
echo "🚀 Prochaines Étapes:"
echo "---"
echo "1. php artisan migrate"
echo "2. php artisan test tests/Feature/PostPublishingTest.php"
echo "3. Tester création article dans Filament"
echo "4. Vérifier visibilité sur /blog"
echo ""
