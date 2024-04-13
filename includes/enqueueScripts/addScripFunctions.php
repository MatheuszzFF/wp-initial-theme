<?php
function replaceFileExtensionToDist($slug, $extension, $isMinified) {
    $dir = str_replace("php", $extension, $slug);
    if($isMinified) {
        $newDir = str_replace("page-templates", "dist/" . $extension . "/pages"  , $dir);
        return TEMPLATE_PATH . "/" . trim(str_replace("." . $extension, ".min." . $extension , $newDir));
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

function linkJsLib($lib = "") {
    if($lib) {
        $slug = replaceFileExtensionToDist("dist/js/libs/" . $lib . ".min.js", 'js', false);
        echo <<<SCRIPT
            <script src="$slug"></script>
        SCRIPT;
    }
}

function linkMainScripts() {
        $main = get_template_directory_uri() . "/dist/js/main.min.js";
        $jquery = get_template_directory_uri() . "/dist/js/libs/jquery.min.js";

        echo <<<SCRIPT
            <script src="$jquery"></script>
            <script src="$main"></script>
        SCRIPT;
}
