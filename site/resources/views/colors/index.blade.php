@extends('layouts.acidus')


@section('title',  $title )

@section('description')
    <p> Создавать шаблоны легко</p>
@endsection

@section('mainmenu')
    @parent
    <nav>
        <ul>
            <li> Все цвета</li>
            <li> Добавить цвет </li>
        </ul>
    </nav>
@endsection


@section('content')
    <ul>
        @foreach( $colors as $color)
            <li style="background-image: url('https://www.toyota.nikolaev.ua/storage/{{$color->image}}')" title="{{$color->name}}">
            </li>
        @endforeach
    </ul>
@endsection
