WarmUp = new Array("Basic Step", "Jumping Jacks", "V Step", "Butt Kicks", "High Knees");
Strength = new Array("Push Ups", "Plank", "Wall Sit", "Lunge", "Pike Up", "Mountain Climbers", "Burpees", "Side Plank Right", "Side Plank Left");
CoolDown = new Array("Abdominal Crunch", "Wall Sit", "Squats", "Pilate Squats", "Right Side Kick", "Left Side Kick", "Jab Hook");

index = 0;
function musicVideo(source, hasPlayed){
	this.source = source;
	this.hasPlayed = hasPlayed;
}
MusicVideos = new Array();
MusicVideos[index++] = new musicVideo("./Videos/Sneaker Pimps - Spin Spin Sugar.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/LCD Soundsystem - Daft Punk Is Playing At My House.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Alanis Morissette - Head Over Feet (MTV Unplugged) (HD).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Avril Lavigne - Sk8er Boi.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/DEF LEPPARD - 'Pour Some Sugar On Me' (Official Music Video).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Cleanin' Out My Closet.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Love The Way You Lie ft. Rihanna.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Rap God (Explicit).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Sing For The Moment.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Superman (Clean Version).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - The Monster (Explicit) ft. Rihanna.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - When I'm Gone.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Eminem - Without Me.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Fiona Apple - Not About Love.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Fiona Apple - Shadowboxer LIVE HD (2012) Los Angeles Greek Theatre.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Fiona Apple - Sleep To Dream (LIVE).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Florence   The Machine - Breath Of Life.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Florence + The Machine - Dog Days Are Over (2010 Version).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Goo Goo Dolls - 'Name' [Official Video].mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Gwen Stefani - Hollaback Girl (Dirty Version).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Heavy In Your Arms (LIVE from Bonnaroo, 2011).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Jimmy Eat World - The Middle.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/LCD Soundsystem - Drunk Girls.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/LCD Soundsystem - Losing My Edge.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Lorde - Buzzcut Season (Live On Letterman).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Lorde - Royals (US Version).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Lorde - Team.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Lorde - Tennis Court.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Lousy Reputation.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Mumford and Sons - Little Lion Man.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/The Postal Service - We Will Become Silhouettes (OFFICIAL VIDEO).mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Train - Drops of Jupiter.mp4", false);
MusicVideos[index++] = new musicVideo("./Videos/Weezer - Say It Ain't So.mp4", false);

var index = 0;
Motivation = new Array();
Motivation[index++] = "Your legs are not giving out. Your head is giving up. Keep going.";
Motivation[index++] = "Losing weight is hard, maintaing weight is hard, staying fat is hard; Choose your hard.";
Motivation[index++] = "The only thing that stands between you and what you want out of life is the will to try & faith to believe it's possible";
Motivation[index++] = "You must do the thing you think you cannot do.";
Motivation[index++] = "your workouts are important meetings you scheduled with yourself. bosses don't cancel";
Motivation[index++] = "You have to expect things of yourself before you can do them";
Motivation[index++] = "Some quit due to slow progress. never grasping the fact that slow progress... is progress";
Motivation[index++] = "Attitude is the difference between an ordeal and an adventure";
Motivation[index++] = "Every accomplishment starts with the decision to try.";
Motivation[index++] = "we are what we repeatedly do. excellence, then is not an action, but a habit";
Motivation[index++] = "be the girl you were too lazy to be yesterday";
Motivation[index++] = "success isn't an action it's a thinking";
Motivation[index++] = "don't compare yourself to others. compare yourself to the persion from yesterday";
Motivation[index++] = "change takes time. give it time.";
Motivation[index++] = "If anything is worth doing, do it with all your heart.";

function pickNewVideo(){
	var video = document.getElementById("Music");
	// pick a random video but no repeats
	var randomMusic=Math.floor(Math.random()*MusicVideos.length)
	var nextVideo = MusicVideos[randomMusic];
	console.log("played video " + nextVideo.source + " hasPlayed " + nextVideo.hasPlayed);
	while(nextVideo.hasPlayed){
		randomMusic=Math.floor(Math.random()*MusicVideos.length)
		nextVideo = MusicVideos[randomMusic];
	}
	video.src = nextVideo.source;
	nextVideo.hasPlayed = true;
	MusicVideos[randomMusic] = nextVideo;
}

var updateMotivation = setInterval(function(){
	var randomSaying=Math.floor(Math.random()*Motivation.length)
	var motivationalPhrase = Motivation[randomSaying];
	document.getElementById("Motivation").innerHTML = motivationalPhrase;
},75000);

var previousExercise = "Basic Step";
var nextExercise = setInterval(function(){
	// pick what kind of exercise based on the time
	var current_time = new Date().getTime();
	var seconds_left = (current_time - start) / 1000;
	seconds_left = seconds_left % 3600;		 
	var minutes = parseInt(seconds_left / 60);
	console.log("previous " + previousExercise);
	var exercise = previousExercise;
	if (exercise === previousExercise){
		console.log("before exericse: " + exercise + " previous: " + previousExercise);
	}
	if (minutes < 5){
		var drill=Math.floor(Math.random()*WarmUp.length)
		exercise = WarmUp[drill];
		while (exercise === previousExercise){
			drill=Math.floor(Math.random()*WarmUp.length)
			exercise = WarmUp[drill];
		}			
	}else if (minutes > 12){
		var drill=Math.floor(Math.random()*CoolDown.length)
		exercise = CoolDown[drill];
		while (exercise === previousExercise){
			drill=Math.floor(Math.random()*CoolDown.length)
			exercise = CoolDown[drill];
		}		
	}else{
		var drill=Math.floor(Math.random()*Strength.length);
		exercise = Strength[drill];
		while (exercise === previousExercise){
			drill=Math.floor(Math.random()*Strength.length);
			exercise = Strength[drill];
		}
	}
	document.getElementById("Exercises").innerHTML = exercise;
	previousExercise = exercise;
},30000);

var start = new Date().getTime();
function timer(){
	var days, hours, minutes, seconds;	 
	// get tag element 
	// update the tag with id "countdown" every 1 second
	setInterval(function () {	 
		// find the amount of "seconds" since we've started
		var current_time = new Date().getTime();
		var seconds_left = (current_time - start) / 1000;
	 
		// do some time calculations
		seconds_left = seconds_left % 3600;		 
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);
		
		var timeLeft = new Date() - start;
		var minutesPretty = (minutes < 10) ? "0" + minutes : minutes;
		var secondsPretty = (seconds < 10) ? "0" + seconds : seconds;
		document.getElementById("Time").innerHTML = minutesPretty + ":" + secondsPretty;

	}, 1000);
}