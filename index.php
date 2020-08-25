<!DOCTYPE html>
<html lang="es-PE">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Prueba 1 Oscar Martín Merino Dávila" />
        <meta name="author" content="Oscar Martín Merino Dávila">
        <title>Dashboard - SB Admin</title>
        <link href="css/styles.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Admin</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="form-group">
                              <div class="sb-sidenav-menu-heading">Año:</div>
                              <select class="form-control" id="cod_anho">
                                <option value="2020">2020</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <div class="sb-sidenav-menu-heading">Mes:</div>
                              <select class="form-control" id="cod_mes">
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                              </select>
                            </div>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Desarrollador:</div>
                        Oscar Martín Merino Dávila
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                         <div class="container-fluid" style="margin-top: 50px;">                            
                            <div class="row text-center">
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_Atento" type="checkbox" class="vis-hidden new-post-tags" value="Atento" name="Atento" checked/>
                                        <label for="chk_Atento">Atento</label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_Coalition" type="checkbox" class="vis-hidden new-post-tags" value="Coalition" checked/>
                                        <label for="chk_Coalition">Coalition</label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_MasterCenter" type="checkbox" class="vis-hidden new-post-tags" value="Master Center" checked />
                                        <label for="chk_MasterCenter">Master Center</label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_PlusMetas" type="checkbox" class="vis-hidden new-post-tags" value="Plus Metas" checked/>
                                        <label for="chk_PlusMetas">Plus Metas</label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_PlusMetasWeb" type="checkbox" class="vis-hidden new-post-tags" value="Plus.Metas Web" checked/>
                                        <label for="chk_PlusMetasWeb">Plus Metas Web</label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <input id="chk_TContacto" type="checkbox" class="vis-hidden new-post-tags" value="T-Contacto" checked/>
                                        <label for="chk_TContacto">T Contacto</label>
                                    </div>
                                </div>
                            </div> 

                            <div class="row text-center" style="margin-top: 30px;">
                                <div class="col-sm-12 col-md-8 col-lg-8">
                                    <figure class="highcharts-figure">
                                        <div id="container"></div>
                                    </figure>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-4" style=" overflow-x: auto;">
                                    <div class="">
                                        <a type="button" href="#" onClick="javascript:fnExcelReport('#btn_export_excel','#datatable');" style="font-size: 12px; float: right;"  class="btn btn-success" id="btn_export_excel">
                                             <span><i class="fa fa-file-excel"></i></span>   Descargar Excel
                                        </a>
                                    </div>
                                    <table id="datatable" class="table table-striped table-hover" style="width:100%">
                                        <thead>
                                            <tr style="color: white; font-style: bold;">
                                                <th colspan="4" style="background-color: #125387;">CUMPLIMIENTO DE OBJETIVOS</th>
                                            </tr>
                                            <tr style="color: white; font-size:0.8em; border-color: white">
                                                <th style="background-color: #428FB8;">Item</th>
                                                <th style="background-color: #428FB8;">Canales</th>
                                                <th style="background-color: #428FB8;" nowrap="nowrap">Cumplimiento (%)</th>
                                                <th style="background-color: #428FB8;" nowrap="nowrap">Objetivo (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/highcharts-more.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    </body>
</html>
