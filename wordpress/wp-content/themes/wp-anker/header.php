<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/img/favicon1.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/system.base.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/system.menus.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/system.messages.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/system.theme.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/simplenews.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/field.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/node.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/user.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/views.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/beeshop_admin.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/beeshop.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/beeshop_product.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/colorbox_style.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/ctools.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/owl.carousel.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/yandex_metrics.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/select2_integration.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/select2.css" media="all">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/sweetalert2.min.css" media="all">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header class="clearfix">
    <div class="header-top clearfix">
      <div class="sheet-wrapper">
        <div class="region region-header-blocks">
          <section id="block-block-4" class="block block-block">
            <div class="content">
              <a href="#" class="material-icons mobile-menu-controll mobile-menu-toggle-button">menu</a> </div>
          </section>
          <section id="block-block-6" class="block block-block">
            <div class="content">
              <ul id="lang-links" class="links menu">
                <li hreflang="ru" class="ru">
                  <a href="/" class="language-link is-active" hreflang="ru" data-url="/">Rus</a>
                </li>
                <li hreflang="en" class="en">
                  <a href="#english-version" class="language-link" hreflang="en" data-url="/">Eng</a>
                </li>
              </ul>
            </div>
          </section>
          <section id="block-system-main-menu" class="block block-system block-menu">
            <div class="content">
            <?php wpeHeadNav(); ?>
              <ul class="menu">
                <li class="first expanded mlid-3517"><a href="#shop" title="">Магазин</a>
                  <ul class="menu">
                    <li class="first expanded mlid-3534"><a href="#shop/wear" title="">Одежда</a>
                      <ul class="menu">
                        <li class="first leaf mlid-3535"><a href="#shop/shirts" title="">Рубашки</a></li>
                        <li class="leaf mlid-3536"><a href="#shop/sweatshirts" title="">Свитшоты</a></li>
                        <li class="leaf mlid-3537"><a href="#shop/hoodies" title="">Худи</a></li>
                        <li class="leaf mlid-3538"><a href="#shop/sweaters" title="">Свитера</a></li>
                        <li class="leaf mlid-3561"><a href="#shop/pants" title="">Штаны</a></li>
                        <li class="leaf mlid-3562"><a href="#shop/shorts" title="">Шорты</a></li>
                        <li class="leaf mlid-3563"><a href="#shop/caps" title="">Кепки</a></li>
                        <li class="leaf mlid-3564"><a href="#shop/hats" title="">Шапки</a></li>
                        <li class="leaf mlid-3565"><a href="#shop/t-shirts" title="">Футболки</a></li>
                        <li class="last leaf mlid-3566"><a href="#shop/boarshorts" title="">Бордшорты</a></li>
                      </ul>
                    </li>
                    <li class="leaf mlid-2989"><a href="#shop/sale" title="">SALE</a></li>
                    <li class="leaf mlid-3531"><a href="#shop/wetsuits" title="">Гидрокостюмы</a></li>
                    <li class="leaf mlid-3532"><a href="#shop/surfboards" title="">Серфборды</a></li>
                    <li class="last leaf mlid-3533"><a href="#shop/skateboards" title="">Скейтборды</a></li>
                  </ul>
                </li>
                <li class="leaf mlid-3615"><a href="#live" title="">Лайфстайл</a></li>
                <li class="leaf mlid-243"><a href="#" class="active">Главная</a></li>
                <li class="leaf mlid-2999"><a href="#lookbook/wear-2017" title="">Lookbook</a></li>
                <li class="last leaf mlid-1262"><a href="#about">О нас</a></li>
              </ul>
            </div>
          </section>
          <section id="block-menu-menu-header-ext-menu" class="block block-menu">
            <div class="content">
              <nav>
                <ul class="menu">
                  <li class="first leaf mlid-3000"><a href="#shop/favorits-products" title="">Избранное</a></li>
                  <li class="leaf mlid-3001"><a href="#user" title="">Login/Register</a></li>
                  <li class="leaf mlid-2881"><a href="#delivery" title="">Условия доставки</a></li>
                  <li class="leaf mlid-2882"><a href="#contacts" title="">Контакты</a></li>
                  <li class="last leaf mlid-3002"><a href="#shop/cart" title="">Cart</a></li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </div>
  </header>


