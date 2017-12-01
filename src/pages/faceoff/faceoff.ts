import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api.service/api.service';

@IonicPage()
@Component({
  selector: 'page-faceoff',
  templateUrl: 'faceoff.html'
})
export class FaceoffPage {
  profiles;
  correctProfile;
  profilesForQuestion;
  correctAnswers = 0;
  answeredQuestions = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiServiceProvider: ApiServiceProvider
  ) {}

  async ionViewDidLoad() {
    this.profiles = await this.apiServiceProvider.getProfiles();
    this.newFaceoffQuestion();
  }

  newFaceoffQuestion() {
    this.profilesForQuestion = this.getUniqueProfiles(4);
    this.correctProfile = this.profilesForQuestion[0];
    this.shuffleArray(this.profilesForQuestion);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  answer(profile) {
    var that = this;
    if (this.correctProfile.id === profile.id) {
      this.correctAnswers++;
      profile.buttonColor = 'correctAnswer';
    } else {
      profile.buttonColor = 'incorrectAnswer';
    }
    that.answeredQuestions++;
    setTimeout(function() {
      that.newFaceoffQuestion();
    }, 1500);
  }

  getUniqueProfiles(numberOfProfiles) {
    var tmp = this.profiles.slice(this.profiles);
    var ret = [];

    for (var i = 0; i < numberOfProfiles; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      removed[0].buttonColor = 'primary';
      ret.push(removed[0]);
    }
    return ret;
  }
}
