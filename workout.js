var index = 0;
Circuit = new Array();
Circuit[index++] = "Basic Step";
Circuit[index++] = "High Knees";
Circuit[index++] = "Jumping Jacks";
Circuit[index++] = "Wall Sit";
Circuit[index++] = "Push-Ups";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Jumping Jacks";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Squat";
Circuit[index++] = "Lunge";
Circuit[index++] = "Butt Kicks";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Tricept Dip";
Circuit[index++] = "Plank";
Circuit[index++] = "Side Plank Right";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Side Plan Left";
Circuit[index++] = "Abdominal Crunch";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Jumping Jacks";
Circuit[index++] = "Mountain Climbers";
Circuit[index++] = "Pike Up";
Circuit[index++] = "Basic Step";
Circuit[index++] = "Pilate Squats";
Circuit[index++] = "V Step";
Circuit[index++] = "Repeater Knees";
Circuit[index++] = "Right Side Kick";
Circuit[index++] = "Left Side Kick";
Circuit[index++] = "Burpee";


index = 0;

MusicVideos = new Array();
MusicVideos[index++] = "./Videos/Alanis Morissette - Head Over Feet (MTV Unplugged) (HD).mp4"
MusicVideos[index++] = "./Videos/Avril Lavigne - Sk8er Boi.mp4"
MusicVideos[index++] = "./Videos/DEF LEPPARD - 'Pour Some Sugar On Me' (Official Music Video).mp4"
MusicVideos[index++] = "./Videos/Eminem - Cleanin' Out My Closet.mp4"
MusicVideos[index++] = "./Videos/Eminem - Love The Way You Lie ft. Rihanna.mp4"
MusicVideos[index++] = "./Videos/Eminem - Rap God (Explicit).mp4"
MusicVideos[index++] = "./Videos/Eminem - Sing For The Moment.mp4"
MusicVideos[index++] = "./Videos/Eminem - Superman (Clean Version).mp4"
MusicVideos[index++] = "./Videos/Eminem - The Monster (Explicit) ft. Rihanna.mp4"
MusicVideos[index++] = "./Videos/Eminem - When I'm Gone.mp4"
MusicVideos[index++] = "./Videos/Eminem - Without Me.mp4"
MusicVideos[index++] = "./Videos/Fiona Apple - Not About Love.mp4"
MusicVideos[index++] = "./Videos/Fiona Apple - Shadowboxer LIVE HD (2012) Los Angeles Greek Theatre.mp4"
MusicVideos[index++] = "./Videos/Fiona Apple - Sleep To Dream (LIVE).mp4"
MusicVideos[index++] = "./Videos/Florence   The Machine - Breath Of Life.mp4"
MusicVideos[index++] = "./Videos/Florence + The Machine - Dog Days Are Over (2010 Version).mp4"
MusicVideos[index++] = "./Videos/Goo Goo Dolls - 'Name' [Official Video].mp4"
MusicVideos[index++] = "./Videos/Gwen Stefani - Hollaback Girl (Dirty Version).mp4"
MusicVideos[index++] = "./Videos/Heavy In Your Arms (LIVE from Bonnaroo, 2011).mp4"
MusicVideos[index++] = "./Videos/Jimmy Eat World - The Middle.mp4"
MusicVideos[index++] = "./Videos/Lady Gaga - Paparazzi.mp4"
MusicVideos[index++] = "./Videos/LCD Soundsystem - Daft Punk Is Playing At My House.mp4"
MusicVideos[index++] = "./Videos/LCD Soundsystem - Drunk Girls.mp4"
MusicVideos[index++] = "./Videos/LCD Soundsystem - Losing My Edge.mp4"
MusicVideos[index++] = "./Videos/Lorde - Buzzcut Season (Live On Letterman).mp4"
MusicVideos[index++] = "./Videos/Lorde - Royals (US Version).mp4"
MusicVideos[index++] = "./Videos/Lorde - Team.mp4"
MusicVideos[index++] = "./Videos/Lorde - Tennis Court.mp4"
MusicVideos[index++] = "./Videos/Lousy Reputation.mp4"
MusicVideos[index++] = "./Videos/Mumford and Sons - Little Lion Man.mp4"
MusicVideos[index++] = "./Videos/Sneaker Pimps - Spin Spin Sugar.mp4"
MusicVideos[index++] = "./Videos/STEVIE NICKS 'LANDSLIDE' 2006 Australia.mp4"
MusicVideos[index++] = "./Videos/Suzanne Vega - Toms Diner (Official Music Video).mp4"
MusicVideos[index++] = "./Videos/The Postal Service - Nothing Better - live Coachella, April 20, 2013.mp4"
MusicVideos[index++] = "./Videos/The Postal Service - The District Sleeps Alone Tonight (OFFICIAL VIDEO).mp4"
MusicVideos[index++] = "./Videos/The Postal Service - We Will Become Silhouettes (OFFICIAL VIDEO).mp4"
MusicVideos[index++] = "./Videos/Train - Drops of Jupiter.mp4"
MusicVideos[index++] = "./Videos/Weezer - Say It Ain't So.mp4"

var index = 0;
Motivation = new Array();
Motivation[index++] = "Your legs are not giving out. Your head is giving up. Keep going.";
Motivation[index++] = "Losing weight is hard, maintaing weight is hard, staying fat is hard; Choose your hard.";
Motivation[index++] = "The only thing that stands between you and what you want out of life is the will to try & faith to believe it's possible";
Motivation[index++] = "You must do the thing you think you cannot do.";
Motivation[index++] = "your workouts are important meetings you scheduled with yourself. bosses don't cancel";
Motivation[index++] = "You have to expect things of yourself before you can do them";
Motivation[index++] = "Some quit due to slow progress. never grasping the faction that slow progress... is progress";
Motivation[index++] = "Attitude is the difference between an ordeal and an adventure";
Motivation[index++] = "Every accomplishment starts with the decision to try.";
Motivation[index++] = "we are what we repeatedly do. excellence, then is not an action, but a habit";
Motivation[index++] = "be the girl you were too lazy to be yesterday";
Motivation[index++] = "success isn't an action it's a thinking";
Motivation[index++] = "don't compare yourself to others. compare yourself to the persion from yesterday";
Motivation[index++] = "change takes time. give it time.";
Motivation[index++] = "If anything is worth doing, do it with all your heart.";

function startExercise(){
	// pick a random exercise video
	var WorkoutVideo = document.getElementById("Exercise");
		var randomExerciseVid=Math.floor(Math.random()*Exercises.length)
		var exerciseVid = Exercises[randomExerciseVid];
		WorkoutVideo.src = exerciseVid;	
}

function pickNewVideo(){
	var video = document.getElementById("Music");
	// pick a random video from the warmup sections
	var randomMusic=Math.floor(Math.random()*MusicVideos.length)
	var nextVideo = MusicVideos[randomMusic];
	video.src = nextVideo;
}

var renew = setInterval(function(){
		var randomSaying=Math.floor(Math.random()*Motivation.length)
		var motivationalPhrase = Motivation[randomSaying];
		document.getElementById("Motivation").innerHTML = motivationalPhrase;
		
		var drill=Math.floor(Math.random()*Circuit.length)
		var circuitDrill = Circuit[drill];
		document.getElementById("Exercises").innerHTML = circuitDrill;

},30000);

var start = new Date().getTime();
function timer(){
	var days, hours, minutes, seconds;	 
	// get tag element 
	// update the tag with id "countdown" every 1 second
	setInterval(function () {	 
		// find the amount of "seconds" between fixed Example date and target
		var current_time = new Date().getTime();
		var seconds_left = (start - current_time) / 1000;
	 
		// do some time calculations
		seconds_left = seconds_left % 3600;		 
		minutes = -1 * parseInt(seconds_left / 60);
		seconds = -1 * parseInt(seconds_left % 60);
		
		var timeLeft = new Date() - start;
		document.getElementById("Time").innerHTML = minutes + ":" + seconds;

	}, 1000);
}