@component('mail::message')
# Téléchargement de votre document

Bonjour {{ $user->name }},

Nous vous remercions pour votre intérêt pour nos publications. Vous avez demandé le téléchargement du document intitulé **{{ $book->title }}**.

Veuillez trouver ce document en pièce jointe à cet email.

@component('mail::panel')
Si vous avez des questions concernant ce document ou si vous souhaitez obtenir plus d'informations sur nos publications, n'hésitez pas à nous contacter.
@endcomponent

@component('mail::button', ['url' => config('app.url'), 'color' => 'primary'])
Découvrir plus de livres
@endcomponent

Cordialement,<br>
L'équipe de {{ config('app.name') }}

@component('mail::subcopy')
Ce message vous a été envoyé suite à votre demande de téléchargement sur notre site. Si vous n'êtes pas à l'origine de cette demande, veuillez ignorer cet email.
@endcomponent
@endcomponent
