import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.scss']
})
export class CountryCapitalComponent implements OnInit {
  @Input() data: any = {};
  countries: string[] = [];
  capitals: string[] = [];
  selectedCountry: any = null;
  selectedCapital: any = null;
  gameOver: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.countries = Object.keys(this.data);
    this.capitals = Object.values(this.data);
    this.shuffleArray(this.countries);
    this.shuffleArray(this.capitals);
  }

  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onSelectCountry(country: any) {
    this.checkButtonStatus();
    this.selectedCountry = country;
    const countryButton = document.getElementById(country);
    if (countryButton) {
      countryButton.style.backgroundColor = '#0000FF';
    }

    if (this.selectedCapital != null && this.data[this.selectedCountry] == this.selectedCapital) {
      this.removeButtons()
    }
    else if (this.selectedCapital != null && this.data[this.selectedCountry] != this.selectedCapital) {
      const capitalButton = document.getElementById(this.selectedCapital);

      if (capitalButton) {
        capitalButton.style.backgroundColor = '#ff0000';
      }
      if (countryButton) {
        countryButton.style.backgroundColor = '#ff0000';
      }
    }
  }

  setWrongAnswer() {
    const capitalButton = document.getElementById(this.selectedCapital);
    const countryButton = document.getElementById(this.selectedCountry);

    if (capitalButton && countryButton) {
      capitalButton.style.backgroundColor = '#ff0000';
      countryButton.style.backgroundColor = '#ff0000';
    }
  }

  onSelectCapital(capital: any) {
    this.checkButtonStatus()
    this.selectedCapital = capital;
    const capitalButton = document.getElementById(capital);
    if (capitalButton) {
      capitalButton.style.backgroundColor = '#0000FF';
    }
    if (this.selectedCountry != null && this.data[this.selectedCountry] == this.selectedCapital) {
      this.removeButtons()
    }
    else if (this.selectedCountry != null && this.data[this.selectedCountry] != this.selectedCapital) {
      if (capitalButton) {
        capitalButton.style.backgroundColor = '#ff0000';
      }
      const countryButton = document.getElementById(this.selectedCountry);
      if (countryButton) {
        countryButton.style.backgroundColor = '#ff0000';
      }

    }
  }

  checkButtonStatus() {
    if (this.selectedCountry != null && this.selectedCapital != null) {
      const selectedCountryButton = document.getElementById(this.selectedCountry);
      const selectedCapitalButton = document.getElementById(this.selectedCapital);

      if (selectedCountryButton && selectedCapitalButton) {
        selectedCountryButton.style.backgroundColor = '';
        selectedCapitalButton.style.backgroundColor = '';
      }
      this.selectedCountry = null;
      this.selectedCapital = null;
    }
  }

  removeButtons() {
    const countryIndex = this.countries.indexOf(this.selectedCountry);
    const capitalIndex = this.capitals.indexOf(this.selectedCapital);
    this.countries.splice(countryIndex, 1);
    this.capitals.splice(capitalIndex, 1);
    this.selectedCapital = null;
    this.selectedCountry = null;
    this.checkGameStatus();
  }

  checkGameStatus() {
    if (this.countries.length == 0 && this.capitals.length == 0) {
      this.gameOver = true;
    }
  }

}
