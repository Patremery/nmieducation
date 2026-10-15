@component('mail::message')
# Vous avez une nouvelle soumission de manuscrit

<h2>À propos du manuscrit</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Auteur</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->name }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->email }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Téléphone</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->phone }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Adresse</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->address }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Ville / Région</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->city }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Pays</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->country }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Titre de l'ouvrage</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->title }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Genre</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $manuscrit->category }}</td>
    </tr>
</table>

@if ($manuscrit->summary)
<div style="margin-top: 20px;">
    <h3>Résumé:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd; white-space: pre-wrap;">
        {{ $manuscrit->summary }}
    </div>
</div>
@endif

@if ($manuscrit->file)
<div style="margin-top: 20px;">
    <h3>Manuscrit:</h3>
    <p>
        <a href="{{ asset('storage/'.$manuscrit->file) }}">
            Télécharger le manuscrit
        </a>
    </p>
</div>
@endif

@component('mail::panel')
Ce message provient du formulaire de soumission de manuscrit du site {{ config('app.name') }}
@endcomponent

Cordialement,<br>
L'équipe de {{ config('app.name') }}
@endcomponent
