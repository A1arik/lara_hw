@extends('layouts.acidus')


@section('title' )
{{ __("Not found") }}
@endsection

@section('description')
    <p> Мой блог </p>
@endsection



@section('content')
    <h1> 404 </h1>
    {{ $exception->getMessage()  }}

@endsection
