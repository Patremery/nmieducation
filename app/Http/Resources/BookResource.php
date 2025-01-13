<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author->name ?? 'NMI Education',
            'category' => $this->category->code ?? 'Uncategorized',
            'price' => $this->price,
            'images' => $this->images ?? [],
            'new' => $this->new ? 'Yes' : 'No',
            'support' => $this->support,
            'pages' => $this->pages,
            'collection' => $this->collection->name ?? 'No Collection',
            'publicationDate' => $this->publication_date,
            'language' => $this->language->name ?? 'Unknown Language',
            'youscribe_url' => $this->youscribe_url,
            'amazon_url' => $this->amazon_url,
            'lq_url' => $this->lq_url,
            'adinkra_url' => $this->adinkra_url,
            'isbn' => $this->ISBN,
            'description' => strip_tags($this->description),
            'cover' => asset($this->featured_image),
            'summary' => $this->summary,
            'themes' => $this->themes ?? [],
            'audience' => $this->audience,
        ];
    }
}

