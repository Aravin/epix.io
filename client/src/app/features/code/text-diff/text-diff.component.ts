import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-text-diff',
  templateUrl: './text-diff.component.html',
  styleUrls: ['./text-diff.component.scss']
})
export class TextDiffComponent implements OnInit {

  isBrowser: boolean;

  editorLeft: any;
  editorRight: any;
  editorLeftResult: any;
  editorRightResult: any;
  isIdentical = false;
  showResult = false;
  leftTextCache: any;
  rightTextCache: any;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      // local storage
      this.leftTextCache = JSON.parse(localStorage?.getItem('epix-text-left'));
      this.rightTextCache = JSON.parse(localStorage?.getItem('epix-text-right'));

      const ace = require('ace-builds');

      this.editorLeft = ace.edit('left-diff');
      this.editorLeft.session.setOptions({wrap: 'free'});
      this.editorLeft.setValue(this.leftTextCache || 'Paste one version of a text here.');

      this.editorRight = ace.edit('right-diff');
      this.editorRight.session.setOptions({wrap: 'free'});
      this.editorRight.setValue(this.rightTextCache || 'Paste another version of the text here.');
    }
  }

  compareText() {
    this.removeNotification();
    const leftText = this.editorLeft.getValue();
    const rightText = this.editorRight.getValue();
    if (leftText === rightText) {
      this.isIdentical = true;
      this.showResult = false;
    }

    this.showResult = true;
    localStorage?.setItem('epix-text-left', JSON.stringify(leftText));
    localStorage?.setItem('epix-text-right', JSON.stringify(rightText));

    setTimeout(() => {

      const monaco = require('monaco-editor');

      const originalModel = monaco.editor.createModel(leftText, 'text/plain');
      const modifiedModel = monaco.editor.createModel(rightText, 'text/plain');

      const diffEditor = monaco.editor.createDiffEditor(document.getElementById('diff-result'), {
        // You can optionally disable the resizing
        enableSplitViewResizing: true,
      });
      diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel
      });

    }, 100);
  }

  removeNotification() {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
  }

}
