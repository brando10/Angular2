import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "This is the Description paramtypes",
      file_url: 'http://google.com',
      updated_at: '11/11/17',
      image_url: 'http://google.com'
    },
    {
      title: "My Second Doc",
      description: "This is the Second Description paramtypes",
      file_url: 'http://google.com',
      updated_at: '11/11/17',
      image_url: 'http://google.com'
    }
  ]
}
