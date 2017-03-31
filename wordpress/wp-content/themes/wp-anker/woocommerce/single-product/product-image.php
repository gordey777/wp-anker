<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.6.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $post, $product; ?>

  <div id="image-block" class="clearfix">
    <div class="conditions-box">
      <p class="new">New</p>
    </div>
      <span id="view_full_size">
      <?php if ( has_post_thumbnail()) : ?>
        <img src="<?php echo get_the_post_thumbnail_url( '', 'full' ); ?>" id="bigpic" itemprop="image" title="<?php the_title(); ?>" alt="<?php the_title(); ?>">
        <span class="span_link no-print"></span>
      <?php else:?>
        <?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<img src="%s" alt="%s" />', wc_placeholder_img_src(), __( 'Placeholder', 'woocommerce' ) ), $post->ID ); ?>
      <?php endif; ?>
    </span>
  </div><!-- .image-block -->
  <div id="views_block" class="clearfix">
    <div id="thumbs_list">
      <ul id="thumbs_list_frame">
        <?php if ( has_post_thumbnail()) : ?>
          <li id="thumbnail_">
           <a href="<?php echo get_the_post_thumbnail_url( '', 'full' ); ?>" data-fancybox-group="other-views" class="fancybox " data-rel="prettyPhoto[product-gallery]">
            <img src="<?php echo get_the_post_thumbnail_url( '', 'full' ); ?>" id="bigpic" itemprop="image" title="<?php the_title(); ?>" alt="<?php the_title(); ?>">
          </a>
         </li>
        <?php else:?>
        <?php endif; ?>

        <?php do_action( 'woocommerce_product_thumbnails' ); ?>
      </ul>
      <div class="owl-controls">
        <div class="owl-nav">
          <div class="owl-prev"><i class="icon-angle-downn"></i></div>
          <div class="owl-next"><i class="icon-angle-upp"></i></div>
        </div>
      </div>
    </div>
  </div><!-- .views_block -->


