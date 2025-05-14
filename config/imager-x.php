<?php

use craft\helpers\App;

return [
    'cacheDuration' => false,
    'cacheDurationRemoteFiles' => false,
    'cacheEnabled' => true,
    'imagerSystemPath' => Craft::getAlias('@webroot') . '/cache/imager/',
    'imagerUrl' => Craft::getAlias('@web') . '/cache/imager/',
    'transformer' => App::env('IMAGER_TRANSFORMER') ?: 'craft',
];
