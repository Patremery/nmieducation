<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'author' => $this->author?->name ?? 'NMI Education',
            //'author' => (new AuthorResource($this->author))->toArray(request()),
            'title' => $this->title,
            'category' => $this->category->code,
            'price' => $this->price,
            'images' => $this->images ?? [],
            'new' => $this->new ? 'Yes' : 'No',
            'support' => $this->support,
            'pages' => $this->pages,
            'collection' => CollectionResource::make($this->collection),
            'publicationDate' => $this->publication_date,
            'language' => $this->language->name,
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
            'file' => url($this->file),
        ];
    }
}

