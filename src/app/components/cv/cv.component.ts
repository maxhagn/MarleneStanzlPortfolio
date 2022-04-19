import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personalData: any =
    [
      {year: "Geburtstag", text: "30.01.2001"},
      {year: "Geburtsort", text: "Wien, Österreich"},
      {year: "Staatsbürgerschaft", text: "Österreich"},
    ];

  education: any =
    [
      {year: "09/2020 - Folgende", text: "Universität Wien <br> Studienrichtung Rechtswissenschaften"},
      {year: "09/2015 - 5/2020", text: "Handelsakademie Donaustadt, 1220 Wien <br> Schwerpunkt International"},
      {year: "09/2011 - 06/2015", text: "AHS Heustadelgasse, 1220 Wien"},
    ];

  workExperience: any =
    [
      {year: "04/2018 - Folgende", text: "Studentischer Mitarbeiter, Teilzeit (20 Wochenstunden) <br> Kanzlei Mag. Michael Stanzl"},
    ];
  languages: any =
    [
      {language: "Deutsch", level: "Muttersprache"},
      {language: "Englisch", level: "B2"},
      {language: "Französisch", level: "B1"},
    ];



  constructor() { }

  ngOnInit(): void {
  }

}
