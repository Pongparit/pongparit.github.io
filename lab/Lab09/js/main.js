function clickReward(element) {
    //  callfunction in vm
    vm.getReward(element);
}

// custom modal
Vue.component('modal',{
  template: `
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-card animated flipInX">
          <slot></slot>
        </div>
      </div>
    </transition>`
});

//  create vue
var vm = new Vue({
  el: '#vue-app',
  data: {
          players: [],
          rewards: [],
          allrandoms: [],
          isPlayerCreate: false,
          isShowHistory: false,
          isStart: false,
          isEnd: false,
          isRewardOpen: false,
          indexPlayer: 0,
          rewardCurrentName: "",
          rewardCurrentSrc: "",
          formPlayer: {
              firstname: '',
              lastname: '',
          }
        },
  methods: {
    submitPlayer: function() {
      if(this.formPlayer.firstname.length > 0 && this.formPlayer.lastname.length > 0) {
            this.players.push({
              firstname: this.formPlayer.firstname,
              lastname: this.formPlayer.lastname,
              haveReward: false,
              rewardId: -1
            });
            this.clearFormPlayer();
            this.isPlayerCreate =! this.isPlayerCreate;
          }
    },
    clearFormPlayer: function() {
      this.formPlayer.firstname = '';
      this.formPlayer.lastname = '';
    },
    submitStart: function() {
      this.isStart =! this.isStart;
      if(this.isStart){
        this.addEmptyRewards();
        var amount = this.players.length;
        for (var i = 0; i < amount; i++) {
           var randomElement = Math.floor(Math.random() * this.rewards.length);
           this.allrandoms.push(this.rewards[randomElement]);
           this.rewards.splice(randomElement, 1);
           var img = $('<img id="imgreward-' + i + '">');
           img.attr('src', 'img/unopen.jpg');
           img.attr('width', '240');
           img.attr('height', '135');
           img.attr('style', 'border:1px solid white;margin-right:6px;');
           img.attr('onmouseover', 'this.src="img/unopen-hover.jpg"');
           img.attr('onmouseout', 'this.src="img/unopen.jpg"');
           img.attr('onclick', 'clickReward(this)');
           img.appendTo('#drawing-lots');
        }
        $("#startBtn").attr('style', 'display: none');
    }
    },
    addEmptyRewards: function() {
      if (this.players.length > 13){
        for (var i = 0; i < this.players.length - 13; i++) {
          this.rewards.push({
            "name":"Nothing",
            "img" :"img/reward/nothing-pic.jpg"
          })
        }
      }
    },
    getReward: function(el) {
      var idReward = el.id.substring(10);
      this.rewardCurrentName = this.allrandoms[idReward].name;
      this.rewardCurrentSrc = this.allrandoms[idReward].img;
      el.src = this.rewardCurrentSrc;
      el.removeAttribute("onmouseover");
      el.removeAttribute("onmouseout");
      el.removeAttribute("onclick");
      this.players[this.indexPlayer].haveReward = true;
      this.players[this.indexPlayer].rewardId = idReward;
      this.isRewardOpen = true;

      // to next player
      if(this.indexPlayer >= this.players.length-1){
        this.endOfGame();
      }
      if(this.indexPlayer < this.players.length-1){
        this.indexPlayer++;
      }
    },
    endOfGame: function() {
      this.isStart = ! this.isStart;
      this.isEnd = ! this.isEnd;
      console.log("end ja");
    },
    getRewardName: function(el) {
      return this.allrandoms[el].name;
    },
    reload: function() {
      location.reload();
    }
  },

  computed: {
    canStart: function() {
      if (this.players.length >= 5 ){
        return true;
      }
      else {
        return false;
      }
    },
    currentPlayer: function() {
        return this.players[this.indexPlayer].firstname + " " + this.players[this.indexPlayer].lastname ;
    },
    beforeStart: function() {
      return !this.isStart && !this.isEnd;
    }
  },
  filters: {
    isNothing: function(value) {
      if(value == 'Nothing') {
        return '-';
      }
      return value;
    }
  },
  mounted: function () {
        $.ajax({
            url: 'reward.config.json',
            method: 'GET',
            context: this,
            success: function (data) {
                this.rewards = data;
            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        });

        // this.players.push({
        //   firstname: 'Pongparit',
        //   lastname: 'Paocharoen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Pont',
        //   lastname: 'Paocroen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Pongrit',
        //   lastname: 'Paochen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Poit',
        //   lastname: 'Paocroen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        //  })
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // }),
        // this.players.push({
        //   firstname: 'Prit',
        //   lastname: 'Paocen',
        //   haveReward: false,
        //   rewardId: -1
        // })
    }
});
