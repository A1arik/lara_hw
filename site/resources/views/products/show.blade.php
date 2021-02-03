@extends('layouts.acidus')


@section('title' )
{{ $post["title"] ?? "ПУ 811" }} * {{ config('app.name', 'Laravel Это круто') }}
@endsection

@section('description')
    <p> Мой блог </p>
@endsection



@section('content')

    {{ $post["title"] }}

    <p> Category ID {{ $post["category_id"] }}</p>

    {{ $someVal }}

@endsection
