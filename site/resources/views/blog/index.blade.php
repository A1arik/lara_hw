@extends('layouts.acidus')


@section('title' )
{{ $title ?? "ПУ 811" }} * {{ config('app.name', 'Laravel Это круто') }}
@endsection

@section('description')
    <p> Мой блог </p>
@endsection



@section('content')

    @foreach( $posts as $post)
        <!-- Our Exceptional Solutions -->
        <div class="col-sm-4 sm-margin-b-50">
            <div class="margin-b-20">
                <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                    <img class="img-responsive" src="{{ \TCG\Voyager\Facades\Voyager::image($post->thumbnail('cropped')) }}" alt="{{ $post->title }}">
                </div>
            </div>
            <h3><a href="#">{{ $post->title }}</a> </h3>
            <p>{{ $post->excerpt }}</p>
            <a class="link" href="{{route('blog.show', $post->slug)}}">{{__("Read More")}}</a>

        </div>
        <!-- End Our Exceptional Solutions -->
    @endforeach

@endsection
