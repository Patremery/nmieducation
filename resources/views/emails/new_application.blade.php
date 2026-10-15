@component('mail::message')
# Vous avez une nouvelle candidature spontanée

<h2>À propos du candidat</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Candidat</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->name }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->email }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Téléphone</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->phone }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Adresse</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->address }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Ville / Région</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->city }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Pays</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->country }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Niveau d'étude</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $application->study_level }}</td>
    </tr>
</table>

@if ($application->file)
<div style="margin-top: 20px;">
    <h3>CV:</h3>
    <p>
        <a href="{{ asset('storage/'.$application->file) }}">
            Télécharger le CV du candidat
        </a>
    </p>
</div>
@endif

@component('mail::panel')
Ce message provient du formulaire de candidature spontanée du site {{ config('app.name') }}
@endcomponent

Cordialement,<br>
L'équipe de {{ config('app.name') }}
@endcomponent
