@extends('layouts.acidus')


@section('title' )
{{ __("Dump") }}
@endsection

@section('description')
    <p> Dump data </p>
@endsection



@section('content')
    <h1> Dump </h1>
    <pre>
        {{ var_dump($data) }}
    </pre>

@endsection
