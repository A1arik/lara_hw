@extends('layouts.acidus')


@section('title' )
    {{$category->name}}
@endsection

@section('description')
    <p> Продукты категории  </p>
@endsection



@section('content')



    @foreach( $category->products as $product)
        <!-- Our Exceptional Solutions -->
        <div class="col-sm-4 sm-margin-b-50">
            <h3><a href="#">{{ $product->name }}</a></h3>
            <ul>
                @foreach($product->categories as $category)
                    <li>
                        <a href="{{route('product.category', $category->slug)}}">
                            {{$category->name}}
                        </a>
                    </li>
                @endforeach
            </ul>
            <p><a href="#">
                </a></p>
            <pre>
                {{ var_dump($product->category ) }}
            </pre>
        </div>
        <!-- End Our Exceptional Solutions -->
    @endforeach

@endsection
