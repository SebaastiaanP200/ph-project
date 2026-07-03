import { Component, OnInit, inject } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, serverTimestamp, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

interface DisclaimerItem {
  disclaimer: string;
}
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, NavBar, PageTitle, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact implements OnInit {
  cTitle:string='CONTACT FORMULARY';

  private fb = inject(FormBuilder);
  private firestore = inject(Firestore);

  form!: FormGroup;
  disclaimers: DisclaimerItem[] = [];
  
  // Estado para mensajes informativos UI
  showSuccessMsg = false;
  showErrorMsg = false;

  ngOnInit() {
    this.initForm();
    this.loadDisclaimer();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{2,40}$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{2,40}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,3})?[-. ]?\(?\d{1,4}\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,4}$/)]],
      place: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s,.-]{5,50}$/)]],
      eventType: ['', Validators.required],
      date: ['', Validators.required],
      services: this.fb.array([], Validators.required), // Array dinámico para checkboxes
      term: [false, Validators.requiredTrue]
    });
  }

  // Getters auxiliares para simplificar el acceso en el HTML
  get servicesFormArray() {
    return this.form.get('services') as FormArray;
  }

  get isValidationUiActive(): boolean {
    const { eventType, place, date } = this.form.value;
    return !!(eventType && place && date && this.servicesFormArray.length > 0);
  }

  // Métodos de comportamiento UI
  onEventTypeChange() {
    this.servicesFormArray.clear(); // Resetea checkboxes al cambiar el tipo de evento
  }

  onPlaceInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const formatted = input.value
      .toLowerCase()
      .split(' ')
      .filter(word => word !== '')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    this.form.get('place')?.setValue(formatted, { emitEvent: false });
  }

  onCheckboxChange(event: Event, value: string) {
    if ((event.target as HTMLInputElement).checked) {
      this.servicesFormArray.push(new FormControl(value));
    } else {
      const index = this.servicesFormArray.controls.findIndex(x => x.value === value);
      if (index !== -1) this.servicesFormArray.removeAt(index);
    }
  }

  openCalendar(dateInput: HTMLInputElement) {
    if (dateInput.showPicker) {
      dateInput.showPicker();
    } else {
      dateInput.focus();
    }
  }

  // Firebase: Carga asíncrona del Disclaimer
  async loadDisclaimer() {
    try {
      const docRef = doc(this.firestore, 'index', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.disclaimers = docSnap.data()['disclaimer'] || [];
      }
    } catch (e) {
      console.error('Error cargando TXT:', e);
    }
  }

  // Envío a Firestore con validaciones integradas
  async onSubmit() {
    if (this.form.invalid) {
      this.triggerError('Por favor, completa los campos obligatorios o corrige los marcados en rojo.');
      return;
    }

    try {
      const rawValues = this.form.value;

      await addDoc(collection(this.firestore, 'contact'), {
        name: rawValues.name,
        lastname: rawValues.lastname,
        email: rawValues.email,
        phone: rawValues.phone,
        place: rawValues.place,
        services: rawValues.services,
        date: rawValues.date,
        term: rawValues.term,
        done: false,
        create: serverTimestamp()
      });

      this.showSuccessMsg = true;
      this.form.reset();
    } catch (error) {
      this.triggerError(typeof error === 'string' ? error : 'Error al procesar la solicitud');
    }
  }

  private triggerError(msg: string) {
    alert(msg);
    this.showErrorMsg = true;
    setTimeout(() => this.showErrorMsg = false, 4000);
  }

  // Helper para verificar el estado de validación de un campo en el HTML
  isFieldInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  isFieldValid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!(control && control.valid && (control.dirty || control.touched));
  }
}