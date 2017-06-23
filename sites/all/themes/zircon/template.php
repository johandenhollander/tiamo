<?php
/**
 * @file
 * controls load theme.
 */

 /**
  * Alter some view classes needed for ajax stuff to work.
  */
 function zircon_preprocess_views_view(&$variables) {
   $variables['classes_array'][] = 'view-id-' . $variables['name'];
   $variables['classes_array'][] = 'view-display-id-' . $variables['display_id'];
 }

require_once drupal_get_path('theme', 'zircon') . '/inc/preprocess_functions.inc';
