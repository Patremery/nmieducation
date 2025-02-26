<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class DownloadBookEmail extends Mailable
{
    use Queueable, SerializesModels;
    public $user, $book;

    /**
     * Create a new message instance.
     */
    public function __construct($user, $book)
    {
        $this->user = $user;
        $this->book = $book;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Votre document : ' . $this->book->title,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.download-book',
            with: [
                'user' => $this->user,
                'book' => $this->book,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        if (!$this->book->file) {
            return [];
        }
        
        return [
            Attachment::fromPath(storage_path('app/public/' . $this->book->file))
                ->as($this->book->title . '.pdf')
                ->withMime('application/pdf'),
        ];
    }
}
