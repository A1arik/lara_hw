@extends('layouts.acidus')


@section('title' )
{{ $title ?? "Портфолио" }} * {{ config('app.name', 'Laravel Это круто') }}
@endsection

@section('description')
    <p> Портфолио  </p>
@endsection



@section('content')

    @foreach( $portfolios as $portfolio)
        <!-- Our Exceptional Solutions -->
        <div class="col-sm-4 sm-margin-b-50">
            <h3><a href="#">{{ $portfolio->name }}</a></h3>
            <p><a href="{{route('showPortfolioCategory', $portfolio->portfolio_category["slug"])}}">
                    {{$portfolio->portfolio_category["name"] }}
                </a></p>
            <pre>
                {{ var_dump($portfolio) }}
            </pre>
        </div>
        <!-- End Our Exceptional Solutions -->
    @endforeach

@endsection
