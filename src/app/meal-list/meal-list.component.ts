import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals = [
    { name: 'مصلي دجاج تونسي', description: 'مصلي دجاج تونسي', photoUrl: 'assets/3.jpg', videoUrl: 'https://www.youtube.com/watch?v=F_qyzYJkkxA', showVideo: false },
    { name: 'دويدة مفورة بالخضرة و الدجاج', description: 'دويدة مفورة بالخضرة و الدجاج', photoUrl: 'assets/dwida.gif', videoUrl: 'https://www.youtube.com/watch?v=I9Q6W38-Q0g', showVideo: false },
    { name: 'كسكسي تونسي', description: 'كسكسي تونسي بلحم العلوش', photoUrl: 'assets/koskous.jpg', videoUrl: 'https://www.youtube.com/watch?v=h-xgC0SzdNs', showVideo: false },
    { name: 'طاجين تونسي', description: 'أروع وصفة طاجين تونسي دجاج وجبن', photoUrl: 'assets/tajin.jpg', videoUrl: 'https://www.youtube.com/watch?v=k8LFjsfYYDk0', showVideo: false },
  ];

  ngOnInit(): void {
    
  }

  toggleVideo(meal: any) {
    meal.showVideo = !meal.showVideo;
  }
}
