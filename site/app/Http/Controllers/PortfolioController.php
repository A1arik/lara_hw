<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Portfolio_Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class PortfolioController extends Controller
{
    public function index() {
        // dd(Portfolio::all());
        if (Cache::has('portfolio.index')) {
            $portfolios = Cache::get('portfolio.index');
        } else {
            $portfolios = Portfolio::all();
            Cache::put('portfolio.index', $portfolios, 60);
        }

        return view ('portfolio.index', ['portfolios' => $portfolios]);
    }

    public function byCategory($slug){
        //$data = Portfolio_Category::where('slug', $slug)->with('portfolios')->get();
        //dd($data);
        return view('portfolio.category',
            ['category' => Portfolio_Category::where('slug', $slug)->with('portfolios')->firstOrFail()]);
    }

    public function byQuery(): string
    {
        // Обращение по средствам модели
        // будет построен запрос select * from `portfolios`
        // $portfolio = Portfolio::all();

        // Обращение по средствам конструктора запросов
        // будет построен запрос select * from `portfolios`
        // $portfolio = DB::table('portfolios')->get();

        // Директива WHERE
        // $portfolio = DB::table('portfolios')->where('id' , 1)->get();

        // Одно значение
        // $portfolio = DB::table('portfolios')->where('id' , 1)->value('name');

        // Колонка(и)
        // $portfolio = DB::table('portfolios')->pluck('name','id');

        // Управление SELECT
        // $portfolio = DB::table('portfolios')->select('id as number', 'name')->get();

        // Агрегирующие функции
        // $portfolio = DB::table('portfolios')->count();

        // Сложный WHERE
        // $portfolio = DB::table('portfolios')->where('id' , '<>' ,1)->get();

        // WHERE по двум (и более) колонкам
        /*
        $portfolio = DB::table('portfolios')
            ->where([
                ['id' , '<>' ,1],
                ['slug', 'NOT LIKE', '%gg%']
            ])->get();
        */

        /*
        $portfolio = DB::table('portfolios')
            ->where('id' , '<>' ,1)
            ->where('slug', '<>' , 'gg')->get();
        */

        /*
        $portfolio = DB::table('portfolios');
        $portfolio = $portfolio->where('id' , '<>' ,1);
        $portfolio = $portfolio->where('slug', 'NOT LIKE' , 'gg');
        $portfolio = $portfolio->orderBy('name');
        $portfolio = $portfolio->get();
        */


        /*
        $portfolio = DB::table('portfolios')->orderBy('name')
            ->where('id' , '<>' ,1)
            ->orWhere('slug', '<>' , 'gg')
            ->whereIn('id', [1,2])
            ->whereBetween('id', [0,10])
            ->get();
        */


        /*
        $portfolio = DB::table('portfolios')
            ->where([
                ['id' , '<>', 'внешняя логика'],
                ['slug', '<>', 'логика первая']

            ]) // Один (первый) набор условий
            ->where(function ($query){ // Второй набор условий
                $query->orWhere('slug', '<>', 'внутренняя логика первая');
                $query->orWhere('id', '<>', 1);
            })
            ->where(function ($query){ // Второй набор условий
                $query->orWhere('slug', '<>', 'внутренняя логика вторая');
                $query->orWhere('id', '<>', 1);
            })
            ->get();
        */

        /*
        $portfolio = DB::table('testtables')
            ->where(function ($query){
                $query->where('first', 1)->where('second', '>', 100);
            })
            ->orWhere(function ($query){
                $query->where('first', 2)->where('second', '<', 100);
            })
            ->get();

        */

        // JOIN

         $portfolio = DB::table('portfolios')
            ->join('portfolio__categories', 'portfolio__categories.id', '=', 'portfolios.portfolio_category_id')
            ->get();



        // Pagination

        // $portfolio = DB::table('portfolios')->skip(0)->take(1)->get();
        // $portfolio = DB::table('portfolios')->offset(1)->limit(1)->get();




        return $portfolio ;
    }
}
