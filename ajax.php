<?php   
    include('connection/config.php');
    
    $cod_mes = $_POST['cod_mes'];
    $chk_Atento = $_POST['chk_Atento'];
    $chk_Coalition = $_POST['chk_Coalition'];
    $chk_MasterCenter = $_POST['chk_MasterCenter'];
    $chk_PlusMetas = $_POST['chk_PlusMetas'];
    $chk_PlusMetasWeb = $_POST['chk_PlusMetasWeb'];
    $chk_TContacto = $_POST['chk_TContacto'];

    $sqlRequest = "SELECT canales, ROUND(AVG(IND_251), 2) as promedio, '85%' as objetivo from tb_resultados_659334_e where cod_anho = 2020 and cod_mes = '$cod_mes' and canales IN ('$chk_Atento', '$chk_Coalition', '$chk_MasterCenter', '$chk_PlusMetas', '$chk_PlusMetasWeb', '$chk_TContacto') group by canales order by promedio DESC"; 
    $result = mysqli_query($link, $sqlRequest); //save result
    $registros = $result->num_rows;

    while ($row = $result->fetch_assoc()) {

        $data[] = $row;
    }
        echo json_encode($data);

?>