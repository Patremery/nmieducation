@component('mail::message')
# Nouveau message de contact

<h2>Nouveau message de contact </h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Nom</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $contact->name }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $contact->email }}</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Téléphone</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $contact->phone }}</td>
    </tr>
    <tr>
        <th style="padding: 10px; text-align: left; width: 30%; border: 1px solid #ddd;">Sujet</th>
        <td style="padding: 10px; border: 1px solid #ddd;">{{ $contact->subject }}</td>
    </tr>
</table>

<div style="margin-top: 20px;">
    <h3>Message:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd; white-space: pre-wrap;">
        {{ $contact->message }}
    </div>
</div>

Cordialement,<br>
L'équipe de {{ config('app.name') }}

@component('mail::subcopy')
ce message provient d'un formulaire de contact sur le site {{ config('app.name') }}
@endcomponent
@endcomponent
