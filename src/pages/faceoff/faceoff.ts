import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';

@IonicPage()
@Component({
  selector: 'page-faceoff',
  templateUrl: 'faceoff.html'
})
export class FaceoffPage {
  profiles: Profile[];
  correctProfile: Profile;
  profilesForQuestion: Profile[];
  correctAnswers: number;
  answeredQuestions: number;
  showSolidButton: boolean;
  totalQuestions = 10;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {}

  async ionViewDidLoad() {
    this.profiles = await this.profileService.getProfilesWithPhotos();
    this.startNewGame();
  }

  startNewGame() {
    this.correctAnswers = 0;
    this.answeredQuestions = 0;
    this.newFaceoffQuestion();
  }

  newFaceoffQuestion(): void {
    this.profilesForQuestion = this.getUniqueProfiles(4);
    this.correctProfile = this.profilesForQuestion[0];
    this.shuffleArray(this.profilesForQuestion);
  }

  shuffleArray(array): void {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  answer(profile): void {
    if (this.correctProfile.id === profile.id) {
      this.correctAnswers++;
      this.highlightAnswerButton(profile, true);
    } else {
      this.highlightAnswerButton(profile, false);
      let correctProfile = this.profilesForQuestion.find(p => {
        return p.id == this.correctProfile.id;
      });
      this.highlightAnswerButton(correctProfile, true);
    }
    this.answeredQuestions++;
    setTimeout(() => {
      this.advanceGame();
    }, 1800);
  }

  advanceGame() {
    if (this.answeredQuestions < this.totalQuestions) {
      this.newFaceoffQuestion();
    }
  }

  getUniqueProfiles(numberOfProfiles) {
    const profilesCopy = this.profiles.map(x => Object.assign({}, x));
    let profilesForQuestion = Array<Profile>();
    for (let i = 0; i < numberOfProfiles; i++) {
      const index = Math.floor(Math.random() * profilesCopy.length);
      let removed = profilesCopy.splice(index, 1);
      removed[0].buttonColor = 'primary';
      removed[0].showSolidButton = false;
      profilesForQuestion.push(removed[0]);
    }
    return profilesForQuestion;
  }

  private highlightAnswerButton(profile: Profile, isCorrect: boolean) {
    profile.showSolidButton = true;
    if (isCorrect) {
      profile.buttonColor = 'correctAnswer';
    } else {
      profile.buttonColor = 'incorrectAnswer';
    }
  }
}
