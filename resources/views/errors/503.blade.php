<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance en cours - NMI Education</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #0d6efd;
            --primary-dark: #0a58ca;
            --secondary-color: #6c757d;
            --light-color: #f8f9fa;
            --dark-color: #212529;
            --success-color: #198754;
            --danger-color: #dc3545;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--light-color);
            color: var(--dark-color);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            line-height: 1.6;
        }
        
        .maintenance-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            text-align: center;
        }
        
        .logo-container {
            margin-bottom: 2rem;
        }
        
        .logo {
            max-width: 180px;
            height: auto;
        }
        
        .maintenance-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 3rem;
            width: 100%;
            max-width: 600px;
            position: relative;
            overflow: hidden;
        }
        
        .maintenance-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
        }
        
        .error-icon {
            font-size: 4rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }
        
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--secondary-color);
        }
        
        .error-details {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: var(--secondary-color);
        }
        
        .error-actions {
            margin-top: 1.5rem;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 50px;
            transition: all 0.3s ease;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            color: white;
            border: none;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
        
        .estimated-time {
            margin-top: 2rem;
            padding: 1rem;
            background-color: rgba(13, 110, 253, 0.1);
            border-radius: 8px;
            font-size: 0.9rem;
            color: var(--primary-dark);
        }
        
        .social-links {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--light-color);
            color: var(--primary-color);
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }
        
        .social-link:hover {
            background-color: var(--primary-color);
            color: white;
            transform: translateY(-3px);
        }
        
        footer {
            text-align: center;
            padding: 1.5rem;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .maintenance-card {
                padding: 2rem;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            h2 {
                font-size: 1.25rem;
            }
            
            .error-icon {
                font-size: 3rem;
            }
        }
        
        @media (max-width: 480px) {
            .maintenance-container {
                padding: 1rem;
            }
            
            .maintenance-card {
                padding: 1.5rem;
            }
            
            h1 {
                font-size: 1.75rem;
            }
            
            .error-details {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="maintenance-container">
        <div class="logo-container">
            <img src="{{ asset('images/logo.png') }}" alt="NMI Education Logo" class="logo">
        </div>
        
        <div class="maintenance-card">
            <div class="error-icon">
                <i class="fas fa-tools"></i>
            </div>
            
            <h1>Site en maintenance</h1>
            <h2>Nous serons bientôt de retour</h2>
            
                <div class="error-details">
                <p>Nous effectuons actuellement des améliorations sur notre site pour vous offrir une meilleure expérience.</p>
                <p>Merci de votre patience et de votre compréhension.</p>
            </div>
            
            <div class="estimated-time">
                <i class="far fa-clock"></i> Temps estimé : Quelques heures
                </div>
            
                <div class="error-actions">
                <a href="mailto:contact@nmi-education.com" class="btn btn-primary">
                    <i class="far fa-envelope"></i> Nous contacter
                    </a>
                </div>
            
            <div class="social-links">
                <a href="https://facebook.com/nmieducation" class="social-link" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/nmieducation" class="social-link" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/nmieducation" class="social-link" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/company/nmieducation" class="social-link" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </div>
    
    <footer>
        <p>&copy; {{ date('Y') }} NMI Education. Tous droits réservés.</p>
    </footer>
</body>
</html>