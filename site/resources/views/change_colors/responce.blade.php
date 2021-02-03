@extends('layouts.acidus')

@section('title')
    Ваш цвет {{$color}}
@endsection


@section('content')
    <div class="row"
         style="padding: 10px; margin: 10px;
         background-color: {{$color}}
             ">
        {{$color}}
    </div>
@endsection
