<?php
function replaceFileExtensionToDist($slug, $extension, $isMinified) {
    $dir = str_replace("php", $extension, $slug);
    if($isMinified) {
        $newDir = str_replace("page-templates", "dist/" . $extension . "/pages"  , $dir);
        return TEMPLATE_PATH . "/" . trim(str_replace("." . $extension, ".bundle." . $extension , $newDir));
    }
    return TEMPLATE_PATH . "/" . str_replace("page-templates", "dist/" . $extension . "/" , $dir);
}

function linkPageJs($type = "template") {
    if($type == "template") {
        $slug = replaceFileExtensionToDist(get_page_template_slug(), 'js', true);
        echo <<<SCRIPT
            <script src="$slug"></script>
        SCRIPT;
    }
}
