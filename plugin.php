<?php
/**
 * Plugin Name: Loremtext Block
 * Plugin URI: https://github.com/indralukmana/loremtext-block
 * Description: A plugin adding a Gutenberg block generating 'lorem ipsum' texts
 * Author: indralukmana
 * Author URI: https://www.indralukmana.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package loremtext-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
