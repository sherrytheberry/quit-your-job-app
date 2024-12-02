const badQuotes = [
    "The best time to start was yesterday. You're already too late! Just give up already.", 
    "Quit your job, follow and your passion, and you will never work another day in your life because you'll be unemployed and can't find a job in your passion", 
    "You don’t have to be great to start, but you have to start to be great. But you have to be able to start which you clearly can't",
    "Why work 9-5 when you don't have to work at all.",
    "It always seems impossible until it's done but that takes more effort and energy than you have so maybe it is impossible.",
    "Your work is going to fill a large part of your life, so if you quit your work you'll have so much time for more things!",  
    "Do one thing every day that scares you. Waking up for a job is scary in the morning, I think you should quit that.",
    "Success is not final, failure is not fatal unless its a big fail. You probably have failed pretty badly so might as well stop now.",
    "The only limit to our realization of tomorrow is our doubts of today. But sometimes those doubts are kind of right so you should listen to them and consider them more.",
    "Don't give into copoerate. Quit that job of yours and stop being a sheep.",
    "There's no such thing as the perfect moment. Take the moment and quit your job.",
    "If you're not quitting your job every other week, are you even trying?",
    "Why work hard when you can work on your couch curled up in a blanket instead?",
    "Quitting your job is the first step towards becoming an expert at doing nothing.",
    "Why stay in a job you hate when you could be unemployed, like a boss? Be the boss of yourself and quit that job",
    "If at first you don’t succeed, just quit and let someone else handle it.",
    "Quitting your job is the only way to really prove you don’t care.",
    "Your job is just a distraction from your true passion: taking naps.",
    "Remember: quitting is just an opportunity to find a new way to fail.",
    "Forget your dreams. Just quit your job and see where the day takes you.",
    "You don’t need a paycheck when you have a lot of free time and no responsibilities!",
    "Why work hard when you can work smart... or not at all?",
    "If you’re not going to quit, what’s the point of having a job?",
    "The only thing worse than being stuck in a job you hate is being stuck in a job you hate without a backup plan.",
    "Don’t worry about quitting—just go ahead and make every decision you regret tomorrow.",
    "Nothing says ‘success’ like quitting before you even start.",
    "They say quitting is for losers. So be a winner. Quit now!",
    "Find your true purpose: doing absolutely nothing.",
    "Who needs job security when you have anxiety and uncertainty?",
    "Your job is the perfect place to practice quitting. Just do it often and without reason!",
    "Life’s too short to waste on jobs you hate. That's why you should waste it on random hobbies instead."
];

document.getElementById('generate-quote').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * badQuotes.length);
  document.getElementById('quote').textContent = badQuotes[randomIndex];
});
