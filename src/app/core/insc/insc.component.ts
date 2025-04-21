import { Component } from '@angular/core';
import { InscService } from './insc.service';

@Component({
  selector: 'app-insc',
  templateUrl: './insc.component.html',
  styleUrls: ['./insc.component.css']
})
export class InscComponent {
  cin = '';

  constructor(private inscService: InscService) {}

  check() {
    if (!this.cin) {
      alert("Please enter a CIN number");
      return;
    }

    this.inscService.checkCin(this.cin).subscribe(
      (res) => {
        if (res.success) {
          if (res.exists) {
            alert("✅ CIN exists in the database.");
          } else {
            alert("❌ CIN does not exist.");
          }
        } else {
          alert("⚠️ Error: " + (res.error || 'Unknown error'));
        }
      },
      (err) => {
        alert("⚠️ Server error. Please try again later.");
        console.error(err);
      }
    );
  }
}