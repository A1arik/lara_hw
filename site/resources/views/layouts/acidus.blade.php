<!DOCTYPE html>
<!-- ==============================
    Project:        Metronic "Acidus" Frontend Freebie - Responsive HTML Template Based On Twitter Bootstrap 3.3.4
    Version:        1.0
    Author:         KeenThemes
    Primary use:    Corporate, Business Themes.
    Email:          support@keenthemes.com
    Follow:         http://www.twitter.com/keenthemes
    Like:           http://www.facebook.com/keenthemes
    Website:        http://www.keenthemes.com
    Premium:        Premium Metronic Admin Theme: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
================================== -->
<html lang="en" class="no-js">
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8"/>
    <title>{{ $title ?? "ПВ 811" }} * {{ config('app.name', 'Laravel Это круто') }}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>

    <!-- GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet" type="text/css">
    <link href="/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css"/>

    <!-- THEME STYLES -->
    <link href="/css/layout.min.css" rel="stylesheet" type="text/css"/>

    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico"/>
</head>
<!-- END HEAD -->

<body>


<!--========== HEADER ==========-->
<header class="header navbar-fixed-top">
    <!-- Navbar -->
    <nav class="navbar" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="menu-container">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="toggle-icon"></span>
                </button>

                <!-- Logo -->
                <div class="logo">
                    <a class="logo-wrap" href="/">
                        <img class="logo-img logo-img-main" src="/img/logo.png" alt="Asentus Logo">
                        <img class="logo-img logo-img-active" src="/img/logo-dark.png" alt="Asentus Logo">
                    </a>
                </div>
                <!-- End Logo -->
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse nav-collapse">
                <div class="menu-container">
                    <ul class="navbar-nav navbar-nav-right">

                        @if (Route::has('login'))

                                @auth
                                    <li class="nav-item"><a href="{{ url('/home') }}" class="nav-item-child nav-item-hover">{{ Auth::user()->name }}</a></li>
                                    <li class="nav-item">
                                        <form action="{{route('logout')}}" method="post">@csrf
                                            <input type="submit"  class="nav-item-child nav-item-hover" style="background-color: transparent; border: none;" value="Выйти">
                                        </form>
                                    </li>
                                @else
                                    <li class="nav-item"><a href="{{ route('login') }}" class="nav-item-child nav-item-hover">Login</a></li>
                                    @if (Route::has('register'))
                                        <li class="nav-item"><a href="{{ route('register') }}" class="nav-item-child nav-item-hover">Register</a></li>
                                    @endif
                                @endauth

                        @endif

                        <!--
                            <li class="nav-item"><a class="nav-item-child nav-item-hover" href="/colors"> Плохой метод установки маршрута </a></li>
                            -->

                        @if (Route::has('colors.index'))
                                <li class="nav-item"><a class="nav-item-child nav-item-hover" href="{{ route('colors.index') }}">Colors</a></li>
                        @endif
                        @if (Route::has('blog.index'))
                                <li class="nav-item"><a class="nav-item-child nav-item-hover" href="{{ route('blog.index') }}">{{__("Blog") }}</a></li>
                        @endif
                        @if (Route::has('portfolio.index'))
                                <li class="nav-item"><a class="nav-item-child nav-item-hover" href="{{ route('portfolio.index') }}">{{__("Portfolio") }}</a></li>
                        @endif
                        @if (Route::has('product.index'))
                                <li class="nav-item"><a class="nav-item-child nav-item-hover" href="{{ route('product.index') }}">{{__("Shop") }}</a></li>
                        @endif





                        <!--
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="pricing.html">Pricing</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover active" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="products.html">Products</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="faq.html">FAQ</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="contact.html">Contact</a></li>
                        -->
                    </ul>
                </div>
            </div>
            <!-- End Navbar Collapse -->
        </div>
    </nav>
    <!-- Navbar -->
</header>
<!--========== END HEADER ==========-->

<!--========== PARALLAX ==========-->
<div class="parallax-window" data-parallax="scroll" data-image-src="/img/1920x1080/01.jpg">
    <div class="parallax-content container">
        <h1 class="carousel-title">@yield('title')</h1>
        <p>@yield('description')</p>
    </div>
</div>
<!--========== PARALLAX ==========-->


<!--========== PAGE LAYOUT ==========-->
<!-- Features -->
<div class="content-lg container">
    <div class="row margin-b-20">
@yield('content')
    </div>
</div>




<!--========== FOOTER ==========-->
<footer class="footer">
    <!-- Links -->
    <div class="footer-seperator">
        <div class="content-lg container">
            <div class="row">
                <div class="col-sm-2 sm-margin-b-50">
                    <!-- List -->
                    <ul class="list-unstyled footer-list">
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Home</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">About</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Products</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Pricing</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Clients</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Careers</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Contact</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Terms</a></li>
                    </ul>
                    <!-- End List -->
                </div>
                <div class="col-sm-4 sm-margin-b-30">
                    <!-- List -->
                    <ul class="list-unstyled footer-list">
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Twitter</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Facebook</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">Instagram</a></li>
                        <li class="footer-list-item"><a class="footer-list-link" href="#">YouTube</a></li>
                    </ul>
                    <!-- End List -->
                </div>
                <div class="col-sm-5 sm-margin-b-30">
                    <h2 class="color-white">Send Us A Note</h2>
                    <input type="text" class="form-control footer-input margin-b-20" placeholder="Name" required>
                    <input type="email" class="form-control footer-input margin-b-20" placeholder="Email" required>
                    <input type="text" class="form-control footer-input margin-b-20" placeholder="Phone" required>
                    <textarea class="form-control footer-input margin-b-30" rows="6" placeholder="Message" required></textarea>
                    <button type="submit" class="btn-theme btn-theme-sm btn-base-bg text-uppercase">Submit</button>
                </div>
            </div>
            <!--// end row -->
        </div>
    </div>
    <!-- End Links -->

    <!-- Copyright -->
    <div class="content container">
        <div class="row">
            <div class="col-xs-6">
                <img class="footer-logo" src="img/logo.png" alt="Asentus Logo">
            </div>
            <div class="col-xs-6 text-right">
                <p class="margin-b-0"><a class="color-base fweight-700" href="http://keenthemes.com/preview/asentus/">Asentus</a> Theme Powered by: <a class="color-base fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a></p>
            </div>
        </div>
        <!--// end row -->
    </div>
    <!-- End Copyright -->
</footer>
<!--========== END FOOTER ==========-->

<!-- Back To Top -->
<a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

<!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- CORE PLUGINS -->
<script src="/vendor/jquery.min.js" type="text/javascript"></script>
<script src="/vendor/jquery-migrate.min.js" type="text/javascript"></script>
<script src="/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

<!-- PAGE LEVEL PLUGINS -->
<script src="/vendor/jquery.easing.js" type="text/javascript"></script>
<script src="/vendor/jquery.back-to-top.js" type="text/javascript"></script>
<script src="/vendor/jquery.smooth-scroll.js" type="text/javascript"></script>
<script src="/vendor/jquery.wow.min.js" type="text/javascript"></script>
<script src="/vendor/jquery.parallax.min.js" type="text/javascript"></script>
<script src="/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>

<!-- PAGE LEVEL SCRIPTS -->
<script src="/js/layout.min.js" type="text/javascript"></script>
<script src="/js/components/swiper.min.js" type="text/javascript"></script>
<script src="/js/components/wow.min.js" type="text/javascript"></script>

</body>
<!-- END BODY -->
</html>
