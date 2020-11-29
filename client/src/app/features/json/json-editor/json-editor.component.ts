import { Component, OnInit } from '@angular/core';
import * as jsoneditor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
})
export class JsonEditorComponent implements OnInit {

  jsonEditorOptions = {
    modes: ['code', 'text', 'tree', 'preview']
  };
  json = {};
  editor: jsoneditor;
  editorResult: jsoneditor;
  jsonCache: any;
  jsonPreviewCache: any;

  constructor() { }

  ngOnInit(): void {
    // create the editor
    this.json = {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: { a: 'b', c: 'd' },
      String: 'Hello World'
    };

    const container = document.getElementById('jsoneditor');
    this.editor = new jsoneditor(container, this.jsonEditorOptions);
    this.jsonCache = JSON.parse(localStorage?.getItem('epix-json'));
    this.editor.set(this.jsonCache || this.json);

    const containerResult = document.getElementById('jsoneditorResult');
    this.editorResult = new jsoneditor(containerResult, this.jsonEditorOptions);
    this.jsonPreviewCache = JSON.parse(localStorage?.getItem('epix-json-preview'));
    this.editorResult.set(this.jsonPreviewCache || this.json);
  }

  private getJSON(): string {
    return this.editor.get();
  }

  private getJSONPreview(): string {
    return this.editorResult.get();
  }

  setJSON(): void {
    const jsonPreview = this.getJSONPreview();
    if (jsonPreview) {
      localStorage?.setItem('epix-json-preview', JSON.stringify(jsonPreview));
      this.editor.set(jsonPreview);
    }
  }

  setJSONPreview(): void {
    const json = this.getJSON();

    if (json) {
      localStorage?.setItem('epix-json', JSON.stringify(json));
      this.editorResult.set(this.getJSON());
    }
  }

}
