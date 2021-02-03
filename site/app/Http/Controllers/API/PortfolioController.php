<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Cache::has('portfolio.api.index')) {
            $portfolios = Cache::get('portfolio.api.index');
        } else {
            $portfolios = Portfolio::with('portfolio_category')->get();
            Cache::put('portfolio.index', $portfolios, 600);
        }
        return $portfolios;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        // $portfolios = Portfolio::with('portfolio_category')->where(id, $id)->get();
        if (Cache::has('portfolio.api.show.' . $id)) {
            $portfolios = Cache::get('portfolio.api.show.' . $id);
        } else {
            $portfolios = Portfolio::with('portfolio_category')->where('id', $id)->get();
            Cache::put('portfolio.api.show.' . $id, $portfolios, 600);
        }
        return $portfolios;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
