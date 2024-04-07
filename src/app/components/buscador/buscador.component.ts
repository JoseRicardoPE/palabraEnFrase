import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  searcherForm!: FormGroup;
  showMessage: boolean = false;
  counter = 0;
  inputsInteraction: boolean = false;

  constructor(private fb: FormBuilder) {
    this.searcherForm = fb.group({
      inputText: ['', Validators.required],
      inputWord: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  searchWordPhrase() {
    if (this.searcherForm.valid) {
      const phrase = this.searcherForm.value.inputText.toLowerCase().trim().replace(/[.,¡!¿?'()-]/gi, '');
      // console.log(text);
      const wordToSearch = this.searcherForm.value.inputWord.toLowerCase().trim().replace(/[.,¡!¿?'()-]/gi, '');
      const wordInPhrase = phrase.split(' ');
      this.counter = wordInPhrase.filter((word: any) => word === wordToSearch).length;
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

  resetInput() {
    this.searcherForm.reset();
    this.showMessage = false;
    this.counter = 0;
    this.inputsInteraction = false;
  }

  checkInputsInteraction() {
    this.inputsInteraction = true;
  }

}
