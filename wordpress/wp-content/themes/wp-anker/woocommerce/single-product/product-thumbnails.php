<?php
/**
 * Single Product Thumbnails
 * */ ?>

<?php
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

global $post, $product, $woocommerce;
$attachment_ids = $product->get_gallery_attachment_ids();

if ( $attachment_ids ) {
  $loop     = 0;
  $columns  = apply_filters( 'woocommerce_product_thumbnails_columns', 3 );
  ?>
  <?php

    foreach ( $attachment_ids as $attachment_id ) {
      $classes = array( 'zoom' );

      if ( $loop === 0 || $loop % $columns === 0 ) {
        $classes[] = 'first';
      }

      if ( ( $loop + 1 ) % $columns === 0 ) {
        $classes[] = 'last';
      }

      $image_class = implode( ' ', $classes );
      $props       = wc_get_product_attachment_props( $attachment_id, $post );

      if ( ! $props['url'] ) {
        continue;
      }

      echo apply_filters(
        'woocommerce_single_product_image_thumbnail_html',
        sprintf(

          '<li id="thumbnail_">
            <a href="%s" data-fancybox-group="other-views" class="%s fancybox " title="%s" data-rel="prettyPhoto[product-gallery]">%s</a>
          </li>',
          esc_url( $props['url'] ),
          esc_attr( $image_class ),
          esc_attr( $props['caption'] ),
          wp_get_attachment_image( $attachment_id, /*apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ),*/ 0, $props )
        ),
        $attachment_id,
        $post->ID,
        esc_attr( $image_class )
      );

      $loop++;
    }

  ?>
  <?php
} ?>


