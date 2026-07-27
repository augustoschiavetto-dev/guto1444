<?php
// ==========================================
// CONFIGURAÇÃO DO CADASTRO DE EMISSÁRIOS (GUTO 1444)
// ==========================================

// 1. Emails para onde serão enviados os dados dos cadastros
$to_emails = [
    "guto@gutoschiavetto.com.br",
    "augustoschiavetto@gmail.com"
];

// 2. URL do Web App do Google Apps Script (opcional, se quiser tentar ativar no futuro)
$google_sheets_url = ""; 

// Habilitar CORS para testes locais e cabeçalhos JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obter dados do POST
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        $input = $_POST;
    }
    
    $name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
    $email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
    $city = isset($input['city']) ? strip_tags(trim($input['city'])) : '';
    
    if (empty($name) || empty($email) || empty($phone) || empty($city)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Todos os campos obrigatórios devem ser preenchidos."]);
        exit;
    }
    
    // --- 1. ENVIO POR EMAIL ---
    $subject = "=?UTF-8?B?" . base64_encode("Novo Emissário Cadastrado: $name") . "?=";
    $message = "Você tem um novo emissário cadastrado na landing page:\n\n";
    $message .= "Nome Completo: $name\n";
    $message .= "E-mail: $email\n";
    $message .= "WhatsApp / Telefone: $phone\n";
    $message .= "Cidade / Estado: $city\n\n";
    $message .= "Data/Hora do Cadastro: " . date("d/m/Y H:i:s") . "\n";
    
    $headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $email_sent = false;
    foreach ($to_emails as $recipient) {
        $recipient = trim($recipient);
        if (!empty($recipient) && filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
            if (@mail($recipient, $subject, $message, $headers)) {
                $email_sent = true;
            }
        }
    }
    
    // --- 2. SALVAR EM PLANILHA CSV LOCAL (SEGURO E 100% COMPATÍVEL EXCEL/GOOGLE SHEETS) ---
    $csv_file = __DIR__ . '/leads.csv';
    $file_exists = file_exists($csv_file);
    
    $fp = fopen($csv_file, 'a');
    $csv_saved = false;
    if ($fp) {
        // Se o arquivo for novo, adiciona o cabeçalho UTF-8 (BOM) para abrir com acentuação correta no Excel
        if (!$file_exists) {
            fprintf($fp, chr(0xEF).chr(0xBB).chr(0xBF));
            fputcsv($fp, ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Cidade/Estado'], ';');
        }
        fputcsv($fp, [date("d/m/Y H:i:s"), $name, $email, $phone, $city], ';');
        fclose($fp);
        $csv_saved = true;
    }
    
    // --- 3. INTEGRAÇÃO OPCIONAL GOOGLE SHEETS (SE ATIVAR NO FUTURO) ---
    $sheets_success = false;
    if (!empty($google_sheets_url)) {
        $post_data = json_encode([
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "city" => $city,
            "timestamp" => date("Y-m-d H:i:s")
        ]);
        
        $ch = curl_init($google_sheets_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($http_code === 200 || $http_code === 201) {
            $sheets_success = true;
        }
    }
    
    echo json_encode([
        "status" => "success",
        "message" => "Cadastro processado.",
        "email_sent" => $email_sent,
        "csv_saved" => $csv_saved,
        "sheets_integrated" => $sheets_success
    ]);
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>
