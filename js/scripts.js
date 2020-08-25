$(document).ready(function() {

    var chk_Atento = $('#chk_Atento').val();
    var chk_Coalition = $('#chk_Coalition').val();
    var chk_MasterCenter = $('#chk_MasterCenter').val();
    var chk_PlusMetas = $('#chk_PlusMetas').val();
    var chk_PlusMetasWeb = $('#chk_PlusMetasWeb').val();
    var chk_TContacto = $('#chk_TContacto').val();
    var cod_mes = $('#cod_mes').val();
    var str= "";

    //highcharts

    $.ajax({
         method:"POST", 
         data:{
          cod_mes: 2,
          chk_Atento: chk_Atento,
          chk_Coalition: chk_Coalition,
          chk_MasterCenter: chk_MasterCenter,
          chk_PlusMetas: chk_PlusMetas,
          chk_PlusMetasWeb: chk_PlusMetasWeb,
          chk_TContacto: chk_TContacto
         },
         url: "ajax.php",
         success: function(data){
            var data = JSON.parse(data);
           //console.log(data[3].promedio);
           var chart = Highcharts.chart('container', {

                yAxis: {
                    tickInterval: 20
                },

                title: {
                    text: 'Chart.update'
                },

                subtitle: {
                    text: 'Plain'
                },

                xAxis: {
                    categories: [data[0].canales, data[1].canales, data[2].canales, data[3].canales, data[4].canales, data[5].canales]
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [(data[0].promedio)*100, (data[1].promedio)*100, (data[2].promedio)*100, (data[3].promedio)*100, (data[4].promedio)*100, (data[5].promedio)*100],
                    showInLegend: false
                }]
            });

           //Cuadro
           var total_promedio = 0; 
           if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    
                    str = str
                    +'<tr><td>'+ (i+1) + '</td>'               
                    + '<td>' + data[i].canales + '</td>';
                    var promedio = (data[i].promedio)*100;
                    if (promedio>=85) {
                        str = str + '<td nowrap="wrap" style="width:100px; background-color:#68B69C; color:white;">' + promedio + '%</td>'
                    }else{
                        str = str + '<td nowrap="wrap" style="width:100px; background-color:#EA4333; color:white;">' + promedio + '%</td>'
                    }
                    
                    str = str + '<td>' + data[i].objetivo + '</td></tr>';
                    
                    $("#datatable tbody").append(str);
                    str="";
                    total_promedio = total_promedio + promedio;
                }

                total_promedio = (Math.round(total_promedio)/data.length).toFixed(0);
                var footer = '<tr style="color: white; font-size:0.9em; border-color: white;"><td colspan="2" style="text-align: right; background-color: #428FB8;">TOTAL GENERAL</td>';

                if (total_promedio>=85) {
                        footer = footer + '<td style="background-color:#68B69C">' + total_promedio + '%</td>'
                }else{
                        footer = footer + '<td style="background-color:#EA4333">' + total_promedio + '%</td>'
                }

                footer = footer +'<td style="background-color: #428FB8;">85%</td>';
                
                $("#datatable tbody").append(footer);

            } else {
                str = '<tr><td colspan="29">No se encontraron datos.</td></tr>';
            }

         }
    });


    $('#cod_mes').change(function () {
        UpdateData();
    });

    $('input[type="checkbox"]').change(function(){
        UpdateData();
    });

    } );
        
    function ValidaSiEstaCheckeado(id, value){

        if($('#chk_'+id).prop("checked") == true){
            $('#chk_'+id).val(value);
        }
        else if($('#chk_'+id).prop("checked") == false){
            $('#chk_'+id).val('');
        }
    }

    function UpdateData(){
        var cod_mes = $('#cod_mes').val();
        var str= "";

        ValidaSiEstaCheckeado('Atento', 'Atento');
        var chk_Atento = $('#chk_Atento').val();

        
        ValidaSiEstaCheckeado('Coalition', 'Coalition');
        var chk_Coalition = $('#chk_Coalition').val();

        ValidaSiEstaCheckeado('MasterCenter', 'Master Center');
        var chk_MasterCenter = $('#chk_MasterCenter').val();


        ValidaSiEstaCheckeado('PlusMetas', 'Plus Metas');
        var chk_PlusMetas = $('#chk_PlusMetas').val();


        ValidaSiEstaCheckeado('PlusMetasWeb', 'Plus.Metas Web');
        var chk_PlusMetasWeb = $('#chk_PlusMetasWeb').val();


        ValidaSiEstaCheckeado('TContacto', 'T-Contacto');
        var chk_TContacto = $('#chk_TContacto').val();

        var nuevadata = [];
        var nuevascategorias = [];

        $.ajax({
         method:"POST",
         data:{
          cod_mes: cod_mes,
          chk_Atento: chk_Atento,
          chk_Coalition: chk_Coalition,
          chk_MasterCenter: chk_MasterCenter,
          chk_PlusMetas: chk_PlusMetas,
          chk_PlusMetasWeb: chk_PlusMetasWeb,
          chk_TContacto: chk_TContacto
        },
         url: "ajax.php",
         success: function(data){
            var data = JSON.parse(data);
            var size = data.length-1;
            console.log(size);
            for(i=0; i<=size; i++){
                nuevadata.push((data[i].promedio)*100);
                nuevascategorias.push(data[i].canales)
            }
            Highcharts.charts.forEach((chart) => {
                chart.series[0].update({
                      data: nuevadata
                    }, false, false, false);
                chart.xAxis[0].update({categories:nuevascategorias}, true);
                    chart.redraw();
                });

               //Cuadro
               var total_promedio = 0; 
               if (data.length > 0) {
                    $("#datatable tbody").html('');
                    for (var i = 0; i < data.length; i++) {
                        
                        str = str
                        +'<tr><td>'+ (i+1) + '</td>'               
                        + '<td>' + data[i].canales + '</td>';
                        var promedio = (data[i].promedio)*100;
                        if (promedio>=85) {
                            str = str + '<td nowrap="wrap" style="width:100px; background-color:#68B69C; color:white;">' + promedio + '%</td>'
                        }else{
                            str = str + '<td nowrap="wrap" style="width:100px; background-color:#EA4333; color:white;">' + promedio + '%</td>'
                        }
                        
                        str = str + '<td>' + data[i].objetivo + '</td></tr>';
                        
                        $("#datatable tbody").append(str);
                        str="";
                        total_promedio = total_promedio + promedio;
                    }

                    total_promedio = Math.round((total_promedio)/data.length).toFixed(0);
                    var footer = '<tr style="color: white; font-size:0.9em; border-color: white;"><td colspan="2" style="text-align: right; background-color: #428FB8;">TOTAL GENERAL</td>';

                    if (total_promedio>=85) {
                            footer = footer + '<td style="background-color:#68B69C">' + total_promedio + '%</td>'
                    }else{
                            footer = footer + '<td style="background-color:#EA4333">' + total_promedio + '%</td>'
                    }

                    footer = footer +'<td style="background-color: #428FB8;">85%</td>';
                    
                    $("#datatable tbody").append(footer);

                } else {
                    str = '<tr><td colspan="29">No se encontraron datos.</td></tr>';
                }
            }
        });
    }

    //Para la exportación de Excel
    function fnExcelReport(name_btn,name_table) {
              var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
              tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
              tab_text = tab_text + '<x:Name>Hoja1</x:Name>';
              tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
              tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
              tab_text = tab_text + "<table border='1px'>";
               tab_text = tab_text + "<tr><td style='text-align:center; font-size:16px; font-weight: bold;' colspan='4'>CUMPLIMIENTO DE OBJETIVOS</td></tr>";
              tab_text = tab_text + "<tr><td style='text-align:center; font-size:16px; font-weight: bold;' colspan='4'></td></tr>";
              tab_text = tab_text + $(name_table).html();
              tab_text = tab_text + '</table></body></html>';
              var data_type = 'data:application/vnd.ms-excel';
              var ua = window.navigator.userAgent;
              var msie = ua.indexOf("MSIE ");
              if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                  if (window.navigator.msSaveBlob) {
                      var blob = new Blob([tab_text], {
                          type: "application/csv;charset=ISO-8859-1;"
                      });
                      navigator.msSaveBlob(blob, 'CUMPLIMIENTO DE OBJETIVOS.xls');
                  }
              } else {
                //alert("Completado");
                $(name_btn).attr('href', data_type + ', ' + escape(tab_text));
                $(name_btn).attr('download', 'CUMPLIMIENTO DE OBJETIVOS.xls');
              }
    }

    //fUNCIONES DEL TEMPLATE

    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);
