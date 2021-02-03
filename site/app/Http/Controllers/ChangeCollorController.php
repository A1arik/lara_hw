<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChangeCollorController extends Controller
{
    /**
     * Построить форму для выбора цвета
     */
    public function buildForm(){
        // "имя_папки . название файла", массив с данными, которые нужно вывести
        // если папки нет - ничего не пишем. То же, если не передаем данные
        return view('change_colors.request_form');
    }

    /**
     * Построить страницу с выбранным цветом
     * @param Request $request
     */
    public function setColor(Request $request){
        // var_dump($request);
        // Строим массив, что бы внутри view можно было обратиться к полям
        // по именам ключей
        return view('change_colors.response', ['color' => $request->color]);
    }
}
