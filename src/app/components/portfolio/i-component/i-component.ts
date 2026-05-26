import { Component, OnInit, Input, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

export interface PortfolioImage {
  id?: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-i-component',
  imports: [],
  templateUrl: './i-component.html',
  styleUrl: './i-component.scss',
})

export class iComponent implements OnInit {
  // Inyectamos el servicio de Firestore que configuramos en app.config.ts
  private firestore = inject(Firestore);

  // En vez de leer el 'body', Angular recibe la clave de la sección por aquí
  // Ejemplo de uso: <app-individual-portfolio portfolioKey="wedding"></app-individual-portfolio>
  @Input() portfolioKey: string = '';

  images: PortfolioImage[] = [];
  isLoading: boolean = true;

  async ngOnInit() {
    // Fallback por si te olvidaste de pasar la clave (reemplaza tu chequeo del dataset)
    if (!this.portfolioKey) {
      console.warn("No hay portfolioKey definido en el componente");
      this.isLoading = false;
      return;
    }

    await this.loadPortfolio();
  }

  async loadPortfolio() {
    try {
      // Reemplaza tu getDocData("index", "main")
      const docRef = doc(this.firestore, 'index', 'main');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Accedemos dinámicamente a la sección usando la clave del @Input
        const section = data['portfolio']?.[this.portfolioKey];

        if (section && section.images) {
          this.images = section.images;
        } else {
          console.warn(`Portfolio "${this.portfolioKey}" no encontrado o no tiene imágenes`);
        }
      } else {
        console.warn("El documento index/main no existe en Firestore");
      }
    } catch (error) {
      console.error("Error cargando el portfolio individual:", error);
    } finally {
      // Apagamos el estado de carga pase lo que pase
      this.isLoading = false;
    }
  }
}